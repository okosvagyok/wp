const books = [
    {
        "title": "A Katedrális",
        "author": "Raymond Carver",
        "publisher": "Magvető Kiadó",
        "published": 1981,
        "ISBN": generateISBN()
    },
    {
        "title": "A Megálló",
        "author": "Kazuo Ishiguro",
        "publisher": "Magvető Kiadó",
        "published": 2005,
        "ISBN": generateISBN()
    },
    {
        "title": "Az utolsó előtti előadás",
        "author": "Randy Pausch",
        "publisher": "Gabo Kiadó",
        "published": 2008,
        "ISBN": generateISBN()
    },
    {
        "title": "Bűn és bűnhődés",
        "author": "Fjodor Mihajlovics Dosztojevszkij",
        "publisher": "Magvető Kiadó",
        "published": 1866,
        "ISBN": generateISBN()
    },
    {
        "title": "Kisasszonyok",
        "author": "Louisa May Alcott",
        "publisher": "Csengőkönyvek",
        "published": 1868,
        "ISBN": generateISBN()
    },
    {
        "title": "Az asszony a vörös kalapban",
        "author": "Orhan Pamuk",
        "publisher": "Magvető Kiadó",
        "published": 2002,
        "ISBN": generateISBN()
    },
    {
        "title": "A világ összes fénye",
        "author": "Janne Teller",
        "publisher": "Európa Könyvkiadó",
        "published": 1996,
        "ISBN": generateISBN()
    },
    {
        "title": "A Füveskönyv",
        "author": "Mikszáth Kálmán",
        "publisher": "Alexandra Kiadó",
        "published": 1901,
        "ISBN": generateISBN()
    },
    {
        "title": "Szent Johanna kúria",
        "author": "Szabó Magda",
        "publisher": "Magvető Kiadó",
        "published": 1939,
        "ISBN": generateISBN()
    },
    {
        "title": "Hűség",
        "author": "Zsófia Ruttkay",
        "publisher": "Libri Kiadó",
        "published": 2017,
        "ISBN": generateISBN()
    },
    {
        "title": "Az elveszett jelkép",
        "author": "Dan Brown",
        "publisher": "Gabo Kiadó",
        "published": 2003,
        "ISBN": generateISBN()
    },
    {
        "title": "Az ötödik hegy",
        "author": "Paulo Coelho",
        "publisher": "Magvető Kiadó",
        "published": 1996,
        "ISBN": generateISBN()
    }
]
addEventListener("DOMContentLoaded", betolt());
addEventListener("DOMContentLoaded", tablazatBetolt());
document.getElementById("tableBtn").addEventListener("click", tablazatBetolt());
document.getElementById("listBtn").addEventListener("click", betolt());

function generateISBN() {
    let szam = "978";
    for (let i = 0; i < 10; i++) {
        szam += Math.floor(Math.random()*10)
    }
    return szam;
}

function betolt() {
    document.getElementById("tableBtn").classList.remove("active")
    document.getElementById("listBtn").classList.add("active")
    let hely = document.getElementById("hely");
    books.forEach(element => {
        let template = `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${element.author}</h6>
        <p class="card-text">${element.published}-ban/ben tette közzé a ${element.publisher}</p>
        </div>
        </div>
        </div>`;
        hely.innerHTML += template;
    });
}

function tablazatBetolt() {
    document.getElementById("table").style.display="none";
    document.getElementById("table").style.display="block";
    document.getElementById("tableBtn").classList.add("active")
    document.getElementById("listBtn").classList.remove("active")
    let sor = document.getElementById("sor");
    books.forEach(element => {
        let tablazat = `<tr>
        <td>${element.ISBN}</td>
        <td>${element.title}</td>
        <td>${element.author}</td>
        <td>${element.published}</td>
        </tr>`;
        sor.innerHTML += tablazat;
    });
}