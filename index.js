/**
 * Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */

/**
 * @fileoverview Oxford Comma Join NPM package main file
 */

module.exports = (listOfItems) => {
  // Only accept lists
  if (!Array.isArray(listOfItems)) {
    throw new TypeError("oxford-comma-join only accepts an array of items");
  }

  // Zero or single item lists
  if (listOfItems.length === 0) {
    return "";
  }
  if (listOfItems.length === 1) {
    return String(listOfItems[0]);
  }

  // For two items
  if (listOfItems.length === 2) {
    return String(listOfItems[0]) + " and " + String(listOfItems[1]);
  }

  // For the non-trivial case of other real number of items
  let index = 0;
  let output = "";
  while (index < (listOfItems.length - 1)) {
    output += String(listOfItems[index])+", ";
    index++;
  }
  output += "and " + String(listOfItems[listOfItems.length - 1]);
  return output;
}
