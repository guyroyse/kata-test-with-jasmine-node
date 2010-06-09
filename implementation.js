function stringTemplate(string){
  return {
    replace: function(replacements){
      return string.replace(/\$(\w+)/, function(regexp, match){
        return replacements ? replacements[match] : "";
      })
    }
  };
}

stringTemplate: (string) ->
  {
    replace: ->(replacements)
      string.replace /\$(\w+)/, (regexp, match) ->
        if replacements?
          replacements[match]
        else
          ""
  }