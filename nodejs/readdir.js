const fileDir = './data';
const fs = require('fs');

fs.readdir(fileDir, funciton(error, filelist){
    console.log(filelist);
});