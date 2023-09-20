let display=document.getElementById("display");
let currentInput='';
let currentOperator='';
let preValue=0;

function appendToDisplay(){
    currentInput+= value;
    display.innerText=currentInput;

}

function clearDisplay(){
    currentInput='';
    currentOperator='';
    prevValue=0;
    display.innerText=0;
}

function calculateResult(){
    if(currentInput=='') return;
    const currentValue=parseFloat(currentInput);

    switch(currentOperator){
        case '+':
            prevValue+=currentValue;
            break;
            case '-':
                prevValue-=currentValue;
                break;
                case '*':
                    prevValue*=currentValue;
                    break;
                    case '/':
                        if(currentValue !==0){
                            prevValue /=currentValue;
                        }else{
                            alert('Error: Division by zero');
                            clearDisplay();
                            return;
                        }
                        break;
                        default:
                            prevValue=currentValue;
                            break;
    }
    display.innerText=prevValue;
    currentInput='';
    currentOperator='';
}
clearDisplay();