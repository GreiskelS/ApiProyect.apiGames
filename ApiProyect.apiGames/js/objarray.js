
const filterarray=async (pagina)=>{
    let url="json/objarray.json";
    const api= await fetch(url);
    const amiibos=await api.json();
    console.log(amiibos);
    divRes=document.querySelector("#filter-array");
    divRes.innerHTML=""

    amiibos.amiibo.map(amiibo=>{
        divItem=document.createElement('div')
        divItem.innerHTML= `
        <div class="card">
        <img src="${amiibo.image}" class="card-img" alt="...">
        <div class="card-body">
            <h5 class="card-title"> <strong> ${amiibo.name}</strong> </h5>
            <p class="card-character"><b> </b>${amiibo.gameSeries}</p>
            <p class="card-character"><b>Type: </b>${amiibo.type}</p>
            <p class="card-character"><b>Tail: </b>${amiibo.tail}</p>
        </div>
    </div>
        `
        divRes.appendChild(divItem);
    });
}

filterarray(1)






/* funciona sin card 
const filterarray = document.querySelector("#filter-array");
fetch("app.json")
.then((Response) => Response.json())
.then((amiibo) => {   
    const filter = amiibo.amiibo;
     
    filter.forEach(amiibo => {
        const imagen = document.createElement('img');
        imagen.src = amiibo.image; 
        filterarray.append(imagen);
    });
    divRes=document.querySelector("#list-amiibo");
    divRes.innerHTML=""
    //amiibos.amiibo.map(amiibo => {
            divItem = document.createElement('div');
            divItem.innerHTML = `
        <div class="cardarray" style="width: 10rem;">
            <img src="${amiibo.image}" class="card-img" alt="...">
            <div class="card-body">
                <h5 class="card-title">${amiibo.name} </h5>
                <p class="card-character"><b>character </b>${amiibo.type}</p>
                <p class="card-character"><b>character </b>${amiibo.type.Figure}</p>  
            </div>
        </div>
        `;
       divRes.appendChild(divItem);
        })
    //filterarray(1)*/