# Пространства имен (namespaces) без модулей

```
namespaces Utils {
	export const SECRET: sting = '123321';
	const PI: number = 3.14;

	export const getPass = (name: string, age: number): string => `${name}${age}`;

	export const isEmpty = <T>(data: T): boolean => !data;
};

const myPass = Utils.getPass('Yauhen', 31);		// 'Yauhen31'
const isSecret = Utils.isEmpty(Utils.SECRET);	// 'false'

cosnt PI = 3; // No Errors
```
Импорт
```
/// <reference path="Utils.ts" />
```
