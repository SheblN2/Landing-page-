/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.querySelector ('#navbar__list');
const sections = document.querySelectorAll ('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the navigation bar
function buildNav() {
    let nav='';
    //loop over all the available sections
    for (let elem of sections) {
        
        let id=elem.id;
		let dataNav=elem.dataset.nav;
		//link the section in the nvaigation bar to the corresponding section in the page
        nav +=`<li><a class="menu__link" href="#${id}">${dataNav}</a></li>;`
        //append all sections to the navigation menu and the semicolons 
		navBar.innerHTML=nav.replace(/;/g, "");
		
    };
};
//call the function used to build the navigation bar
buildNav();





// Set sections as active
// Add class 'active' to section when near top of viewport

//to return the size of the element and relative position to the viewport
function sectionLimit (section){
	let limit=section.getBoundingClientRect().top;
	return limit;
};
//to add or remove active status to section
function isActive (condition,section){
	if(condition){
	section.classList.add('your-active-class');	
	//change the active section background color to black
	section.style.cssText = "background-color:black";
	} else {section.classList.remove('your-active-class');
	//return the color of the inactive section to original
	section.style.cssText = "background-color:linear-gradient(0deg, rgb(51, 226, 226) 0%, rgb(128, 24, 114) 100%)";
	}	
	
};

//use the previous 2 functions to add active to the class when near the top pf the viewport
function activate (){
	for (let section of sections){
		let lim= sectionLimit(section);
		let condition= lim < 200 && lim >= -150;
		//notActive(section);
		isActive(condition, section);
		
	}
};
document.addEventListener('scroll',activate);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
document.querySelectorAll('a[href^="#"]').forEach(section => {
    section.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});







