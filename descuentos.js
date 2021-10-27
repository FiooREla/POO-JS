const precioOriginal =120;
const descuento = 18;

function calcularPrecioConDecs(precio,descuento) {
    const porcentajePrecioDesc=100-descuento;
    const precioConDesc = (precio * porcentajePrecioDesc)/100;
    return precioConDesc;
}

// const porcentajePrecioDesc=100-descuento;

// const precioConDesc = (precioOriginal * porcentajePrecioDesc)/100;
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDesc,
//     precioConDesc,
// });
function onClickButtonPrice() {
    const inputPrice=document.getElementById("InputPrice");
    const priceValue=inputPrice.value;
    const inputDiscount=document.getElementById("InputDiscount");
    const discountValue=inputDiscount.value;

    const precioConDesc=calcularPrecioConDecs(priceValue,discountValue);

    const resultPrecio=document.getElementById("resultPrice");
    resultPrecio.innerText="el precio con descuento son: $ "+ precioConDesc;

}


// const coupons=[
//     "JuanDC_es_Batman",
//     "pero_no_le_digas_a_nadie",
//     "es_un_secreto",
// ]


const inputCoupon=document.getElementById("InputCoupon");
const couponValue=inputCoupon.value;
function onClickButtonPriceDiscount() {
    const inputPrice=document.getElementById("InputPrice");
    const priceValue=inputPrice.value;
    const inputCoupon=document.getElementById("InputCoupon");
    const couponValue=inputCoupon.value;

    let descuento;

    // switch (couponValue) {
    //     case "JuanDC_es_Batman":
    //         descuento=15;
    //         break;
    //     case "pero_no_le_digas_a_nadie":
    //         descuento=30;
    //         break;
    //     case "es_un_secreto":
    //         descuento=20;
    //         break;
    // }

    //esto es array.includes
    // if (!coupons.includes(couponValue)) {
    //     alert("El cupon "+ couponValue + " no es válido");

    // }else if(couponValue == "JuanDC_es_Batman"){
    //     descuento= 15;
    // }else if (couponValue == "pero_no_le_digas_a_nadie") {
    //     descuento=30;
    // }else if (couponValue == "es_un_secreto") {
    //     descuento=25;
    // }

    // const precioConDesc = calcularPrecioConDecs(priceValue,descuento);
    // const resultPrice= document.getElementById("resultPrice");
    // resultPrice.innerText="El precio con descuento son es : $"+ precioConDesc;

    //SEGUNDA FORMA
    const coupons = [
        {
            name: "JuanDC_es_Batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25
        },
    ];
    //ahora usamos array.find
    //Vamos a crear una variable isUserCouponValueValid con una función que valide si su parámetro coupon es igual a nuestra variable userCouponValue. Y esta variable la vamos a enviar como parámetro a nuestra función array.find().
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid);
    if ((!userCoupon)) {
        alert("El cuponcito" + couponValue + "no es valido");
    }

}

// otra forma más inteligente
