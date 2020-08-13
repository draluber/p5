function initialise(){
    if ((sessionStorage.getItem("panier") === null) || (sessionStorage.getItem("panier") === "[]")) {
        document.getElementById("panier").innerHTML ='panier vide';
        document.getElementById("prixpanier").innerHTML = 'Total : 0 €';
    } 
}

function nbproduit() {
    let paniers = JSON.parse(sessionStorage.getItem("panier"));  
    let quantite = 0;
    for (let x in paniers) {
        quantite +=(paniers[x].quantite);   
    switch(quantite){
           case 0:document.getElementById("panier").innerHTML ='panier vide';
           break;
           case 1:document.getElementById("panier").innerHTML ='1 produit';
           break;
           default :document.getElementById("panier").innerHTML = quantite + ' produits';
           break;
    }}     
}

function prixtotalpanier(){
    let paniers = JSON.parse(sessionStorage.getItem("panier"));  
    let total = 0;
    for (let y in paniers) {
        total += paniers[y].prix*paniers[y].quantite; 
        document.getElementById("prixpanier").innerHTML = 'Total : ' + total/100 + ' €';
}}

function recuperation (){
    let section = document.querySelector('section');
//recuperation de la liste des cameras et formatage de cette liste
fetch("http://localhost:3000/api/cameras")
      .then(function(response){
             if(response.ok){
                 response.json()
                 .then(function (json){                                    
                     for (i in json) {
                       let article = document.createElement('article');
                       article.className ="conteneur";
                       section.appendChild(article);

                       let details = document.createElement('div');
                       details.className ="details";
                       article.appendChild(details);

                       let H2 = document.createElement('h2');
                       details.appendChild(H2);
                       H2.textContent = json[i].name;

                       let description= document.createElement('p');
                       description.className ="description";
                       details.appendChild(description);
                       description.textContent = 'description : ' + json[i].description;

                       let control = document.createElement('div');
                       control.className ="control";
                       details.appendChild(control);

                       let bouton = document.createElement('button');
                       bouton.className ="bouton";
                       control.appendChild(bouton);

                       let prix = document.createElement('span');
                       prix.className ="prix";
                       bouton.appendChild(prix);
                       prix.textContent = 'prix : ' + (json[i].price/100) + ' €';

                       let renvoi= document.createElement('a');
                       renvoi.setAttribute("href",'produit.html?id=' + json[i]._id);
                       bouton.appendChild(renvoi);

                       let acheter = document.createElement('span');
                       acheter.className ="acheter";
                       renvoi.appendChild(acheter);
                       acheter.textContent = 'ACHETER'; 

                       let imageproduit = document.createElement('div');
                       imageproduit.className ="imageproduit";
                       article.appendChild(imageproduit);


                       let image = document.createElement('img');
                       image.setAttribute("src",json[i].imageUrl);
                       image.setAttribute("alt","image appareil photo");
                       imageproduit.appendChild(image);
                       image.textContent = json[i].imageUrl;
                      }
                     })
                   }; 
       });
}