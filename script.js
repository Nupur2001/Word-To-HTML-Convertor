document.addEventListener("DOMContentLoaded", () => {
  let switchInput = document.querySelector(".switch input"); 
  let body = document.body;
  let textContainer1TextArea = document.querySelector(".textContainer1 textarea");
  let bold=document.querySelector("#bold")
  let theme = localStorage.getItem("theme");

  if (theme === "nightmode") {
    body.classList.add("nightmode");
    body.classList.remove("lightmode");
    switchInput.checked = true;
  } else {
    body.classList.add("lightmode");
    body.classList.remove("nightmode");
    switchInput.checked = false;
  }

  switchInput.addEventListener("change", (e) => {
    e.preventDefault();
    if (e.target.checked) {
      body.classList.add("nightmode");
      body.classList.remove("lightmode");
      localStorage.setItem("theme", "nightmode");
      console.log("darkmode");
    } else {
      body.classList.remove("nightmode");
      body.classList.add("lightmode");
      localStorage.setItem("theme", "lightmode");
      console.log("lightmode");
    }
  });


});
