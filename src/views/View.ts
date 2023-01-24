import { User } from "../models/User";
export abstract class View {
  constructor(public parent:HTMLElement, public model: User) {
    this.bindModel();
  }

  abstract eventsMap() : {[key:string] : () => void}
  abstract template() : string;

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

  render() : void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content)

    this.parent.append(templateElement.content);
  }
}
