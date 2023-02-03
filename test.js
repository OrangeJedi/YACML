const {Color} = require('./index.js');
const yacml = require('./index.js');

let red = new Color(0); //#ff0000
red.brightness(50); //#800000

let blue = new Color("#000080"); //#000080
blue.brightness(200); //#0000ff
blue.shiftHue(-120); //00ff00

//lerp returns a new Color object
red.lerp(blue,.5); //#3f7f00

//red and blue remain unchanged
red.getHex(); //#800000
blue.getHex(); //#00ff00