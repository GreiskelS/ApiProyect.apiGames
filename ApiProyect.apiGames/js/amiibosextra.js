
const filterarray=async (pagina)=>{
    let url="json/amiiboextras.json";
    const api= await fetch(url);
    const amiibos=await api.json();
    console.log(amiibos);
    divRes=document.querySelector("#array-extra");
    divRes.innerHTML=""

    amiibos.amiibo.map(amiibo=>{
        divItem=document.createElement('div')
        divItem.innerHTML= `
        <div class="card">
        <img src="${amiibo.image}" class="card-img" alt="...">
        <div class="card-body">
            <h5 class="card-title"> <strong> ${amiibo.amiiboSeries}</strong> </h5>
            <p class="card-character"><b>Character: </b>${amiibo.character}</p>
            <p class="card-character"><b>Head: </b>${amiibo.head}</p>
            </div>
    </div>
        `
        divRes.appendChild(divItem);
    });
}
filterarray(1)