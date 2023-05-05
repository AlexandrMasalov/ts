# Union
# Объединение

let v1: T1 | T2 | T3;

class A {
	a: number;
}
class B {
	b: string;
}
class C {
	c: boolean;
}

let v2: A | B | C;

class Bird {
  fly(): void {}

  toString(): string {
    return 'bird';
  }
}

class Fish {
  swim(): void {}

  toString(): string {
    return 'fish';
  }
}

class Insect {
  crawl(): void {}

  toString(): string {
    return 'insect';
  }
}

function move(animal: Bird | Fish | Insect): void {
  animal.fly(); // Error
  animal.swim(); // Error
  animal.crawl(); // Error

  animal.toString(); // ок, задекларировано во всех типах
}
