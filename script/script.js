//prendo i valori dal prompt

let userKm = prompt('inserisci i km da percorrere:');
let age = prompt("inserisci l'eta");


let euroKm = userKm * 0.21;

document.getElementById('Prezzo_biglietto').innerHTML = euroKm;





if(age < 18){
    let underSale = euroKm * 0.2;
    let applySale = euroKm - underSale;
    document.getElementById(' saleUnderAge').innerHTML = applySale ;
    console.log(applySale);
    
}else if(age >= 65){

    let overSale = euroKm * 0.4;
    let applyOverSale = euroKm - overSale;
    
    document.getElementById('saleOverAge').innerHTML = applyOverSale ;
    
    console.log(applyOverSale);
};