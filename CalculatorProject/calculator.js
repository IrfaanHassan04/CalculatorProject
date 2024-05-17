function updateInput(value) {
    const inputField = document.getElementById('mathInput');
    if (inputField.value === '0') {
        inputField.value = value;
    } else {
        inputField.value += value;
    }
}
function clearInput() {
    document.getElementById('mathInput').value = '0';
    document.getElementById('result').textContent = '';
}
function solveMathExpression() {
    let input = document.getElementById('mathInput').value.trim();

    if (!input) {
        alert('Please enter a math expression!');
        return;
    }

    try {
        input = input.replace(/\^/g, '**');
        input = input.replace(/(\d+(\.\d+)?)%/g, '($1/100)');
        const result = eval(input);
        document.getElementById('result').textContent = `Result: ${result}`;
        document.getElementById('mathInput').value = result;
    } catch (error) {
        console.error('Error evaluating expression:', error);
        alert('Invalid math expression! Please check your input.');
    }
}
document.querySelectorAll('.key').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value) {
            updateInput(value);
        }
    });
});
document.getElementById('solveButton').addEventListener('click', solveMathExpression);
document.getElementById('clearButton').addEventListener('click', clearInput);
