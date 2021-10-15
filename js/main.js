const servicesTabBtn = document.querySelectorAll('.services__tab-item');
const servicesInfo = document.querySelectorAll('.services__info');

servicesTabBtn.forEach(function(item) {
    item.addEventListener('click', function(){
        let tabId = item.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if(!item.classList.contains('active')){
            servicesTabBtn.forEach(function(item){
                item.classList.remove('active');
            })
    
            servicesInfo.forEach(function(item){
                item.classList.remove('active');
            })
    
            item.classList.add('active');
            currentTab.classList.add('active');
        }
    })
})

document.querySelector('.services__tab-item').click();

const config = {
    type: 'carousel',
    perView: 3,
    breakpoints:
    {
        767: {
            perView: 2
        }
    }
}
new Glide('.cars__slider', config).mount();