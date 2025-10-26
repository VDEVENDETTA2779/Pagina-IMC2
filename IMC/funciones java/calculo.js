document.getElementById('imcForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const resultDiv = document.getElementById('result');

        if (!isFinite(weight) || weight <= 0 || !isFinite(height) || height <= 0) {
            resultDiv.textContent = 'Por favor ingresa un peso y una altura válidos.';
            return;
        }

    const imc = weight / (height * height);
    resultDiv.textContent = 'Su IMC es: ' + imc.toFixed(2);

    switch (true) {
        case (imc < 18.5):
            resultDiv.textContent += ' - Estás bajo de peso.';
            break;
        case (imc >= 18.5 && imc < 24.9):
            resultDiv.textContent += ' - Tienes un peso normal.';
            break;
        case (imc >= 25 && imc < 29.9):
            resultDiv.textContent += ' - Estás en sobrepeso.';
            break;
        default:
            resultDiv.textContent += ' - Estás en obesidad.';
    }
});