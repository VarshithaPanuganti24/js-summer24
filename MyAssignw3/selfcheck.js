var x=3;
console.log(x === undefined); // true
//var x = 3;

(function () {
    
  console.log(x); // undefined
  var x = "local value";
  console.log(x);
})();
console.log(x);
