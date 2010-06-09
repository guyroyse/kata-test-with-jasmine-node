var fs = require('fs')
eval(fs.readFileSync('jasmine-node.js'))
eval(fs.readFileSync('implementation.js'))

describe('with no tokens', function () {
  it("should return an empty string if an empty string is given", function() {
    expect(new stringTemplate("").replace()).toEqual("")
  })

  it("should return a string unchanged", function() {
    expect(new stringTemplate("foo").replace()).toEqual("foo")
  })
})

describe('with one token', function () {
  var myStringTemplate = new stringTemplate("Hello $name!")

  it("should replace the token with an empty string if no value is passed in", function() {
    expect(myStringTemplate.replace()).toEqual("Hello !")
  })

  it("should replace the token with a given value", function() {
    expect(myStringTemplate.replace({name: "Mc Dot"})).toEqual("Hello Mc Dot!")
  })

  it("should not replace partial token matches", function() {
    expect(myStringTemplate.replace({na: "Mc Dot", name: "you forgott about me!"})).toEqual("Hello you forgott about me!!")
  })

  it("should work when calling replace twice on the same string template", function() {
    expect(myStringTemplate.replace({name: "Mc Dot"})).toEqual("Hello Mc Dot!")
    expect(myStringTemplate.replace({name: "The lost one"})).toEqual("Hello The lost one!")
  })
})

describe('with two tokens (OMG!?)', function () {
  var myStringTemplate = new stringTemplate("Hello $title $name!")

  it("should replace all tokens with their values", function() {
    expect(myStringTemplate.replace({title: "Mc", name: "Dot"})).toEqual("Hello Mc Dot!")
  })

  it("should not do anything about tokens not present in the string template", function() {
    expect(myStringTemplate.replace({title: "Mc", name: "Dot", age: 10})).toEqual("Hello Mc Dot!")
  })

  it("should replace tokens without value with the empty string", function() {
    expect(myStringTemplate.replace({title: "Mc"})).toEqual("Hello Mc !")
  })
})

jasmine.run()