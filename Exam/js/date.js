const reFirst = /-(0)/mgi;
const reSecond = /(^\d{4})-(\d{2})-(\d{2})/mgi;
const reThird = /(^\d{4})-(\d*)-(\d*)/mgi
const change = '(($1-1970)*3.154e+10)+($2*2.628e+9)+($3*8.64e+7)';
const currentDate = Date.now();

window.addEventListener("load", () => {

    const form = document.forms["myform"]
    let DateFrom = form.elements["date-from"];
    let DateBack = form.elements['date-back'];

    DateFrom.addEventListener("change", (event) => {
        let val = DateFrom.value;
        let valBack = DateBack.value;

        let error = document.getElementById("error_current-date")
        error.style.display = "none";
        let errorTrip = document.getElementById("error_time-trip-2")
        errorTrip.style.display = "none";

        const yearZero = val.match(reFirst)
        const yearZeroBack = valBack.match(reFirst)

        if (yearZero === null) {
            var yearChangedFrom = (val.replace(reSecond, change));
            yearChangedFrom = eval(yearChangedFrom)-18500000000;
            console.log(`Текущая дата ${currentDate}`)
            console.log(`Дата вылета ${yearChangedFrom}`)
            if (yearChangedFrom-currentDate>0){
                // console.log('все норм');
                document.getElementById("date-back").disabled = false;
            } else {
                // console.log('дата вылета меньше текущей')
                return error.style.display = "block";
            }
        } else {
            var yearChangedFrom = (val.replace(reFirst, '-'));
            yearChangedFrom = (yearChangedFrom.replace(reThird, change));
            yearChangedFrom = eval(yearChangedFrom)-1850000000;
            // console.log(`Текущая дата ${currentDate}`)
            // console.log(`Дата вылета ${yearChangedFrom}`)
            if (yearChangedFrom-currentDate>0){
                // console.log('все норм');
                document.getElementById("date-back").disabled = false;
            } else {
                // console.log('дата вылета меньше текущей')
                return error.style.display = "block";
            }
        }
        
        if (yearZeroBack === null) {
            var yearChangedBack = (valBack.replace(reSecond, change));
            yearChangedBack = eval(yearChangedBack)-18500000000;
        } else {
            var yearChangedBack = (valBack.replace(reFirst, '-'));
            yearChangedBack = (yearChangedBack.replace(reThird, change));
            yearChangedBack = eval(yearChangedBack)-1850000000;
        }  

        if (yearChangedBack-yearChangedFrom<0){
            return errorTrip.style.display = "block";
        }
        
    })

    DateBack.addEventListener("change", (event) => {
        let val = DateBack.value; 
        let valFrom = DateFrom.value;

        const button = document.getElementById("button");
        const yearZero = valFrom.match(reFirst)

        if (yearZero === null) {
            var yearChangedFrom = (valFrom.replace(reSecond, change));
            yearChangedFrom = eval(yearChangedFrom)-18500000000;
            console.log(`Текущая дата ${currentDate}`)
            console.log(`Дата вылета ${yearChangedFrom}`)
            if (yearChangedFrom-currentDate>0){
                console.log('все норм');
            } else {
                console.log('дата вылета меньше текущей')
                return error.style.display = "block";
            }
        } else {
            var yearChangedFrom = (valFrom.replace(reFirst, '-'));
            yearChangedFrom = (yearChangedFrom.replace(reThird, change));
            yearChangedFrom = eval(yearChangedFrom)-1850000000;
            // console.log(`Текущая дата ${currentDate}`)
            // console.log(`Дата вылета ${yearChangedFrom}`)
            if (yearChangedFrom-currentDate>0){
                // console.log('все норм');
            } else {
                // console.log('дата вылета меньше текущей')
                return error.style.display = "block";
            }
        }  

        const yearBackZero = val.match(reFirst)
        
        let errorTrip = document.getElementById("error_time-trip")
        let error = document.getElementById("error_current-date_2")
        error.style.display = "none";
        errorTrip.style.display = "none";
        
        if (yearBackZero === null) {
            var yearChangedBack = (val.replace(reSecond, change));
            yearChangedBack = eval(yearChangedBack)-18500000000;
            if (yearChangedBack-currentDate>0){
                button.disabled = false;
            } else {
                // console.log('дата вылета меньше текущей')
                return error.style.display = "block";
            }
        } else {
            var yearChangedBack = (val.replace(reFirst, '-'));
            yearChangedBack = (yearChangedBack.replace(reThird, change));
            yearChangedBack = eval(yearChangedBack)-1850000000;
            // console.log(`Текущая дата ${currentDate}`)
            // console.log(`Дата прилёта ${yearChangedBack}`)
            if (yearChangedBack-currentDate>0){
                button.disabled = false;
            } else {
                // console.log('дата прилёта меньше текущей')
                return error.style.display = "block";
            }
        }  
        console.log(`Дата вылета  ${yearChangedFrom}; Дата прилёта ${yearChangedBack}`) 
        let tripTime = yearChangedBack-yearChangedFrom;
        if (tripTime>0){
            console.log("Даты выбранны корректно")
        } else {
            return errorTrip.style.display = "block";
        }
    })
})
