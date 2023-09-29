var info = new Array();
function Ok(){
    var a,b,c,d,e;
    a = document.getElementById("F-C").value;
    if(a==""){
        alert("Full name");
    }
    if(b==""){
        alert("ID pro");
    }
    if(c==""){
        alert("Name pro");
    }
    if(d==""){
        alert("Quantity pro");
    }
    if(ea==""){
        alert("Price pro");
    }
    if(checkErro()==0){
        info.push({FullName_Customer:a, ID_pro:b, Name_pro:c, Quantity_pro:d, Price_pro:e});
    }
    else alert("ID product name is");
}
function Show_product(){
    let html ="";
    for(i in Ok){
        var n = i;
        n++;
        html += "<tr><td>"+n+"</td>";
        html += "<td>"+Ok[i].FullName_Customer+"</td>";
        html += "<td>"+Ok[i].ID_pro+"</td>";
        html += "<td>"+Ok[i].Name_pro+"</td>";
        html += "<td>"+Ok[i].Quantity_pro+"</td>";
        html += "<td>"+Ok[i].Price_pro+"</td>";
        html += "</tr>";
    }
    document.getElementById("Show").innerHTML = html;
}
function reset(){
    document.getElementById("F-C").value="";
    document.getElementById("ID-p").value="";
    document.getElementById("N-P").value="";
    document.getElementById("Q-P").value="";
    document.getElementById("P-P").value="";

}