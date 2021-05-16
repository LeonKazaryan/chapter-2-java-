window.addEventListener("load", () => {
    const form = document.forms["markdown"];
  
    const input = form.elements["source"];
  
    const div = document.getElementById("result");
  
  
    form.addEventListener("submit", ev => {
      ev.preventDefault();
  
      const source = input.value;
  
      div.innerHTML = source;

      let a = /\[.*\]\(.*\)/gm;
      

    })
  
  
  });
  