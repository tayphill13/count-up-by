$(document).ready(function() {
  $("#btn").click(function(event) {
   event.preventDefault();
   
    var firstNum = parseInt($("#input-1").val());
    var secondNum = parseInt($("#input-2").val());

    console.log('firstNum: ', firstNum)
    console.log('secondNum: ', secondNum)
    
    if (firstNum > secondNum) {
      alert("'Count to' MUST BE greater than 'Count by'");
      return;
    } else 
    if (!firstNum || !secondNum) {
      alert("Enter numbers");
      return;
    } else  {
      for (var index = firstNum; index <= secondNum; index += firstNum) {
        total = index;
        alert(total);
      }
    }

  

  //  var total = 0;
  //  for (var currentNumber = 5; currentNumber <= 30; currentNumber += 5) {
  //    total = currentNumber;
  //     alert("Total is:" + total);
  //  }

  //  var total = 0;
  //  for (var newNumber = 7; newNumber <= 50; newNumber += 7) {
  //    total = newNumber;
  //     alert("Total is: " + total);


  //  }
  });
});