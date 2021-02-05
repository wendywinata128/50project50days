let counter = document.querySelectorAll(".counter");

counter.forEach((item) => {
  let target = item.getAttribute("data-target");

  item.innerHTML = "0";

  let plus = target / 1000;

  const updateItem = () => {
    const number = +item.innerHTML;

    if (number < target) {
      item.innerHTML = Math.ceil(number + plus);
      setTimeout(updateItem, 1);
    } else {
      item.innerHTML = target;
    }
  };

  updateItem();
});
