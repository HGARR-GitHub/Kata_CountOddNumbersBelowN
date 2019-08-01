function oddCount(n){
  // your code here
  let count = 0
  for (let i=1;i<n;i+=2){
    if (i % 2 != 0){
      count++
    }  
  }
  return count
}

oddCount(15023) //result 7511
oddCount(7)  //result 3
