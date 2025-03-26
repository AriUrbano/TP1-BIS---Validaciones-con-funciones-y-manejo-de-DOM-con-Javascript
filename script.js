function validarNota(input) {
    const nota = parseFloat(input.value);
    if (nota < 1 || nota > 10) {
        input.style.color = 'red';
    } else {
        input.style.color = 'green';
    }
}
function calcularPromedio() {
    const notas = obtenerNotas();
    if (!camposCompletos()) {
        alert('Por favor, complete todos los campos.');
        return;
    }
    if (notas.some(nota => nota < 1 || nota > 10)) {
        alert('Por favor, ingrese notas válidas entre 1 y 10.');
        return;
    }
    const promedio = (notas[0] + notas[1] + notas[2]) / 3;
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Promedio: ${promedio}`;
    if (promedio >= 6) {
        resultado.style.color = 'green';
    } else {
        resultado.style.color = 'red';
    }
}
function mostrarMateriaMayorNota() {
    const notas = obtenerNotas();
    if (!camposCompletos()) {
        alert('Por favor, complete todos los campos.');
        return;
    }
    if (notas.some(nota => nota < 1 || nota > 10)) {
        alert('Por favor, ingrese notas válidas entre 1 y 10.');
        return;
    }
    const materias = ['Matemática', 'Lengua', 'EFSI'];
    const maxNota = Math.max(...notas);
    const materiasConMaxNota = materias.filter((materia, posicion) => notas[posicion] === maxNota);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `Materia(s) con mayor nota: ${materiasConMaxNota.join(', ')}`;
    resultadoDiv.style.color = 'blue';
}

function obtenerNotas() {
    const matematica = parseFloat(document.getElementById('matematica').value);
    const lengua = parseFloat(document.getElementById('lengua').value);
    const efsi = parseFloat(document.getElementById('efsi').value);
    return [matematica, lengua, efsi];
}
function camposCompletos() {
    const matematica = document.getElementById('matematica').value;
    const lengua = document.getElementById('lengua').value;
    const efsi = document.getElementById('efsi').value;
    return matematica != '' && lengua != '' && efsi != '';
}