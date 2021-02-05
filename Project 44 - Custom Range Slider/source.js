let inputRange = document.querySelector("#range");
let label = document.querySelector(".inputLabel");

inputRange.addEventListener("input", () => {
  let value = inputRange.value;

  let sliderMin = inputRange.min;
  let slidermax = inputRange.max;
  let inputWidth = inputRange.offsetWidth;
  let labelWidth = getComputedStyle(label).getPropertyValue("width");
  labelWidth = labelWidth.substr(0, labelWidth.length - 2);

  let labelPosition =
    (value * inputWidth) / (slidermax - sliderMin) - labelWidth / 2;

  label.style.left = `${
    labelPosition - mapRangeToAnother(value, sliderMin, slidermax, -10, 10)
  }px`;

  label.innerText = value;
});

const mapRangeToAnother = (value, min, max, new_min, new_max) => {
  return ((value - min) * (new_max - new_min)) / (max - min) + new_min;
};
