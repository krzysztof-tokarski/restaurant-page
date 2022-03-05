import {contentContainer, main, footer} from './home';

function displayContactTab () {
    contentContainer.appendChild(main);
    contentContainer.appendChild(footer);

    const address = document.createElement("div");
    address.className = "address";
    address.textContent = "You can find us at:";
    main.appendChild(address);

    const addressDetails = document.createElement("div");
    addressDetails.className = "header";
    addressDetails.textContent = "233 Bleecker St, NY 10014";
    main.appendChild(addressDetails);

    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4277174339513!2d-74.0046687845945!3d40.730613079329785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259924ca04c9d%3A0x23659d0548a75bbb!2s233%20Bleecker%20St%2C%20New%20York%2C%20NY%2010014%2C%20USA!5e0!3m2!1sen!2spl!4v1646511285137!5m2!1sen!2spl");
    iframe.setAttribute("width","600");
    iframe.setAttribute("height","450");

    iframe.setAttribute("allowfullscreen","");
    main.appendChild(iframe);
}

export {displayContactTab}