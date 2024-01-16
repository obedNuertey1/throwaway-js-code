const getForm = document.getElementById('getForm');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result')

getForm.addEventListener('submit', handleSubmit);

function handleSubmit(e){
  e.preventDefault();

  // get the textInput
  let originalText = textInput.value;

  if(!originalText){
    alert("Please input a value");
    return;
  }

  // process the orignalText
  let processedText = processText(originalText);

  // pass processedText to palindrome checker
  let truth = isPalindrome(processedText);

  truthTextGenerator(truth, originalText);

  textInput.value = '';
};


function processText(text){
  return text.split(/[\W_]+/).join('').toLowerCase();
}


function isPalindrome(text){
  if(text.length == 1){
    return true;
  }

  let halfTextLen = Math.floor(text.length/2);

  let [left, right] = [0, text.length - 1];

  for(let i = 0; i < halfTextLen; i++){
    if(text[left] !== text[right]){
      return false;
    }
    right -= 1;
    left += 1;
  }

  return true;
}


function truthTextGenerator(truth, originalText){
  if(truth){
    result.innerHTML = `<p id="is-palin">${originalText} is a palindrome</p>`
  }else{
    result.innerHTML = `<p id="not-palin">${originalText} is not a palindrome</p>`;
  }
}

