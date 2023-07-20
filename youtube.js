var tl = gsap.timeline()

tl.from(".nav .logo , .nav .search_bar, .nav .sign_in", {
    y: -80,
    duraction: 1,
    stagger: 0.5
})

tl.from(".home ,.line,.left-side h4,.short, .subscription, .library,.history,.trending,.shoping,.music,.movie,.live,.gaming,.news,.sport,.learning,.fashion-beauty", {
    x: -320,
    duraction: 0.2,
    stagger: 0.3
})

gsap.from(".top h3",{
    delay:1.2,
    opacity:0,
    duraction: 0.1,
    stagger: 0.5
})
gsap.from(".bottom .row1 .box ",{
    opacity:0,
    delay:2,
    duraction: 1,
    stagger: 0.5
})