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
  }
  else{
    window.location.replace("coworker.html");
  }
}

//-----Listing JS ------//

var propEntries = [];
function storePropInfo(address, neighborhood, sqFT, garage, transportation){
  this.address = address;
  this.neighborhood = neighborhood;
  this.sqFT = sqFT;
  this.garage = garage;
  this.transportation = transportation;
}

var workEntries = [];
function storeWorkInfo(Workspace, Individual, SmokingAllowed, AvailabilityDate, LeaseTerm, Price){
  this.Workspaces = Workspace;
  this.Individual = Individual;
  this.SmokingAllowed = SmokingAllowed;
  this.AvailabilityDate = AvailabilityDate;
  this.LeaseTerm = LeaseTerm;
  this.Price = Price;
}

function storeProperty(){
  var addProperty = {
    address: $('#propAddress').val(),
    neighborhood: $('#propHood').val(),
    sqFT: parseInt($('#sqFT').val()),
    garage: $('#propGarage').val(),
    transportation: $('#propTransport').val()
  };
  
  document.forms[0].reset();
  var addPropToArr = new storePropInfo(addProperty.address, addProperty.neighborhood, addProperty.sqFT, addProperty.garage, addProperty.transportation);

  var addNextProp = {
    css:{
      "border": "1px solid black",
      "color" : "Black",
      "width": 300,
      "height": 200,
      "padding": 1,
      "display": "inline-block",
      "padding-top": 50,
      "margin-left": 60,
      "margin-top": 20
    }
  };
  
  var add = $("<div>", addNextProp, addPropToArr, {id: "prop1"});
    add.append("<b>Address: </b>" + addPropToArr.address + "</br> <b>Neighborhood: </b>" + addPropToArr.neighborhood + "</br><b>SQ FT: </b>" + addPropToArr.sqFT + "ft" + "</br><b> Garage: </b>" + addPropToArr.garage + "</br><b> Local Transportation Reachable To Property: </b>" + addPropToArr.transportation);
    $("#prop").append(add);
    console.log(propEntries);

  return propEntries.push(addPropToArr);
}

function editProperty(){
  var editEntries = propEntries.splice(5)
  var editProp = {
    address: $('#propAddress').val(),
    neighborhood: $('#propHood').val(),
    sqFT: parseInt($('#sqFT').val()),
    garage: $('#propGarage').val(),
    transportation: $('#propTransport').val()
  }
  document.forms[0].reset();
  editEntries = new storePropInfo(editProp.address, editProp.neighborhood, editProp.sqFT, editProp.garage, editProp.transportation);

  var addNextProp = {
    css:{
      "border": "1px solid black",
      "color" : "Black",
      "width": 300,
      "height": 200,
      "padding": 1,
      "display": "inline-block",
      "padding-top": 50,
      "margin-left": 60,
      "margin-top": 20
    }
  };

  var newAdd = $("<div>", addNextProp, editEntries, {id: "prop1"});
    newAdd.append("<b>Address: </b>" + editEntries.address + "</br> <b>Neighborhood: </b>" + editEntries.neighborhood + "</br><b>SQ FT: </b>" + editEntries.sqFT + "ft" + "</br><b> Garage: </b>" + editEntries.garage + "</br><b> Local Transportation Reachable To Property: </b>" + editEntries.transportation);
    $("#prop").html(newAdd);
    console.log(newAdd);
}

function addWorkspace(){
   var workspaces = {
    "Workspaces": $('#workspaces').val(),
    "Individuals": $('#individuals').val(),
    "SmokingAllowed": $('#smokingArea').val(),
    "AvailabilityDate": $('#availability').val(),
    "LeaseTerm": $('#leaseTerm').val(),
    "Price": $('#leasePrice').val(),
   }
  var addWorkToArr = new storeWorkInfo(workspaces.Workspaces, workspaces.Individuals, workspaces.SmokingAllowed, workspaces.AvailabilityDate, workspaces.LeaseTerm, workspaces.Price);
  document.forms[0].reset();
  var addWork = {
    css:{
      "border": "1px solid black",
      "color" : "Black",
      "width": 300,
      "height": 200,
      "padding": 1,
      "display": "inline-block",
      "padding-top": 50,
      "margin-left": 60,
      "margin-top": 20
    }
  };

    var newAdd = $("<div>",  addWork, addWorkToArr, {id: "work1"});
    newAdd.append("<b>Workspace: </b>" + workspaces.Workspaces + "</br><b> Amount of Individuals: </b>" + workspaces.Individuals + "</br><b> Smoking Allowed: </b>" + workspaces.SmokingAllowed + "</br> <b>Availability Date: </b>" + workspaces.AvailabilityDate + "</br><b> Lease Term: </b>" + workspaces.LeaseTerm + "</br><b> Lease Price: </b>" + workspaces.Price);
    $("#work").append(newAdd);
    return workEntries.push(addWorkToArr), newAdd;
}

function editWorkspace(){
  var editWorkEntries = workEntries.splice();
  var editworkspaces = {
    "Workspaces": $('#workspaces').val(),
    "Individuals": $('#individuals').val(),
    "SmokingAllowed": $('#smokingArea').val(),
    "AvailabilityDate": $('#availability').val(),
    "LeaseTerm": $('#leaseTerm').val(),
    "Price": $('#leasePrice').val(),
  }
  var addNewWorkspace = {
    css:{
      "border": "1px solid black",
      "color" : "Black",
      "width": 300,
      "height": 200,
      "padding": 1,
      "display": "inline-block",
      "padding-top": 50,
      "margin-left": 60,
      "margin-top": 20
    }
  };
  document.forms[0].reset();
  editWorkEntries = new storeWorkInfo(editworkspaces.Workspaces, editworkspaces.Individuals, editworkspaces.SmokingAllowed, editworkspaces.AvailabilityDate, editworkspaces.LeaseTerm, editworkspaces.Price);
  var newWorkspace = $("<div>", addNewWorkspace, editWorkEntries, {id: "work1"});
    newWorkspace.append(" </br><b> Workspace: </b>" + editworkspaces.Workspaces + "</br><b> Individuals Allowed: </b>" + editworkspaces.Individuals + "</br><b> Smoking Accessible: </b>" + editworkspaces.SmokingAllowed + "</br><b> Availability Date: </b>" + editworkspaces.AvailabilityDate + "</br><b> Lease Term: </b>" + editworkspaces.LeaseTerm + "</br><b> Lease Price: </b>" + "$" + editworkspaces.Price);

    $("#work").html(newWorkspace);
    console.log(workEntries);
}

function deleteProperty(newAdd){
  $("#prop").empty();
}

function deleteWorkspace(){
  $("#work").empty();
}

function sortPropAddrDESC(){
  workEntries.sort()
}

function sortPropAddrASC(){

}

function sortWorkPriceDESC(){
  workEntries.sort(function(a,b){
    return b.Price - a.Price
  });

}

function sortWorkPriceASC(){

}

var showBox = document.getElementById("openAddProperties");
var inputBox = document.getElementById('boxContainer');
var closeBox = document.getElementsByClassName('closeBox')[0];

var showBox2 = document.getElementById("openWorkspaceProperties");
var inputBox2 = document.getElementById('boxContainer2');
var closeBox2 = document.getElementsByClassName('closeBox2')[0];

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

showBox2.onclick = function() {
  inputBox2.style.display = "block";
}

window.addEventListener = function(event) {
  if (event.target == inputBox2) {
    inputBox2.style.display = "none";
  }
}

//When user clicks outside of box, closes the box.
closeBox2.onclick= function() {
  inputBox2.style.display = "none";
}
