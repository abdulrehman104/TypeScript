// TYPE VS INTERFACE
// syntax

// EXAMPLE 01:
// ham type ko variables and obj har kse ke sath use kr sakte hn.
type nam = string;
type age = number;

// interface ko type ke tra use nhi kr sakte

// interface se ham object ke key ko data types de sakte hn.
// And interface ke and type use kr   sakte hn.
interface Obj {
  nam: String;
  name: string;
}

// type ko ham object ke tra, ya interface ke tra bhi use kr sakte hn.
type obj1 = {
  name: string;
  rollNumber : number
};

// EXAMPLE 02:
// interface use krke ham ak he name 2 bar use kr sakte hn us se interface khud ko sink kr leta he ya murg kr leta he our phr ham use ak is tra se use bhi kr sakte hn

interface abc {
  name: string;
}
interface abc {
  age: number;
}

let obbj: abc = {
  name: "AbdulRehman",
  age: 19,
};

// type ko ak name se 2 bar define nhi kr sakte.
type abc1 = {             // error
  name: string;
};
type abc1 = {};           // error

// EXAMPLE 03.
// ham interface mn extends use kr sakte hn jis se ham purane interface ke value new interface mn add kr sakte hn.
interface Abc {
  name: string;
}
interface Obj extends Abc {
  age: number;
}

let objj: obj = {
  name: "AbdulRehman",
  age: 18,
};

// type mn ham extends ko use nhi kr sakte.
type ABc ={
    name: string;
  }
  type obj extends ABc {                // ERROR
    age: number;
  }