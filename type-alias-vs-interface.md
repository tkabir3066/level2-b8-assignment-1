# Type Alias vs. Interface in TypeScript: Core Differences and When to Use Each

## Introduction

TypeScript provides two powerful ways to describe the shape of data:
`type` aliases and `interface` declarations. They often look
interchangeable, especially when defining object structures, but they
have important differences. Understanding those differences helps you
write clearer, more maintainable TypeScript code.

## Detailed Explanation

Both can describe an object:

``` ts
interface User {
  id: number;
  name: string;
}

type UserType = {
  id: number;
  name: string;
};
```

The key difference is **extensibility**. Interfaces support declaration
merging, meaning multiple declarations with the same name are combined:

``` ts
interface User {
  email: string;
}
```

The `User` interface now includes `id`, `name`, and `email`. Type
aliases do not support declaration merging.

Type aliases are more flexible for defining unions, intersections,
primitives, tuples, and function types:

``` ts
type Status = "pending" | "success" | "failed";
type ID = string | number;
type Point = [number, number];
```

Interfaces can also extend other interfaces, while types can combine
structures using intersections (`&`). Both approaches support
inheritance-like composition.

## When Should You Choose Each?

Choose an **interface** when defining object shapes, especially public
APIs, class contracts, or structures that may need extension through
declaration merging. Choose a **type alias** when you need unions,
tuples, primitive aliases, mapped types, or more complex type
compositions. For simple object definitions, either is valid;
consistency within a project matters most.

## Conclusion

There is no universal winner. Use interfaces for extensible object
contracts and type aliases for flexible type expressions. Knowing both
lets you choose the clearest tool for each situation.
