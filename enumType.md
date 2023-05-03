# Перечисление
## string или number

## Если нет присвоения значений, то ассоциируется с нумерацией с нуля.
enum Fruits {
	Apple,	// 0
	Pear,		// 1
	Banana,	// 2
}


enum Citrus {
	Lemon = 2,
	Orange = 4,
	Lime = 6,
}

## Продолжение нумерации от присвоенного значения.
enum Berrys {
	Straberry = 1,
	Raspberry,	// 2

	Blueberry = 4,
	Cowberry,		// 5
}

## Допускается присвоение одинаковых значений.
enum Keys {
	A = 10,
	B,	// 11
	C = 10,
	D,	// 11
}

## После строк не перечисляется.
enum Stones {
	Peach,	// 0
	Apricot = 'apricot',
	Cherry,	// Error
	Plum, 	// Error
}

## Как тип данных
enum Fruit {
	Apple,
	Pear,
	Banana = 'banana',
}

function isFruitInStore(fruit: Fruit): boolean {
	return true;
}

isFruitInStore(Fruit.Banana); // ok
isFruitInStore(123);					// ok -> если есть хоть один number, то любое числовое значение пройдет проверку
isFruitInStore('banana');			// Error


## Псевдонимы
