
// function SeerToMon(number){
//     var seer =(1/40)*number;
//     return (seer+1);
// }
// var IntigerNumber=SeerToMon('input integer value of  seer :',45);
// console.log('output value of mon  :',IntigerNumber);

//Input three variable get total output variable 
function totalSale(price1,price2,price3){
    var shirt=200*price1;
    var shoes=300*price2;
    var hudi=400*price3;
    var Totalprice =shirt +shoes+hudi;
   return Totalprice ;
}


var quantity =totalSale(1,2,1);
console.log(quantity);