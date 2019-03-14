//$('.spex2').click(function (){
//    $('#silver').attr('src', 'iphone2.png');
//    });

function pictureChange()
  {
document.getElementById("graph2").src="iphone2.png";
  }

function pictureChange2()
  {
document.getElementById("graph2").src="iphone.png";
  }

function pictureChange3()
  {
document.getElementById("graph2").src="iphone3b.png";
  }


function added()
  {
document.getElementById("addcart1").src="added.png";
      
      alert("Your iPhone XS Max was added");
  }

function stock()
{
    
    var txt;
  if (confirm("Item is out of stock. Do you want to leave us your email to contact you when we have it again ?")) {
    txt = 1;
  } else {
    txt = 0;
  }
    
    if (txt==1){
        
        window.prompt("email:","user@service.com");
        alert("Thank You !");
    }
    
    else{
        
        alert("k");
    }
       
}



function updateprice(){
  
    document.getElementById("val1").innerHTML=   parseInt(document.getElementById("q").value) * 1399;
    updateq();
    updatetot();
}

function updateq(){
    document.getElementById("num").innerHTML=   document.getElementById("q").value;
    
//    document.getElementById("val1").innerHTML
}
function updatetot(){
    document.getElementById("vall").innerHTML= "$"+
    parseInt(document.getElementById("q").value) * 1399;
    
//    document.getElementById("val1").innerHTML
}

//function checkDate() {
//   var entereddob = document.getElementById('dobdate').value;
//   var entereddob= new Date(entereddob);
//   var now = new Date();
//   if (entereddob > now) {
//    alert("Date invalid, check your input");
//   }
// }



function checkDate(){
var GivenDate = document.getElementById("dobdate").value;
var CurrentDate = new Date();
GivenDate = new Date(GivenDate);

if(GivenDate > CurrentDate){
    alert('Given date is greater than the current date.');
}else{
    alert('Given date is not greater than the current date. Good Job !');
}
}



function done() {

  document.getElementById("items").outerHTML = " <h2> Your cart is empty :(</h2>";
    
    document.getElementById("id").src="checkgd.png";
    
    alert("Your Order is well recieved. Thank you !")
    
   return false;
}






