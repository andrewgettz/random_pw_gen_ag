


const generateBtn = document.querySelector ("#generate");

const password = document.querySelector("#password")

function writePassword(length  = 20){
const randomPassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!%^&*()_+=-";

let passGen = ""; 
for(let i = 0; i < length; ++i){
  let at = Math.floor(Math.random() * (randomPassword.length + 1)); 
  passGen += randomPassword.charAt(at); 
}
return passGen; 
}; 

generateBtn.addEventListener("click",() => {
  password.value = [writePassword(20)];
}); 






