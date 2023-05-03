
const footerExport=async (pagina)=>{
    let url="./amiiboextra.html, ./cart.html, ./index.html, ./product.html";
 
      divRes=document.querySelector("#footer-export");
    divRes.innerHTML=""
        divItem=document.createElement('div')
        divItem.innerHTML= `
  
  <footer> <!--footer-->
        <div>
        <p> <strong>About Us</strong> </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ratione pariatur voluptate quibusdam maxime.  
        <br> Temporibus asperiores quisquam repellat. Optio, voluptates natus earum ipsum molestias porro libero officiis <br> perferendis necessitatibus a!</p>
      </div>
      <div class="redes">
        <p>Follow Us!</p>
        <a href="https://es-es.facebook.com/" target="_blank"><img src="img/facebook.png" alt=""></a>
        <a href="https://www.instagram.com/" target="_blank"><img src="img//instagram.png" alt=""></a>
        <a href="https://twitter.com/?lang=es" target="_blank"><img src="img/twitter.png" alt=""></a>
        <a href="https://www.whatsapp.com/?lang=es" target="_blank"><img src="img/whatsapp.png" alt=""></a>
      </div>

      <form class="contact" action="https://formspree.io/f/xdovbkee" method="post">
        <label for="email">¡We contact you!</label> <br>
        <p>¡Put your email here!</p>
        <input name="Email" id="email" type="email" placeholder="example@mail.com" required>
        <button type="submit"><strong>Send</strong></button>
      </form>

  </footer><!--footer-->
     
 
        `
        divRes.appendChild(divItem);
    };

    footerExport(1)