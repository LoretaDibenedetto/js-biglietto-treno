



function submitForm(event){
    // IMPORTANTE! Ricorcarsi di disabilitare il comportamento "strano" o di default del FORM!!!
    event.preventDefault();

    // DA QUI IN POI POTETE FARE TUTTO COME PRIMA FACEVATE DENTRO LE FUNZIONI.
    
    let userKm = document.getElementById('kmNumber').value;
    let userAge =document.getElementById('ageNumber').value;
    
    const sales=document.getElementById('Price');
    const underTextSale = document.getElementById('saleUnderAge');
    
    const  overTextSale = document.getElementById('saleOverAge');


     console.log(userKm);

     let euroKm = userKm * 21;
     sales.innerHTML =`<span>${euroKm}$ </span>`

     euroKm = parseFloat(euroKm).toFixed(2);

     let underSale = euroKm * 0.2;
     let applySale = euroKm - underSale;
      applySale = parseFloat(applySale).toFixed(2);
   
      let overSale = euroKm * 0.4;
      let applyOverSale = euroKm - overSale;
       applyOverSale = parseFloat(applyOverSale).toFixed(2);

       if(userAge < 18){
     
        console.log(applySale);
        underTextSale.innerHTML = `<span>${applySale}$ </span>` ;
        
    }else if(userAge >= 65){
    
        
        overTextSale.innerHTML = `<span>${applyOverSale}$ </span>`;
        console.log(applyOverSale);
    
    }else if(userAge >= 18  ){
    
        enjoy.innerText = 'Buon viaggio!'
        console.log('buon viaggio');
    
    }else{
    
        alert("input non valido!");
    };
 

};


   


   
  /* //calcolo km to euro
   let euroKm = userKm * 0.21;
   
    ;

   
   //calcolo la percentuale
       


   //validazione
   let isUserKm = !isNaN(userKm);
   let isUserAge = !isNaN(userAge);
   
   if(isUserKm && isUserAge ){
     
     euroKm = parseFloat(euroKm).toFixed(2);
     userAge = parseFloat(userAge);
   
   }if(userAge < 18){
     
       console.log(applySale);
       underTextSale.innerHTML = `<span>${applySale}$ </span>` ;
       
   }else if(userAge >= 65){
   
       
       overTextSale.innerHTML = `<span>${applyOverSale}$ </span>`;
       console.log(applyOverSale);
   
   }else if(userAge >= 18  ){
   
       enjoy.innerText = 'Buon viaggio!'
       console.log('buon viaggio');
   
   }else{
   
       alert("input non valido!");
   };








//applico le varie percentuali 
/*if(age < 18){
    

    console.log(applySale);
    underTextSale.innerHTML = `<span>${applySale}$ </span>` ;
    
}else if(age >= 65){

    
    overTextSale.innerHTML = `<span>${applyOverSale}$ </span>`;
    console.log(applyOverSale);

}else{
    enjoy.innerText = 'Buon viaggio!'
    console.log('buon viaggio');
}*/



