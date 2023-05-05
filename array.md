# Array
# Массивы

let colors: string[] = ['white', 'blue', 'green'];
colors.push('black');		// ok
colors.push(null);			// ok
colors.push(undefined);	// ok
colors.push(2)					// Error


type String = string;
type Number = number;
let numbers: (String | Number)[] = [1, '2', 3];
