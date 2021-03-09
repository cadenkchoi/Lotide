# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install kinetics11/lotide`

**Require it:**

`const _ = require('kinetics11/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Compares the equality of two arrays
* `assertEqual(actual, expected)`: Compares two values, and the expected result of a function
* `assertObjectsEqual(actual, expected)`: Compares two objects for equality, and the expected result
* `countLetters(string)`: Returns the number of letters in a string
* `countOnly(allItems, itemsToCount)`: Takes in a collection of items and return counts for a specific subset of those items
* `eqArrays(arr1, arr2)`: Loops through two arrays to check for equality
* `eqObjects(object1. object2)`: Takes in two objects and returns true or false, based on a perfect match
* `findKey(obj, callback)`: Scans the object and returns the first key in which the callback returns a truthy value. Will return undefined if no key is found
* `findKeyByValue(object, value)`: Scans the object and returns the first key that contains the given value. Will return undefined if no key with the given value is found
* `head(array)`: Returns the first item in the array
* `letterPositions(sentence)`: Takes a sentence and returns the index of each letter within the sentence
* `map(array, callback)`: Creates a new array that has the results of calling a function on each element of the input array (an alternative to the Array,prototype.map() method)
* `middle(arr1)`: Returns the middle index element(s) of an array
* `tail(array)`: Returns all items **except** for the first item of the array
* `takeUntil(array, callback)`: Returns elements from an array until the callback provided returns a truthy value
* `without(arr1, exclude)`: Returns a new array excluding the specified unwanted elements