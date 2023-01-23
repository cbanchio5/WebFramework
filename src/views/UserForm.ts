export class UserForm {
  constructor(public parent:HTMLElement) {}

  eventsMap() : {[key: string] : () => void} {
    return {
      'click:button' : this.onButtonClick
    }
  }

  onButtonClick() : void {
    console.log('Cicked!')
  }

  template() : string {
    return `
    <div>
    <h1>User Form</h1>
    <input />
    <button>Click me </button>
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
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content)

    this.parent.append(templateElement.content);
  }
}
