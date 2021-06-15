window.addEventListener("load", () => {

    const form = document.forms["myform"]
    let formInput = form.elements.elastic;
    let SecondFormInput = form.elements["elastic-2"];

    formInput.addEventListener("input", (event) => {
        let val = formInput.value.trim();
        let elasticItems = document.querySelectorAll('.elastic li');
        if (val != ''){
            elasticItems.forEach(function(elem){
                if (elem.innerText.search(val) == -1){
                    elem.classList.add("hide");
                    elem.innerHTML = elem.innerText;
                } else {
                    elem.classList.remove('hide');
                    let str = elem.innerText;
                    elem.innerHTML = insertMark(str,elem.innerText.search(val), val.length);
                }
            });
        } else {
            elasticItems.forEach(function(elem){
                elem.classList.remove('hide');
                elem.innerHTML = elem.innerText;
            })
        }
    })

    SecondFormInput.addEventListener("input", (event) => {
        let val = SecondFormInput.value.trim();
        let elasticItems = document.querySelectorAll('.elastic-2 li');
        if (val != ''){
            elasticItems.forEach(function(elem){
                if (elem.innerText.search(val) == -1){
                    elem.classList.add("hide");
                    elem.innerHTML = elem.innerText;
                } else {
                    elem.classList.remove('hide');
                    let str = elem.innerText;
                    elem.innerHTML = insertMark(str,elem.innerText.search(val), val.length);
                }
            });
        } else {
            elasticItems.forEach(function(elem){
                elem.classList.remove('hide');
                elem.innerHTML = elem.innerText;
            })
        }
    })

    let elemFrom = document.getElementsByClassName("li-from")
    elemFrom = Array.prototype.slice.call( elemFrom ) //преобразование в массив

    elemFrom.forEach(element => element.addEventListener("click", () => {
        formInput.value = element.innerText;
        console.log("click");
    })
    )

    let elemTo = document.getElementsByClassName("li-to")
    elemTo = Array.prototype.slice.call( elemTo ) //преобразование в массив

    elemTo.forEach(element => element.addEventListener("click", () => {
        SecondFormInput.value = element.innerText;
        console.log("click");
    })
    )

    function insertMark(string,position,len){
        return string.slice(0, position)+"<mark>"+string.slice(position, position+len)+"</mark>"+string.slice(position+len);
    }
   
})