function getData(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = () =>{
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    let errorData;
                    try{
                        errorData = JSON.parse(xhr.responseText);
                    }catch(error){
                        errorData = {
                            status: xhr.status
                        };
                    }
                    reject(errorData);
                }
            }
        }
        xhr.send();
    });
}
getData('http://localhost:3000/api/books')
.then(data => {
    console.log(data.books)
    let writeHere = document.getElementById("write");
    writeHere += `<tr><td>${data.books.title}</td><td>${data.books.author}</td><td>${data.books.published}</td><td>${data.books.publisher}</td><td>${data.books.ISBN}</td></tr>`;
})
.catch(error => {
    console.error(error);
})