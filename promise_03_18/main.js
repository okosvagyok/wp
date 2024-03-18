//Backend
const getData = (url)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const menu = {
                '/pizzas':[
                    {
                        id: 1,
                        piza: 'Margarita'
                    },
                    {
                        id: 2,
                        pizza: 'Mexican'
                    },
                    {
                        id: 3,
                        pizza: 'Vega'
                    }
                ],
                '/wish':'Jó étvágyat!',
            };
            const data = menu[url];
            if (data){
                //data: data === data
                //data: function(){} === data(){}
                resolve({status:200, data})
            }else{
                const error = {errorMessage: 'Ilyen kulcs nincs!'}
            }
            reject({status: 404, data: error})
        }, 2000)
    })
};
getData('/pizzas')
.then((response) =>{
    console.log(response)
    console.log(response.data)
})
.catch((response) =>{
    console.log(response)
    console.log(response.data.errorMessage)
})