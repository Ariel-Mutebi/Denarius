// To deal with pesky TypeScript complaint
// "No index signature with a parameter of type 'string' was found..."
// when accessing object properties with bracket notation.

interface StringIndexable {
  [key: string]: unknown
}

export default StringIndexable