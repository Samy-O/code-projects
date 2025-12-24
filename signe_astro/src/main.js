import { toRepublican } from 'revolutionary-calendar';
import mapping from './mapping.json';

const birthDay = document.getElementById('birthDay');
const birthMonth = document.getElementById('birthMonth');
const submitButton = document.getElementById('submitButton');
const resultArea = document.getElementById('result');
const resultSign = document.getElementById('resultSign');
const resultDate = document.getElementById('resultDate');

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
    let repDate = getRepublicanDate();
    let repDateArray = repDate.split(" ");
    let repDay = repDateArray[0];
    let repMonth = repDateArray[1];

    
    const repSign = mapping.mois.find(item => item.nom.toLowerCase() === repMonth)?.jours.find(item => item.jour === parseInt(repDay))?.signe;
    
    resultArea.style.display = "flex";
    resultDate.innerText = repDate ;
    resultSign.innerText = repSign ;
  }
});

function getRepublicanDate(){
  let republicanDate = toRepublican(new Date(1793, parseInt(birthMonth.value) - 1, parseInt(birthDay.value)));
  return republicanDate;
};

