# Type Aliase

"Type Aliases" in TypeScript. Type aliases allow you to create custom names for any type. This can be particularly useful for simplifying complex type definitions or creating reusable types.

Here's an example of using type aliases with objects:

```typescript
type Point = {
  x: number;
  y: number;
};

let p1: Point = { x: 10, y: 20 };
let p2: Point = { x: 5, y: 15 };
```

In this example, `Point` is a type alias for an object with `x` and `y` properties. This alias can be used to declare variables `p1` and `p2` with the same structure.

You can also create more complex type aliases, such as combining existing types:

```typescript
type Coordinate = [number, number]; // Tuple type representing a coordinate pair
type Point = { x: number; y: number };

type PointOrCoordinate = Point | Coordinate;

let p: PointOrCoordinate = { x: 10, y: 20 };
let c: PointOrCoordinate = [5, 15];
```

In this example, `PointOrCoordinate` is a type alias that represents either a `Point` object or a `Coordinate` tuple.

Type aliases can also be generic, allowing you to create reusable parameterized types:

```typescript
type Pair<T> = {
  first: T;
  second: T;
};

let pair1: Pair<number> = { first: 10, second: 20 };
let pair2: Pair<string> = { first: "hello", second: "world" };
```

Here, `Pair<T>` is a generic type alias that represents a pair of values of the same type `T`.

Type aliases provide flexibility and readability in your TypeScript code, allowing you to create custom names for any type declaration, including objects.
