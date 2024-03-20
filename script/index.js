const openBtn = document.querySelectorAll(".open-btn");
const modall = document.querySelector(".modall");
const form = document.querySelector(".form");
const formbtn = document.querySelector(".formbtn");
const modalForm = document.querySelector(".modal-form");
const modalFormBtn = document.querySelector(".modalFormBtn");
const close = document.querySelector(".closeModal");
const toast = document.querySelector(".toast");
const fname = form.querySelector(".fname");
const lname = form.querySelector(".lname");
const email = form.querySelector(".email");
const phone = form.querySelector(".phone");
const fname1 = modalForm.querySelector(".fname");
const lname1 = modalForm.querySelector(".lname");
const email1 = modalForm.querySelector(".email");
const phone1 = modalForm.querySelector(".phone");
const recamenities = document.querySelector(".recamenities");
const roofamenities = document.querySelector(".roofamenities");
const recbutton = document.querySelector(".recbutton");
const roofbutton = document.querySelector(".roofbutton");

const sheetUrl =
  "https://script.google.com/macros/s/AKfycbyY2bGVixbTKXwLByUFBDS8t4KPoXlywZykQxyPo6Ccx5k2QbapDnIyl2j3aNxe2rY8/exec";

openBtn.forEach((item) => {
  item.addEventListener("click", () => {
    modall.classList.add("active");
    console.log("asl;dkf");
    console.log(modall);
  });
});

close.addEventListener("click", () => {
  modall.classList.remove("active");
  console.log("clcked");
});

formbtn.addEventListener("click", (e) => {
  if (
    lname.value == "" ||
    fname.value == "" ||
    email.value == "" ||
    phone.value == ""
  ) {
    toast.innerHTML = "Please fill up required fields";
    toast.style.color = "red";
    toast.style.top = "10px";
    e.preventDefault();
    setTimeout(() => {
      toast.style.top = "-100px";
      toast.style.color = "#000";
    }, 2000);
    return;
  } else {
    console.log(lname.value);
    let data = new FormData(form);
    e.target.innerHTML = "Submitting";
    fetch(sheetUrl, {
      method: "POST",
      body: data,
    })
      .then((res) => res.text())
      .then((finalRes) => {
        e.target.innerHTML = "Submit";
        toast.innerHTML = "Successfull!";
        toast.style.color = "#00dd34";
        toast.style.top = "10px";

        fname.value = "";
        lname.value = "";
        phone.value = "";
        email.value = "";
      });

    setTimeout(() => {
      toast.style.top = "-100px";
      toast.style.color = "#000";
    }, 2000);
    e.preventDefault();
  }
});

modalFormBtn.addEventListener("click", (e) => {
  let data = new FormData(modalForm);

  if (
    lname1.value == "" ||
    fname1.value == "" ||
    email1.value == "" ||
    phone1.value == ""
  ) {
    toast.innerHTML = "Please fill up required fields";
    toast.style.color = "red";
    toast.style.top = "10px";
    e.preventDefault();
    setTimeout(() => {
      toast.style.top = "-100px";
      toast.style.color = "#000";
    }, 3000);
  } else {
    e.target.innerHTML = "Submitting";
    fetch(sheetUrl, {
      method: "POST",
      body: data,
    })
      .then((res) => res.text())
      .then((finalRes) => {
        e.target.innerHTML = "Submit";
        toast.innerHTML = "Successfull!";
        toast.style.color = "#00dd34";
        toast.style.top = "10px";

        fname1.value = "";
        lname1.value = "";
        phone1.value = "";
        email1.value = "";
        modall.classList.remove("active");

        setTimeout(() => {
          toast.style.top = "-100px";
          toast.style.color = "#000";
        }, 3000);
      });

    e.preventDefault();
  }
});

recbutton.addEventListener("click", () => {
  recamenities.classList.add("active");
  roofamenities.classList.remove("active");
  recbutton.classList.add("active")
  roofbutton.classList.remove("active");
});


roofbutton.addEventListener("click", () => {
  console.log("hello");
  roofamenities.classList.add("active");
  recamenities.classList.remove("active");
  roofbutton.classList.add("active")
  recbutton.classList.remove("active");
});
