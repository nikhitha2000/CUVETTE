
    let currentInput = '';
    let previousInput = '';
    let operation = null;
    
      let calculation;
      
      switch (operation) {
        case '+':
          calculation = prev + current;
          break;
        case '-':
          calculation = prev - current;
          break;
        case '*':
          calculation = prev * current;
          break;
        case '/':
          calculation = prev / current;
          break;
        default:
          return;
      }
     