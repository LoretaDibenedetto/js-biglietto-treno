//prendo i valori dal prompt
const underTextSale = document.getElementById('saleUnderAge');
const overTextSale = document.getElementById('saleOverAge');
let userKm = prompt('inserisci i km da percorrere:');
let age = prompt("inserisci l'eta");


let euroKm = userKm * 0.21;
euroKm = parseFloat(euroKm);
document.getElementById('Prezzo_biglietto').innerHTML = euroKm;

let underSale = euroKm * 0.2;
let applySale = euroKm - underSale;


let overSale = euroKm * 0.4;
let applyOverSale = euroKm - overSale;
    

if(age < 18){
    

    console.log(applySale);
    underTextSale.innerText = applySale ;
    
}else if(age > 65){

    
    overTextSale.innerHTML = applyOverSale ;
    console.log(applyOverSale);
    
}else{
    console.log('buon viaggio');
}