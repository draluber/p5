function addCell(tr,val){
    let td = document.createElement('td');
        td.innerHTML = val;
        tr.appendChild(td);
}
function addrow(tbl, val_1, val_2, val_3, val_4, val_5,x) {
    var tr = document.createElement('tr');
    //creation d'une ligne pour suppression
    let val_6='<a id="supprimer" href="suppression.html?id='+x+'">SUPPRIMER</a>';
    addCell(tr, val_1);
    addCell(tr, val_2);
    addCell(tr, val_3);
    addCell(tr, val_4);
    addCell(tr, val_5);
    addCell(tr, val_6);
    tbl.appendChild(tr);
}

    
       