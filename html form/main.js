class User{
    constructor(email, name, phone, password, address){
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.password = password;
        this.addess = address;
    }
};

let users = [];

function Save(){
    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let phone = document.getElementById("phone").value
    let password = document.getElementById("password").value
    let address = document.getElementById("address").value
    users.push(new User(email, name, phone, password, address))
};
document.getElementById("save").addEventListener("click", Save);

function List(){
    let ul = document.getElementById("userList");
    users.forEach(element=>{
        let listItem = document.createElement("li");
        listItem.innerHTML = `Név: <strong>${element.name}</strong> Email: <strong>${element.email}</strong> Telefonszám: <strong>${element.phone}</strong> Jelszó: <strong>${element.password}</strong> Lakhely: <strong>${element.address}</strong>`;
        ul.appendChild(listItem);
    })
};