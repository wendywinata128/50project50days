let cardHeader = document.querySelector(".card-header");
let productTitle = document.querySelector(".product-title");
let description = document.querySelector(".description");
let authorInfo = document.querySelector(".card-author");
let animatedBg = document.querySelectorAll(".animated-bg");

setTimeout(setUpCard, 2000);

function setUpCard() {
  cardHeader.innerHTML = `
    <img
    src="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    alt=""
    />
    `;

  productTitle.innerHTML = `
    Asus X303ZA Full Power
    `;

  description.innerHTML = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  nostrum officiis mollitia laboriosam rem velit tempora architecto
  optio consectetur laborum deleniti cupiditate fugiat itaque, alias
  hic perferendis! Alias est aut inventore iure similique enim, saepe
  dolorem vitae molestias distinctio minus autem beatae laudantium
  excepturi numquam natus facere aliquid fuga provident!
    `;

  authorInfo.innerHTML = `
  <img
  class="animated-bg"
  src="https://images.unsplash.com/photo-1610075698239-00e750255acb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  alt="author"
/>
<div class="author-info">
  <span class="name">Renaa</span>
  <span class="job">Consultant Student in Japan</span>
</div>
    `;

  deleteAnimate();
}

function deleteAnimate() {
  animatedBg.forEach((item) => {
    item.classList.remove("animated-bg");
    if (item.classList.contains("animated-text"))
      item.classList.remove("animated-text");
  });
}
