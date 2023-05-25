# Interfaces
# Интерфейсы
```
interface IAnimal {
	nickname,

	execute(command: string): void,
}

class Bird implements IAnimal {
	nickname: string,
	execute(command: string): void {}
}
```

```
interface IA {}
interface IB {}

interface IAB extends IA, IB {}

class C implements IA, IB {}

interface ID {}

class E extends C implements ID {}

let a: IA = {}
let a: IA = new C()
```
