var phone =[
    {model:'nokia',
    processor:'hillg80',
    price :25000,

},
    {model:'sony',
    processor:'hillg88',
    price :15000,

},
    {model:'infinix',
    processor:'hillg85',
    price :10000,

},
    {model:'samsung',
    processor:'hillg40',
    price :20000,

}
];
var cheapestPhone=phone [0];
for (var phones of phone){
    if(phones.price<cheapestPhone.price){
        cheapestPhone=phones;
    }

}
console.log(cheapestPhone);


