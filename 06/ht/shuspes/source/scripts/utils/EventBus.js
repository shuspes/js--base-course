export default class EventBus {
  constructor() {
    this.listeners = {};
  }

  trigger() {
    const data = Array.prototype.slice.call(arguments, 1);
    const event = Array.prototype.slice.call(arguments, 0, 1);
    const eventListeners = (this.listeners[event] || []).map(handler => handler);
    (eventListeners).forEach(function(handler) {
        if(typeof handler === "function")
            handler.apply(null, data);
    });
  }

  on(event, handler) {
    this.listeners[event] = (this.listeners[event] || []);
    this.listeners[event].push(handler);
  }

  off(event, handler) {
    if(!handler) delete this.listeners[event];    
    const handlerIndex = (this.listeners[event] || []).indexOf(handler);
    if(handlerIndex >= 0) {
        this.listeners[event].splice(handlerIndex, 1);
    }
  }

  once(event, handler) {
    const evBus = this;
    const onceHandler = function() {
        handler.apply(evBus, arguments);
        evBus.off(event, onceHandler);
    }
    evBus.on(event, onceHandler);
  }
}