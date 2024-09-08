let iceCream = {flavor: "chocolate"};
let defaultsProps = {flavor: "vanilla", sprinkles: "lots"};

function defaults(obj, defaultProps) {
  for (let prop in defaultProps) {
    if (!obj.hasOwnProperty(prop)) {
      obj[prop] = defaultProps[prop];
    }
  }
  return obj;
}

let result = defaults(iceCream , defaultsProps);
console.log(result);


