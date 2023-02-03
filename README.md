# YACML

Yet Another Color Manipulation Library

---

This is a basic library that can be used to manipulate colors in JavaScript. It supports a variety of types of inputs
and outputs and can perform some basic manipulations on colors.

I made YACML becuase I wanted to build a custom color library for a small project that I was working on. Not becuase I
didn't like other libraries out there or though I had something wonderful to contribute, but because I wanted the
practice and thought it would be fun. If it works well in your project, I'm happy you can use it!

If you have any suggestions or features you would like added, create in issue or submit a pull request. I won't promise
any updates, but this has been a fun project that I wouldn't mind working more on.

## Features

* Accepts RGB, HSL, hex, hue, and kelvin temperature as inputs
* Can output as RGB, HSL, or hex
* Can change the brightness of a color
* Can shift the hue of a color
* Can lerp (find the color between) two colors
* Works by either using a `Color` object or using the base functions

## Basic usage

Install with NPM `npm i @orangejedi/yacml --save`

Simply require YACML in your script like so:

```javascript
const {Color} = require('@orangejedi/yacml');

let red = new Color("#ff0000");
red.brightness(50); //reduce brightness to 50%

console.log(red.getHex()); //#7f0000
```

You can specify several types of inputs. YACML will try to deduce the color type for itself, or you can specify it
manually.

```javascript
//These all create an identical red Color
new Color("#ff0000");
new Color("#ff0000", "hex");
new Color(["ff", "00", "00"], "hexArr");
new Color([255, 0, 0]);
new Color([255, 0, 0], 'rgb');
new Color([0, 100, 50], 'hsl');
new Color(0);
new Color(0, 'hue');

//These both create a color with a value of #fff6ec
new Color("6000K");
new Color("6000K", 'kelvin');
```

Use the following functions to get the color value:

````javascript
let red = new Color("#ff0000");

red.getHex() //#ff0000
red.getHex(false) //ff0000
red.getRGB() //[ 255, 0, 0]
red.getHSL() //[ 0, 100, 50]

red.getColor() //Defaults to [ 255, 0, 0]
red.hexMode = true;
red.getColor() //But can be changed to #ff0000 with 'hexmode' enabled
````

To manipulate a value:

````javascript
let red = new Color(0); //#ff0000
red.brightness(50); //#800000

let blue = new Color("#000080"); //#000080
blue.brightness(200); //#0000ff
blue.shiftHue(-120); //00ff00

//lerp returns a new Color object
red.lerp(blue, .5); //#3f7f00

//red and blue remain unchanged
red.getHex(); //#800000
blue.getHex(); //#00ff00
````

Functions can be chained one after the other:

````javascript
red.brightness(50).shiftHue(180).getHex();
````

### Functions

YACML exports all its internal functions for individual use. All functions take a `[r,g,b]` (0 to 255) style array unless specified.

* Converters
    * rgbToHex
      * Converts `[r,g,b]` to `"rrggbb"`
    * hexToRgb
      * Converts `"rrggbb"` to `[r,g,b]`
    * rgbToHexArr
      * Converts `[r,g,b]` to `["rr","gg","bb"]`
    * hexArrToRgb
      * Converts `["rr","gg","bb"]` to `[r,g,b]`
    * rgbToHsl
      * Converts `[r,g,b]` to `[h,s,l]`
    * hslToRgb
      * Converts `[h,s,l]` to `[r,g,b]`
    * hslToHex
      * Converts `[h,s,l]` to `"rrggbb`
    * hueToRgb
      * Converts hue (0-360) to `[r,g,b]`
    * kelvinToRgb
      * Converts a kelvin temperature (~1000K-40000K) to `[r,g,b]`
* Manipulators
    * brightness
      * Increases or decreases the color's brightness
    * brightnessHsl
      * Increases or decreases the color's brightness with an alternate method
    * shiftHue
      * Shifts the hue of the imported color
* Computers
    * lerpColor (color1, color2, amount (0-1))
      * Find the color at `amount`% between `color1` and `color2`

Use these functions like this:
```javascript
const yacml = require('@orangejedi/yacml');

yacml.rgbToHex([255,0,0]) //ff0000
yamcl.hexToRgb("#ff0000") //[255,0,0]
```

## About
© 2023 OrangeJedi

Released under the MIT License