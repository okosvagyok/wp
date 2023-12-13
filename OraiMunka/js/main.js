let books = [
    {
        "id": 1,
        "title": "Az elveszett címer",
        "author": "Jókai Mór",
        "year": 1866,
        "price": 3490
    },
    {
        "id": 2,
        "title": "Egri csillagok",
        "author": "Gárdonyi Géza",
        "year": 1899,
        "price": 2790
    },
    {
        "id": 3,
        "title": "Tüskevár",
        "author": "Móra Ferenc",
        "year": 1923,
        "price": 1890
    },
    {
        "id": 4,
        "title": "A Pál utcai fiúk",
        "author": "Molnár Ferenc",
        "year": 1906,
        "price": 3190
    },
    {
        "id": 5,
        "title": "Az arany ember",
        "author": "Jókai Mór",
        "year": 1872,
        "price": 3690
    },
    {
        "id": 6,
        "title": "Első szerelem",
        "author": "Turgenev Iván",
        "year": 1860,
        "price": 2590
    },
    {
        "id": 7,
        "title": "Vörös és fekete",
        "author": "Stendhal",
        "year": 1830,
        "price": 2990
    },
    {
        "id": 8,
        "title": "A két torony",
        "author": "J.R.R. Tolkien",
        "year": 1954,
        "price": 4590
    },
    {
        "id": 9,
        "title": "A Gyűrűk Ura",
        "author": "J.R.R. Tolkien",
        "year": 1954,
        "price": 5990
    },
    {
        "id": 10,
        "title": "Az alkimista",
        "author": "Paulo Coelho",
        "year": 1988,
        "price": 2490
    },
    {
        "id": 11,
        "title": "A vadon szava",
        "author": "Jack London",
        "year": 1903,
        "price": 3190
    },
    {
        "id": 12,
        "title": "Az időgép",
        "author": "H.G. Wells",
        "year": 1895,
        "price": 2290
    },
    {
        "id": 13,
        "title": "Az ötödik hegy",
        "author": "Paulo Coelho",
        "year": 1996,
        "price": 2690
    },
    {
        "id": 14,
        "title": "A holnap háza",
        "author": "William Faulkner",
        "year": 1935,
        "price": 3790
    },
    {
        "id": 15,
        "title": "A katedrális",
        "author": "Jussi Adler-Olsen",
        "year": 2012,
        "price": 3190
    }];
    document.addEventListener('DOMContentLoaded',()=>{
        let tableBody=document.getElementById('tableBody');
        tableBody.innerHTML="";
        let renderTableRow=(element)=>{
            let row=document.createElement('tr');
            row.innerHTML=`<td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.author}</td>
            <td>${element.year}</td>
            <td>${element.price} Ft</td>` ;//templateliteral
            tableBody.appendChild(row);
        }
        books.forEach(renderTableRow)
    })
 
const renderCartItem=(element)=>{
    let cart=document.getElementById('cart');
    let ListItem = document.createElement('li');
    let index=0;
    while(index<books.length && !(books[index].id==element.id)){
        index++;
    }
    if(index<books.length){
        let cartBook={
            id:books[index].id,
            title:books[index].title,
            author:books[index].author,
            year:books[index].year,
            price:books[index].price,
            quantity:element.quantity
        }
        ListItem.innerHTML=`Cím: ${cartBook.title} - Szerző: ${cartBook.author} - Mennyiség: ${cartBook.quantity} - Ár: ${cartBook.quantity*cartBook.price} Ft`
        ListItem.classList.add('list-group-item');
        cart.appendChild(ListItem);
    }
    else{
        let alert=document.getElementById('addAlert');
        alert.style.display='block'
        setTimeout(()=>{
            alert.style.display='none';
        },3000)
    }
}
let cartForm=document.getElementById('cartForm');
cartForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    let formData = new FormData(cartForm);
    let cartData=Object.fromEntries(formData.entries());
    renderCartItem(cartData)
    cartForm.reset();
})