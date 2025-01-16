import './custom-select.js';
import './map.js';

const headerBurgerButton = document.querySelector('.header__burger-button');
const headerMenu = document.querySelector('.header__menu');

if (headerBurgerButton && headerMenu) {
  headerBurgerButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    headerMenu.classList.toggle('active');
  });
}

const headerInfo = document.querySelector('.header__info');

if (headerInfo) {
  headerInfo.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isTitle = event.target.classList.contains('header__info-title');
    const isLink = event.target.classList.contains('header__info-menu-item-link');

    if (isLayout || isLink) {
      event.currentTarget.classList.remove('active');
    }

    if (isTitle) {
      event.currentTarget.classList.add('active');
    }
  });
}

// Today, 18 Dec, 01:59:36 GMT+1

const advantagesDate = document.querySelector('.advantages__date');

function updateDate() {
  const date = new Date();
  const dateOptions = {
    day: 'numeric',
    month: 'short',
  };
  const dateString = date.toLocaleDateString('en-GB', dateOptions);
  const timeOptions = {
    timeStyle: 'long',
  };
  const timeString = date.toLocaleTimeString('en-GB', timeOptions);

  if (advantagesDate) {
    advantagesDate.innerHTML = `Today, ${dateString}, ${timeString}`;
  }
}

updateDate();

setInterval(() => updateDate(), 1000);

// counters

const advantagesElem = document.querySelector('.advantages');

let isCounterUpdated = false;

if (advantagesElem) {
  window.addEventListener('scroll', () => {
    const isOverAdvantagesElem = window.scrollY >= advantagesElem.offsetTop - 200;
    const counterClassName = 'advantages__card-number-value';
    if (isOverAdvantagesElem && !isCounterUpdated) {
      updateCounters(counterClassName);
      isCounterUpdated = true;
    }
  });
}

function updateCounters(counterClassName) {
  const advantagesCardNumberValueElems = document.querySelectorAll(`.${counterClassName}`);

  advantagesCardNumberValueElems.forEach((counter) => {
    const counterLimit = Number(counter.dataset.limit) * 10;
    const step = counterLimit / 100;

    let counts = setInterval(updateCounter, 10);
    let upto = 0;

    function updateCounter() {
      upto += step;
      counter.innerHTML = Math.round(upto) / 10;
      if (upto >= counterLimit) {
        clearInterval(counts);
      }
    }
  });
}

///

const webHostingTypesButtons = document.querySelectorAll('.web-hosting__types-button');

webHostingTypesButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    webHostingTypesButtons.forEach((button) => {
      button.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  });
});

const webHostingSwitchButtons = document.querySelectorAll('.web-hosting__heading-switch-button');

webHostingSwitchButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    webHostingSwitchButtons.forEach((button) => {
      button.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  });
});

const webHostingLocationsButtons = document.querySelectorAll('.web-hosting__locations-button');

webHostingLocationsButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    webHostingLocationsButtons.forEach((button) => {
      button.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  });
});

///

const webHostFeatureItemName = 'web-hosting__plan-features-list-item';
const webHostFeatureItems = document.querySelectorAll(`
  .${webHostFeatureItemName}:has(.${webHostFeatureItemName}-info)
`);

webHostFeatureItems.forEach((item) =>
  item.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isTitle = event.target.classList.contains(`${webHostFeatureItemName}-text`);

    if (isTitle) {
      event.currentTarget.classList.add('active');
    }

    if (isLayout) {
      event.currentTarget.classList.remove('active');
    }
  })
);

const webHostPlans = document.querySelectorAll('.web-hosting__plan');

webHostPlans.forEach((plan) => {
  plan.addEventListener('click', (event) => {
    const isSeeAllBtn = event.target.classList.contains('web-hosting__plan-see-all-button');

    if (isSeeAllBtn) {
      event.currentTarget.classList.toggle('shown');
    }
  });
});

const webHostLocations = document.querySelector('.web-hosting__locations');
const webHostLocationsShowButton = document.querySelector('.web-hosting__locations-show');

if (webHostLocations && webHostLocationsShowButton) {
  webHostLocationsShowButton.addEventListener('click', () => {
    webHostLocations.classList.toggle('shown');
  });
}

////

const vpnLocationsButtons = document.querySelectorAll('.vpn__locations-button');

vpnLocationsButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    vpnLocationsButtons.forEach((button) => {
      button.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  });
});

const vpnLocations = document.querySelector('.vpn__locations');
const vpnLocationsShowButton = document.querySelector('.vpn__locations-show');

if (vpnLocations && vpnLocationsShowButton) {
  vpnLocationsShowButton.addEventListener('click', () => {
    vpnLocations.classList.toggle('shown');
  });
}
