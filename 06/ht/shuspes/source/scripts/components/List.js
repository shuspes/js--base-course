export default class List {
  constructor(listTemplate, itemTemplate, items) {
    this.listTemplate = listTemplate;
    this.itemTemplate = itemTemplate;
    this.items = items;
  };

  renderItems() {
    return this.items.map(it => this.itemTemplate.createStringFromTemplate(it)).join("");
  };

  render() {
    const items = this.renderItems();
    const listObj = {
      items
    };
    return this.listTemplate.createStringFromTemplate(listObj);
  };
};