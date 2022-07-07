//imports
const multer = require("multer")
const bcrypt = require("bcrypt")
const mysql = require("mysql")
const path = require("path")
const fs = require("fs")
var CONFIG = require('./config.json')
var morgan = require('morgan')
require('log-timestamp');



const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))

const upload = multer({ dest: "uploads" })
if (CONFIG.logging) {
  app.use(morgan('combined'))
}

//conn
const db = mysql.createConnection({
    host: CONFIG.myHost,
    user : CONFIG.myUser,
    password : CONFIG.myPassword,
    database: CONFIG.myDatabase
});

//connect
db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('Mysql Connected...')
})



app.set("view engine", "ejs")
//index
app.get("/", (req, res) => {
  res.render("index")
})


//upload
app.post("/upload", upload.single("file"), async (req, res) => {
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
  const fileData = {path: req.file.path, 
    originalName: req.file.originalname, 
    password: "",
    downloadCount: 0,
    urlid: makeid(20),
    maxDownload: req.body.maxDownload
}
  if (req.body.password != null && req.body.password !== "") {
    fileData.password = await bcrypt.hash(req.body.password, 10)
  }
  let sql = 'INSERT INTO files SET ?'
  db.query(sql, fileData, (err, result) => {
    if (err) throw err
    console.log(result)
    res.render("index", { fileLink: `${req.headers.origin}/file/${JSON.parse(JSON.stringify(fileData.urlid))}` })
    })
})


//download
app.route("/file/:id").get(handleDownload).post(handleDownload)

async function handleDownload(req, res) {
 db.query('SELECT * FROM files WHERE urlid = ?', req.params.id , (err,rows ,result) => {
    if (err) throw err
    try{
    if(!(rows[0].downloadCount >= rows[0].maxDownload)){

    if (req.body.password == null) {       
        res.render("password")
    }

    if (req.body.password != null) {
  db.query('SELECT * FROM files WHERE urlid = ?', req.params.id , (err,rows ,result) => {
        //password check
        if (bcrypt.compareSync(req.body.password, rows[0].password)) {
          //file.downloadCount++
           console.log("File Downloads: " + rows[0].downloadCount)
           db.query('UPDATE files SET downloadCount = ? WHERE urlid = ?', [rows[0].downloadCount + 1, req.params.id] , (err,result) => {
            if (err) throw err
            })

        //download file
           var urlPath = rows[0].path
           res.download(path.resolve(urlPath), JSON.stringify(rows[0].originalName), (err) => {
             if (err) {
                 console.log(err)
                 }
             })                                     
        } else {
            res.render("password", { error: true })
            return
        }              
      })
    }
  }else{
    res.render("password", { MaxDownloaderror: true })
          //delete file if download count is greater than max download
          fs.unlink(rows[0].path, (err) => {
            if (err) throw err
            console.log('File deleted!')
          })
          //delete file from database
          db.query('DELETE FROM files WHERE urlid = ?', req.params.id , (err,result) => {
            if (err) throw err
            console.log('File deleted from database!')
          })
  }
  } catch(err){
    res.render("error")
  }
  })
 }


app.listen(CONFIG.PORT)