//const rootEl = document.getElementById("root");
const rootEl = document.querySelector("app-root");

gotoHomePage();

function gotoHomePage(){
    const html = `
    <h1>Home Page</h1>
    <h2>Ahmet Hakan YILDIRIM | jUNİOR Software Developer</h2>
    `

    rootEl.innerHTML = html;
}

function gotoAboutPage(){
    const html = `
    <h1>About Me</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cum voluptate officia, dolore enim vero atque rem velit. Natus consequatur nisi molestiae illum accusantium dolorum eius possimus ut quasi incidunt.
   Incidunt et, expedita iure officiis non est reprehenderit voluptatibus architecto dicta? Perspiciatis deserunt sed id mollitia eius doloremque cum ducimus reiciendis ea, pariatur laudantium, sit natus ab dicta soluta dignissimos!
   Aliquam deleniti vitae in perspiciatis repellat fugiat commodi, ducimus optio non hic quae sint aperiam dicta beatae ea. Quidem quas ea ratione a, nulla libero at asperiores vitae perspiciatis eius?
   Nulla eum quia eos commodi, fuga vero itaque, magni ad, consequuntur animi optio error. Assumenda libero cum a architecto eligendi, adipisci exercitationem omnis fugit beatae? Impedit eveniet assumenda minus reprehenderit!
   Quas accusantium amet vero aspernatur repellendus rerum saepe, ipsam expedita ratione porro blanditiis cum est suscipit cupiditate. Illo quod, odio, vero aliquid cum blanditiis maxime consectetur sequi fugit, sint delectus.</p>`

   rootEl.innerHTML = html;
}

function gotoContactPage(){
    fetch("./contact.html") //API isteği
    .then(res => res.text())
    .then(res=> {
        html = res;
        rootEl.innerHTML = html;
    });
}