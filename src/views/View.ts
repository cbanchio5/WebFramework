import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
  regions : {[key:string] : Element } = {};

  constructor(public parent:HTMLElement, public model: T) {
    this.bindModel();
  }


  abstract template() : string;

  regionsMap() : {[key:string]: string} {
    return {};
  }

  eventsMap() : {[key:string] : () => void} {
    return {};
  }

  bindModel() : void {
    this.model.on('change', () => {
      this.render();
    })
  }
  bindEvents(fragment: DocumentFragment) : void {
    const eventMaps = this.eventsMap();

    for (let eventKey in eventMaps) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventMaps[eventKey])
      });
    }
  }
  mapRegions(fragment: DocumentFragment) : void {
    const regionMap = this.regionsMap();

    for (let key in regionMap) {
      const selector = regionMap[key]
      const element = fragment.querySelector(selector)
      if(element) {
        this.regions[key] = element;

      }
    }
  }

  render() : void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content)
    this.mapRegions(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
