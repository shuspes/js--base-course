import Template from "./utils/Template";
import {favouriteItem, listContainer, historyItem} from "./utils/templates";
import List from "./components/List";
import {favouriteList as favouriteListStubData, historyList as historyListStubData} from "./stub/list";

const listTemplate = new Template(listContainer);

//NOTE: favourite list ->
const favouriteListItemsTemplate = new Template(favouriteItem);
const favouriteList = new List(listTemplate, favouriteListItemsTemplate, favouriteListStubData);
//NOTE: favourite list <-

//NOTE: history list ->
const historyListItemsTemplate = new Template(historyItem);
const historyList = new List(listTemplate, historyListItemsTemplate, historyListStubData);
//NOTE: history list <-

document.getElementById("root").innerHTML = favouriteList.render();