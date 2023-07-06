
argArray = process.argv.splice(2);
const request = require('request');
const fs = require('fs');



request(argArray[0], (error, response, body) => {
  //WRITE TO THE FILE.  
  
  fs.writeFile(argArray[1], body, err => {
    if (err) {
      console.error(err);
    }
    const stats = fs.stat(argArray[1],(error,stats)=>{
      if (error) {
        console.log(error);
      }
      console.log("You downloaded a file that has the size: " + stats.size + " Bytes");
    });  
  });
});