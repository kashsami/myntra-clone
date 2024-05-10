  let bagItems;
  onLoad();

  function onLoad() {
    let bagItemStr = localStorage.getItem(`bagItems`);
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayItemOnHomePage();
  displayBagIcon();
 }

  function addToBag (itemId) {
    bagItems.push(itemId);
    localStorage.setItem(`bagItems`, JSON.stringify(bagItems));
    displayBagIcon();
  }

 function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
 if (bagItems.length > 0) {
  bagItemCountElement.style.visibility = 'visible';
  bagItemCountElement.innerHTML = bagItems.length;
 } else {
  bagItemCountElement.style.visibility = 'hidden';
 }
 }


  function displayItemOnHomePage()
   {
  let itemscontainerElement = document.querySelector(`.items-container`);
  if (!itemscontainerElement) {
    return;
  }

  let innerHTML = ``;
  items.forEach(item => {
    innerHTML += `<div class="item-container">
    <div class="">
  <div class="card" style="width: 18rem;"class="col-sm-3">
      <img class= "item-image" src="${item.image}">
      <div class="card-body">
        <div class="rating">
        <b> ${item.rating.stars}⭐| ${item.rating.noofReviews}  </b>
        </div>
        <div class="company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
       <span class="
       current-price"><b>${item.current_price}</b></span>
       <span class="original-price">${item.original_price}</span>
       <span class="discount"><b>${item.discount_percentage}</b></span>
  </div>
  <button class="btn-add-bag" onclick=" addToBag(${item.id})" ><b>Add To Bag</b></button>
    </div>`
  });

  itemscontainerElement.innerHTML = innerHTML;
};