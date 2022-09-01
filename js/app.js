let home = document.querySelector(".home");
let blog = document.querySelector(".blog");
let projects = document.querySelector(".project");
let contact = document.querySelector(".contact");
let linksCont = document.querySelectorAll(".nav-item")
let links = document.querySelectorAll(".nav-link");


links.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        const selectedlink = e.currentTarget.classList;
        if (selectedlink.contains('home')){
            links.classList.remove('active')
            home.classList.add('active')
            //linksCont.forEach((item)=>{
                //item.removeActiveItem();
                //item.classList.remove('active')
                //home.classList.add('active')
                
            //})

        } else if (selectedlink.contains('project')){
            links.classList.remove('active')
            projects.classList.add('active')
                
            
        }
    });
});






