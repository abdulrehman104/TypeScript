# INHERITANCE:
classes can inherit properties and methods from other classes using the concept of inheritance. This allows you to create a hierarchy of classes, with a base class (or parent class) and derived classes (or child classes) that inherit and extend the functionality of the base class.

inheritance and Extends both are same.


Jab kse class ko extend krte to hamare pas 2 chizen hote he ak overloading ak overraiding 

## OVERLOADING:
class mn ak function define krte hn and usko differents parameters dete hn.

### For example : 
```TypeScript
greet(a:string,b:string)
greet(a:number,b:number)
greet(a:string,b:number)
greet(a:any,b:any)
```

In short the defination of overloading is "same name with different parameters".

## OVERRIDING:
ak class mn same name ka ak function bnaye and dosre class bna kr is parient class ko usmn extends kren and then child class mn same name se function bnaye is mn hild class ka function parient class wale function ko overwrite kr dega.

### For example : 
```TypeScript
class first{
greet(){
    console.log("Hello, world!");
 }
}

class second {
greet(name){
  if (name === undefined) {
      super.greet(); } 
  else {
   console.log(`Hello, ${name.toUpperCase()}`); }
}
}
```
In short the defination of overriding is "same name with same parameters but implementation is different".

