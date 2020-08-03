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
