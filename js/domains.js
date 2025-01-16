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
