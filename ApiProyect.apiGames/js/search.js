
const searcharray=async (search)=>{
    let url="json/objarray.json";
    const search= await fetch(url);
    const amiibos=await search.json();
    console.log(amiibos);
    amiibo.target.matches("#search")
    divRes=document.querySelector("#array-search");
    divRes.innerHTML=""

  

    amiibos.amiibo.map(amiibo=>{
        divItem=document.createElement('div')
        divItem.innerHTML= `
        <div class="card">
        <img src="${amiibo.image}" class="card-img" alt="...">
        <div class="card-body">
            <h5 class="card-title"> <strong> ${amiibo.amiiboSeries}</strong> </h5>
            <p class="card-character"><b> </b>${amiibo.gameSeries}</p>
            <p class="card-character"><b>Type: </b>${amiibo.type}</p>
            <p class="card-character"><b>Tail: </b>${amiibo.tail}</p>
        </div>
    </div>
        `
        divRes.appendChild(divItem);
    });
}

searcharray(1)



/*document.addEvenListener("click");

function filterproduct(value) {

    let buttons = document.querySelectorAll("button=value");
    buttons.forEach((button) => {
   })
}
*/

/*document.addEvenListener("click", amiibo=> {

    amiibo.target.matches("#search")

console.log(amiibo.target.gameSeries)
})*/

