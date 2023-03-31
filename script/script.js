



function submitForm(e){
    // IMPORTANTE! Ricorcarsi di disabilitare il comportamento "strano" o di default del FORM!!!
    e.preventDefault();

    // DA QUI IN POI POTETE FARE TUTTO COME PRIMA FACEVATE DENTRO LE FUNZIONI.
    validator();
   

};


   function validator(){

    let userKm = document.getElementById('kmNumber').value;
    let userAge =document.getElementById('ageNumber').value;
    
    const sales=document.getElementById('Price');
    const underTextSale = document.getElementById('saleUnderAge');
    
    const  overTextSale = document.getElementById('saleOverAge');
    const enjoy = document.getElementById('enjoy');
     
     
     
     userKm = parseFloat(userKm).toFixed(2);
     console.log(userKm);

     let euroKm = userKm * 0.21;
     sales.innerHTML =`<span>${euroKm}$ Prezzo Pieno</span>`

     euroKm = parseFloat(euroKm).toFixed(2);

     let underSale = euroKm * 0.2;
     let applySale = euroKm - underSale;
      applySale = parseFloat(applySale).toFixed(2);
   
      let overSale = euroKm * 0.4;
      let applyOverSale = euroKm - overSale;
       applyOverSale = parseFloat(applyOverSale).toFixed(2);

       if(userAge < 18){
     
        console.log(applySale);
        underTextSale.innerHTML = `<span>${applySale}$ Sconto per Under 18 </span>` ;
        
    }else if(userAge >= 65){
    
        
        overTextSale.innerHTML = `<span>${applyOverSale}$ Sconto per Over 65</span>`;
        console.log(applyOverSale);
    
    }else{
    
        enjoy.innerText = 'Buon viaggio!';
        console.log('buon viaggio');
    
    };
 
   };




