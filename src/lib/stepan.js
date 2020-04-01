export default class Stepan {
  
  static validateElement(elem){
    return document.createElement(elem).toString() !== "[object HTMLUnknownElement]"
  };

  static createElement(element, parent, attributes = {}) {
    // TODO: check if this is a valid tag name

    if (!Stepan.validateElement(element)){
      throw new StepanError("The tag of element is not valid.");
    }
    const newElement = document.createElement(element);
    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static Component = class {
    constructor(parent) {
      

      if ( parent === null || parent === undefined){
        // 2. throw an error if parent is null or undefinedx
        try{
          throw new StepanError("The parent object is null of undefined.")
        }
        catch(err){
        alert(err)
        }
      }
      if (! parent instanceof Element){
        //2. throw an error if parent is not a valid DOM object
        try{
          throw new StepanError("The parent object is not a valid DOM object")
        }
        catch(err){
          alert(err)
        }
      }
      this.parent = parent;
    }
    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}

// TODO: 1. Create StepanError class to define all framework errors
class StepanError extends Error {
  constructor(message) {
    super(message);
    this.name = "StepanError"
  }
}
