//This is a list of exercises from the book "Eloquent Javaascript"

//Looping a triangle
        // let hash = "#";
        // for(let i = 1; i<=7; i++) {

        //     console.log(hash);
        //     hash += "#";

        
        // }


//FIZZBUZZ

// for(let i=1; i <= 100; i++) {
//     if( i % 3 === 0){
//         console.log("Fizz " + i);
//         if( i % 5 === 0 && i % 3 === 0) {
//             console.log("FizzBuzz " + i);
//         }
//     } else if( i % 5 === 0 && !(i % 3 === 0)) {
//         console.log("Buzz " + i);
//         if( i % 5 === 0 && i % 3 === 0) {
//             console.log("FizzBuzz " + i);
//         }
//     }
// }


//CHESSBOARD
let hash = "#";
let space = " ";
let string = "";
for(let i =1; i <=8; i++) {
    for(let j = 1; j<=8; j++){
       if( (j + i) % 2 === 0){
        string += space;
       }else if ( (j + i) % 2 === 1) {
        string += hash;
       }
    }
    
    console.log(string);
    //console.log("\n");
    string = "";
}