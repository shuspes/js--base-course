export default class List {
  constructor(listTemplate = "", itemTemplate = "", items = [], listClassName = "", itemClassName = "", eventBus) {
    this.listTemplate = listTemplate;
    this.itemTemplate = itemTemplate;
    this.items = items;
    this.listClassName = listClassName;
    this.itemClassName = itemClassName;
    eventBus.on("storage:load", this.initEvents.bind(this));
  };

  renderItems() {
    return this.items.map(it => {
      it["className"] = this.itemClassName;
      return this.itemTemplate.createStringFromTemplate(it);
    }).join("");
  };

  getHtmlString() {
    const items = this.renderItems();
    const listObj = {
      className: this.listClassName,
      items
    };
    return this.listTemplate.createStringFromTemplate(listObj);
  }

  render() { //TODO: render in some html element
    const items = this.renderItems();
    const listObj = {
      items
    };
    return this.listTemplate.createStringFromTemplate(listObj);
  };

  initEvents() {
    console.log("List say: storage is load");
    document.querySelector("." + this.listClassName).addEventListener("click", this.handleItemClick.bind(this));
  };

  handleItemClick(event) {
    const elemet = event.target;
    if(elemet.matches("." + this.itemClassName)) {
      console.log("List say: click on item ", event, this);
    }
  }
};