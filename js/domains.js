const domainsSearchForm = document.querySelector('.domains__search-form');
const domainsHideOccupiedBtn = document.querySelector('.domains__search-results-top-hideoccupied');

function showSearchResults() {
  const domainsSearch = document.querySelector('.domains__search');
  if (domainsSearch) domainsSearch.classList.add('search');
}

function hideSearchResults() {
  const domainsSearch = document.querySelector('.domains__search');
  if (domainsSearch) domainsSearch.classList.remove('search');
}

if (domainsSearchForm) {
  domainsSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    showSearchResults();
  });
}

if (domainsHideOccupiedBtn) {
  domainsHideOccupiedBtn.addEventListener('click', (event) => {
    const domainsSearchResults = document.querySelector('.domains__search-results');
    if (domainsSearchResults) domainsSearchResults.classList.toggle('freeonly');
  });
}

const searchResults = document.querySelectorAll('.domains__search-results-list-item');

searchResults.forEach((searchResult) =>
  searchResult.addEventListener('click', (event) => {
    const baseClassName = 'domains__search-results-list-item';
    const isAddToCartBtn = event.target.classList.contains(`${baseClassName}-addtocart`);
    const isWhoIsBtn = event.target.classList.contains(`${baseClassName}-whois`);
    if (isAddToCartBtn) {
      event.currentTarget.classList.add('active');
      updateDomainOrderList();
    }
    if (isWhoIsBtn) {
      const modal = event.currentTarget.querySelector('.domains__search-modal');
      if (modal) modal.classList.add('active');
    }
  })
);

const domainsSearchModals = document.querySelectorAll('.domains__search-modal');

domainsSearchModals.forEach((modal) =>
  modal.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('domains__search-modal-close');
    if (isLayout || isClose) {
      event.currentTarget.classList.remove('active');
    }
  })
);

function updateDomainOrderList() {
  const domainsCartItems = document.querySelectorAll('.domains__search-results-list-item.active');
  const domainsOrderList = document.querySelector('.domains__order-list');
  const domainsTotalPriceNumber = document.querySelector('.domains__order-total-price-number');
  const domainsTotalPriceCurrency = document.querySelector('.domains__order-total-price-currency');

  const orderListItems = [...domainsCartItems].map((item) => {
    const baseClassName = 'domains__search-results-list-item';
    const domainNameElem = item.querySelector(`.${baseClassName}-domain`);
    const oldPriceCurrencyElem = item.querySelector(`.${baseClassName}-price-old-currency`);
    const oldPriceValueElem = item.querySelector(`.${baseClassName}-price-old-value`);
    const newPriceCurrencyElem = item.querySelector(`.${baseClassName}-price-new-currency`);
    const newPriceValueElem = item.querySelector(`.${baseClassName}-price-new-value`);
    const itemId = item.id;

    const domainName = domainNameElem.innerText.toLowerCase() || 'unknown';
    const oldPriceCurrency = oldPriceCurrencyElem.innerText || '-';
    const oldPriceValue = oldPriceValueElem.innerText || '-';
    const newPriceCurrency = newPriceCurrencyElem.innerText || '-';
    const newPriceValue = newPriceValueElem.innerText || '-';

    const orderListItem = document.createElement('li');
    orderListItem.classList.add('domains__order-list-item');
    orderListItem.setAttribute('data-domainid', itemId);
    orderListItem.innerHTML = `
      <div class="domains__order-list-item-top">
        <h4 class="domains__order-list-item-title">${domainName}</h4>
        <div class="domains__order-list-item-close"></div>
      </div>

      <div class="domains__order-list-item-price domains__order-list-item-price_old">
        <div class="domains__order-list-item-price-text">Registration for 1 year</div>
        <div class="domains__order-list-item-price-value">
          <span class="domains__order-list-item-price-value-currency">${oldPriceCurrency}</span>
          <span class="domains__order-list-item-price-value-number">${oldPriceValue}</span>
        </div>
      </div>

      <div class="domains__order-list-item-price domains__order-list-item-price_new">
        <div class="domains__order-list-item-price-text">Discounted price</div>
        <div class="domains__order-list-item-price-value">
          <span class="domains__order-list-item-price-value-currency">${newPriceCurrency}</span>
          <span class="domains__order-list-item-price-value-number">${newPriceValue}</span>
        </div>
      </div>
    `;

    orderListItem.addEventListener('click', (event) => {
      const isCloseButton = event.target.classList.contains('domains__order-list-item-close');
      const targetDomainId = event.currentTarget.dataset.domainid;
      const targetDomainElem = document.getElementById(targetDomainId);
      if (isCloseButton && targetDomainElem) {
        targetDomainElem.classList.remove('active');
        updateDomainOrderList();
      }
    });

    return orderListItem;
  });

  if (domainsOrderList) {
    domainsOrderList.innerHTML = '';
    domainsOrderList.append(...orderListItems);
  }

  if (domainsTotalPriceNumber && domainsTotalPriceCurrency) {
    const baseClassName = 'domains__order-list-item-price';
    const newPriceCurrencyElem = document.querySelector(`.${baseClassName}-value-currency`);

    if (newPriceCurrencyElem) {
      domainsTotalPriceCurrency.innerText = newPriceCurrencyElem.innerHTML;
    }

    const totalPriceValue = orderListItems
      .map((item) => {
        const newPriceValueElem = item.querySelector(
          `.${baseClassName}_new  .${baseClassName}-value-number`
        );
        console.log(`.${baseClassName}-price-new-value`);
        const newPriceValue = Number(newPriceValueElem.innerText);
        const result = Number.isNaN(newPriceValue) ? 0 : newPriceValue;
        return result;
      })
      .reduce((acc, price) => acc + price, 0);

    domainsTotalPriceNumber.innerText = totalPriceValue;
  }
}

updateDomainOrderList();
