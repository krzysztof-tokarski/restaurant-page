const contentContainer = document.getElementById("content");

const title = document.createElement("div");
title.innerText = "🍕 TOBEY'S PIZZA 🍕";
title.className = "title"

const homeButton = document.createElement("button");
homeButton.className = "nav-bar-button";
homeButton.innerText = "HOME";

const menuButton = document.createElement("button");
menuButton.className = "nav-bar-button";
menuButton.innerText = "MENU";

const contactButton = document.createElement("button");
contactButton.className = "nav-bar-button";
contactButton.innerText = "CONTACT";

const navBar = document.createElement("div");
navBar.setAttribute("id","nav-bar");
navBar.appendChild(homeButton);
navBar.appendChild(menuButton);
navBar.appendChild(contactButton);

const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

header.appendChild(title);
header.appendChild(navBar);


function prepareMainContainer () {
    while (contentContainer.firstChild) {
        contentContainer.firstChild.remove()
    }

    contentContainer.appendChild(header);

    while (main.firstChild) {
        main.firstChild.remove()
    }
}


function displayHomeTab () {
    contentContainer.appendChild(main);
    contentContainer.appendChild(footer);

    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "Would you look at the time... oh dear, looks like it is the";
    main.appendChild(header);

    const tobey = document.createElement("img");
    tobey.setAttribute("src","./source/tobey.png");
    main.appendChild(tobey);
}

export {prepareMainContainer, displayHomeTab, homeButton, menuButton, contactButton, contentContainer, main, footer};