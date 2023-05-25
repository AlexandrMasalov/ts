type ABC = 'a' | 'b' | 'c'

type ABCWithString = {
	[K in ABC]: string
}
