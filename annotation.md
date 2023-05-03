# Аннотация типа устанавливается оператором двоеточия :, после которого следует указание типа данных.

## Переменные
### При объявлении переменных тип данных указывается сразу после идентификатора.
ts: let identifier: Type = value;
js: let identifier = value;

## Функции
ts: function identifier(param1: Type, param2: Type): ReturnedType {}
js: function identifier(param1, param2) {}

## Обобщения
ts: function identifier<T, U>(): ReturnedType { }

## Перегрузка ts:
### В TypeScript аннотирование типов у функций, методов и конструкторов расширено при помощи перегрузки функций.
function identifier(p1: T1, p2: T2): T3;
function identifier(p1: T4, p2: T5): T6;
function identifier(p1: T, p2: T): T {
	return 'value';
};

const a: T1 = 'value';
const b: T2 = 'value';
const c: T4 = 'value';
const d: T5 = 'value';

identifier(a, b)
identifier(c, d)

## Стрелочные функции
### У стрелочных функций возвращаемый тип данных указывается между параметрами и стрелкой.
	ts: <T, U>(param1: Type, param2: Type): Type => value;

## Классы
ts: class Identifier<T> {
js: class Identifier {

	ts: constructor(param0: Type, param1: Type) {}
	js: constructor(param0, param1) {}

### Для полей класса тип данных указывается сразу после идентификатора-имени.
	ts: field: Type = value;
	js: field = value;

	ts: static staticField: Type = value;
	js: static staticField = value;

	ts: [indexSignature: Type]: Type;
	js:

	ts: [computedProp]: Type = value;
	js: [computedProp] = value;


### Для геттеров (getters) указывается возвращаемый тип данных.
	ts: get property(): Type {
		return value;
	}
	js: get property() {
		return value;
	}

	ts: static get staticProperty(): Type {
		return value;
	}
	js: static get staticProperty() {
		return value;
	}

### Для сеттеров (setters) указывается тип единственного параметра и вовсе не указывается возвращаемый тип.
	ts: set property(value: Type) {}
	js: set property(value) {}

	ts: static set staticProperty(value: Type) {}
	js: static set staticProperty(value) {}

	ts: static staticMethod<T, U>(
		param0: Type,
		param1: Type
	): Type {}
	js: static staticMethod(param0, param1) {}


### У функций и методов класса возвращаемый тип данных указывается между параметрами и телом.
### У функций, стрелочных функций и методов класса, параметрам также указывается тип данных.
### При необходимости функциям, стрелочным функциям и методам класса можно указать параметры типа, которые заключаются в угловые скобки и указываются перед круглыми скобками, в которых размещаются параметры функции.
	ts: method<T, U>(param0: T, param1: U): Type {}
	js: method(param0, param1) {}
}





