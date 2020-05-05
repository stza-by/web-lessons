function task_1(str) {
 const splitted = str.split("");
 console.log(splitted); 

 const reversed = splitted.reverse();
 console.log(reversed);

 const joined = reversed.join("");
 console.log(joined);

 return joined;
}

const result = task_1("abc def");