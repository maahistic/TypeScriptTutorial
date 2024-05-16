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

//object defining

let employee : {
    readonly id : number; //preventing fot further modifiocation
    name? : string; //making name optional but not suggested
    retire : (date : Date) => void;
} =  {
    id : 1,  name : "Mahendra",
    retire : (date : Date) =>
        console.log(date)
}

//object defining in more neat way
type Employee =
{
    readonly id : number; //preventing fot further modifiocation
    name? : string; //making name optional but not suggested
    retire : (date : Date) => void;
};

let emp : Employee = 
{
    id : 1,  name : "Mahendra",
    retire : (date : Date) =>
        console.log(date)
}


//union type in functoin 
function UnionFunction(weight: number | string) : number 
{
    if(typeof weight === "number")
        {
            return weight;

        }
    else
    {
        return parseInt(weight);
    }
}

console.log(UnionFunction(12));
console.log(UnionFunction("14"));
//to use below code we need to disable the strictNullChecks if we are not taking null as input in function
//console.log(UnionFunction(null));


//intersaction types
type Draggable =
{
    drag: () => void
};

type resizable =
{
    resize: () => void
};

type UIWidger = Draggable & resizable;

let textBox : UIWidger =
{
    drag: () => {},
    resize: () => {}
}

//Literal values with unions
let quentity : 50|100|"Mahi";

quentity = 100;
console.log(quentity);
quentity = 50;
console.log(quentity);
quentity = "Mahi";
console.log(quentity);
// quentity = 51;  not possible

//optional chaining

type Customer = 
{
    birthday : Date
};

function getCustomerDate(val : number ) : Customer | null | undefined
{

    return val === 0 ? null : {birthday : new Date()};
}

let cust  = getCustomerDate(1);

if(cust === null)
    {
        console.log("customer not exist");
    }
else if(cust === undefined){
    console.log("not defined");
}
else{
    console.log(cust.birthday);
}

//instead of using if else we can use optinal chaining
console.log(cust?.birthday?.getFullYear());
