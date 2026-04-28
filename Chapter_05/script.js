'use strict';

const etoList = ['ネズミ', 'ウシ', 'トラ', 'ウサギ'];

// ul要素を呼び出す（定数ul）

const numList = [1, 2, 3, 4, 5, 6, 7, 8];

const evenList = numList.filter((num) => num % 2 == 0).map((even) => 'No.' + even);

for (const num of evenList) {
  const li = document.createElement('li');
  li.textContent = num;
  ul.appendChild(li);
}