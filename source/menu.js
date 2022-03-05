import {contentContainer, main, footer} from './home';

function displayMenuTab () {
    contentContainer.appendChild(main);
    contentContainer.appendChild(footer);

    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "It's about quality.";
    main.appendChild(header);

    const menuContainer = document.createElement("div");
    menuContainer.className = "menu";
    main.appendChild(menuContainer);

    const margherita = document.createElement("div");
    const pepperoni = document.createElement("div");
    const hawaii = document.createElement("div");

    menuContainer.appendChild(margherita);
    menuContainer.appendChild(pepperoni);
    menuContainer.appendChild(hawaii);

    const margheritaImg = document.createElement("img");
    margheritaImg.setAttribute("src","./source/margherita.jpg");

    const pepperoniImg = document.createElement("img");
    pepperoniImg.setAttribute("src","./source/pepperoni.jpg");

    const hawaiiImg = document.createElement("img");
    hawaiiImg.setAttribute("src","./source/hawaii.jpg");

    margherita.appendChild(margheritaImg);
    pepperoni.appendChild(pepperoniImg);
    hawaii.appendChild(hawaiiImg);

    const margheritaDescription = document.createElement("div");
    const pepperoniDescription = document.createElement("div");
    const hawaiiDescription = document.createElement("div");

    margheritaDescription.textContent = "MARGHERITA - 10$";
    pepperoniDescription.textContent = "PEPPERONI - 15$";
    hawaiiDescription.textContent = "HAWAIIAN - 20$";

    margherita.appendChild(margheritaDescription);
    pepperoni.appendChild(pepperoniDescription);
    hawaii.appendChild(hawaiiDescription);

}


export {displayMenuTab};