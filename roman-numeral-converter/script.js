const num = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.querySelector("#output");
convertBtn.addEventListener("click", mainFunc);

const clearInput = (elem) => {
  elem.value = '';
}

const outputObj = {
  goodResponse: {
    className: 'good-response',
    message: ''
  },
  error: {
    className: 'bad-response',
    message: ''
  }
};

const finResult = (disposition, inputEntries) => {
  output.innerText = disposition.message;
  output.classList.forEach((className)=>{output.classList.remove(className)});
  output.classList.add(disposition.className);

  for(let i = 0; i < inputEntries.length; i++){
    clearInput(inputEntries[i]);
  }
};

function mainFunc(e){
  e.preventDefault();
  const {error, goodResponse} = outputObj;

  // if number is less than OR equal to Zero
  if(parseInt(num.value) <= 0){
  // print Please enter a number greater than or equal to 1
    error.message = "Please enter a number greater than or equal to 1";
    finResult(error, [num]);
  // if input is empty
  }else if(!Boolean(num.value)){
    // print Please enter a valid number
    error.message = "Please enter a valid number";
    finResult(error, [num]);

  }else if(parseInt(num.value) >= 4000){
    error.message = "Please enter a number less than or equal to 3999";
    finResult(error, [num]);
  }
  else{
    goodResponse.message = convertToRoman(parseInt(num.value));
    finResult(goodResponse, [num]);
  }
}


// Algorithm
function convertToRoman(num) {
  // First Part
  const romAraNum = [{'M' : 1000}, {'CM' : 900}, {'D' : 500}, {'CD' : 400}, {'C' : 100}, {'XC' : 90}, {'L' : 50}, {'XL' : 40}, {'X' : 10}, {'IX' : 9}, {'V' : 5}, {'IV' : 4}, {'I' : 1}];

  // Base step
  let resultStr = "";
  if(num === 0){
    return "";
  }
  else{
    for(let i = 0; i < romAraNum.length; i++){
      if(num >= Object.values(romAraNum[i])){
        let quotient = Math.floor(num/Object.values(romAraNum[i]));
        let remainder = num % Object.values(romAraNum[i]);
        num = remainder;
        if(quotient === 0){
          resultStr = resultStr.concat(Object.keys(romAraNum[i]));
        }else{
          for(let j = 0; j < quotient; j++){
            resultStr = resultStr.concat(Object.keys(romAraNum[i]));
          }
        }
      }
    }
  }
  return resultStr;
}
