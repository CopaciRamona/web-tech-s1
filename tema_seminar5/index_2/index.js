const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');


const dirPath = path.join(__dirname, 'myFolder');
const filePath = path.join(dirPath, 'test.txt');

fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Director creat!');
 
fs.writeFile(filePath, 'Salut din fișierul test.txt!', (err) => {
    if (err) throw err;
    console.log('Fișier creat!');

 rimraf(dirPath, (err) => {
      if (err) throw err;
      console.log('Director șters cu succes!');
  });
  });
}); 