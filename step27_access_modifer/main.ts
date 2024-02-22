// // Access modifer
// public        bdefault behaviour of property.

class Public {
  public myName() {
    console.log("My name is AbdulRehman");
  }
}

// private  just class ke ander accessable hoga
let obj = new Public();
obj.myName();
console.log(obj.myName.name);

class Private {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let obj1 = new Private("AbdulRehman", 19);
console.log(obj1.name); // Error

// protected
// class and chield mn use kr sakte hn uske bahir nhi use kr sakte

class Protected {
  protected name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class MyClass extends Protected {
  protected myName() {
    return `My name is ${this.name}`;
  }
  protected myage() {
    return `My age is ${this.age}`;
  }
}

let obj3 = new Protected("AbdulRehman", 19);
console.log(obj3.myName); // Error
