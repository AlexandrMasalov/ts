# Index signature
# Индексная сигнатура

```
{ [identifier: Type]: Type }
```

В "[ ]" идентификатор привязки (binding identifier) - string или number.
После ":" - аннотация типа (type annotation).
Если индекс имеет тип string, то ключ при этом может иметь значение number.

```
[identifier: string]: string
a: 'a' // ok
1: 'a' // ok
```
