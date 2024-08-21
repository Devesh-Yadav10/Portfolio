function changeImageColor(id, color) {
    const img = document.getElementById(id);
    img.animate([
        {transform:'scale(1.2)'}
    ],{
        duration:500,
        iterations:1,
        fill:"forwards"
    }
    )
    img.style.filter = `drop-shadow(0 0 3px ${color})`;
}

function resetImageColor(id) {
    const img = document.getElementById(id);
    img.animate([
        {transform:'scale(1)'}
    ],{
        duration:500,
        iterations:1,
        fill:"forwards"
    }
    )
    img.style.filter = 'none';
}
function appearimage(){
    const imagetobeanimated=document.querySelector('.picture img');
    imagetobeanimated.animate([
        {transform:'translateY(0px)',opacity:0.1,offset:0},
        {transform:'translateY(-40px)',opacity:0.6,offset:0.4},
        {transform:'translateY(0px)',opacity:1,offset:1},
        
    ],{
        duration:800,fill:"forwards",iterations:1,
    }
    )
}
function blurimage(){
    const text=document.querySelector('.overlay-text');
    const image=document.querySelector('.picture img');
    text.animate([
        {opacity:0,offset:0},
        {opacity:1,offset:1}
    ],{
        duration:500,fill:"forwards",iterations:1,
    }
    )
    image.animate([
        {filter:'blur(0px)',opacity:1,offset:0},
        {filter:'blur(10px)',opacity:0.5,offset:1}
    ],{
        duration:500,fill:"forwards",iterations:1,
    }
    )

}
function normalimage(){
    const text=document.querySelector('.overlay-text');
    const image=document.querySelector('.picture img');
    text.animate([
        {opacity:1,offset:0},
        {opacity:0,offset:1}
    ],{
        duration:500,fill:"forwards",iterations:1,
    }
    )
    image.animate([
        {filter:'blur(10px)',opacity:0.5,offset:0},
        {filter:'blur(0px)',opacity:1,offset:1}
    ],{
        duration:500,fill:"forwards",iterations:1,
    }
    )
}
let hasAnimated = false;

function slideintopage(){
    const appearElement=document.querySelector('.projects');
    const slideelement = document.querySelector('h1');
    const targetElement = document.querySelector('.below-middle');
    const bounding = targetElement.getBoundingClientRect();

    // Check if the element is in the viewport
    if (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        if (!hasAnimated) {
            slideelement.animate([
                {transform: 'translateX(-100%)', opacity: 0, offset: 0},
                {transform: 'translateX(0%)', opacity: 1, offset: 1}
            ], {
                duration: 1000,
                iterations: 1,
                fill: "forwards",
            });
            appearElement.animate([
                {transform:'translateX(-50%)',opacity:0,offset:0},
                {transform:'translateX(0%)',opacity:1,offset:1}
            ],{
                duration:1100,
                iterations: 1,
                fill: "forwards",
            }
            )
            hasAnimated = true;  // Prevent the animation from running again
        }
    }
}
let hasappeared=false;
function rightappearelement(){
    
    const rightappearupper=document.querySelector('.about .about-heading');
    const rightappearlower=document.querySelector('.about-main');
    const targetElement = document.querySelector('.about');
    const bounding = targetElement.getBoundingClientRect();
    if (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        if(!hasappeared){
            rightappearupper.animate([
                {transform:'translateX(100%)',opacity:0,offset:0},
                {transform:'translateX(0%)',opacity:1,offset:1}
            ],
            {
                duration:1000,iterations:1,fill:"forwards",
            });
            rightappearlower.animate([
                {transform:'translateX(100%)',opacity:0,offset:0},
                {transform:'translateX(0%)',opacity:1,offset:1}
            ],
            {
                duration:1100,iterations:1,fill:"forwards",
            });
            hasappeared=true;
        }
    }
}
let isSidebarOpen = false;

function loadsidebar() {
    const sidebar = document.querySelector('.sidebar1');
    if (!isSidebarOpen) {
        sidebar.animate([
            { transform: 'translateX(-130%)' },
            { transform: 'translateX(0%)' }
        ], {
            duration: 400,
            iterations: 1,
            fill: "forwards",
        });
        isSidebarOpen = true;
    }
}

function closesidebar() {
    const sidebar = document.querySelector('.sidebar1');
    if (isSidebarOpen) {
        sidebar.animate([
            { transform: 'translateX(0%)' },
            { transform: 'translateX(-150%)' }
        ], {
            duration: 400,
            iterations: 1,
            fill: "forwards",
        });
        isSidebarOpen = false;
    }
}



window.addEventListener('scroll', slideintopage);
window.addEventListener('DOMContentLoaded',appearimage)
window.addEventListener('scroll', rightappearelement);

