<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a">
    <img src="https://xamplex.de/s/ruua73gsnbeuhlju975intjc4.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">FileShare69</h3>

  <p align="center">
    📁 Introducing FileShare69, the ultimate self-hosted file sharing solution for secure and convenient uploads and downloads! With FileShare69, you can easily upload and share password-protected files, and even set limits on how many times a file can be downloaded before it's automatically deleted. It's the perfect solution for individuals or businesses who want a simple and secure way to share files without relying on third-party services. Try FileShare69 today and experience the freedom of self-hosted file sharing! 📁
    <br />
    <br />
  </p>
</div>


### Features
                  
- ✅ **Self-hosted:** FileShare69 is a self-hosted file sharing solution that gives you complete control over your data.
- ✅ **Secure uploads and downloads:** FileShare69 allows you to securely upload and download files using password protection.
- ✅ **Customizable download limits:** You can set custom download limits for your files, specifying how many times a file can be downloaded before it's deleted.
- ✅ **Easy to use:** FileShare69 is designed to be user-friendly and intuitive, making it easy for anyone to use.
- ✅ **Mobile-friendly:** FileShare69 is optimized for mobile devices, so you can access your files on the go.
- ✅ **Open source:** FileShare69 is an open source project, which means you can contribute to its development and make it even better.
- ✅ **Flexible deployment options:** FileShare69 can be deployed on a variety of platforms, including Linux, Windows, and macOS.
- ✅ **Minimalistic design:** FileShare69 has a clean and minimalistic design, making it easy to navigate and use.
- ✅ **Fast and reliable:** FileShare69 is built using modern technologies, ensuring fast and reliable performance.

## Getting Started

### Requirements
#### Installed via Installer
* npm
* nodejs
* pm2
#### Manual installation
* mysql database

                   

### Installation
1. Use the installer to install nodejs,npm,pm2 and all dependencies for you:
                   (Tested on ubuntu 20 works on every distro with apt)
   ```sh
   curl -s -L https://raw.githubusercontent.com/MobilGame06/FileShare69/main/install.sh | bash                                    
   ``` 
                   
  or Clone the repo
     ```
    git clone https://github.com/MobilGame06/FileShare69.git
     ```
                   
2. Create a user account with own database in mysql and import the provided sql file([file-test.sql](https://github.com/MobilGame06/FileShare69/blob/main/file-test.sql))

3. Install NPM packages (ONLY when not using installer)
   ```sh
   npm install
   ```
4. Enter your mysql data into `.env`
   ```env
   myHost=dbIp
   myUser=dbUser
   myPassword=dbPw
   myDatabase=dbDatabase
   PORT=3003
   logging=false
   ```
5. Start it via pm2
   ```sh
   pm2 start server.js --name fileShare69
   ```
### Docker
Change the commands to your liking:
                   
First create a Volume                   
``` sh
docker volume create --name fileshare
``` 
Then change the -e variables (don't forget to import mysql from the top installation)
``` sh
docker run -v fileshare:/app/uploads -p 1289:8080 -e myHost='mysqlIP' -e myUser='mysqlUser' -e myPassword='mysqlPW' -e myDatabase='file-test' mobilgame/fileshare69:1.0                    
```       
<p align="right">(<a href="#top">back to top</a>)</p>
