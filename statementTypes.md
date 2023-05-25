# Утверждение типов

```
let width: number = <number>(<any>widthString); // Ok
```
```
FromType as ToType;
```
```
// утверждаем компилятору..
let request: Request = { status: status as 200 }; // ...с помощью as оператора
let request: Request = { status: <200>status }; // ...с помощью угловых скобок,
// ...что он должен рассматривать значение, ассоциированное с as,
// как значение, принадлежащие к литеральному типу '200'

let a = [200, 404]; // let a: number[]

let b = [200, 404] as const; // let b: readonly [200, 404]
let c = <const>[200, 404]; // let c: readonly [200, 404]
```
Но стоит помнить, что утверждение к константе применимо исключительно к литералам таких типов, как number, string, boolean, array и object.

Утверждение в сигнатуре
```
function isStringAssert(condition: any): asserts condition {
  if (!condition) {
    throw new Error(``);
  }
}
```
Утверждение типа
```
function isString(value: any): value is string {
  return typeof value === 'string';
}

const testScope = (text: any) => {
  text.touppercase(); // до утверждения расценивается как тип any..

  isStringAssert(text instanceof String); // выражение с оператором instanceof
  isStringAssert(typeof text === 'string'); // выражение с оператором typeof
  isStringAssert(isString(text)); // механизм "утверждения типа"

  text.touppercase(); // ..после утверждения как тип string
};
```
