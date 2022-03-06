$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function redirecionarLer() {
    window.location.assign('https://mangalivre.net/manga/naruto/1')
}

function redirecionarInfo() {
    window.location.assign('https://pt.wikipedia.org/wiki/Naruto#:~:text=Naruto%20(%E3%83%8A%E3%83%AB%E3%83%88)%20%C3%A9%20uma%20s%C3%A9rie,ninja%20l%C3%ADder%20de%20sua%20vila.')
}
