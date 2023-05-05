type S = string;
type N = number;
let numbers: (S | N)[] = [1, '2', 3];

interface IObj {
	[key: string]: number,
}

let obj: IObj = {
	3: 2,
	'd': 4,
}
