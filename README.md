# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cgravel/lotide`

**Require it:**

`const _ = require('@cgravel/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `head` : get the first element of an array
* `tail` : get the last element of an array
* `middle` : get the middle element(s) of an array
* `assertArraysEqual`: check if two arrays are equal
* `assertEqual`: check if two values are equal
* `assertObjectsEqual`: check if two objects are equal
* `countLetters`: count letters in a string
* `countOnly`: count items in an array
* `eqArrays`: check if two arrays have equal length
* `eqObjects`: check if two objects have equal length
* `findKey`: find key inside an object
* `findKeyByValue` : find key inside an object using its value
* `letterPositions` : find the positions of a letter in a string
* `map` : map through an array
* `takeUntil`: using a callback to loop an array
* `without`: remove items from an array