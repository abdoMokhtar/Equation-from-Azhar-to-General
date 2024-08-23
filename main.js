const sum = document.querySelector("input.sum");
const part = document.querySelector("input.part");
const button = document.querySelector("button");
const finalSum = document.querySelector("span.one");
const final = document.querySelector("span.two");

button.addEventListener("click", function () {
  let numOne = (((sum.value - part.value) / 440) * 100).toFixed(2);
  let numTwo = sum.value - part.value;
  finalSum.textContent = `%${numOne}`;
  final.textContent = numTwo;
});
