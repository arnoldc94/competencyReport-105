function login() {
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();

    console.log(email, password);

    let usersList = readUsers();
    let found = false;
    for(let  i=0; i < usersList.length; i++){
        let user = usersList[i];
        if(user.email === email && user.password === password){
            found = true;
            console.log("You are now logged in");
            saveLoggedIn(user);
            // send to another page
            window.location = "users.html";
        }
    }
    if (!found){
        console.error("Invalid credentials");
        $("#alertError").removeClass("hide");
        setTimeout( function () {
            $("#alertError").addClass("hide");// add astrik to incorrect property
        }, 5000);
    }
}

function showProperDiv() {
    // load data
    let currentUser = getLoggedIn();
    if(currentUser) {
        //hide login form
        $("#loginForm").hide();
        //show logout form
        $("#logoutForm").show();
        $("#hEmail").text(currentUser.email);
        $("#hFirst").text(currentUser.first);
        $("#hLast").text(currentUser.last);
        
        // set headings info
        // current user email
        console.log(currentUser.email);
    }else {
        //show login form
        $("#loginForm").show();
        //hide logout form
        $("#logoutForm").hide();
    }
}

function init(){
    console.log("Home Page");
    
    showProperDiv();

    // hook events
    $("#btnLogin").click(login);
    $("#btnLogOut").click(function(){
        logOut();
        showProperDiv();

    }); // logOut fn is from storageManager
}

window.onload = init;

/**
 * 1 catch the click on the button
 * 2 call a function
 * 3 get the text from the input field
 * 4 console log the text
 *
 * 5 get the list of users
 * 6 travel the array
 * 7 get the element from the array
 * 8 compare user and password var with the values inside the object
 * 
 */

/**
 * 1 create the log out form
 * 2 show / hide respectively
 */