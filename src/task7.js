const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
  arr[2].push(30);//agregamos 30
  const fila =[31,32,33,34,35];
  arr.push(fila); //agregamos fila de numeros
  arr[3].pop(); //eliminamos 35
  arr[0].reverse(); //invertimos la primera fila
  
  // Type your code above this line!

  console.log(arr)