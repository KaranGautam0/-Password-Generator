const lenghtp = document.querySelector("#Length-number");
const uppercase = document.querySelector("#Uppercase");
const Lowercase = document.querySelector("#Lowercase");
const Numbers = document.querySelector("#Numbers");
const Symbols = document.querySelector("#Symbols");
const passInput = document.querySelector("#pass-input");
const copy = document.querySelector(".copy");
const generatebtn = document.querySelector("#generate-btn");


const uppercasestr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowercaseStr = "abcdefghijklmnopqrstuvwxyz";
const numberStr = "0123456789";
const SymbolsStr = "!@#$%^&*()_+";
let str = "";

generatebtn.addEventListener("click", () => {
  passInput.value = "";

  if (uppercase.checked) {
    str += uppercasestr;
  }

  if (Lowercase.checked) {
    str += LowercaseStr;
  }

  if (Numbers.checked) {
    str += numberStr;
  }
  if (Symbols.checked) {
    str += SymbolsStr;
  }

  for (let i = 0; i < lenghtp.value; i++) {
    let index = Math.floor(Math.random() * str.length);
    passInput.value += str[index];
  }
});

copy.addEventListener("click", () => {
  if (passInput.value === "") {
    alert("Please Generate a password first");
  } else {
    const newValue = document.createElement("textarea");
    newValue.value = passInput.value;
    document.body.appendChild(newValue);
    newValue.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
    newValue.remove();
  }
});
