// console.log("<<<<<<<<<< Jack Ma maslahatlari >>>>>>>>>>>");

// const list = [
//     "yaxshi talaba boling", //0-20
//     "togri boshliq tanlang va koproq xato qiling", //20-30
//     "uzingizga ishlashingizni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq endi" //60+
// ];

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number!", null);
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     };
// };


// const age = 40;
// console.log("passed here 0");
// maslahatBering(age).then(data => {
//     console.log(`RESULT (${age}-age):`, data);
// }).catch(err => {
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");


// async function run() {
//     let result = await maslahatBering(40);
//     console.log("RESULT:", result);
//     result = await maslahatBering(70);
//     console.log("RESULT:", result);
//     result = await maslahatBering(40);
//     console.log("RESULT:", result);
// };
// run();


//===========================   TASK A =========================

// function countLetter(letter, word) {
//     if (typeof letter == 'number' || word == 'number') return "Argument string formatta bolishi kerak";
//     let count = 0;
//     for (let char of word) {
//         if (char.toLowerCase() == letter.toLowerCase()) count ++;
//     };
//     return count;
// };

// const result = countLetter("s", "sdgfsdg");
// console.log(result);


//============================ TASK B =======================================

// function countDigit(value) {
//     let count = 0;
//     for (i in value) {
//         if (!isNaN(value[i])) count ++
//     }; 
//     return count;
// };

// const result = countDigit("ad2a54y79wet0sfgb9");
// console.log(result)

//=========================== TASK C ==========================================

// function checkContent(v1, v2) {
//     const sorted_v1 = v1.toLowerCase().split("").sort().join("");
//     const sorted_v2 = v2.toLowerCase().split("").sort().join("");
//     return sorted_v1 === sorted_v2;
// }

// console.log(checkContent('mike', 'kime'))


//============================== TASK D =====================================   
// const chalk = require('chalk');
// const moment = require('moment');
// const time = moment().format("HH:mm");

// class Shop {

//     constructor(iphone, macbook, airpods) {
//         this.products = {
//             iphone: iphone, 
//             macbook: macbook,
//             airpods: airpods
//         };
//     };

//     qoldiq() {
//         let result =  `============ QOLDIQ ============\n<<<<<< Hozirgi vaqt: ${time} >>>\n -------- Mahsulotlar -----------\n`

//         for (let key in this.products) {
//             result += `${key}: ${this.products[key]} ta\n`;
//         }
//         return result += "================================";
//     }

//     sotish(product, quantity) {
//         if (!this.products[product]) {
//             console.log(chalk.red(`Mahsulot topilmadi !`));
//             console.log('================================');
//             return ;
//         }

//         if (quantity <= 0) {
//             console.log(chalk.red(`Quantity 0 dan katta bolishi kerak !`));
//             console.log('================================');
//             return ;
//         }

//         if (this.products[product] < quantity) {
//             console.log(chalk.red(`Yetarli ${product} yo'q!`));
//             console.log('================================');
//             return ;
//         }

//         this.products[product] -= quantity;
//         console.log(chalk.red(`----- ${quantity} ta ${product} sotildi !\n${chalk.blue(this.qoldiq())}`));

//     }

//     qabul(product, quantity) {
//         if (this.products[product]) {
//             this.products[product] += quantity;
//         } else {
//             this.products[product] = quantity;
//         }
//         console.log(chalk.red(`++++++ ${quantity} ta ${product} qo'shildi !\n${chalk.yellow(this.qoldiq())}`));
//     }
// }

// const shop = new Shop(4, 4, 4);
// console.log(shop.qoldiq());
// shop.sotish('iphone', 1);
// shop.qabul("ipone", 5);


//===================================   TASK E ==============================

function getReverse(str) {
    return str.split("").reverse().join("");
}

console.log(getReverse("MIKE"))