const monthName = document.getElementById("myMonth");
const dayName = document.getElementById("myDay");
const dateName = document.getElementById("myDate");
const yearName = document.getElementById("myYear");


const date = new Date();
const month = date.getMonth();
monthName.innerHTML = date.toLocaleString('en', { month: "long" })

dayName.innerHTML = date.toLocaleString("en",
  { weekday: "long" })
yearName.innerText = date.getFullYear();
dateName.innerHTML = date.getDate();