const botoes = [...document.getElementsByClassName('button')];
const numeros = botoes.filter(e => {
    console.log(new Number(e.innerText).valueOf())
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(new Number(e.innerText).valueOf());
});
const visor = document.getElementById("visor");
const observer = new MutationObserver(function(mutationsList) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
            updateTextSizeScreen(visor);
        }
    }
});
observer.observe(visor, { attributes: true, childList: true, subtree: true });

// 
numeros.forEach((e) => {
    e.addEventListener("click", handleNumbers);
});

/**
 * Concatenar os números digitas (Transformando para números)
 * 
*/
function handleNumbers(e){
    let currentValue = visor.innerText;
    if(currentValue.length <= 20){
        let nextValue = e.target.innerText;
        currentValue = new Number(currentValue + nextValue).valueOf();
        visor.innerText = currentValue;
    }
}

/**
 * 
 * 
*/
function updateTextSizeScreen(){
    if(visor.innerText.length >= 15){
        visor.style.fontSize = '1rem';
    }else if(visor.innerText.length >= 10) {
        visor.style.fontSize = '3rem';
    }
}