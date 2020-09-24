let screen=document.getElementById('screen');
let screenValue="";

let buttons=document.querySelectorAll('button');
for(button of buttons){
  button.addEventListener('click', (e)=>{
    let buttonText = e.target.innerText;
    if(buttonText == '='){
      screen.value=eval(screenValue);
    }
    else if(buttonText == 'C'){
      screenValue="";
      screen.value=screenValue;
    }
    else{
      screenValue+=buttonText;
      screen.value = screenValue;
    }
  })
}
