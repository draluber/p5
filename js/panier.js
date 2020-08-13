
    function totalpanier(){
        let paniers = JSON.parse(sessionStorage.getItem("panier"));  
        let total = 0;
        for (let y in paniers) {
            total += paniers[y].prix*paniers[y].quantite; 
            document.getElementById("total").innerHTML = total/100 + ' €';
    }}
    function cacher(){
        if ((sessionStorage.getItem("panier") === null) || (sessionStorage.getItem("panier") === "[]")) {
            ele= document.getElementById("formulaire");
            ele.classList.add("cache");
        }  
    }

    function addCell(tr,val){
        let td = document.createElement('td');
            td.innerHTML = val;
            tr.appendChild(td);
    }
    function addrow(tbl, val_1, val_2, val_3, val_4, val_5,x) {
        var tr = document.createElement('tr');
        //creation d'une ligne pour suppression
        //let val_6='<a id="supprimer" href="suppression.html?id='+x+'">SUPPRIMER</a>';
        let val_6='<button id="supprimer" class='+x+'>supprimer</button>';
        addCell(tr, val_1);
        addCell(tr, val_2);
        addCell(tr, val_3);
        addCell(tr, val_4);
        addCell(tr, val_5);
        addCell(tr, val_6);
        tbl.appendChild(tr);
    }
    
    function creationTableau (){
        let panier = JSON.parse(sessionStorage.getItem("panier"));
                for (let x in panier) {
                    let id= panier[x].id;
                    let nom = panier[x].nom ;
                    let quantite = panier[x].quantite;
                    let option = panier[x].option ;
                    let prix = panier[x].prix/100 ;
                    let total= (panier[x].prix*panier[x].quantite)/100; 
                    tbl = document.getElementById('tbody');
                    addrow(tbl, nom, quantite, prix, option, total, x)                          
            }
            totalpanier();
            cacher();
    el= document.getElementById("supprimer");
        el.addEventListener("click", function(){
        xx = el.className;
        supprimer(xx);
        });
    }
    function supprimer(id) { 
        let data = JSON.parse(sessionStorage.getItem("panier")); 
        data.splice(id, 1);
        sessionStorage.setItem("panier", JSON.stringify(data)); 
        window.location.href = "panier.html"; 
    }
    function ValidateEmail(mail) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
          return (true)
            }
          return (false)
            }

    function order (){
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
                           erroremail.textContent="";
                           errorville.textContent="";
                           erroradresse.textContent="";  
                           errornom.textContent="";
                           errorprenom.textContent="";   
                           let formok = true;
                   if (!contact.firstName){ 
                    errorprenom.textContent="Veuillez rentrer un prénom valide";
                    formok = false;
                    }
                   if (!contact.lastName) {                    
                    errornom.textContent="Veuillez rentrer un nom valide";
                    formok = false;
                    }
                   if (!contact.address) { 
                    erroradresse.textContent="Veuillez rentrer une addresse valide";  
                    formok = false;
                    }    
                   if (!contact.city) {
                    errorville.textContent="Veuillez rentrer une ville valide";
                    formok = false;
                    }
                   if (!contact.email || !ValidateEmail(contact.email)){
                    erroremail.textContent="Veuillez rentrer un email valide";
                    formok = false;
                    }
             if  (formok) {     
            let paniertotal = JSON.parse(sessionStorage.getItem("panier"));
            let products = [];
            for (let product of paniertotal){
                products.push(product.id);
            }
            let data = JSON.stringify({ contact, products });
            sessionStorage.setItem("data",data);
             window.location.href = "confirmation.html"
          }
         })}
