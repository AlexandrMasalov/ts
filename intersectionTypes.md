# Intersection
# Пересечение

```
type T1 = {a: string};
type T2 = {b: number};
type T3 = {c: boolean};

let v1: T1 & T2 & T3 = {
	a: 'string',
	b: 1,
	c: true,
}
```

## Значение принадлежит ко всем типам одновременно.
