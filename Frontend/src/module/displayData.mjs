function displayDataInTable(data){
    const tbody = document.querySelector('tbody');
    data.forEach(item => {
        tbody.append(createRow(item))
    });
}
function createRow(data){
    const row = document.createElement('tr');
    Object.values(data).forEach(value =>{
        row.append(createTableData(value))
    });
    return row;
}
function createTableData(data){
    const td = document.createElement('td');
    td.textContent = data;
    return td;
}

export{displayDataInTable}