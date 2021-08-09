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