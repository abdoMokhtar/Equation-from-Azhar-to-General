const body = document.querySelector("body");
const sum = document.querySelector("input.sum");
const part = document.querySelector("input.part");
const button = document.querySelector("button");
const finalSum = document.querySelector("span.one");
const final = document.querySelector("span.two");

button.addEventListener("click", function () {
  finalSum.textContent = `%${0}`;
  final.textContent = 0;
  if (+sum.value > +part.value) {
    let numOne = (((sum.value - part.value) / 440) * 100).toFixed(2);
    let numTwo = sum.value - part.value;
    finalSum.textContent = `%${numOne}`;
    final.textContent = numTwo;
  } else {
    function popup() {
      let creat = document.createElement("div");
      creat.innerHTML =
        "<span>برجاء التأكد من أن المجموع الكلي أكبر من مجموع المواد الشرعيه</span";
      //   -------------------------------------------------------
      let btn = document.createElement("button");
      btn.textContent = "X";
      btn.style.cssText =
        "background-color: #b30e0e;height: 30px;width: 30px;border-radius: 15px;border: none;color: white;font-size: x-large;position: absolute;top: -17px;right: -15px;display: grid;place-content: center;";
      creat.appendChild(btn);
      //   ---------------------------------------------------------
      creat.style.cssText =
        "font-size:18px;text-align:center;position: absolute;height: 130px;width: 300px;background-color: rgb(238, 238, 238);display: flex;justify-content: center;align-items: center;flex-direction: column;top: 50%;left: 50%;transform: translate(-50%, -50%);border-radius: 20px;";
      document.body.appendChild(creat);
      btn.onclick = function () {
        creat.remove();
      };
    }
    popup();
  }
});
