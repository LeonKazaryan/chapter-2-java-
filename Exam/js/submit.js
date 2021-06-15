window.addEventListener("load", (evemt) =>{
    const form = document.forms["myform"];
    const window = document.getElementById("window");
    const information = document.getElementById("information");
    const button = document.getElementById("cancel");
    
    form.addEventListener("submit", (event) => {	
        event.preventDefault();
        window.style.display = "block";
        window.s

        let from = document.getElementById('elastic').value;
        let to = document.getElementById('elastic-2').value;
        let dateFrom = document.getElementById("date-from").value;
        let dateBack = document.getElementById('date-back').value;								
    
        information.innerText = `Вы купили билеты из города ${from} (${dateFrom}) в город ${to} (${dateBack}) `;
    })
    
    button.addEventListener("click", (event) => {
        event.preventDefault();
        window.style.display = "none";
    })
})
