console.log("haha");

function hey() {
  console.log(i);
  for (var i = 0; i < 10; i++) {
    console.log("hi motherfker", i);
  }

  for (var i = 0; i < 10; i++) {
    console.log("nononon ", i);
  }

  const obj = { yessine: "haha", jaoua: "haha" };

  let ob = { ...obj };
  console.log(ob);
}

class Person {
  constructor() {
    this.hair = "blue";
    this.eyes = "red";
  }

  showEyes() {
    console.log(this.eyes);
  }
}

function executeHOC(callback) {
  if (callback) {
    callback();
  }
}
function meow() {
  console.log("meow");
}

function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}

let person = new Person();

hey();
person.showEyes();
executeHOC(meow);

let doubler = multiplier(2);
console.log(doubler(4));
