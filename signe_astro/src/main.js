import { toRepublican } from 'revolutionary-calendar';

const birthDay = document.getElementById('birthDay');
const birthMonth = document.getElementById('birthMonth');
const submitButton = document.getElementById('submitButton');


let republicanDate = toRepublican(new Date(1794, 4, 20));
console.log(republicanDate)

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
  }
});

// convert 

// if month < 9 and start in 1793
// if month = 9 and day < 22 start in 1793
// else start in 1792
// 
// calculate difference between entered date and first day of calendar
