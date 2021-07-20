//JSON
//Java Script Object Notation
//localStorage.clear

const KEY_USERS = "users";
const KEY_LOGIN = "login";

function saveUser(user){
    // load old data
    let data = readUsers();
    //merge
    data.push(user);
    //save
    let val = JSON.stringify(data);// parse object
    localStorage.setItem(KEY_USERS , val);
    //set in key value pair

}

function readUsers() {
    let data = localStorage.getItem(KEY_USERS);
    if(!data){
        return[];
    } else{
        let list = JSON.parse(data); // parse string back into object
        return list;   
    }
}


function clearUsers() {
    localStorage.removeItem(KEY_USERS);
}

function getLoggedIn() {
    let dataStr = localStorage.getItem(KEY_LOGIN);
    if(dataStr) {
        return JSON.parse(dataStr);
    }
    return null;
}

function saveLoggedIn(user) {
    localStorage.setItem(KEY_LOGIN, JSON.stringify(user));
}

function logOut() {
    localStorage.removeItem(KEY_LOGIN);
}

function clearData() {
    //warning: this will clear all data
    localStorage.clear();
}