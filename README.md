# Oxford Comma Join

Easily convert your list of string values into a grammatically correct
string. So if your list looks like ["milk", "eggs", "bread", "toilet paper"],
then you can directly add it to an output as a single string:
"milk, eggs, bread, and toilet paper".

## Usage
```
const oxfordJoin = require(`oxford-comma-join`);
console.log(oxfordJoin([`one`, `two`, `three`, `four`]));
// "one, two, three, and four"
```

## Examples
```
const oxfordJoin = require(`oxford-comma-join`);
console.log(oxfordJoin([`one`, `two`, `three`, `four`]));
// "one, two, three, and four"

console.log(oxfordJoin([`one`, `two`]));
// "one and two"
```




