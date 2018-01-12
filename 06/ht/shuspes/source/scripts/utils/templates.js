export const listContainer = "<div class='css-listContainer {{className}}'>{{items}}</div>";
export const favouriteItem = [
  "<div class='css-list-item css-favouriteItem'>",
    "<span class='css-list-item-name css-favouriteItem-name {{className}}'>",
      "{{Name}}",
    "</span>",
  "</div>"
].join("");
export const historyItem = [
  "<div class='css-list-item css-historyItem'>",
    "<span class='css-list-item-name css-historyItem-name {{className}}'>",
      "{{Name}}",
    "</span>",
  "</div>"
].join("");
export const mainLayout = [
  '<div class="css-mainPage">',
    '<div class="css-mainPage-header">',
      '<div>{{callType}}</div>',
      '<div>{{search}}</div>',
    '</div>',
    '<div id="mainPage-map" class="css-mainPage-map"></div>',
    '<div class="css-mainPage-footer">',
      '<div class="css-mainPage-footer-block">{{historyList}}</div>',
      '<div>{{weather}}</div>',
      '<div class="css-mainPage-footer-block">{{favouriteList}}</div>',
    '</div>',
  '</div>'
].join("");