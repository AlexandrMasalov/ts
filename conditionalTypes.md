# Условные типы

# Conditional types

```
value === result ? true : false
```

```
T extends U ? T1 : T2

interface User {
	id: string;
}

interface Message {
	id: number;
}

function gitId<T extends { id: any }>(obj: T): T extends { id: string } ? string : number {
	return obj.id;
}

const r1 = getId({} as User)
const r2 = getId({} as Message)
```

```
type NotFalsy<T = null> = T extends (null | undefined | false | 0) ? never : T;

let z : NotFalsy<string>;

z = 'Hello';
```

Фильтрация

```
type Filter<T, U> = T extends U ? never : T;

type R = Filter<'a' | 'b' | 'c', 'b'>

type R2 = Exclude<'a' | 'b' | 'c', 'b'>
```

Примеры
```
type T0<T> = T extends number ? string : boolean;

let v0: T0<5>; // let v0: string
let v1: T0<'text'>; // let v1: boolean

type T1<T> = T extends number | string ? object : never;

let v2: T1<5>; // let v2: object
let v3: T1<'text'>; // let v3: object
let v4: T1<true>; // let v2: never

type T2<T> = T extends number ? 'Ok' : 'Oops';

let v5: T2<5>; // let v5: "Ok"
let v6: T2<'text'>; // let v6: "oops"

// вложенные условные типы

type T3<T> = T extends number
  ? 'IsNumber'
  : T extends string
  ? 'IsString'
  : 'Oops';

let v7: T3<5>; // let v7: "IsNumber"
let v8: T3<'text'>; // let v8: "IsString"
let v9: T3<true>; // let v9: "Opps"
```

# Распределительные условные типы

# Distributive Conditional Types

```
type T0<T> = T extends number
  ? 'numeric'
  : T extends string
  ? 'text'
  : 'other';

let v0: T0<string | number>; // let v0: "numeric" | "text"
let v1: T0<string | boolean>; // let v1: "text" | "other"
```

