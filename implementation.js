var stringTemplate = function(string) {
  this.string = string
}

stringTemplate.prototype = {
  replace: function (replacements) {
    var buffer = this.string

    for(token in replacements) {
      buffer = buffer.replace(new RegExp("\\$" + token + "\\b"), replacements[token])
    }

    return buffer.replace(/\$(\w+)/, "")
  }
}