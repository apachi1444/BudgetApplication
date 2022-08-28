console.log("haha");

function hey() {
  console.log(i);
  for (var i = 0; i < 10; i++) {
    console.log("hi mot", i);
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

// this part is for the creating the promise

function myPromise(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      console.log("qsdfsdqf");
      reject(new Error("Invalid time"));
    }
    resolve(2);
  });
}

myPromise("8000")
  .then((value) => console.log("hey after this teim ", value))
  .catch((error) => console.log(error));

async function ahha() {
  let aa = await myPromise(500);
  console.log("this is aa ", aa);
  let yessine = "aa";
  let jaoua = "bb";
  return {
    yessine,
    jaoua,
  };
}

console.log(ahha());
console.log(0 == "0");
