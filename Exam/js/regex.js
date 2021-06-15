let year = "2021-01-01";
let reFirst = /-(0)/mgi;
let reSecond = /(^\d{4})-(\d{2})-(\d{2})/mgi;
let reThird = /(^\d{4})-(\d*)-(\d*)/mgi
let yearZero = year.match(reFirst)
let yearFirst = (year.replace(reSecond,'(($1-1970)*3,154e+10)+($2*2.628e+9)+($3*8.64e+7)'));
let change = '(($1-1970)*3.154e+10)+($2*2.628e+9)+($3*8.64e+7)';
let currentDate = Date.now();

console.log("--------------------------------------------")
console.log(year);

if (yearZero === null) {
    let yearChanged = (year.replace(reSecond, change));
    yearChanged = eval(yearChanged);
    if (yearChanged-currentDate>0){
        console.log('все норм');
        return true;
    } else {
        console.log('дата вылета меньше текущей')
        return false;
    }
} else {
    console.log("есть нули");
    let yearChanged = (year.replace(reFirst, '-'));
    yearChanged = (yearChanged.replace(reThird, change));
    yearChanged = eval(yearChanged);
    if (yearChanged-currentDate>0){
        console.log('все норм');
        return true;
    } else {
        console.log('дата вылета меньше текущей')
        return false;
    }
}




