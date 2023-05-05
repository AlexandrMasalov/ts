# Type queries
# Запросы типов

let v1: T1;
let v2: typeof v1; // let v2: T1;

class T {
	static staticProp: number;

	field: string;

	get prop(): boolean {
		return true;
	}

	method(): void {}
}

let t: T = new T(); // класс принимается как тип

let v0: typeof t; 						// let v0: T;
let v1: typeof T.staticProp; 	// let v1: number;
let v2: typeof t.field; 			// let v2: string;
let v3: typeof t.prop; 				// let v3: boolean;
let v4: typeof t.method; 			// let v4: ()=>void;

function f(param: number): void {
	let v: typeof param; 				// let v: number
}
