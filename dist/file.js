"use strict";
var _a;
let x = 20;
if (x > 10)
    x += 10;
console.log(x);
let users = [1, 2, 3, 4];
users.forEach(x => x.toString);
let users1 = [1, "Mahi"];
var Size;
(function (Size) {
    Size[Size["Small"] = 2] = "Small";
    Size[Size["Medium"] = 3] = "Medium";
    Size[Size["Large"] = 4] = "Large";
})(Size || (Size = {}));
;
let size = Size.Large;
console.log(size);
function theFunction(income, taxYears) {
    let vatiableNotUsed = 21;
    if ((taxYears || 2022) > 2020)
        return income * 1.2;
    return income;
}
console.log(theFunction(1001, 2000));
console.log(theFunction(1001));
let employee = {
    id: 1, name: "Mahendra",
    retire: (date) => console.log(date)
};
let emp = {
    id: 1, name: "Mahendra",
    retire: (date) => console.log(date)
};
function UnionFunction(weight) {
    if (typeof weight === "number") {
        return weight;
    }
    else {
        return parseInt(weight);
    }
}
console.log(UnionFunction(12));
console.log(UnionFunction("14"));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quentity;
quentity = 100;
console.log(quentity);
quentity = 50;
console.log(quentity);
quentity = "Mahi";
console.log(quentity);
function getCustomerDate(val) {
    return val === 0 ? null : { birthday: new Date() };
}
let cust = getCustomerDate(1);
if (cust === null) {
    console.log("customer not exist");
}
else if (cust === undefined) {
    console.log("not defined");
}
else {
    console.log(cust.birthday);
}
console.log((_a = cust === null || cust === void 0 ? void 0 : cust.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=file.js.map