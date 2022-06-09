function evenOrOdd(val) {
   try{
       if (val % 2 == 0) {
        console.log("This number is even");
         } else {
          console.log("This number is odd");
         }
   }catch(err){
       console.log(err);
   }
  }
  evenOrOdd(3);
