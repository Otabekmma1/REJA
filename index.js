// //Module package CORE

// setTimeout(function () {
//     console.log("ishga tushdi");
// }, 5000);

// let number = 0
// setInterval(function () {
//     console.log('hisob: ', number);
//     number++;
// }, 100)


// const fs = require('fs');
// const { networkInterfaces} = require('os');
// const data = fs.readFileSync("./input.txt", 'utf-8');
// console.log(data);

// console.log("=============================")

// fs.writeFileSync("./input.txt", `${data} \n\t\t by Mike`);
// const new_data = fs.readFileSync('./input.txt', 'utf-8');
// console.log(new_data);




//Module package EXTERNAL

// const moment = require('moment');
// const time = moment().format('YYYY-MM-DD');
// console.log(time);


// const moment = require('moment');
// setInterval(() => {
//     const time = moment().format('HH:mm:ss');
//     console.log("hozirgi vaqt: ",time);
// }, 1000);



// const inquirer = require('inquirer').default;
// inquirer
//     .prompt([{
//         type: 'input',
//         name: 'number',
//         message: 'Raqamni kiriting: ',
//         validate: function(value) {
//             if (!isNaN(value) && value.trim() != '') {
//                 return true;
//             }
//             return "Faqat raqam bo'lishi kerak";
//         }
//     }])
//     .then((answer) => console.log("Kiritilgan raqam: ", answer.number))
//     .catch((err) => console.log(err))



// const validator = require('validator');
// const result = validator.isEmail('a@gmail.com');
// const result2 = validator.isInt('100');
// const result3 = validator.isIP('49.165.4.43');
// console.log(result);
// console.log(result2);
// console.log(result3);



// const { v4: uuidv4 } = require('uuid');
// const random = uuidv4();
// console.log(random);

// const chalk = require('chalk');
// const log = console.log;
// log(chalk.blue("uuid created random number: ") + chalk.red(random));

//Module package FILE