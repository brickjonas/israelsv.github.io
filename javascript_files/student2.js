var companyname = "BlockBuster But Better";
var address = "212 NE Revere Ave, Bend, OR 97702";
var phonenumber = "(541) 385-9112";
var month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August',  'September', 'October', 'November', 'December'];
var weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var product1 = { name:"HP 4426", id:"4426", desc:"Newest and Best Laptop from HP Computer"};
var product2 = { name:"Apple 88123 iPad", id:"88123", desc:"Apple Tablet Computer"};
var product3 = { name:"Dell Dimension 2400", id:"2400X", desc:"A fast 2.4 ghz computer"};


function getHeader(){
    var nowDate = new Date();
    var headvar = "<header>";
    headvar += weekday[nowDate.getDay() - 1];
    headvar += ", ";
    headvar +=month[nowDate.getMonth()];
    headvar += " ";
    headvar += nowDate.getDate();
    headvar += " ";
    headvar += nowDate.getFullYear();
    headvar += "</header>";
    return(headvar);
}
/*
Original function
function getHeader(){
    var nowDate = new Date();
    var headvar = "<header>";
    headvar += companyname;
    headvar += "</header>";
    return(headvar);
}
*/

function getFooter(thecompname, compaddy, compnum){
    var footervar = "<footer>";
    footervar += "The appnName is: " + navigator.appName;
    footervar += "<br>";
    footervar += "The appVersion is: " + navigator.appVersion;
    footervar += "<br>";
    footervar += "The platform is: " + navigator.platform;
    footervar += "</footer>"
    return(footervar);
};
/*
Original function 
function getFooter(thecompname, compaddy, compnum){
    var footervar = "<footer>";
    footervar += thecompname;
    footervar += "<br>";
    footervar += compaddy;
    footervar += "<br>";
    footervar += compnum;
    footervar += "</footer>"
    return(footervar);
}; */


function makeMenu(size){
    var buttonvar = "";
    var menuSize = "";
    buttonvar += "<button type = 'button' onclick='document.querySelector(\"#makemaindiv\").innerHTML = makeMain(product1)'>Product #1 </button>";
    buttonvar += "<button type = 'button' onclick='document.querySelector(\"#makemaindiv\").innerHTML = makeMain(product2)'>Product #2 </button>";
    buttonvar += "<button type = 'button' onclick='document.querySelector(\"#makemaindiv\").innerHTML = makeMain(product3)'>Product #3 </button>";
    return(buttonvar);
    for(let i = 0; i< size; i++){
        menuSize += "Menu <br>"
    };
    return(menuSize);
}; 

/* function makeMenu(size){
    var menuSize = "";
    for(let i = 0; i< size; i++){
        menuSize += "Menu <br>"
    };
    return(menuSize);
}; 
*/
function makeMain(product){
    var mainvar = "<table style ='width:100%' border = 1 cellpadding = 10><tr>";
    mainvar += "<td rowspan=3 style='width:30%;text-align:center;vertical-align:middle'>";
    mainvar += "<img src= 'https://college1.com/images/" + product.id + ".gif'></td>";
    mainvar += "<td id='prod_name'>Product Name: <br>" + product.name + "</td>";
    mainvar += "<td style='text-align:right' id='prod_id'>Product ID: <br>" + product.id + "</td></tr>";
    mainvar += "<tr><td style='text-align:center' colspan=2>";
    mainvar += "<span id='prod_bar'>Shopping Cart Link Bar</span> </td></tr>";
    mainvar += "<tr><td colspan=2 id='prod_desc'>Product Description : <br>" + product.desc + "</td></tr>";
    mainvar += "</table>";
    return(mainvar);
};

// continue on with lab 9 #4
function makeLinkBar(){
    var linkBar = "<form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'>";
    linkBar += "<input type='image' name='submit' src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif' alt='Add to Cart'> <img alt='' width='1' height='1' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'></form>"
    return(linkBar);
};

document.querySelector("#headDiv").innerHTML = getHeader();
document.querySelector('#footerDiv').innerHTML= getFooter(companyname, address, phonenumber);
document.querySelector('#fakemenu').innerHTML = makeMenu(3);
document.querySelector('#makemaindiv').innerHTML = makeMain(product1);
document.querySelector('#prod_bar').innerHTML = makeLinkBar();
