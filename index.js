const initial = document.querySelector('.initial');
const interes = document.querySelector('.interes');
const repes = document.querySelector('.repes');
const button = document.querySelector('button');
const container = document.querySelector('.container');

button.addEventListener('click', (e) => {
    e.preventDefault();
    let initialUse = parseFloat(initial.value);
    let interesUse = parseFloat(interes.value);
    let repesUse = parseFloat(repes.value);

    let result;

    if (initial.value != '' && interes.value != '' && repes.value != '') {
        for (let i = 0; i < repesUse; i++) {
            initialUse += (interesUse * initialUse / 100);
        }
        result = `El resultado es: ${initialUse.toFixed(2)}`;
    } else {
        result = "Los valores ingresados no son válidos";
    }
    writeHTML(result);
})

function writeHTML(result) {
    container.textContent = '';
    const div = document.createElement('div');
    const p = document.createElement('p');

    p.textContent = result;

    div.append(p);
    container.append(div);
}