const box = document.querySelector('.box');
const horizontalInput = document.getElementById('horizontal');
const verticalInput = document.getElementById('vertical');
const blurInput = document.getElementById('blur');
const spreadInput = document.getElementById('spread');
const colorInput = document.getElementById('color');

horizontalInput.addEventListener('input', updateShadow);
verticalInput.addEventListener('input', updateShadow);
blurInput.addEventListener('input', updateShadow);
spreadInput.addEventListener('input', updateShadow);
colorInput.addEventListener('input', updateShadow);

function updateShadow()
{
    const horizontal = parseInt(horizontalInput.value);
    const vertical = parseInt(verticalInput.value);
    const blur = parseInt(blurInput.value);
    const spread = parseInt(spreadInput.value);
    const color = colorInput.value;
    box.style.boxShadow = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`;
}