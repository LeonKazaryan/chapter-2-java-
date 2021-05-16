let RexFind = /^(\d+)(\+|\-|\*|\:)(\d+)/g;

window.addEventListener("load", () => {
    let input = document.forms['calc'].elements['expression'];
    
    // let checkbox = document.forms["calc"].elements['checkbox'];

    let div = document.getElementById("result");



    input.addEventListener("input", () => {

        const value = input.value;
        let groups = Array.from(value.matchAll(RexFind));
        
        groups.flat(Infinity);
        
        let firstNum = Number(groups[0][1]);
        let sign = groups[0][2];
        let secondNum = Number(groups[0][3]);

        if(sign == "+"){
            div.innerHTML = (firstNum+secondNum);
        } else if(sign == "-") {
            div.innerHTML = (firstNum-secondNum);
        } else if(sign == "*"){
            div.innerHTML = (firstNum*secondNum);
        } else if(sign == ":"){
            div.innerHTML = (firstNum/secondNum);
        }

        // if(checkbox.checked){
        //     console.log("чекед");
        // }
     
        // console.log(firstNum+sign+secondNum);

        // div.innerHTML = groups;
    })





})