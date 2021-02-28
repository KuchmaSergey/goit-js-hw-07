const inputRef = document.getElementById('name-input');
const outInputRef = document.getElementById('name-output');

inputRef.addEventListener('input',onInputChange);

function onInputChange(event) {    
    outInputRef.textContent = event.currentTarget.value;
    
    if (event.currentTarget.value === "") {
        outInputRef.textContent = "незнакомец";
    }
}
