const items = document.querySelectorAll('.animation');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('fadeIn'); 
            console.log("testing");
        }
    });
}
const io2 = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io2.observe(items[i]);
 }