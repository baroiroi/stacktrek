function myNum(x, y){
if(y === undefined){
//    for(let i = 1; i <= x; i++){
//       if(i % 2 === 0 && i % 5 === 0){
//            console.log('fizzbuzz')
//        }
//        else if(i % 5 === 0){
//           console.log('buzz')
//        }
//        else if(i % 2 === 0){
//            console.log('fizz')
//        }
//        else{
//            console.log(i)
//        }
//    }
y = x
x = 1
for(;x <= y; x++){
    if(x % 2 === 0 && x % 5 === 0){
        console.log('fizzbuzz')
    }
    else if(x % 5 === 0){
        console.log('buzz')
    }
    else if(x % 2 === 0){
        console.log('fizz')
   }
   else{
    console.log(x)
     }
                }
    }
                            }
myNum(10)