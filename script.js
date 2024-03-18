let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => 
{
    sections.forEach(sec =>
        {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.pffsetHeight;
            let id = sec.hetAttribute;
            
            if(top >= offset && offset + height)
            {
                navLinks.forEach(links => 
                    {
                        links.classList.remove('active');
                        document.querySelector('header nav a [href*=' + id + ']')
                        .classList.add('active')
                    })
            }
        })
}