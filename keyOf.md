# Запрос ключей keyof

Выводятся все публичные, нестатические, принадлежащие типу ключи и на их основе создавать литеральный объединенный тип (Union).

```
type AliasType = { f1: number; f2: string };

interface IInterfaceType {
  f1: number;
  f2: string;
}

class ClassType {
  f1: number;
  f2: string;
}

let v1: keyof AliasType; // v1: "f1" | "f2"
let v2: keyof IInterfaceType; // v2: "f1" | "f2"
let v3: keyof ClassType; // v3: "f1" | "f2"
let v4: keyof number; // v4: "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"
```
Оператор keyof можно совмещать с оператором typeof (Type Queries).

```
class Animal {
  public name: string;
  public age: number;
}

let animal = new Animal();

let type: typeof animal; // type: { name: string; age: number; }
let union: keyof typeof animal; // union: "name" | "age"
```
