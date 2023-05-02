
const navExport=async (pagina)=>{
    let url="./amiiboextra.html, ./cart.html, ./index.html, ./product.html";
 
      divRes=document.querySelector("#nav-export");
    divRes.innerHTML=""
        divItem=document.createElement('div')
        divItem.innerHTML= `
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="logo">
          <img src="./img/apiGames.png" alt="apigames">
        </div>
          <div class="container-fluid">
          <a class="navbar-brand" href="./index.html"><strong>apiGames</strong></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./index.html">ZeldaPro</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./index.html">Amiibos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./amibosextra.html">Extras</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./products.html">¡Buy!🛒</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="./search.html">Search🔎</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
        `
        divRes.appendChild(divItem);
    };

navExport(1)