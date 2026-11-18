
## Topics Covered

1. What is hoisting ?
2. Hoisting with `var`
3. Hoisting with `let` and `const`
4. Hoisting with Function Declarations
5. Hoisting with Function Expressions
	- Function Expression with `var`
	- Function Expression with `let`
	- Function Expression with `const`
6. Hoisting and Execution Context

---
## What is Hoisting?

**Hoisting** in JavaScript is a behavior in which variable and function declarations are processed before the code is executed.

In simple words, JavaScript prepares declarations during the **Creation Phase of the Execution Context**, before executing the code line by line.

Hoisting refers to registering declarations (creating their bindings in the appropriate scope) before code execution begins. Initialization behavior depends on the type of declaration.

---

## 1. Hoisting with `var`

````js
console.log(a);

var a = 10;

console.log(a);
````

**Output:**

````text
undefined
10
````

**Why?**

During the Creation Phase, JavaScript registers the variable `a` in its scope and initializes it with `undefined`.

During the Execution Phase, the assignment `a = 10` happens when JavaScript reaches that line.

JavaScript internally behaves approximately like this:

````js
var a;          // Declaration processed during creation phase

console.log(a);  // undefined

a = 10;          // Assignment happens during execution

console.log(a);  // 10
````

The declaration is hoisted, but the assignment is not.

---

## 2. Hoisting with `let` and `const`

````js
console.log(a);

let a = 10;
````

**Output:**

````text
ReferenceError: Cannot access 'a' before initialization
````

**Why?**

- `let` and `const` declarations are also hoisted.
- Their bindings are created before code execution.
- However, they are not initialized with `undefined`.
- They remain uninitialized in the **Temporal Dead Zone (TDZ)** until execution reaches their declaration.

Example:

````js
console.log(a); // ReferenceError

const a = 20;

console.log(a); // 20
````

---

## 3. Hoisting with Function Declarations

Function declarations are fully hoisted.

````js
greet();

function greet() {
    console.log("Hello World");
}
````

**Output:**

````text
Hello World
````

**Why?**

JavaScript registers the function declaration and initializes it with the function during the Creation Phase. Therefore, we can call it before its declaration in the source code.

---

## 4. Hoisting with Function Expressions

### Function Expression with `var`
````js
greet();

var greet = function() {
    console.log("Hello World");
};
````

**Output:**

````text
TypeError: greet is not a function
````

**Why?**

Only the variable declaration `var greet` is hoisted, not the function assignment.

During the Creation Phase, `greet` is initialized with `undefined`.

Approximately:

````js
var greet;

greet(); // TypeError: undefined is not a function

greet = function() {
    console.log("Hello World");
};
````

The function is assigned to `greet` only when execution reaches the assignment.

### Function Expression with `let`

```js
greet();

let greet = function() {
    console.log("Hello World");
};
```

**Output:**

```text
ReferenceError: Cannot access 'greet' before initialization
```

**Why?**

- `greet` is registered during the Creation Phase.
- However, it remains uninitialized in the **Temporal Dead Zone (TDZ)**.
- When `greet()` executes before the declaration, JavaScript tries to access an uninitialized variable.
- Therefore, a `ReferenceError` occurs.

### Function Expression with `const`

```js
greet();

const greet = function() {
    console.log("Hello World");
};
```

**Output:**

```text
ReferenceError: Cannot access 'greet' before initialization
```

The behavior is the same as `let` because `const` also remains uninitialized during the TDZ.

### Calling the Function After Initialization

Both `let` and `const` function expressions work perfectly when called after initialization.

**Using `let`:**

```js
let greet = function() {
    console.log("Hello World");
};

greet();
```

**Using `const`:**

```js
const greet = function() {
    console.log("Hello World");
};

greet();
```

**Output:**

```text
Hello World
```

### Comparison

| Function Type | Called Before Declaration | Result |
|---|---|---|
| Function declaration | Yes | Works |
| Function expression with `var` | Yes | `TypeError` |
| Function expression with `let` | Yes | `ReferenceError` |
| Function expression with `const` | Yes | `ReferenceError` |

**Reason:**

- `var` is initialized with `undefined` during the Creation Phase.
- `let` and `const` remain uninitialized in the TDZ until execution reaches their declaration.
- A function expression is assigned to the variable only when the assignment statement executes.


---

## 5. Quick Comparison

| Declaration | Hoisted? | Initialized during creation phase |
|---|---|---|
| `var` | Yes | `undefined` |
| `let` | Yes | Uninitialized (TDZ) |
| `const` | Yes | Uninitialized (TDZ) |
| Function declaration | Yes | Complete function |
| Function expression (`var`) | Variable only | `undefined` |
| Arrow function (`var`) | Variable only | `undefined` |

---

## 6. Hoisting and Execution Context

Remember the two phases of an Execution Context:

### 1. Memory Creation Phase

- Memory/bindings are prepared for variable and function declarations.
- `var` is initialized with `undefined`.
- `let` and `const` are created but remain uninitialized (TDZ).
- Function declarations are initialized with their complete function definitions.

### 2. Code Execution Phase

- JavaScript executes statements in order.
- Assignments happen.
- Functions are called.
- Values are updated.

---

## Important

Hoisting does not literally move your code to the top.

It is a way of describing how JavaScript processes declarations during the Creation Phase of an Execution Context, before executing the code.

**Hoisting = Registering declarations (creating their bindings in scope) before code execution begins.**

Initialization (`undefined`, TDZ, or the function object) is the behavior associated with those registered declarations.
