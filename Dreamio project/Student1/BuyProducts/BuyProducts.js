var count = 0; //variable for get the product count
var total = 0;//variable for count the total amount
var i = 0;//variable for go to the next index in arry
var products = [];// array for save the products which add to cart 

//function for add product to cart
/*
*nameId - get the name of product
*priceId - get the price of product
*/
function updateProduct(nameId, priceId) {
    let check_element = document.getElementById(nameId).innerHTML;
    if (products.indexOf(check_element) !== -1) {
        alert("Product already exciest in the cart") //if product already in the cart this alert will popup
    }else{
        count_item();
        document.getElementById(Pname).innerHTML = document.getElementById(nameId).innerHTML;
        document.getElementById(Pprise).innerHTML = document.getElementById(priceId).innerHTML;
        let CountTotal = document.getElementById(priceId).innerHTML;
        total += parseInt(CountTotal); // add the prisr to total
        document.getElementById("TotalPrice").innerHTML = total; 
        count += 1; // increase the product count
        products[i] = document.getElementById(nameId).innerHTML;
        i += 1; // go to the next index
       document.getElementById("amount_value1").innerHTML = total; 
    }
}

// function for choose the place holder in the cart
function count_item(){
    if(count == 0){
        Pname = "name";
        Pprise = "price";
    }else if(count == 1){
        Pname = "name1";
        Pprise = "price1";
    }else if(count == 2){
        Pname = "name2";
        Pprise = "price2";
    }else if(count == 3){
        Pname = "name3";
        Pprise = "price3";
    }else if(count == 4){
        Pname = "name4";
        Pprise = "price4";
    }else if(count == 5){
        Pname = "name5";
        Pprise = "price5";
    }else if(count == 6){
        Pname = "name6";
        Pprise = "price6";
    }else if(count == 7){
        Pname = "name7";
        Pprise = "price7";
    }else if(count == 8){
        Pname = "name8";
        Pprise = "price8";
    }else if(count == 9){
        Pname = "name9";
        Pprise = "price9";
    }else if(count == 10){
        Pname = "name10";
        Pprise = "price10";
    }
    return Pname;
    return Pprise;

}

// function for clear the cart
function clearOrders() {
    
    document.getElementById("name").innerHTML = "";
    document.getElementById("price").innerHTML = "";
    
    document.getElementById("name1").innerHTML = "";
    document.getElementById("price1").innerHTML = "";

    document.getElementById("name2").innerHTML = "";
    document.getElementById("price2").innerHTML = "";

    document.getElementById("name3").innerHTML = "";
    document.getElementById("price3").innerHTML = "";

    document.getElementById("name4").innerHTML = "";
    document.getElementById("price4").innerHTML = "";

    document.getElementById("name5").innerHTML = "";
    document.getElementById("price5").innerHTML = "";

    document.getElementById("name6").innerHTML = "";
    document.getElementById("price6").innerHTML = "";

    document.getElementById("name7").innerHTML = "";
    document.getElementById("price7").innerHTML = "";

    document.getElementById("name8").innerHTML = "";
    document.getElementById("price9").innerHTML = "";

    document.getElementById("name10").innerHTML = "";
    document.getElementById("price10").innerHTML = "";

    document.getElementById("TotalPrice").innerHTML = "0";
    document.getElementById("amount_value1").innerHTML = "0";
    total = 0;
    count = 0;
    products = [];
}

// function for visible the payment form
function Visible_form(){  
    document.querySelector(".payment_form").style.display = "block"
}

// function for hide the payment form
function remove_form(){  
    document.querySelector(".payment_form").style.display = "none"
}

//creating a random number for reference
document.getElementById("ref_value").innerHTML = Math.floor(Math.random() * 1000);

//function for submit
function submit_detail() {
    var fullNameInput = document.getElementById("full_name");
    var addressInput = document.getElementById("address");
    var emailInput = document.getElementById("email");
    var numberlInput = document.getElementById("telephone");

    var output = "Order Placed Successfully" + "\nName : " + fullNameInput.value + "\nAddress : " + addressInput.value + "\nEmail : " + emailInput.value + "\nTelephone : " + numberlInput.value;


    if (fullNameInput && fullNameInput.value.trim() !== "" && addressInput && addressInput.value.trim() !== "" && emailInput && emailInput.value.trim() !== "" && numberlInput && numberlInput.value.trim() !== "") {
        alert(output);
    } 
}

