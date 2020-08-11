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
function totalpanier(){
    let paniers = JSON.parse(sessionStorage.getItem("panier"));  
    let total = 0;
    for (let y in paniers) {
        total += paniers[y].prix*paniers[y].quantite; 
        document.getElementById("total").innerHTML = total/100 + ' €';
}}
function  orderid () {
    let data = sessionStorage.getItem("data");
      fetch("http://localhost:3000/api/cameras/order",{
        method: 'POST',
        headers: {  
            'Content-Type': 'application/json' 
           }, 
        body: data
    })
    .then (res => res.json())
    .then (res => sessionStorage.setItem("orderid", JSON.stringify(res.orderId))) 
}
function order (){
    let ord = JSON.parse(sessionStorage.getItem("orderid")); 
    document.getElementById("identifiant").innerHTML = ord;
}

function cacher(){
    if ((sessionStorage.getItem("panier") === null) || (sessionStorage.getItem("panier") === "[]")) {
        ele= document.getElementById("formulaire");
        ele.classList.add("cache");
    }
    
}
