let data = {};

apiRequest();

function apiRequest() {
    fetch("./db.json").then(res=> res.json())
    .then((response) => {
        data = response;
        changeSubTitle();
        changeSkill();
        changeSocialMedia();
        changeAvatar();
        changeAboutMe();
    });
}

function changeSubTitle() {
    const el = document.getElementById("subtitle");
    el.innerText = data.subtitle;
}

function changeAvatar() {
    const el = document.getElementById("logo");
    el.src = data.avatar;
}

function changeSkill() {
    const el = document.querySelector(".skills");
     
    let text = "";

    for (let skill of data.skills){
           text += `
           <img src="${skill}"
                alt="" width="150px">
           `;
    }

    el.innerHTML = text;

}

function changeSocialMedia () {
    const el = document.querySelector(".socialMedia");

    let text = "";

    for (const socialMedia of data.socialMedias) {
        text += `
        <a href="${socialMedia.url}" title= "${socialMedia.name}">
        <i class="${socialMedia.icon}"></i>
    </a>
        `;
    }

    el.innerHTML = text ;
}

function changeAboutMe(){
    const el = document.getElementById("aboutMeContent");
    el.innerHTML = data.aboutMe;
}