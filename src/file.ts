let x = 20;

if (x>10)
    x += 10;
console.log(x);

let users: number[] = [1,2,3,4];
users.forEach(x => x.toString);

//tuples
let users1 : [number, string] = [1 ,"Mahi"];

//const
// const small = 1;
// const medium = 2;
// const large = 3;

//enum
enum Size {Small = 2, Medium, Large};
let size = Size.Large;
console.log(size);


//here we use noUnusedParameters as true if the income nover used 
//if we are not returning anything in this function we can use noImplicitReturns

//Below approach we can used if we want a default value of parameter
//function theFunction(income : number, taxYears=2022 ) : number
function theFunction(income : number, taxYears? : number) : number
{

    //below varibale is not used, so we use noUnusedLocals to detect it.
    let vatiableNotUsed = 21;

    //return 21000;
    if((taxYears || 2022)>2020)
    return income*1.2;

    return income;
}

console.log(theFunction(1001,2000));
console.log(theFunction(1001));
