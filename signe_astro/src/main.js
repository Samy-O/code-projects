import { toRepublican } from 'revolutionary-calendar';

const birthDay = document.getElementById('birthDay');
const birthMonth = document.getElementById('birthMonth');
const submitButton = document.getElementById('submitButton');
const resultArea = document.getElementById('result');
let baseDate = 1792;

submitButton.addEventListener('click', function(){
  if (birthDay.value === '') {
    birthDay.style.border = "2px solid red";
    birthDay.style.borderColor = "red";
  }
  
  else if (birthMonth.value === '') {
    birthMonth.style.border = "2px solid red";
    birthMonth.style.borderColor = "red";
  }

  else {
    // make calculation print result here
    resultArea.style.display="flex";
    resultArea.innerText=getRepublicanDate();
  }
});

function getRepublicanDate(){

  if (birthMonth.value < 9 && birthDay.value < 22 ){
    baseDate = 1793;
  }

  let republicanDate = toRepublican(new Date(baseDate, birthMonth.value, birthDay.value));
  console.log(republicanDate);
  return republicanDate;
}

// convert 

// if month < 9 and start in 1793
// if month = 9 and day < 22 start in 1793
// else start in 1792
// 
// calculate difference between entered date and first day of calendar
