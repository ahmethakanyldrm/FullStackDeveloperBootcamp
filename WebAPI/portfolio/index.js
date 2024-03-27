let data = {};

fetchRequest();

function fetchRequest() {
    fetch("./db.json").then(res=>res.json()).then(response=> {
        data = response;
        changeSubTitle();
        getLogo();
    })
    
}

function changeSubTitle() {
    const el = document.getElementById("subtitle");
    el.innerText = data.subtitle;
}

function changeSkills() {
    const el = document.getElementById("skills");
    for (const skill of object) {
        
    }
}

function getLogo() {
    const el = document.getElementById("logo");
    el.src = data.logo;
}

function changeAboutMe() {
    const el = document.getElementById("");
}