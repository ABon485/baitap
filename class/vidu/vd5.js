//    var a="Hello";
//     var b="world";
//     var c= a+"  "+b;
//     //alert(c);
//     //document.write(c);
//     document.getElementById("kq").innerHTML =c ;
// var a=10;
// var b=25;
// var c= a+b;
// document.write(c);
// dhsdfjsgfh;
// var x =100+200;
// document.write(x)
// alert("wellcome");
// var a=prompt("input price:","0");
// alert(a);
// var starus=confirm("do you want to play?");
// alert(starus);

function chuvi(a, b) {
    return (a + b) * 2;
  }
  
  function dientich(a, b) {
    return a * b;
  }
  
  var a = parseInt(prompt("Nhập số a"));
  var b = parseInt(prompt("Nhập số b"));
  
  var cv = chuvi(a, b);
  var dt = dientich(a, b);
  
  document.write("Chu vi của hình chữ nhật có chiều dài " + a + " và chiều rộng " + b + " là: " + cv);
  document.write("<br>");
  document.write("Diện tích của hình chữ nhật có chiều dài " + a + " và chiều rộng " + b + " là: " + dt);