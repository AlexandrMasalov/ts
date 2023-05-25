# Lookup types

# Поиск типов

```
interface IInterfaceType {
  p1: number;
  p2: string;
}

let v1: IInterfaceType['p1']; // v1: number
let v2: IInterfaceType['p2']; // v2: string
let union: IInterfaceType['p1' | 'p2']; // union: number | string
let notexist: IInterfaceType['notexist']; // Error -> Property 'notexist' does not exist on type 'IAnimal'
```
