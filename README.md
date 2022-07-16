<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://xamplex.de/s/ruua73gsnbeuhlju975intjc4.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">FileShare69</h3>

  <p align="center">
    FileShare69 is a selfhosted service to upload and download a password secured file. You can also set how often a file can be downloaded before it gets deleted.
    <br />
    <br />
  </p>
</div>


### Features
- ✅ Upload files in any format
- ✅ Set encrypted password
- ✅ Send public download link
- ✅ Set a maximum download for every file

## Getting Started

### Requirements
* npm
* nodejs
* mysql database
* pm2

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/MobilGame06/FileShare69.git
   ```

2. Create a user account with own database in mysql and import the provided sql file(file-test.sql)

3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your mysql data into `config.json`
   ```json
   {
    "myHost": "localhost",
    "myUser": "file",
    "myPassword": "YourPw",
    "myDatabase": "YourDatabaseName",
    "PORT":"3000",
    "logging": false
    }
   ```
5. Start it via pm2
   ```sh
   pm2 start server.js --name fileShare69
   ```

<p align="right">(<a href="#top">back to top</a>)</p>
