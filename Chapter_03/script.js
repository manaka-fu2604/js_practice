'use strict';

// 入力ダイアログから値を指定する
const bmi = window.prompt('BMIの値を入力してください');
console.log(`あなたのBMIは${bmi}：`);

if (bmi > 25) {
  console.log('肥満です');  // 25より大きいときに表示
} else if (bmi < 18.5) {
  console.log('低体重です');  // 18.5より小さいときに表示
} else {
  console.log('適正体重です');  // 25以下のときに表示
}
// 略
const p_element = document.querySelector('p');
console.log(p_element);