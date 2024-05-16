"use strict";
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
//# sourceMappingURL=file.js.map