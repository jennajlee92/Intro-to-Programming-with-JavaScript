let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined

function copyObj(object, array) {
  let finalObj = {};

  if (array) {
    array.forEach(function(key) {
      finalObj[key] = object[key];
    });

    return finalObj;
  } else {
    return Object.assign(finalObj, object);
  }
}