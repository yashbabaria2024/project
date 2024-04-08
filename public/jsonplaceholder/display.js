async function fetchFun() {
    const url_link = "https://jsonplaceholder.org/posts"
    const data = await fetch(url_link);
    const jsonvalue = await data.json();
    return jsonvalue;
}


let currentPage = 1;
let pagefield = document.getElementById("snum").innerHTML;
if (pagefield == "") {
    pagefield = 1;
}
else {
    pagefield = document.getElementById("snum").innerHTML;
}
let length;
let display = document.getElementById('display');

async function renderFun() {
    const data = await fetchFun()
    const table = document.getElementById("mytbl");
    const lastindex = currentPage * pagefield;
    const firstindex = lastindex - pagefield;
    display.innerHTML = currentPage;
    const newdata = data.slice(firstindex, lastindex);
    length = data.length;


     newdata.map(element => {
        const tr = document.createElement('tr')
        const id = document.createElement('td');
        const slug = document.createElement('td');
        slug.setAttribute("style", "font-size:12px")
        const url = document.createElement('td');
        url.setAttribute("style", "font-size:12px")
        const title = document.createElement('td');
        title.setAttribute("style", "font-size:12px")
        const content = document.createElement('td');
        content.setAttribute("style", "font-size:10px")
        content.style.padding = '25px'
        const tdimg = document.createElement('td');
        const image = document.createElement('img');
        tdimg.appendChild(image)
        const status = document.createElement('td')
        status.setAttribute("style", "font-size:12px")
        const category = document.createElement('td')
        category.setAttribute("style", "font-size:12px")
        const tdcomment = document.createElement('td')
        const comment = document.createElement('a')
        comment.setAttribute('href', '/comments?userid=' + element.userId)
        comment.innerText = 'Comment'
        tdcomment.appendChild(comment);
        image.setAttribute('src', `${element.image}`)
        image.height = 250;
        image.width = 350;
        id.textContent = element.id
        slug.textContent = element.slug
        url.textContent = element.url
        title.textContent = element.title
        content.textContent = element.content
        status.textContent = element.status
        category.textContent = element.category
        tr.appendChild(id)
        tr.appendChild(slug)
        tr.appendChild(url)
        tr.appendChild(title)
        tr.appendChild(content)
        tr.appendChild(tdimg)
        tr.appendChild(status)
        tr.appendChild(category)
        tr.appendChild(tdcomment)
        table.appendChild(tr);
    });
}

renderFun();
function removeFun() {
    document.querySelector("#mytbl").innerHTML = ` <tr>
        <td>id</td>
        <td>slug</td>
        <td>url</td>
        <td>title</td>
        <td>content</td>
        <td>image</td>
        <td>status</td>
        <td>category</td>
    </tr>`
}

if (currentPage == 1) {
    document.querySelector('#firstpage').disabled = true
    document.querySelector('#prevButton').disabled = true
}

document.querySelector('#firstpage').addEventListener("click", firstpageFun)
document.querySelector('#lastpage').addEventListener("click", lastpageFun)
document.querySelector('#prevButton').addEventListener("click", prevButtonFun)
document.querySelector('#nextButton').addEventListener("click", nextButtonFun)


function firstpageFun() {
    currentPage = 1;
    if (currentPage != length / pagefield) {
        document.getElementById('lastpage').disabled = false;
        document.getElementById('nextButton').disabled = false;
    }
    if (currentPage == 1) {
        document.getElementById('firstpage').disabled = true
        document.getElementById('prevButton').disabled = true
    }
    renderFun();
    removeFun()
}

function prevButtonFun() {
    if (currentPage > 1) {
        currentPage--;
        document.getElementById('lastpage')
        renderFun();
        removeFun()
    }
    if (currentPage != length / pagefield) {
        document.getElementById('lastpage').disabled = false;
        document.getElementById('nextButton').disabled = false;
    }
    if (currentPage == 1) {
        document.getElementById('firstpage').disabled = true
        document.getElementById('prevButton').disabled = true
    }
}

function nextButtonFun() {
    if ((currentPage * pagefield) < length) {
        currentPage++;
    }
    if (currentPage != 1) {
        document.getElementById('firstpage').disabled = false;
        document.getElementById('prevButton').disabled = false;
    }
    lastpage = Math.ceil(length / pagefield);
    if (currentPage == lastpage) {
        document.querySelector('#lastpage').disabled = true
        document.querySelector('#nextButton').disabled = true
    }
    renderFun();
    removeFun()
}



function lastpageFun() {
    lastpage = Math.ceil(length / pagefield);
    currentPage = lastpage
  
    if (currentPage != 1) {
        document.getElementById('firstpage').disabled = false;
        document.getElementById('prevButton').disabled = false;


        if (currentPage == lastpage) {
            document.querySelector('#lastpage').disabled = true
            document.querySelector('#nextButton').disabled = true
        }


    }

    renderFun();
    removeFun();
}



function validateFun() {
    let span = document.querySelectorAll('span');
    for (let i = 0; i < span.length; i++) {
        span[i].remove()
    }
    var pattern = new RegExp('^[1-9]\\d*$');
    let number = document.getElementById("number").value


    if (!number.match(pattern)) {
        let span = document.createElement("span")
        span.setAttribute('id', 'span')
        span.textContent = "Enter the Positive Number"
        document.getElementById("submit").after(span)
        return false
    }
}











