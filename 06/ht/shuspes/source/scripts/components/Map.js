export default class Map {
  constructor(element, config) {
    this.config = config || {
      center: [53.906616, 27.560801],
      zoom: 10
    };
    this.element = element;
  };

  render() {
    ymaps.ready(() => { 
      new ymaps.Map(this.element, this.config);
    });
  };
};