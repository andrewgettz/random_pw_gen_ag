

//link to button 
const generateBtn = document.querySelector ("#generate");

//link to password 
const password = document.querySelector("#password")

//define function (20) sets length to 20 characters 
function writePassword(length  = 20){
//Set characters for the random password
const randomPassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!%^&*()_+=-";

//generates and returns password randomly as stored variable passGen
let passGen = ""; 
for(let i = 0; i < length; ++i){
  let at = Math.floor(Math.random() * (randomPassword.length + 1)); 
  passGen += randomPassword.charAt(at); 
}
return passGen; 
}; 

//Listens for click button and runs writePassword function 
generateBtn.addEventListener("click",() => {
  password.value = [writePassword(20)];
}); 






