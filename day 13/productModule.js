var products=[{prono:0,pname:"IPhone",pcat:"mobile",price:"66990",stock:true},
{prono:1,pname:"Samsung phone",pcat:"mobile",price:"24990",stock:true},
{prono:2,pname:"Lg refrigerator",pcat:"furniture",price:"27690",stock:false},
{prono:3,pname:"Wakefit sofa",pcat:"furnitue",price:"10914",stock:true},
{prono:4,pname:"Oneplus",pcat:"mobile",price:"32999",stock:true},
{prono:5,pname:"wadrobe",pcat:"furniture",price:"12680",stock:false},
]

exports.getProducts=function()
{
    return products;
}

exports.getProductsByCat=function()
{
    var product2=products.filter(function(el){
        return el.pcat=="mobile";
    })
    return product2;
}

exports.getProductsByPrice=function(a,b)
{
   var product3=[];
   for(let item  of  products)
   {
    if(item.price<b && item.price>a)
    {
        product3.push(item.pname);
    }
   }
   return product3;
}


exports.getProductsByOutOfStock=function()
{
    var product4=products.filter(function(el){
        return el.stock==false;
    })
    return product4;
}

exports.getProductsByInStock=function()
{
    var product5=products.filter(function(el){
        return el.stock==true;
    })
    return product5;
}
