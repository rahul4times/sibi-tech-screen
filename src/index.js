(function() {
  'use strict';

  window._ = {};

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.

  _.each = function(collection, iterator) {
    if(Array.isArray(collection)){
      for(let i=0; i<collection.length; i++){
        iterator(collection[i], i, collection)
      }
    } else {
      for(let x in collection){
        iterator(collection[x], x, collection);
      }
    }
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {

    var myNewArray = [];
    for(let i=0; i<collection.length; i++){
      if(test(collection[i])){
        myNewArray.push(collection[i]);
      }
    }

    return myNewArray;
  };

  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {

    var myNewArray = [];
    for(let i=0; i<collection.length; i++){
      myNewArray.push(iterator(collection[i]))
    }

    return myNewArray;
  };
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.

})();
