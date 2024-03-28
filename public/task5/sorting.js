document.getElementById("ascsubmit").addEventListener("click", myfun)
document.getElementById("descsubmit").addEventListener("click", myfundesc)
document.getElementById("reset").addEventListener("click", removefun)

function myfun() 
{
    let i, j, temp
    let split = document.getElementById("asctext").value.split(" ")
    let arr1 = new Array()
    for (i = 0; i < split.length; i++) {
        let ar = arr1.push(split[i]);
    }
    for (i = 0; i < split.length; i++) 
    {
        for (j = 0; j < split.length - i - 1; j++) 
        {
            if (parseInt(split[j]) > parseInt(split[j + 1]))
             {
                temp = split[j];
                split[j] = split[j + 1];
                split[j + 1] = temp;
            }
        }
    }
    
    //  table insert data
    table = document.getElementById("mytable")
    row = table.rows;
    rowlen = table.rows.length;
    cell = table.rows[0].cells.length;
    addrow = table.insertRow(rowlen)

    for (let i = 0; i < cell; i++) 
    {
        let cell1 = addrow.insertCell(i);
        cell1.setAttribute("class", "c1");
        cell1.innerHTML = "Ascending Order Sorting:" + split;
    }
}

function myfundesc() 
{
    let split = document.getElementById("asctext").value.split(" ")
    let arr1 = new Array()
    let i, j, temp;
    
    for (i = 0; i <= split.length; i++) 
    {
        arr1.push(split[i])
    }
    for (i = split.length; i >= 0; i--) {
        for (j = split.length; j > split.length - i; j--) {
            if (parseInt(split[j]) > parseInt(split[j - 1]))
             {
                temp = split[j];
                split[j] = split[j - 1];
                split[j - 1] = temp;
            }
        }
    }

    //    Table insert Data
    table = document.getElementById("mytable")
    row = table.rows;
    rowlen = table.rows.length;
    cell = table.rows[0].cells.length;
    addrow = table.insertRow(rowlen)
    for (let i = 0; i < cell; i++) 
    {
        let cell1 = addrow.insertCell(i);
        cell1.setAttribute("class", "c1");
        cell1.innerHTML = "Descendong Order Sorting:" + split;
    }
}

function removefun() 
{
    document.getElementById("asctext").value = ' '
    location.reload()
}