

/*
function SeerToMon(number){
    var seer =(1/40)*number;
    return (seer+1);
}
var IntigerNumber=SeerToMon('input integer value of  seer :',45);
console.log('output value of mon  :',IntigerNumber);
*/

/*
Input three variable get total output variable 
function totalSale(price1,price2,price3){
    var shirt=200*price1;
    var shoes=300*price2;
    var hudi=400*price3;
    var Totalprice =shirt +shoes+hudi;
   return Totalprice ;
}


var quantity =totalSale(1,2,1);
console.log(quantity);
*/

/*
function deliveryCost(quantity){ 
    var firstprice =0;
    var anotherprice=0;
    for(var i=1;i<=quantity;i++){
        //count first delivery price 100 Taka for 100 products
        
        if(i<=100){
        var firstdeliveryprice=100;
        firstprice =firstprice+firstdeliveryprice;
        }
        //count another delivery price 80 taka for another products delivery.
        else{
            var otherprice=80;
            anotherprice =anotherprice+otherprice;
        }
       var  totalprice=firstprice +anotherprice;
        
        
    }
    return totalprice;
    }
    
    var deliveryprice =deliveryCost('Delivery Quantity',105);
    //Total delivery price for all over  products
    console.log('Total delivery cost :',deliveryprice);
*/