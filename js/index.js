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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img"); //changing value of the tag
// logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav
let aTags = document.getElementsByTagName('a');
console.log(aTags);
aTags[0].textContent = siteContent.nav["nav-item-1"] // providing the string 
aTags[1].textContent = siteContent.nav["nav-item-2"]
aTags[2].textContent = siteContent.nav["nav-item-3"]
aTags[3].textContent = siteContent.nav["nav-item-4"]
aTags[4].textContent = siteContent.nav["nav-item-5"]
aTags[5].textContent = siteContent.nav["nav-item-6"]

aTags[0].style.color = 'green';
aTags[1].style.color = 'green';
aTags[2].style.color = 'green';
aTags[3].style.color = 'green';
aTags[4].style.color = 'green';
aTags[5].style.color = 'green';

// nav.appendChild(childElement)
// nav.prepend(childElement)

let logo = document.getElementById("logo-img"); //changing value of the tag
logo.setAttribute('src', siteContent["nav"]["img-src"])

//cta
let theH1 = document.getElementsByTagName('h1'); // because I'm using get Elements...
console.log(theH1); // its returned in an array object
theH1[0].textContent = siteContent.cta["h1"]

let theButton = document.getElementsByTagName('button');  
console.log(theButton);
theButton[0].textContent = siteContent["cta"]["button"];

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

//main-content h4's by All because there are multiple
let h4Array = document.querySelectorAll('.main-content h4');
console.log(h4Array[0])
h4Array[0].textContent = siteContent["main-content"]["features-h4"]
h4Array[1].textContent = siteContent["main-content"]["about-h4"]
h4Array[2].textContent = siteContent["main-content"]["services-h4"]
h4Array[3].textContent = siteContent["main-content"]["product-h4"]
h4Array[4].textContent = siteContent["main-content"]["vision-h4"]

let mainContentArray = document.querySelectorAll('.main-content p');
console.log(mainContentArray[0])
mainContentArray[0].textContent = siteContent["main-content"]["features-content"]
mainContentArray[1].textContent = siteContent["main-content"]["about-content"]

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

mainContentArray[2].textContent = siteContent["contact"]["services-content"]
mainContentArray[3].textContent = siteContent["contact"]["product-content"]
mainContentArray[4].textContent = siteContent["contact"]["vision-content"]

//contact
let h4contact = document.querySelector('.contact h4');
console.log(h4contact)
h4contact.textContent = siteContent["contact"]["contact-h4"]
let contactArray = document.querySelectorAll('.contact p');
console.log(contactArray[0])
contactArray[0].textContent = siteContent["contact"]["address"]
contactArray[1].textContent = siteContent["contact"]["phone"]
contactArray[2].textContent = siteContent["contact"]["email"]

//footer
let footerP = document.querySelector('footer p')
console.log(footerP)
footerP.textContent = siteContent["footer"]["copyright"]

// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"




// let h4content = document.querySelector('.text-content p');
// console.log(h4content)
// h4content.textContent = siteContent["main-content"]["features-content"]

// let h4about = document.querySelector('.text-content h4:last-child');
// console.log(h4about)
// // h4about.textContent = siteContent["main-content"]["about-h4"]







