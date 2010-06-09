var fs = require('fs')
eval(fs.readFileSync('jasmine-node.js'))
eval(fs.readFileSync('implementation.js'))

describe('with no tokens', function () {
  it("should return an empty string if an empty string is given", function() {
    expect(stringTemplate("").replace()).toEqual("");
  })

  it("should return a string unchanged", function() {
    expect(stringTemplate("test").replace()).toEqual("test");
  })
})

describe('with one token', function () {
  it("should replace the token with an empty string if no value is passed in", function() {
    expect(stringTemplate("$test").replace()).toEqual("");
  })

  it("should not replace non token parts of the template string", function() {
    expect(stringTemplate("hello $test").replace()).toEqual("hello ");
  })

  it("should replace the token with a given value", function() {
    expect(stringTemplate("$test").replace({test: "another"})).toEqual("another");
  })

  it("should not replace partial token matches", function() {
    //expect(stringTemplate("").replace({}).toEqual("");
  })

  it("should work when calling replace twice on the same string template", function() {
    var myStringTemplate = stringTemplate("$test")
    expect(myStringTemplate.replace({test: "another"})).toEqual("another");
    expect(myStringTemplate.replace({test: "first"})).toEqual("first");
  })
})

describe('with two tokens (OMG!?)', function () {
  it("should replace all tokens with their values", function() {
  })

  it("should not do anything about tokens not present in the string template", function() {
  })

  it("should replace tokens without value with the empty string", function() {
  })
})

jasmine.run()