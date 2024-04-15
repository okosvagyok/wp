import { getData } from "./src/module/requestHelper.mjs";
import { displayDataInTable } from "./src/module/displayData.mjs";

getData("http://localhost:3000/cars")
.then(data =>{
    console.log(data);
})