document.getElementById("addRow").addEventListener("click", addRowFun)

function addRowFun() {
    let table = document.getElementById("mytable")
    let rows = table.rows;
    let collength = table.rows[0].cells.length;
    let row = table.insertRow(rows.length)
    let cell;
    for (let i = 0; i < collength; i++) {
        cell = row.insertCell(i);
        cell.innerHTML = "addrow";
    }
}

document.getElementById("delRow").addEventListener("click", delRowFun)

function delRowFun() {
    document.getElementById("mytable").deleteRow(2);
}

document.getElementById("addCol").addEventListener("click", addColFun)

function addColFun() {
    let table = document.getElementById("mytable");
    let rows = table.rows;
    let rowlength = table.rows.length;
    let collength = table.rows[0].cells.length;
    for (let i = 0; i < rowlength; i++) {
        let cell = rows[i].insertCell(collength);
        cell.innerHTML = "newcolumn";
    }
}

document.getElementById("delCol").addEventListener("click", delColFun)

function delColFun() {
    let table = document.getElementById("mytable");
    let cols = table.rows.length;
    let index = 2;

    for (let i = 0; i < cols; i++) {
        table.rows[i].deleteCell(index);

    }
}