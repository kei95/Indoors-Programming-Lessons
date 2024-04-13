console.log("いぇーい");

const element = window.document.getElementById("button");

console.log("うんち！w", element);

element.addEventListener("click", () => alert("体験しまーす"));

// let QuberayHP = 600;
// let FreedomBR = 75;

// console.log(QuberayHP - FreedomBR);

// let mainCharName = "けいし";

// console.log("おお、", mainCharName, " 死んでしまうとは情けない");

// let keishiInfo = {
//   first: "宮田",
//   last: "啓志",
//   age: 28,
// };

// let koumeiInfo = {
//   first: "武知",
//   last: "孔明",
//   age: 28,
// };

// let yamashinaInfo = {
//   first: "山科",
//   last: "智史",
//   age: 28,
// };

// function displayInfo(info) {
//   console.log("名前は", info.first, info.last, "年齢は", info.age);
// }

// displayInfo(keishiInfo);
// displayInfo(koumeiInfo);
// displayInfo(yamashinaInfo);

// function tashizan(number1, number2) {
//   console.log("答えは", number1 + number2);
// }

// tashizan(81297168, 1298472819);
// tashizan(991, 20);

// let obj = {
//   func: function (yay) {
//     console.log(yay);
//   },
//   objObj: {
//     func: function (wow) {
//       console.log(wow);
//     },
//   },
// };

// obj.func("fooooooo");
// obj.objObj.func("WOW!");

let yusya = {
  name: "なるちの",
  HP: 100,
  attack: 80,
  defense: 50,
};

let enemy = {
  name: "ごんぞう",
  HP: 180,
  attack: 120,
  defense: 20,
};

function attack(attacker, defender) {
  if (defender.HP <= 0) {
    console.log("もうやめてあげて！", defender.name, "のHPはゼロよ！");
    return;
  }

  let damage = attacker.attack - defender.defense;
  defender.HP = defender.HP - damage;

  console.log(attacker.name, "は", defender.name, "に", damage, "を与えた！");

  if (defender.HP <= 0) {
    console.log(defender.name, "が死んだ！この人でなし！");
  }
}

attack(yusya, enemy);
attack(yusya, enemy);
attack(enemy, yusya);
attack(yusya, enemy);
attack(yusya, enemy);
attack(yusya, enemy);
