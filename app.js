import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";


const questions = [
  {
    type: 'input',
    name: 'Link',
    message: "Input URL:",
  },
]


inquirer
  .prompt(questions)
  .then((answers) => {
    const url = answers.Link;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    fs.writeFile('URL.txt', url, err => {
      if (err) {
        console.error(err);
      }
      console.log("Success!")    
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error)
    } else {
      
    }
  });


