class ligneDuPanier {
    constructor(id, nom, quantite, option, prix) {
        this.id = id;
        this.nom = nom;
        this.quantite = quantite;
        this.option = option;
        this.prix = prix;      
    }}

    function ajouterPanier(id,nom,quantite,option, prix){
        if (sessionStorage.getItem('panier') == null){
            let ligne = new ligneDuPanier(id, nom, quantite, option, prix );
            let Panier = [];
            Panier.push(ligne); 
            sessionStorage.setItem("panier", JSON.stringify(Panier));
        }
        else
         {
                let data = JSON.parse(sessionStorage.getItem("panier"));
                let produitTrouve = false;
                for (let x in data) {
                    if ((data[x].id == id)&(data[x].option == option)) {
                        produitTrouve = true;
                        data[x].quantite++;
                    }
                }
                if (!produitTrouve) {
                    const ligne = new ligneDuPanier(id, nom, quantite, option, prix );
                    data.push(ligne);
                }
                sessionStorage.setItem("panier", JSON.stringify(data));                   
        }      

    }

function recupereitem(){
    let str = window.location.href;
let url = new URL(str);
let id = url.searchParams.get("id");//recuperation de l'id de la camera
let section = document.querySelector('section');
//recuperation des attributs de la camera séléctionnée
fetch("http://localhost:3000/api/cameras/"+ id)
          .then(function(response){
             if(response.ok){
                 response.json()
                      .then(function (json){                                    
                   let id= json._id;
                   let nom= json.name;
                   let prix= json.price;
                   let description= json.description;
                   let options= json.lenses;
                   let quantite= 1;        
                   let h1 = document.createElement('h1');
                   h1.textContent = json.name;
                   section.appendChild(h1);

                   let article = document.createElement('article');
                   article.className ="conteneur";
                   section.appendChild(article);

                   let details = document.createElement('div');
                   details.className ="details";
                   article.appendChild(details);

                   let prix2 = document.createElement('div');
                   prix2.className ="prix2";
                   prix2.textContent = 'prix : ' + (json.price/100) + ' €';
                   details.appendChild(prix2);

                   let imageproduit = document.createElement('div');
                   imageproduit.className ="imageproduit";

                   let image = document.createElement('img');
                   image.setAttribute("src",json.imageUrl);   
                   image.setAttribute("alt","image appareil photo");

                   article.appendChild(imageproduit);
                   imageproduit.appendChild(image);

                   let champ = document.createElement('fieldset');
                   champ.className ="fieldset";
                   details.appendChild(champ);

                   let legende =document.createElement('legend');
                   legende.textContent = "Choichissez vos lentilles :";
                   champ.appendChild(legende);

                   let radio =document.createElement('div');
                   champ.appendChild(radio);
                   //recupération des options de la camera et affichage
                        for (lent in options){
                            let input= document.createElement('input');
                            input.setAttribute("type","radio");
                            input.setAttribute("id",options[lent]);
                            input.setAttribute("name","lentille");
                            input.setAttribute("value",options[lent]);
                            let label= document.createElement('label');
                            label.setAttribute("for","lentille");
                            label.textContent = options[lent];
                            let br= document.createElement('br');
                            radio.appendChild(input);
                            radio.appendChild(label);
                            radio.appendChild(br);
                            }
                   document.getElementById(options[0]).checked = true;      
                   let button = document.createElement('button');
                   button.id="button";
                   button.textContent = "AJOUTER AU PANIER";
                   details.appendChild(button);
                   const bouton = document.getElementById('button');

                   //ecouter l'événement click sur le bouton ajouter au panier
                   bouton.addEventListener('click',function(){
                   let option = document.querySelector('input[name=lentille]:checked').value;
                   ajouterPanier (id,nom,quantite,option,prix);
                   window.location.href = "index.html";//renvoi sur la page d'acceuil apres sélection
             })
   });
 }
});          
}