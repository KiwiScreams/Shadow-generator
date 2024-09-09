const horizontalInput = document.getElementById("horizontal");
const verticalInput = document.getElementById("vertical");
const blurInput = document.getElementById("blur");
const spreadInput = document.getElementById("spread");
const colorInput = document.getElementById("color");
const box = document.querySelector(".box");
const horizontalValue = document.getElementById("horizontal-value");
const verticalValue = document.getElementById("vertical-value");
const blurValue = document.getElementById("blur-value");
const spreadValue = document.getElementById("spread-value");
const colorValue = document.getElementById("color-value");
const boxShadowInfo = document.querySelector(".box-shadow-info");

horizontalInput.addEventListener("input", updateShadow);
verticalInput.addEventListener("input", updateShadow);
blurInput.addEventListener("input", updateShadow);
spreadInput.addEventListener("input", updateShadow);
colorInput.addEventListener("input", updateShadow);

function updateShadow() {
  const horizontal = parseInt(horizontalInput.value);
  const vertical = parseInt(verticalInput.value);
  const blur = parseInt(blurInput.value);
  const spread = parseInt(spreadInput.value);
  const color = colorInput.value;

  box.style.boxShadow = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`;
  horizontalValue.textContent = horizontal;
  verticalValue.textContent = vertical;
  blurValue.textContent = blur;
  spreadValue.textContent = spread;
  colorValue.textContent = color;
  boxShadowInfo.textContent = `box-shadow: ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};`;
}
