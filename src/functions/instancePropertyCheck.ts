import StringIndexable from "../interfaces/stringIndexable"

// these few lines of code save A LOT of boring procedural lines in the test suites
const instancePropertyCheck = (instanceToTest: StringIndexable,  expectedProperties: StringIndexable) => {
  for(const property of Object.keys(expectedProperties)) {
    expect(instanceToTest[property]).toBe(expectedProperties[property])
  }
}

export default instancePropertyCheck