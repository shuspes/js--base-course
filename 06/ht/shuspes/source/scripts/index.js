import renderMainPage from "./pages/mainPage";
import EventBus from './utils/EventBus';

const rootElement = document.getElementById("root");

const eventBus = new EventBus();

renderMainPage(rootElement, eventBus);