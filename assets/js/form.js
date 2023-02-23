// has to do 4 things:
    // 1. make submit button launch function with id of its parent form
    // 2. look for input fields in the form
    // 3. for each field, copy its content to an output with the same name + '-'
    // 4. make the sentence containing the output fields visible. 

for(var i=0; i<document.forms.length; i++){
    var Form = document.forms[i];
    var formButton = Form.querySelector("button");
    let inputs = Form.querySelectorAll('input');

    formButton.disabled = true; 

    for (i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input',() => {
          let values = []
          inputs.forEach(v => values.push(v.value))
          formButton.disabled = values.includes('')
        });
    }
}
    // form.addEventListener("submit", myListener,false);}
    
function generate(element) {
    var Form = element.form;
    var inputs = Form.elements;

    for(var i=0, iLen=inputs.length; i<iLen; i++) {
        if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
            var inputName = inputs[i].name;
            var inputValue = inputs[i].value;
            var linkName = new String(inputName+"_");
            // console.log(linkName);
            
            var output = document.getElementById(linkName);
            output.innerHTML = inputValue;

            if (inputValue === ""){
                formButton.disabled = true;
            } else {
                formButton.disabled = false;
            }
        }   
    }

    var results = Form.getElementsByClassName("result");
    for (let i = 0; i < results.length; i++) {
    results[i].style.visibility = "visible";
    };

    return false;
}