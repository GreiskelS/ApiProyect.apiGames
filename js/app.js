



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
            <div class="cardapp">
            <img src="${amiibo.image}" class="cardapp-img" alt="...">
            <div class="cardapp-body">
                <h5 class="card-title"> <strong> ${amiibo.name}-Pro</strong></h5>
                <p class="card-character"><b> </b>${amiibo.gameSeries}</p>
                <p class="card-character"><b>Tail: </b>${amiibo.tail}</p>
                <p class="card-character"><b>Head: </b>${amiibo.head}</p>
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
*/
