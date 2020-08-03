let inputorder = document.getElementsByTagName("input");
document.getElementById("envoyer").addEventListener("click",function(e){
    e.preventDefault();
    let contact = {
        firstName : inputorder[0].value ===''?false:inputorder[0].value,
        lastName : inputorder[1].value ===''?false:inputorder[1].value,
        address : inputorder[2].value ===''?false:inputorder[2].value,
        city : inputorder[3].value ===''?false:inputorder[3].value,
        email : inputorder[4].value ===''?false:inputorder[4].value,
                   };
           if (!contact.firstName){ 
              erroremail.textContent="";
              errorville.textContent="";
              erroradresse.textContent="";  
              errornom.textContent="";
              errorprenom.textContent="Veuillez rentrer un prénom valide"; 
           }
           else {
            if (!contact.lastName) {
                    erroremail.textContent="";
                    errorville.textContent="";
                    erroradresse.textContent="";  
                    errornom.textContent="Veuillez rentrer un nom valide";
                    errorprenom.textContent="";
                        }
                    else {
                        if (!contact.address) { 
                          erroremail.textContent="";
                          errorville.textContent="";
                          erroradresse.textContent="Veuillez rentrer une addresse valide";  
                          errornom.textContent="";
                          errorprenom.textContent="";
                        }    
                         else{
                            if (!contact.city) {
                              erroremail.textContent="";
                              errorville.textContent="Veuillez rentrer une ville valide";
                              erroradresse.textContent="";  
                              errornom.textContent="";
                              errorprenom.textContent="";
                                 }
                              else{
                                if (!contact.email){
                              erroremail.textContent="Veuillez rentrer un email valide";
                              errorville.textContent="";
                              erroradresse.textContent="";  
                              errornom.textContent="";
                              errorprenom.textContent="";
                                }
                              else{
    let paniertotal = JSON.parse(sessionStorage.getItem("panier"));
    let products = [];
    for (let product of paniertotal){
        products.push(product.id);
    }
    let data = JSON.stringify({ contact, products });
    sessionStorage.setItem("data",data);
     window.location.href = "confirmation.html"
     }}}}}})

