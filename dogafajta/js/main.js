let books = [
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "year": 1951,
        "publisher": "Little, Brown and Company",
        "language": "English",
        "ISBN": "0316769177",
        "pages": 277,
        "price": 8.99
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "year": 1960,
        "publisher": "J. B. Lippincott & Co.",
        "language": "English",
        "ISBN": "0446310786",
        "pages": 281,
        "price": 9.99
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "year": 1925,
        "publisher": "Charles Scribner's Sons",
        "language": "English",
        "ISBN": "9780743273565",
        "pages": 180,
        "price": 7.99
    },
    {
        "title": "One Hundred Years of Solitude",
        "author": "Gabriel García Márquez",
        "year": 1967,
        "publisher": "Harper & Row",
        "language": "English",
        "ISBN": "0060883286",
        "pages": 417,
        "price": 12.99
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "year": 1932,
        "publisher": "Chatto & Windus",
        "language": "English",
        "ISBN": "0060850523",
        "pages": 311,
        "price": 10.99
    },
    {
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "year": 1890,
        "publisher": "Lippincott's Monthly Magazine",
        "language": "English",
        "ISBN": "9780141439570",
        "pages": 254,
        "price": 6.99
    },
    {
        "title": "The Adventures of Huckleberry Finn",
        "author": "Mark Twain",
        "year": 1884,
        "publisher": "Chatto & Windus",
        "language": "English",
        "ISBN": "9780141439648",
        "pages": 366,
        "price": 11.99
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "year": 1937,
        "publisher": "George Allen & Unwin",
        "language": "English",
        "ISBN": "9780547928227",
        "pages": 310,
        "price": 13.99
    },
    {
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "year": 1954,
        "publisher": "George Allen & Unwin",
        "language": "English",
        "ISBN": "9780547928210",
        "pages": 1178,
        "price": 29.99
    },
    {
        "title": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "year": 1979,
        "publisher": "Pan Books",
        "language": "English",
        "ISBN": "9780345391803",
        "pages": 193,
        "price": 5.99
    },
    {
        "title": "The Da Vinci Code",
        "author": "Dan Brown",
        "year": 2003,
        "publisher": "Doubleday",
        "language": "English",
        "ISBN": "9780385504201",
        "pages": 454,
        "price": 14.99
    },
    {
        "title": "The Girl with the Dragon Tattoo",
        "author": "Stieg Larsson",
        "year": 2005,
        "publisher": "Norstedts Förlag",
        "language": "English",
        "ISBN": "9780307269751",
        "pages": 590,
        "price": 16.99
    }
]

document.addEventListener("DOMContentLoaded", load)
let tableBody = document.getElementById("productsTbody")
function load(){
    books.forEach((products) => {
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${products.ISBN}</td>
    <td>${products.title}</td>
    <td>${products.author}</td>
    <td>${products.publisher}</td>
    <td>${products.year}</td>
    <td>${products.language}</td>
    <td>${products.pages}</td>
    <td>${products.price}</td>
    <td>
        <button class="btn btn-success" onclick="addToCart()">Cart</button>
    </td>
    `
    tableBody.appendChild(row);
})
}

let cart = [];

function AddToCart(ISBN) {
    
}