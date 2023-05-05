# Literal types
# Литеральные типы

## number

type ValidPort = 80 | 42;

let port: ValidPort = 80;		// ok
let port: ValidPort = 42;		// ok
let port: ValidPort = 82;		// Error

## string

type Status = 'ok' | 'error';

let status: Status = 'ok'			// ok
let status: Status = 'error'	// ok
let status: Status = 'good'		// Error

## template string

type Type = 'Type';
type Script = 'Script';

type Message = `I love ${Type}${Script}` // type Message = 'I love TypeScript'

type Sides = 'top' | 'right' | 'bottom' | 'left';
type PaddingSides = `padding-${Sides}` // type PaddingSides = 'padding-top' | 'padding-right' | 'padding-bottom' | 'padding-left'


type A = `${uppercase 'AbCd}`			// type A = 'ABCD'
type B = `${lowercase 'AbCd'}`		// type B = 'abcd'
type C = `${capitalize 'abcd'}`		// type C = 'Abcd'
type D = `${uncapitalize 'Abcd'}` // type D = 'abcd'

## boolean

