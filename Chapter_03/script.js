'use strict';

// 入力ダイアログから値を指定する
const height = Number(window.prompt('身長(m)の値を入力してください'));
const weight = Number(window.prompt('体重(kg)の値を入力してください'));

const bmi = weight / (height * height);
const p_element_1 = document.querySelector('#bmi-message');
p_element_1.textContent = `あなたのBMIは${bmi}：`;

if (bmi > 25) {
  p_element_1.textContent += '肥満です';  // 25より大きいときに表示
} else if (bmi < 18.5) {
  p_element_1.textContent += '低体重です';  // 18.5より小さいときに表示
} else {
  p_element_1.textContent += '適正体重です';  // 25以下のときに表示
}

// 比較演算子
const num1 = Number(window.prompt('数値1の値を入力してください'));
const num2 = Number(window.prompt('数値2の値を入力してください'));

if (num1 > num2) {
  console.log('num1 は num2 より大きいです');
}else if (num1 < num2) {
  console.log('num1 は num2 より小さいです');
}else {
  console.log('num1 と num2 は等しいです');
}

const message = 'Thank you';

if (message == 'Thank you') {
  console.log('Thank you, too');
}

const num = 10;  // Number型
const strNum = '10';  // String型

if (num == strNum) {
  console.log('文字列の10と数値の10は等しい');  // 表示される
}
if (num !== strNum) {
  console.log('文字列の10と数値の10は等しくない');  // 表示される
}

// 三項演算子
const msg = bmi > 25 ? '肥満です' : '肥満ではありません';
console.log(msg);

// 要素の取得と書き換え
const p_element_2 = document.getElementById('test-message');

console.log(p_element_2.outerHTML);

p_element_2.textContent = 'ここを書き替えたよ';

console.log(p_element_2.textContent);