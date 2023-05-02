

    const listAmiibo=async (pagina)=>{
        let url="https://www.amiiboapi.com/api/amiibo/?character=zelda&showusage"+pagina;
        const api= await fetch(url);
        const amiibos=await api.json();
        console.log(amiibos);
        divRes=document.querySelector("#list-amiibo");
        divRes.innerHTML=""
    
        amiibos.amiibo.map(amiibo=>{
            divItem=document.createElement('div')
            divItem.innerHTML= `
            <div class="card">
            <img src="${amiibo.image}" class="card-img" alt="...">
            <div class="card-body">
                <h5 class="card-title"> <strong> ${amiibo.name}</strong> </h5>
                <p class="card-character"><b> </b>${amiibo.gameSeries}</p>
                <p class="card-character"><b>Tail </b>${amiibo.tail}</p>
            </div>
        </div>
            `
            divRes.appendChild(divItem);
        });
    }
    
    listAmiibo(1)


/*
prueba array
fetch("https://www.amiiboapi.com/api/amiibo")
.then(Response => Response.json())
.then(data => console.log(data.amiibo))





const listAmiibo = document.querySelector("#list-amiibo");

fetch("https://www.amiiboapi.com/api/amiibo/?character=zelda&showusage")
.then(Response => Response.json())
.then(data => {
     const amiibos = data.amiibo;

    amiibos.forEach(amiibo => {
        const li = document.createElement("li");
        li.innerHTML = amiibo.name; 
        listAmiibo.append(li);
    });
})


------nofunciona ----
const fetchData = async (name) => {
        try {
            console.log(name)
            
            const res = await fetch(`https://www.amiiboapi.com/api/amiibo/?character=zelda&showusage${name}`)
            const data = await res.json()
            
            console.log(data)


    const amiibos = {
     
    img: `https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images${data.name}.png`,
    img: data.amiibo.image,
    titulo: data.amiibo.name,
    character: data.amiibo.character,
}

pintarCard(amiibo)

} catch (error) {
    console.log(error)
    }
}

const pintarCard = amiibo => {
const contenido = document.querySelector('.contenido')
const listamiibo = document.getElementById('list-amiibo').content
const clone = template.cloneNode(true)
const fragment = document.createDocumentFragment()

clone.querySelector('.list-amiibo').setAttribute('src', amiibo.image)

clone.querySelector('.list-amiibo').innerHTML = `${amiibo.name} <span>${amiibo.character}hp</span>`

fragment.appendChild(clone)
contenido.appendChild(fragment)
}




------funciona ----

const listAmiibo = document.querySelector("#list-amiibo");

fetch("https://www.amiiboapi.com/api/amiibo/?character=zelda&showusage")
.then((Response) => Response.json())
.then((data) => {
    const amiibos = data.amiibo;
     
    amiibos.forEach(amiibo => {
        const imagen = document.createElement('img');
        imagen.src = amiibo.image; 
        listAmiibo.append(imagen);
    });

    data.amiibo.map(listamiibo=>{
        divlistamiibo=document.createElement('div')
        divlistamiibo.innerHTML= `
        <div class="card" style="width: 10rem;">
            <img src="${amiibos.image}" class="card-img" alt="...">
            <div class="card-body">
                <h5 class="card-title">${amiibos.name} </h5>
                <p class="card-character"><b>character </b>${amiibos.amiiboSeries}</p> 
            </div>
        </div>        
        `
        divRes.appendChild(divlist-amiibo);
    });

    })
*/
