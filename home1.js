let classes=document.querySelectorAll('section');
window.addEventListener('scroll',checkBoxes);
checkBoxes();
function checkBoxes(){
    const triggerButton=window.innerHeight/5*4;
    boxes.forEach(section =>{
        const sectionTop=section.getBoundingClientRect().top;

        if (sectionTop<triggerBottom){
            section.classList.add('show-animate')
        }
        else{
            section.classList.remove('show-animate')
        }
    });
}
   
