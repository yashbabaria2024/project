async function fetchFun()
{
    let url = 'http://localhost:8000/state';
    let data = await fetch(url);
    let jsonval = await data.json()
    return jsonval;
}


async function stateFun()
{
    
    let data = await fetchFun()
    let select = document.getElementById('stateid');
    data.forEach(element => {
        let opt = document.createElement('option');
        opt.setAttribute('value',element.id)
        let nod = document.createTextNode(element.name)
        opt.appendChild(nod)
        select.appendChild(opt)
    });
}

async function city()
{
    let id = document.getElementById('stateid').value
    // console.log(id);
    let url = `http://localhost:8000/city/${id}`;
    let data = await fetch(url);
    let jsonval = await data.json()
    return jsonval
}


async function cityFun()
{
    let data = await city()
    let select = document.getElementById('city');
    data.forEach(element => {       
        let opt = document.createElement('option');
        opt.setAttribute('value', element.city)
        let nod = document.createTextNode(element.city)
        opt.appendChild(nod);
        select.appendChild(opt);
    });
}

    
stateFun()
