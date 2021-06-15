window.addEventListener("load", () => {

    const form = document.forms["myform"]
    let formInput = form.elements.elastic;

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

    let elem = document.getElementsByTagName("li")
    elem = Array.prototype.slice.call( elem ) //преобразование в массив

    elem.forEach(element => element.addEventListener("click", () => {
        formInput.value = element.innerText;
        console.log("click");
    })
    )

    function insertMark(string,position,len){
        return string.slice(0, position)+"<mark>"+string.slice(position, position+len)+"</mark>"+string.slice(position+len);
    }
   
})