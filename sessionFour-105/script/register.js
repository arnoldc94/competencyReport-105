//2nd part: Create an object constructor for user
errorOnForm = false;


class User{
        constructor(email, password, first, last, age, phone, address, payment, color){
            this.email = email;
            this.password = password;
            this.first =  first;
            this.last = last;
            this.age = age;
            this.phone = phone;
            this. address = address;
            this.payment = payment;
            this.color = color;
        }
    }



function registerUser(){
    console.log("Button clicked!");
    
    if( errorOnForm) {
        
        return 0;
    }
    
    let inEmail = $("#txtEmail").val();
    let inPassword = $("#txtPassword").val();
    let inFirst = $("#txtFirst").val();
    let inLast = $("#txtLast").val();
    let inAge = $("#txtAge").val();
    let inPhone = $("#txtPhone").val();
    let inAddress = $("#txtAddress").val();
    let inPayment = $("#selPayment").val();
    let inColor = $("#selColor").val();
    
    
    //create a user object with data from the input fields
    let user =new User(inEmail,inPassword,inFirst,inLast,Number(inAge),inPhone,inAddress,inPayment,inColor);
    //console log the object
    saveUser(user); // This fn exists in storeageManager.js
    setNavInfo();
    clearForm();
    
}

function clearForm() {
    
    let clearEmail = $("#txtEmail").val("");
    let clearPassword = $("#txtPassword").val("");
    let clearFirst = $("#txtFirst").val("");
    let clearLast = $("#txtLast").val("");
    let clearAge = $("#txtAge").val("");
    let clearPhone = $("#txtPhone").val("");
    let clearAddress = $("#txtAddress").val("");
    let clearPayment = $("#selPayment").val("PayPal");
    let clearColor = $("#selColor").val( "black")
    
   
}

function changeColor() {
    let color = $("#selColor").val();
    console.log("new color", color);

    //$("#hForm").attr("style", "color:" + color);
    $("#hForm").css("color", color);
}
    
function validatePass() {
    let txtPass = $("#txtPassword");
    let password = txtPass.val();
    let txtEmail = $("txtEmail");
    let email = txtEmail.val();

    if(password.length < 5) {
        txtPass.css("border", "2px solid red");
        displayError("Error: password to short");
        setTimeout( function () {
        $("#alertError").addClass("hide");
        }, 3000);
    }else{
      txtPass.css("border", "1px solid rgb(133, 133, 133");
        hideError();
    }
}

function displayError(text) {
    $("#alertError").removeClass("hide").text(text);
    
    errorOnForm = true;
}

function hideError() {
    $("#alertError").addClass("hide");
    
    errorOnForm = false;
}


function init(){
    console.log("Register page!");
   
    $("#btnSave").click(registerUser);
    $("#selColor").change(changeColor);
    $("#txtPassword").change(validatePass);
}

window.onload = init;




