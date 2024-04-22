import { getData } from "./src/module/requestHelper.mjs";
import { displayDataInTable } from "./src/module/displayData.mjs";
import { postData } from "./src/module/requestHelper.mjs";

getData("http://localhost:3000/cars")
.then(data =>{
    console.log(data);
})

const data = { brand: 'KIA', model: "C'eed", engineSize: "1.6", id: 12 };
postData("http://localhost:3000/cars", data)
.then(data =>{
    console.log(data);
});