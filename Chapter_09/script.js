const anchor = document.querySelector("a");
const image = document.querySelector("img");

console.log(anchor.href);
console.log(image.src);
console.log(image.alt);

anchor.href = "https://zenn.dev/";
image.src = "https://loremflickr.com/300/300/dog";
image.alt = "犬の画像";