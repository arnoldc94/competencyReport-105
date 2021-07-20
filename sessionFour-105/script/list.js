
function displayUsers(users) {
    //travel the array
    for(let i=0; i < users.length; i++){
        //get each user
        let user = users[i];

        // diplay the user
        // let syntax = "<li>"+user.first +"<li>";
        let syntax = 
        `<tr>
        <td>${user.email}</td>
        <td>${user.first}</td>
        <td>${user.last}</td>
        <td>${user.age}</td>
        <td>${user.payment}</td>
        <td>${user.address}</td>
        <td>${user.phone}</td>
        <td>${user.color}</td>
        </tr>`;

        $("#tblUsers").append(syntax);
    }
}



function init(){
    console.log("Listing users");

// load data
    var users = readUsers();
    displayUsers(users);

    //hook events
    $("#btnClear").click(function(){
        clearUsers();
        
        location.reload();
    });
}


window.onload = init;