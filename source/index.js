import {prepareMainContainer,displayHomeTab,homeButton,menuButton,contactButton} from './home';
import {displayMenuTab} from './menu';
import {displayContactTab} from './contact';
import './styles.css';

const buttons = [homeButton, menuButton, contactButton]; 

buttons.forEach(button => button.addEventListener('click',prepareMainContainer))

homeButton.addEventListener('click', displayHomeTab);
menuButton.addEventListener('click', displayMenuTab);
contactButton.addEventListener('click',displayContactTab);

prepareMainContainer();

