
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
    .then (res => document.getElementById("identifiant").innerHTML = JSON.stringify(res.orderId))
}




