export default class Template {
  constructor(templateString) {
    this.templateString = templateString;
  };

  replaceByTag(string, tagName, value) {
    tagName = tagName || "";
    value = value || "";
    return (string || "").replace(new RegExp("{{" + tagName + "}}", "g"), value);
  };

  createStringFromTemplate(dataObj) {
    let result = this.templateString;
    for(const key in dataObj) {
        result = this.replaceByTag(result, key, dataObj[key]);
    }
    return result;
  };
};