import Template from "./utils/Template";
import {favouriteItem, listContainer} from "./utils/templates";
import List from "./components/List";
import {favouriteList as favouriteListStubData} from "./stub/favouriteList";

//NOTE: favourite list ->
const listTemplate = new Template(listContainer);
const favouriteListItemsTemplate = new Template(favouriteItem);
const favouriteList = new List(listTemplate, favouriteListItemsTemplate, favouriteListStubData);
//NOTE: favourite list <-

document.getElementById("root").innerHTML = favouriteList.render();