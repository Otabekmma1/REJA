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

function countLetter(letter, word) {
    if (typeof letter == 'number' || word == 'number') return "Argument string formatta bolishi kerak";
    let count = 0;
    for (let char of word) {
        if (char.toLowerCase() == letter.toLowerCase()) count ++;
    };
    return count;
};

const result = countLetter("s", "sdgfsdg");
console.log(result);