const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Please input password to be validated. ', password => {
      if(password.split('').length >= 10){
          console.log('Password validated!')
      } else {
          console.log('Password validation failed.')
      }
    readline.close();
  });