# Type Narrowing in TypeScript: `typeof`, `instanceof`, and `in`

## Introduction

Type narrowing is a TypeScript feature that lets the compiler determine
a more specific type for a value within a particular block of code. It
is especially useful when a variable can hold multiple types, such as a
union type. By checking a value before using it, you can write safer
code and avoid invalid operations.

## Detailed Explanation

### 1. Using `typeof`

The `typeof` operator checks the runtime type of primitive values, such
as strings and numbers. TypeScript uses the condition to narrow the
variable inside each branch.

``` ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toFixed(2);
}
```

Here, `value` is treated as a `string` inside the `if` block and a
`number` afterward.

### 2. Using `instanceof`

Use `instanceof` to check whether an object was created by a particular
class or constructor.

``` ts
function getDateInfo(value: Date | string): string {
  if (value instanceof Date) {
    return value.toISOString();
  }

  return value.toUpperCase();
}
```

TypeScript knows that `value` is a `Date` in the first branch and a
`string` in the other.

### 3. Using the `in` Operator

The `in` operator checks whether a property exists on an object. It is
helpful when working with unions of object types.

``` ts
type Admin = { name: string; permissions: string[] };
type Customer = { name: string; purchaseCount: number };

function describe(user: Admin | Customer): string {
  if ("permissions" in user) {
    return `Admin: ${user.permissions.join(", ")}`;
  }

  return `Customer purchases: ${user.purchaseCount}`;
}
```

## Conclusion

Type narrowing makes union types practical and safe. Use `typeof` for
primitive checks, `instanceof` for class instances, and `in` to
distinguish object shapes by their properties.
