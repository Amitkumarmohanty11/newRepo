function postfixEval(string) {

    var stack = [];
    var ch; 
  
    for (var k = 0, length = string.length; k < length;  k++) {
  
      ch = string[k];
  
      
      if (/\d/.test(ch))
        stack.push(ch);
  
      
      else if (ch in operators) {
  
        var b = +stack.pop();
        var a = +stack.pop();
  
        var value = operators[ch](a, b);
        stack.push(value);
  
      }
  
      
  
    }
  
    if (stack.length > 1)
      throw "ParseError: " + string + ", stack: " + stack;
  
    return stack[0];
  
  }
  
  
  var operators = {
    "+": function (a, b) { return a + b },
    "-": function (a, b) { return a - b },
    "*": function (a, b) { return a * b },
    "/": function (a, b) { return a / b }
  };
  
  
  
  console.log(postfixEval("5 3 1 \* + 9 -"));