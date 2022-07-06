//imports
require("dotenv").config()
const multer = require("multer")
const bcrypt = require("bcrypt")
const mysql = require("mysql")
const path = require("path")


const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))

const upload = multer({ dest: "uploads" })

//conn
const db = mysql.createConnection({
    host: process.env.myHost,
    user : process.env.myUser,
    password : process.env.myPassword,
    database: process.env.myDatabase
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

    if (req.body.password == null) {       
        res.render("password")
    }

    if (req.body.password != null) {
  db.query('SELECT * FROM files WHERE urlid = ?', req.params.id , (err,rows ,result) => {
        console.log(rows)
        if (bcrypt.compareSync(req.body.password, rows[0].password)) {
           //file.downloadCount++
           console.log(rows[0].downloadCount)
        
           var urlPath = rows[0].path
           console.log(urlPath)
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
    }


app.listen(process.env.PORT)