//const textList = ["Example Content", "frontend", "love to code"];
let textList = [];
let textListIndex = 0;
let wordIndex = 0;

document
  .querySelectorAll(".hidden")
  .forEach((el) => textList.push(el.textContent));

console.log(textList);

const heading = document.querySelector(".main-title");

console.log(heading)

const type = () => {
  if (wordIndex < textList[textListIndex].length) {
    heading.textContent = textList[textListIndex].substring(0, wordIndex + 1);
    wordIndex++;
    setTimeout(type, 200);
  } else {
    setTimeout(remove, 100);
  }
};

const remove = () => {
  if (wordIndex > 0) {
    heading.textContent = textList[textListIndex].substring(0, wordIndex - 1);
    wordIndex--;
    setTimeout(remove, 100);
  } else {
    textListIndex++;
    if (textListIndex >= textList.length) textListIndex = 0;
    setTimeout(type, 200);
  }
};

window.addEventListener("load", type);
