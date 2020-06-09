const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// nav
let myALinks = document.getElementsByTagName('a');
myALinks[0].textContent = 'Services';
myALinks[1].textContent = 'Product';
myALinks[2].textContent = 'Vision';
myALinks[3].textContent = 'Features';
myALinks[4].textContent = 'About';
myALinks[5].textContent = 'Contact';
// end nav

// add more nav content with .append
const newLink = document.createElement('a')
newLink.href = "#"
newLink.textContent = 'Policies'

const nav = document.querySelector('nav')
nav.appendChild(newLink); // used .append to add to the end of the content
// end add more nav content


const newLink2 = document.createElement('a')
newLink2.href = "#"
newLink2.textContent = "Home"

document.querySelector('nav')
nav.prepend(newLink2) // used .prepend to add a link to the beginning of the nav
// end add more nav content

//nav-links-green
const green = document.querySelectorAll('nav a')
for (let i = 0; i < green.length; i++) {
  const changeColor = green[i]
  changeColor.style.color = 'green';
} // end nav-links-green


//cta-img
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"])

//cta-h1
let ctaH1 = document.querySelector('h1')
ctaH1.textContent = siteContent['cta']['h1']

//cta-btn
let ctaBtn = document.querySelector('button')
ctaBtn.textContent = siteContent['cta']['button']


// main-content-features-h4
let features = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > h4')
features.textContent = siteContent['main-content']['features-h4']

// main-content-features-p
let featuresP = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > p')
featuresP.textContent = siteContent['main-content']['features-content']

// main-content-about-h4
let about = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > h4')
about.textContent = siteContent['main-content']['about-h4']

// main-content-about-p
let aboutP = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > p')
aboutP.textContent = siteContent['main-content']['about-content']

// middle img
let middleImg = document.querySelector('#middle-img')
middleImg.setAttribute("src", siteContent['main-content']['middle-img-src'])


// bottom content

// services
let services = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > h4')
services.textContent = siteContent['main-content']['services-h4']

let servicesP = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > p')
servicesP.textContent = siteContent['main-content']['services-content']


//product
let productH4 = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > h4')
productH4.textContent = siteContent['main-content']['product-h4']

let productP = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > p')
productP.textContent = siteContent['main-content']['product-content']


// Vision
let visionH4 = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(3) > h4')
visionH4.textContent = siteContent['main-content']['vision-h4']

let visionP = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(3) > p')
visionP.textContent = siteContent['main-content']['vision-content']


// contact
let contactH4 = document.querySelector('body > div > section.contact > h4')
contactH4.textContent = ['contact']

let contactP1 = document.querySelector('body > div > section.contact > p:nth-child(2)')
contactP1.textContent = ['123 Way 456 Street Somewhere, USA']

let contactP2 = document.querySelector('body > div > section.contact > p:nth-child(3)')
contactP2.textContent = ['1 (888) 888-8888']

let contactP3 = document.querySelector('body > div > section.contact > p:nth-child(4)')
contactP3.textContent = ['sales@greatidea.io']



// footer
let footerP = document.querySelector('body > div > footer > p')
footerP.textContent = ['Copyright Great Idea! 2018']