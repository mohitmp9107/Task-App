const calculateTip=(total,tipPercentage=0.25)=>total+(total*tipPercentage)

const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}
const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0){
                reject('"Numbers must be non-negative');
            }
            resolve(a+b);
        },500)
    });   
}

module.exports = {
    calculateTip,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    add
}