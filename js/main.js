const accueil = document.getElementById('headerAccueil');
const about = document.getElementById('headerAbout');
const skills = document.getElementById('headerSkills');
const experiences = document.getElementById('headerExperiences');
const submit = document.getElementById('submit');

function animateHeader(){
    TweenMax.from('#header', 3, {transform: 'translateX(-100vw)'})
}

function animateHome(){
    TweenMax.set(".accueilContent",{autoAlpha:0});
    TweenMax.to(".accueilContent", 3, {
    autoAlpha:1,
    }).delay(3.5);
}

window.onload = function (){
    animateHeader();
    animateHome();
};