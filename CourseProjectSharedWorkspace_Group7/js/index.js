var userinfo = [];
//Gets values entered from user and pushes it into userInfo array.
function addUser(){
  var storeUserInfo = {
    name: $('#userName').val(),  
    phone: $('#userPhone').val(),
    email: $('#userEmail').val(),
    role: $('#userRole').val()
  }
  userinfo.push(storeUserInfo);
  console.log(userinfo);


  alert("Signed in as " + storeUserInfo.name + ". Redirecting shortly.");
  //Opens in the same window
  if($('#userRole').val() == "Owner"){
    window.location.replace("propertylistings.html");
    //
  }
  else{
    window.location.replace("sike.html"); // Insert co-workers site here-------------------------------------------
  }
}

//-----Listing JS ------//


var propertyArr = [];
//Gets values entered from user and pushes it into userInfo array.
function storeProperty(){
  var addProperty = {
    address: $('#propAddress').val(),
    neighborhood: $('#propHood').val(),
    sqFT: parseInt($('#sqFT').val()),
    garage: $('#propGarage').val(),
    transportation: $('#propTransport').val()
  };
  propertyArr.push(addProperty);
  console.log(propertyArr);
  $('.propConfirmation').html("New Property Added!");
  var addNextProp = {
    css: {
      "border": "1px solid gray",
      "color" : "Black",
      "width": 200,
      "height": 200,
      "padding": 1,
      "display": "inline-block",
      "padding-top": 200,
      "margin-left": 60,
      "margin-top": 20
    }
  };
  var moreProperties = [];
  for(var key in propertyArr){
    moreProperties.push(propertyArr[key]);
  }
  var $h3 = $("<div>", addNextProp, propertyArr);
    $h3.html("Address: " + this.propertyArr[0].address + "</br> Neighborhood: " + this.propertyArr[0].neighborhood + "</br> SQ FT: " + this.propertyArr[0].sqFT + "ft" + "</br> Garage: " + this.propertyArr[0].garage + "</br> Local Transportation: " + this.propertyArr[0].transportation);
    $("body").append($h3);
  // let newPropertyArr = [];
  // let mergedArr = newPropertyArr.concat(propertyArr);
  // console.log(mergedArr);
  document.forms[0].reset();
  console.log(moreProperties);


}


var showBox = document.getElementById("openAddProperties");
var inputBox = document.getElementById('boxContainer');
var closeBox = document.getElementsByClassName('closeBox')[0];

//When user clicks the button, box is opened to add properties
showBox.onclick = function() {
  inputBox.style.display = "block";
}
window.addEventListener = function(event) {
  if (event.target == inputBox) {
    inputBox.style.display = "none";
  }
}
//When user clicks outside of box, closes the box.
closeBox.onclick= function() {
  inputBox.style.display = "none";
}
