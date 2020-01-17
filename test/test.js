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
 * @fileoverview Testing oxford-comma-join npm package
 */

const oxfordComma = require(`../`);
var assert = require(`assert`);
const EMPTY_LIST = [];
const EMPTY_LIST_RESULT = "";
const ONE_ITEM_LIST = [`one item`];
const ONE_ITEM_RESULT = "one item";
const TWO_ITEM_LIST = [`one`, `two`];
const TWO_ITEM_RESULT = "one and two";
const N_ITEM_LIST = [`one`, `two`, `three`, `four`];
const N_ITEM_RESULT = "one, two, three, and four";

describe(`OxfordComma`, function() {
  it (`Empty array must return empty string`, function () {
    assert.equal(oxfordComma(EMPTY_LIST), EMPTY_LIST_RESULT);
  });
});

describe(`OxfordComma`, function() {
  it (`One item array must return that same item as a string`, function () {
    assert.equal(oxfordComma(ONE_ITEM_LIST), ONE_ITEM_RESULT);
  });
});

describe(`OxfordComma`, function() {
  it (`Two item array must return and-sepratated items`, function () {
    assert.equal(oxfordComma(TWO_ITEM_LIST), TWO_ITEM_RESULT);
  });
});

describe(`OxfordComma`, function() {
  it (`Oxford comma should function as described`, function () {
    assert.equal(oxfordComma(N_ITEM_LIST), N_ITEM_RESULT);
  });
});
