



const openBtn = document.querySelectorAll(".open-btn");
const modall = document.querySelector(".modall");
const form = document.querySelector(".form");
const modalForm = document.querySelector(".modal-form");
const close = document.querySelector(".closeModal");

const sheetUrl = "https://script.google.com/macros/s/AKfycbyY2bGVixbTKXwLByUFBDS8t4KPoXlywZykQxyPo6Ccx5k2QbapDnIyl2j3aNxe2rY8/exec"

openBtn.forEach((item) => {
    item.addEventListener("click", () => {
      modall.classList.add("active");
      console.log("asl;dkf");
      console.log(modall);
    })
})


close.addEventListener("click", () => {
  modall.classList.remove("active");
  console.log("clcked");

})


form.addEventListener("click", (e) => {
  let data = new FormData(form);
  fetch(sheetUrl, {
    method: "POST",
    body:data
  }).then((res) => res.text()).then((finalRes) => console.log(finalRes));
  e.preventDefault()
})