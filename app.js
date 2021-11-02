
//step1-selecting all the elements
var initialPrice=document.querySelector('#initial-price');
var stocksQuantity=document.querySelector('#stocks-quantity');
var currentPrice=document.querySelector('#current-price');

var submitBtn=document.querySelector('#submit-btn');
var outputBox=document.querySelector('#output-box');


submitBtn.addEventListener('click',submitHandler);
function submitHandler(){
    var ip=initialPrice.value;
    var qty=stocksQuantity.value;
    var curr=currentPrice.value;
    calculateProfitAndLoss(ip,qty,curr);



}

function calculateProfitAndLoss(initial,quantity,current){
    if(initial>current){
        //loss logic here
        var loss=(initial-current)*quantity;
        var lossPercentage=(loss/initial)*100;
        showOutput(`hey the loss is ${loss} and the percent is
         ${lossPercentage}%` )
       
    }
    else if(current>initial){
        //profit logic here//
        var profit=(current-initial)*quantity;
        var profitPercentage=(profit/initial)*100;
        showOutput(`hey the profit is ${profit} and the percent is ${
            profitPercentage
     }%`)
     }
    else{
      
        showOutput(`No pain NO gain`);
    }
    }
   
    // calculateProfitAndLoss(101,10,10);
    // calculateProfitAndLoss(10,10,100);
    // calculateProfitAndLoss(10,10,10);
    function showOutput(message){
    //    switch  (status){
    //        case "PROFIT":
    //       outputBox.innerHTML=msg;
    //        break;
    //        case "LOSS":
    //            outputBox.innerHTML=msg;

    //        defalut:

    //        break;
    //    }
    outputBox.innerHTML=message;
    // outputBox.style.color="green";
    }