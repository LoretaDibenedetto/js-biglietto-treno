//prendo gli id e li salvo in una variabile
const price = document.getElementById('Price');
const underTextSale = document.getElementById('saleUnderAge');
const overTextSale = document.getElementById('saleOverAge');
const enjoy = document.getElementById('enjoy');


//prendo i valori dal prompt
let userKm = prompt('inserisci i km da percorrere:');
let age = prompt("inserisci l'eta");

//calcolo km to euro
let euroKm = userKm * 0.21;
euroKm = parseFloat(euroKm).toFixed(2);
price.innerHTML =`<span>${euroKm}$ </span>` ;

//calcolo la percentuale
let underSale = euroKm * 0.2;
let applySale = euroKm - underSale;
applySale = parseFloat(applySale).toFixed(2);

let overSale = euroKm * 0.4;
let applyOverSale = euroKm - overSale;
applyOverSale = parseFloat(applyOverSale).toFixed(2);    



//applico le varie percentuali 
if(age < 18){
    

    console.log(applySale);
    underTextSale.innerHTML = `<span>${applySale}$ </span>` ;
    
}else if(age >= 65){

    
    overTextSale.innerHTML = `<span>${applyOverSale}$ </span>`;
    console.log(applyOverSale);

}else{
    enjoy.innerText = 'Buon viaggio!'
    console.log('buon viaggio');
}