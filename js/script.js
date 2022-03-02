
window.addEventListener('load',function(){
    // ----------------page loader---------------
    document.querySelector('.pageloader').classList.add('fade-out');
    setTimeout(function(){
        document.querySelector('.pageloader').style.display='none';
    },600)
    // animation  on scroll
    AOS.init();
})
/*------------- toggle navbar ---------*/
const navToggler=document.querySelector('.nav-toggler');
navToggler.addEventListener('click',toggleNav);
function toggleNav(){
    navToggler.classList.toggle('active')
    document.querySelector('.nav').classList.toggle('open');
}

/* close nav when clicking on a nav item */ 
document.addEventListener('click',function(e){
  if(e.target.closest('.nav-item')){
      toggleNav();
  }
});
document.addEventListener('scroll',function(){
    const navHeight=document.querySelector('header')
    .getBoundingClientRect().height;
    const nav=document.querySelector('header')
    if(pageYOffset>navHeight){
        nav.classList.add('fixed')
    }else{
        nav.classList.remove('fixed')
    }
});
// -------------------- menu tabs -----------------
const btns=document.querySelectorAll('.menu-tab-item');
const menuContent=document.querySelectorAll('.menu-tab-content')
btns.forEach(function(btn){
    btn.addEventListener('click',function(event){
        btns.forEach(function(e){
            e.classList.remove('active')
        })
        btn.classList.add('active');
        menuContent.forEach(function(content){
            content.classList.remove('open')
        })
        let target =event.currentTarget.dataset.target;
        const element = document.getElementById(target);
        element.classList.add('open');
        AOS.init();
       
    });
})

// const menuTabs =document.querySelector('.menu-tabs');
// menuTabs.addEventListener('click',function(e){
//     if(e.target.classList.contains('menu-tab-item')&&
//     !e.target.classList.contains('active')){
//         const target=e.target.getAttribute('data-target');
//         menuTabs.querySelector('.active').classList.remove('active');
//         e.target.classList.add("active");
//         const menuSection=document.querySelector('.menu-section');
//         menuSection.querySelector('.menu-tab-content.active').classList.remove('active');
//         menuSection.querySelector(target).classList.add('active')
//     }
// })