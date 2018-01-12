import Template from "#/utils/Template";
import {favouriteItem, listContainer, historyItem, mainLayout} from "#/utils/templates";
import {favouriteList as favouriteListStubData, historyList as historyListStubData} from "#/stub/list";
import List from "#/components/List";
import Map from "#/components/Map";

export default (rootElement, eventBus) => {
  // const new E
  const listTemplate = new Template(listContainer);

  //NOTE: favourite list ->
  const favouriteListClassName = "js-favouriteList";
  const favouriteItemClassName = "js-favouriteItem";
  const favouriteListItemsTemplate = new Template(favouriteItem);
  const favouriteList = new List(
    listTemplate, 
    favouriteListItemsTemplate, 
    favouriteListStubData, 
    favouriteListClassName,
    favouriteItemClassName,
    eventBus
  );
  //NOTE: favourite list <-
  
  //NOTE: history list ->
  const historyListClassName = "js-historyList";
  const historyItemClassName = "js-historyItem";
  const historyListItemsTemplate = new Template(historyItem);
  const historyList = new List(
    listTemplate, 
    historyListItemsTemplate, 
    historyListStubData,
    historyListClassName,
    historyItemClassName,
    eventBus
  );
  //NOTE: history list <-
  
  //NOTE: main page ->
  const mainPageTemplate = new Template(mainLayout);
  const mainPageObj = {
    historyList: historyList.getHtmlString(),
    favouriteList: favouriteList.getHtmlString()
  };
  const mainPage = mainPageTemplate.createStringFromTemplate(mainPageObj);
  //NOTE: main page <-
  
  rootElement.innerHTML = mainPage; //NOTE: insert on page
  
  //NOTE: add map to main page ->
  const minskMap = new Map(document.getElementById("mainPage-map"));
  minskMap.render();
  //NOTE: add map to main page <-


  eventBus.trigger("storage:load");
};