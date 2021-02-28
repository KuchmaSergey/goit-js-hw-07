const refs = {
    decrementtBtnRef: document.querySelector('#counter>button'),
    incrementBtnRef: document.querySelector('#counter>button:last-child'),
    counterRef: document.querySelector('#value')
};
let counterValue = 0;

refs.incrementBtnRef.addEventListener('click', increment);
refs.decrementtBtnRef.addEventListener('click',decrement);

function increment() {
    counterValue +=1;
    refs.counterRef.textContent = counterValue;
    
};

function decrement() {
    counterValue -=1;
    refs.counterRef.textContent = counterValue;
}