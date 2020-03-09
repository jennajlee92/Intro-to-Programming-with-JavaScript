let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

let blah = Object.keys(myObj);
console.log(blah);

for (let key in myObj) {
  console.log(key);
}