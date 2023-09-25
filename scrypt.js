const numbers = document.getElementsByClassName("numbers") || [];

[...numbers].forEach(element => {
    element.addEventListener("click", (e) => {
        
        let value = e.target.value;
       if(value == "="){
        inputbox.value = eval(inputbox.value)
       }
       else if(value == "AC"){
        inputbox.value = '';
       }
       else if(value == "DE"){
        inputbox.value = inputbox.value.toString().slice(0, -1)
       }
       else{
        inputbox.value += value;
       }
    })
});

