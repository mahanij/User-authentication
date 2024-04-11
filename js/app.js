let form = document.getElementsByTagName("form")[0];

let userNameInput = document.getElementsByTagName("input")[0];

let userPhoneNumberInput = document.getElementsByTagName("input")[1];

let userAgeInput = document.getElementsByTagName("input")[2];

let userNameDiv = document.getElementsByTagName("div")[1];

let userPhoneNumberDiv = document.getElementsByTagName("div")[2];

let userAgeDiv = document.getElementsByTagName("div")[3];

form.addEventListener("submit", (e) => {
  if (!e.target.userName.value) {
    e.target.userName.classList.add("border-red");
  } else {
    userNameDiv.innerText = e.target.userName.value;
  }
  if (!e.target.userAge.value || e.target.userAge.value > 120) {
    e.target.userAge.classList.add("border-red");
    userAgeDiv.innerText = "Please enter your real age";
  } else {
    userAgeDiv.innerText = e.target.userAge.value;
  }
  if (!e.target.userPhoneNumber.value) {
    e.target.userPhoneNumber.classList.add("border-red");
  } else {
    userPhoneNumberDiv.innerText = e.target.userPhoneNumber.value;
  }
  e.preventDefault();
});

userAgeInput.addEventListener("blur", (e) => {
  if (e.target.value == "") {
    userAgeInput.classList.add("border-red");
  } else {
    user.classList.add("border-green");
  }
});

userNameInput.addEventListener("blur", (e) => {
  if (e.target.value == "") {
    e.target.classList.add("border-red");
  } else {
    e.target.classList.add("border-green");
  }
});

userPhoneNumberInput.addEventListener("blur", (e) => {
  if (e.target.value == "") {
    e.target.classList.add("border-red");
  } else {
    e.target.classList.add("border-green");
  }
});
