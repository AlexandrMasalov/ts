# Утилиты

# Utilits

- Readonly (члены объекта только для чтения)
- Partial (сделать все члены объекта необязательными)
- Required (сделать все необязательные члены обязательными)
- Pick (отфильтровать объектный тип)
- Record (динамически определить поле в объектном типе)
- Awaited (возвращенный из асинхронной функции тип)
- Omit (удаление К-свойств из типа Т)
- Extract (получение одинаковых свойств из двух разных типов)
- Exclude (исключение одинаковых свойств из двух разных типов)
- NonNullable (снимает null и undefined с типа)
- ReturnType (получает тип значения, возвращаемого функцией)


## Readonly (члены объекта только для чтения)
```
type Readonly<T> = {
	readonly [P in keyof T]: T[P];
}
```
```
interface IPerson {
  name: string;
  age: number;
}

type Person = Readonly<IPerson>
type Person = {
	readonly name: string,
	readonly age: number,
};
```

## Partial (сделать все члены объекта необязательными)
```
type Partial<T> = {
	[P in keyof T]?: T[P];
};
```

```
interface IPerson {
	name: string;
	age: number;
};

type Person = Partial<IPerson>;
type Person = {
	name?: string,
	age?: number,
}
```

## Required (сделать все необязательные члены обязательными)
```
type Required<T> = {
	[P in keyof T]-?: T[P];
};
```

```
interface IPerson {
	name?: string;
	age?: number;
};

type Person = Required<IPerson>;
type Person = {
	name: string,
	age: number,
}
```

## Pick (отфильтровать объектный тип)
```
type Pick<T, K extends keyof T> = {
	[P in K]: T[P];
};
```

```
interface IT {
	a: number;
	b: string;
	c: boolean;
}

type T0 = Pick<IT, 'a' | 'b'>;
type T0 = {
	a: number;
	b: string;
};
```

## Record (динамически определить поле в объектном типе)
```
type Record<K extends string, T> = {
	[P in K]: T;
};
```

```
interface IConfigurationIndexSignature {
	payload: {
		[key: string]: string
	}
}

interface IConfigurationWithRecord = {
	payload: Record<string, string>
}
```

## Awaited (возвращенный из асинхронной функции тип)
```
async function getData(): Promise<string> {
	return 'hello';
}

let awaitedData: Awaited<ReturnType<typeof getData>>
```

## Omit (удаление К-свойств из типа Т)
```
interface IPerson {
	name: string,
	age: number,
	id: number,
}

type Person = Omit<IPerson, 'name' | 'age'>;
type Person = { id: number };
```

## Extract (получение одинаковых свойств из двух разных типов)
```
interface IOne {
	id: number,
	name: string,
}

interface ITwo {
	id: number,
	age: number,
}

type Id = Extract<keyof IOne, keyof ITwo>;
type Id = { id: number };
```

## Exclude (исключение одинаковых свойств из двух разных типов)
```
interface IOne {
	id: number,
	name: string,
}

interface ITwo {
	id: number,
	age: number,
}

type Id = Exclude<keyof IOne, keyof ITwo>;
type Id = { name: string, age: number };
```

## NonNullable (снимает null и undefined с типа)
```
type WithNull = string | number | null | undefined;

type NonNull = NonNullable<WithNull>;
type NonNull = string | number;
```

## ReturnType (получает тип значения, возвращаемого функцией)
```
let v0: ReturnType<() => void>; // let v0: void
let v1: ReturnType<() => number | string>; // let v1: string|number
let v2: ReturnType<<T>() => T>; // let v2: {}
let v3: ReturnType<<
  T extends U,
  U extends string[]
>() => T>; // let v3: string[]
let v4: ReturnType<any>; // let v4: any
let v5: ReturnType<never>; // let v5: never
let v6: ReturnType<Function>; // Error
let v7: ReturnType<number>; // Error
```
