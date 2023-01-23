import {User} from '../models/User';

export class UserForm {
  constructor(public parent:HTMLElement, public model: User) {
    this.bindModel();
  }

  bindModel() : void {
    this.model.on('change', () => {
      this.render();
    })
  }

  eventsMap() : {[key: string] : () => void} {
    return {

      'click:.set-age' : this.onSetAgeClick
    }
  }



  onSetAgeClick = (): void =>  {
    this.model.setRandomAge();
  }

  template() : string {
    return `
    <div>
    <h1>User Form</h1>
    <div> User name: ${this.model.get('name')}</div>
    <div> User name: ${this.model.get('age')}</div>
    <input />
    <button>Click me </button>
    <button class="set-age">Set random age </button>
    </div>
    `
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
