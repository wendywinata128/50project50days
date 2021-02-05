let inputNumber = document.querySelectorAll("input");

// inputNumber[0].focus();

inputNumber.forEach((item) => {
  item.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      item.value = "";
      if (item.nextElementSibling)
        setTimeout(() => item.nextElementSibling.focus(), 10);
    } else if (e.key === "Backspace" && item.previousElementSibling) {
      setTimeout(() => item.previousElementSibling.focus(), 10);
    }
  });
});
