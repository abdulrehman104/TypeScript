# Member Visibility

You can use TypeScript to control whether certain methods or properties are visible to code outside the class.

## Public

The default visibility of class members is public. A public member can be accessed anywhere:

### Examples

```TypeScript
class Public {
    public myName() {
        console.log("My name is AbdulRehman");
  }
}

let obj = new Public();
obj.myName();

```

## Protected

protected members are only visible to subclasses of the class they’re declared in.

### Examples

```TypeScript

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

let obj = new Protected("AbdulRehman", 19)
console.log(obj.myName);  // Error
```

## Private

private is like protected, but doesn’t allow access to the member even from subclasses.

### Example

```TypeScript
class Private {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let obj = new Private("AbdulRehman", 19);
console.log(obj.name);  // Error

```

## TypeScript

[TypeScript](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)

[geeksforgeeks](https://www.geeksforgeeks.org/what-is-default-visibility-for-properties-methods-in-typescript-classes/)

