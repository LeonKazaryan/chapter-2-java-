console.log("before");



window.addEventListener("load", (event) => {
  console.log(event);
  console.log([document.body]);
});

window.addEventListener("DOMContentLoaded", (event) => {
  console.log(event);
  console.log([document.body]);
});


console.log("after");
