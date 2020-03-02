for(let counter = 0; counter <= 100; counter = counter + 1)
{
  if (counter % 3 == 0) {
    if (counter % 5 == 0){
       console.log("fizzbuzz"); }
    else console.log("fizz");
  }

  else if (counter % 5 == 0){
    console.log("buzz");
  }
  else console.log(counter);
}
