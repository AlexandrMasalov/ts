## any

let a: any
a = 1
a = 'one'
a = true

## number
let a: number = 1

## string
let a: string = 'one'

## boolean
let a: boolean = true

## symbol
## bigint

## null

let a: null = null

let a: string = null
let a: number = null
let a: boolean = null
let a: any = null

let a: undefined = null
let a: any = null


## undefined
let a: undefined = undefined

let a: string = undefined
let a: number = undefined
let a: boolean = undefined
let a: any = undefined
let a: null = undefined

## void
function action(): void {}

## never
function action(): never {
	throw new Error();
}

function loop(): never {
	while (true) {}
}


## unknown

