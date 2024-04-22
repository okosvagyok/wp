let data = [{ "id": 1, "name": "Laptop", "category": "Elektronika", "price": 239997, "quantity": 10 }, { "id": 2, "name": "Okostelefon", "category": "Elektronika", "price": 149997, "quantity": 15 }, { "id": 3, "name": "Kávéfőző", "category": "Kisgépek", "price": 17997, "quantity": 5 }, { "id": 4, "name": "Irodai Szék", "category": "Bútor", "price": 38997, "quantity": 8 }, { "id": 5, "name": "Futócipő", "category": "Ruházat", "price": 23997, "quantity": 20 }, { "id": 6, "name": "Hátizsák", "category": "Kiegészítők", "price": 11997, "quantity": 12 }, { "id": 7, "name": "HD Televízió", "category": "Elektronika", "price": 269997, "quantity": 7 }, { "id": 8, "name": "Mikrohullámú Sütő", "category": "Kisgépek", "price": 23997, "quantity": 10 }, { "id": 9, "name": "Irodai Asztal", "category": "Bútor", "price": 74997, "quantity": 4 }, { "id": 10, "name": "Póló", "category": "Ruházat", "price": 5997, "quantity": 30 }, { "id": 11, "name": "Bluetooth Hangszóró", "category": "Elektronika", "price": 20997, "quantity": 15 }, { "id": 12, "name": "Kenyérpirító", "category": "Kisgépek", "price": 8997, "quantity": 8 }, { "id": 13, "name": "Könyvespolc", "category": "Bútor", "price": 44997, "quantity": 6 }, { "id": 14, "name": "Farmernadrág", "category": "Ruházat", "price": 14997, "quantity": 25 }, { "id": 15, "name": "Játékkonzol", "category": "Elektronika", "price": 104997, "quantity": 10 }, { "id": 16, "name": "Turmixgép", "category": "Kisgépek", "price": 14997, "quantity": 12 }, { "id": 17, "name": "Ülőgarnitúra", "category": "Bútor", "price": 119997, "quantity": 5 }, { "id": 18, "name": "Túracipő", "category": "Ruházat", "price": 26997, "quantity": 18 }, { "id": 19, "name": "Digitális Kamera", "category": "Elektronika", "price": 89997, "quantity": 8 }, { "id": 20, "name": "Rizsfőző", "category": "Kisgépek", "price": 11997, "quantity": 1 }]
let tableBody = document.getElementById("tableBody");
document.addEventListener("DOMContentLoaded", LoadData)
function LoadData() {
    data.forEach((element)=>{
        let row = document.createElement("tr");
        row.innerHTML=`
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.category}</td>
        <td>${element.price}</td>
        <td>${element.quantity}</td>
        <td><button class='btn btn-warning' onclick='EditProduct(${element.id})'>Módosítás</td>`
        tableBody.appendChild(row)
    })
}
function EditProduct(id) {
    let index = 0;
    while(index <data.length && !(data[index].id == id)){
        index++;
    }
    if(index < data.length){
        document.getElementById('editProductId').value=data[index].id;
        document.getElementById('editProductName').value=data[index].name;
        document.getElementById('editProductCategory').value=data[index].category;
    }
}

function UpdateProduct(){

}

function CancelEdit() {
    document.getElementById('editProductForm').style.display='none';
}