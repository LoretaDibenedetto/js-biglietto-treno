



function submitForm(event){

   
    // IMPORTANTE! Ricorcarsi di disabilitare l'invio del form !!!
    event.preventDefault();
   
   
  

    // DA QUI IN POI POTETE FARE TUTTO COME PRIMA FACEVATE DENTRO LE FUNZIONI.
   addPercent();
     

    
};










   function addPercent(){

     //prendo il valore dei campi input
    let userKm = document.getElementById('kmNumber').value;
    let userAge =document.getElementById('ageNumber').value;

  
   
     //prendo i div
   const sales =document.getElementById('Price');
   const underTextSale = document.getElementById('saleUnderAge');
   
   const  overTextSale = document.getElementById('saleOverAge');
   const enjoy = document.getElementById('enjoy');
   
   
     //sistemo i numerini
   userKm = parseFloat(userKm).toFixed(2);
   console.log(userKm);
    
    //calcolo euro per km 
   let euroKm = userKm * 0.21;
   //metto il prezzo nell'html
   sales.innerHTML =`<span>${euroKm}$ Prezzo Pieno</span>`
    //aggiungo classe bootstrap
   sales.classList.add('alert');
   sales.classList.add('alert-secondary');
   
   
    //sistemo i numerini
   euroKm = parseFloat(euroKm).toFixed(2);
    
    //calcolo percentuali
   let underSale = euroKm * 0.2;
   let applySale = euroKm - underSale;
   applySale = parseFloat(applySale).toFixed(2);
   
   let overSale = euroKm * 0.4;
   let applyOverSale = euroKm - overSale;
   applyOverSale = parseFloat(applyOverSale).toFixed(2);

  
   //validazione form
   if(userKm === '' || userAge === ''|| userKm.value === isNaN || userAge.value === isNaN ){

       userKm = document.getElementById('kmNumber');
       userAge = document.getElementById('ageNumber');

       divError = document.getElementById('error');
       divError2 = document.getElementById('error2');
       userKm.classList.add('input-error');
       userAge.classList.add('input-error');
       divError.innerHTML = `<span class='text-danger ms-2'> metti un numero bro'! </span>`;
       divError2.innerHTML = `<span class='text-danger ms-2'> metti un numero bro'! </span>`;
       sales.innerHTML = `<span></span>`;
       sales.classList.remove('alert');
       sales.classList.remove('alert-secondary');
       
       enjoy.innerHTML = `<span class= 'text-danger border border-danger p-3  rounded shadow' > inserisci dei numeri</span>`;
      
    }
    ///applica sconti per fasce d'eta'
   if(userAge < 18){
     
        console.log(applySale);
        underTextSale.innerHTML = `<span>${applySale}$ Sconto per Under 18 </span>` ;
        underTextSale.classList.add('alert');
        underTextSale.classList.add('alert-secondary');
    }else if(userAge >= 65){
    
        
        overTextSale.innerHTML = `<span>${applyOverSale}$ Sconto per Over 65</span>`;
        console.log(applyOverSale);
        overTextSale.classList.add('alert');
        overTextSale.classList.add('alert-secondary');
    }else if(userAge >= 18 && userAge >= 65 ){
    
        enjoy.innerText = 'Buon viaggio!';
        console.log('buon viaggio');
        enjoy.classList.add('alert');
        enjoy.classList.add('alert-secondary');
    };
 
   };




