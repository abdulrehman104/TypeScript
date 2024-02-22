# Static Members:

Classes may have static members. These members aren’t associated with a particular instance of the class. They can be accessed through the class constructor object itself:

### Example:

```TypeScript
class MyClass {
 static x = 0;
 static printX() {
   console.log(MyClass.x);
 }
}
let obj = new MyClass();
MyClass.printX();
console.log(MyClass.x);
```

## Special Static Names

It’s generally not safe/possible to overwrite properties from the Function prototype. Because classes are themselves functions that can be invoked with new, certain static names can’t be used. Function properties like name, length, and call aren’t valid to define as static members:

``` TypeScript
class S {
  static name = "S!";
// Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.
}
```



## Documnents:

[TypeScript](https://www.typescriptlang.org/docs/handbook/2/classes.html#static-members)

[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
