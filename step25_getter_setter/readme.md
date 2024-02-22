 # GETTERS AND SETTERS:
 Getters and setters are special methods used to control access to the properties of a class. They allow you to define custom behavior when getting (accessing) or setting (assigning) the values of class properties. This can be useful for enforcing validation rules, implementing computed properties, or controlling access permissions.

 ## Getter Method:
 - A getter, also known as a getter method, is a special type of method in a class that is used to retrieve the value of a private or protected property. It allows you to access the value of a property as if it were a public property, while still keeping the actual property private or protected.

- A getter method is a function defined within a class that is prefixed with the keyword get. It does not accept any 
  arguments and is used to retrieve the value of a property.

```TypeScript
class MyClass {
    private _myProperty: string;

    get myProperty(): string {
        return this._myProperty;
    }
} 
```


## SETTER METHOD:
- A setter method, also known simply as a setter, is a special type of method in a class that is used to assign a value to a private or protected property. It allows you to set the value of a property as if it were a public property, while still keeping the actual property private or protected.

- A setter method is a function defined within a class that is prefixed with the keyword set. It takes exactly one parameter, representing the new value to be assigned to a property.

```TypeScript
class MyClass {
    private _myProperty: string;

    set myProperty(newValue: string) {
        this._myProperty = newValue;
    }
}
```







