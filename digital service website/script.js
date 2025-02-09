// Side Bar Start

function openNav(){
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '0';
    }else{
        console.error('error:side panel not found');
    }
}

function closeNav(){
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '-320px';
    }else{
        console.error('error:side panel not found');
    }
}

// Right Nav Open Close
function openRNav(){
    'use strict';
    const sidepanel = document.getElementById('right_side');
    if(sidepanel){
        sidepanel.style.right = '0';
    }else{
        console.error('error:side panel not found');
    }
}

function closeRNav(){
    'use strict';
    const sidepanel = document.getElementById('right_side');
    if(sidepanel){
        sidepanel.style.right = '-355px';
    }else{
        console.error('error:side panel not found');
    }
}
// Right Nav end

// Search Bar Open Close
function open_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height = '100vh';
        searchpanel.style.borderRadius = '0';
    }else{
        console.error('error:search panel not found');
    }
}
function close_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height = '0';
        searchpanel.style.borderTopLeftRadius = '100%';
        searchpanel.style.borderTopRightRadius = '100%';
    }else{
        console.error('error:search panel not found');
    }
}

// Portfolio Gallary Tab
function open_img(evt, cityName){
    let i, tabcontent, tablinks;

    // hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    // remove active class form all tab links
    tablinks = document.getElementsByClassName('tablinks');
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove('active');
    }

    // show the selected content and mark the corresponding tab link as active
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add('active');
}

// footer validation start
const fom = document.getElementById('footer-form');
const footerMessage = document.getElementById('footer-message');

fom.addEventListener('submit', (event)=>{
    event.preventDefault();
    footerMessage.innerHTML = '~ Form Submitted successfully';
    footerMessage.style.display = 'flex';
    fom.reset();
    setTimeout(() => {
        footerMessage.style.display = 'none';
    }, 3000)
})

// button back to top

window.onscroll = function(){
    scrollFunction()
}
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById('backToTopBtn').style.display = 'block';
    } else {
        document.getElementById('backToTopBtn').style.display = 'none';
    }
}

function scrollToTop(){
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
        behavior: 'smooth'
    });
}

// Slick Slider
$('.sliderlogo').slick({
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 5,
    sliderToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            sliderToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            sliderToScroll: 1,
            infinite: true,
            dots: false,
        }
    }]
});
$('#cards').slick({
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 4,
    sliderToScroll: 2,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            sliderToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            sliderToScroll: 1,
            infinite: true,
            dots: false,
        }
    }]
});
$('.s-card').slick({
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 3,
    sliderToScroll: 2,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            sliderToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            sliderToScroll: 1,
            infinite: true,
            dots: false,
        }
    }]
});