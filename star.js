let n = 6;

let str = "";

for(let i = 1; i<= n; i++){
 for(let k = 0; k < i; k++){
 if( i === n){
str += "*";
} 
else{
 if( k === 0 || k == i - 1 ){
str += "*";
 }
 else{
str +=" ";
 }

 }
 }
 str +="\n";
}
console.log( str);











