let h2 = document.querySelector("h2");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let reset = document.querySelector("#reset");
let count = 0;
increase.addEventListener("click", function () {
  count++;
  h2.textContent = count;
});

decrease.addEventListener("click", function () {
  if (count > 0) {
    count--;
    h2.textContent = count;
  } else {
    count = 0;
    h2.textContent = count;
  }
});

reset.addEventListener("click", function () {
  count = 0;
  h2.textContent = count;
});
