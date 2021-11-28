
//step1-selecting all the elements


// submitBtn.addEventListener('click',submitHandler);
// function submitHandler(){
//     var ip=initialPrice.value;
//     var qty=stocksQuantity.value;
//     var curr=currentPrice.value;
//     calculateProfitAndLoss(ip,qty,curr);




// }

// function calculateProfitAndLoss(initial,quantity,current){
//     if(initial>current){
//         //loss logic here
//         var loss=(initial-current)*quantity;
//         var lossPercentage=(loss/initial)*100;
//         showOutput(`Hey the loss is ${loss} and the percent is
//          ${lossPercentage}%` )
       
//     }
//     else if(current>initial){
//         //profit logic here//
//         var profit=(current-initial)*quantity;
//         var profitPercentage=(profit/initial)*100;
//         showOutput(`Hey the profit is ${profit} and the percent is ${
//            profitPercentage} %`)
    
//      }
//     el
//     // outputBox.style.color="green";
//     }
var initialPrice=document.querySelector('#initial-price');
var stocksQuantity=document.querySelector('#stocks-quantity');
var currentPrice=document.querySelector('#current-price');

var submitBtn=document.querySelector('#submit-btn');
var outputBox=document.querySelector('#output-box');

submitBtn.addEventListener("click",calculate);

function calculate(){
     var costPrice=(initialPrice.value * stocksQuantity.value);
     var sellingPrice=(currentPrice.value *stocksQuantity.value);
     if(costPrice<sellingPrice){
         var profit=sellingPrice - costPrice;
         var profitPercentage = (profit/costPrice)*100;
         outputBox.innerText="It's a profit of "+ profit +" and the profit percentage is " 
            + profitPercentage.toFixed(2) + "percent";
         outputBox.style.color="green";
        }
        else if(costPrice > sellingPrice){
            var loss=costPrice-sellingPrice;
            var lossPercentage=(loss/costPrice)*100;

            outputBox.innerText="It's a loss of "+ loss +" and the loss percentage is"  
      + lossPercentage.toFixed(2) + "percent";
            outputBox.style.color="red";
        }
        else{
            outputBox.innerText="No pain NO gain"
        }
}