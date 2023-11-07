const url = `https://api.unsplash.com/`;
const key = '2EzuniJuTmDtDAlMKX9w6lnCG-R5U8CqopIKgd87eGA';
const body = document.querySelector('.body');
const search = document.querySelector('.search');
const img_search = document.querySelector('.img-search');
const img_cross = document.querySelector('.img-cross');

let value = 'autum';
async function get(value) {
    const response = await fetch(
        url +"search/photos?query=" + value + "&per_page=12&orientation=landscape&client_id="+key
      );
      
      const data = await response.json();
      console.log(data.results);
      const images = data.results
        .map(
          (item) =>
            `<img class="img" src=${item.urls.small} alt=${item.alt_description}>`
        )
        .join('');
  
      body.innerHTML = images;
  }
  get(value);

  function searchImages(e) {
    const search_value = search.value;
    get(search_value);
  }
  
  function imgClose(){
    const value = search.value;
    if(value !== ''){
        img_cross.classList.add('img-cross-active')
    } else{
        img_cross.classList.remove('img-cross-active')
    }
  }
  function close() {
    img_cross.classList.remove('img-cross-active');
    search.value = '';
  }

  img_cross.addEventListener('click', close);
  search.addEventListener('input', imgClose);
  img_search.addEventListener('click', searchImages);
  search.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchImages(e);
    }
  });
  