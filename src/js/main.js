/* Your JS here. */

var slide = 0;
const numSlides = 5;

// carousel buttons code, back, forth, screen update
function prevCarousel() {
    if (slide > 0) {
        slide--; 
    } else {
        slide = numSlides - 1;
    }
    displaySlide();
}

function nextCarousel() {
    if (slide < numSlides - 1) {
        slide++;
    } else {
        slide = 0
    }
    displaySlide();
}

function displaySlide() {
    const imag = document.getElementById('portfolioCarousel');
    
    const finalSlide = slide * imag.clientWidth;

    imag.scrollTo({left: finalSlide, behavior: 'smooth'})
}

// header resizing based on dist from top of page
window.onscroll = function() {
  const navResizeBar = document.getElementById("navbar");
  const navResizeLogo = document.getElementById("navlogo");
  const navResizeLinks = document.querySelectorAll(".nav-links a");

  if (document.documentElement.scrollTop > 150 || document.body.scrollTop > 150) {
    navResizeBar.style.padding = "10px 20px";
    navResizeLogo.style.fontSize = "15px";

    navResizeLinks.forEach(link => {
        link.style.fontSize = '13px'
    })

  } else {
    navResizeBar.style.padding = "20px 40px";
    navResizeLogo.style.fontSize = "25px";

    navResizeLinks.forEach(link => {
        link.style.fontSize = '15px'
    })
  }

  const portInd = document.getElementById("port-link");
    const portSect = document.getElementById("portfolio-section");
    const portFromTop = portSect.getBoundingClientRect().top + 400;
    const portFromBot = portSect.getBoundingClientRect().bottom + 450;

    if ((document.documentElement.scrollTop > portFromTop || document.body.scrollTop > portFromTop) && (document.documentElement.scrollTop < portFromBot || document.body.scrollTop < portFromBot)) {
        portInd.style.backgroundColor = "#328c71";
    } else {
        portInd.style.backgroundColor = "black";
    }

    const abtInd = document.getElementById("abt-link");
    const abtSect = document.getElementById("about-section");
    const abtFromTop = abtSect.getBoundingClientRect().top;
    const abtFromBot = abtSect.getBoundingClientRect().bottom - 120;

    if ((document.documentElement.scrollTop > abtFromTop || document.body.scrollTop > abtFromTop) && (document.documentElement.scrollTop < abtFromBot || document.body.scrollTop < abtFromBot) && !((document.documentElement.scrollTop > portFromTop || document.body.scrollTop > portFromTop) && (document.documentElement.scrollTop < portFromBot || document.body.scrollTop < portFromBot))) {
        abtInd.style.backgroundColor = "#328c71";
    } else {
        abtInd.style.backgroundColor = "black";
    }

    const commInd = document.getElementById("comm-link");
    const commSect = document.getElementById("commission-section");
    const commFromTop = commSect.getBoundingClientRect().top + 400;
    const commFromBot = commSect.getBoundingClientRect().bottom - 100;

    if ((document.documentElement.scrollTop > commFromTop || document.body.scrollTop > commFromTop) && (document.documentElement.scrollTop < commFromBot || document.body.scrollTop < commFromBot) && !((document.documentElement.scrollTop > abtFromTop || document.body.scrollTop > abtFromTop) && (document.documentElement.scrollTop < abtFromBot || document.body.scrollTop < abtFromBot))) {
        commInd.style.backgroundColor = "#328c71";
    } else {
        commInd.style.backgroundColor = "black";
    }

    const contInd = document.getElementById("cont-link");
    const contSect = document.getElementById("contacts-section");
    const contFromTop = contSect.getBoundingClientRect().top + 400;
    const contFromBot = contSect.getBoundingClientRect().bottom;

    if ((document.documentElement.scrollTop > contFromTop || document.body.scrollTop > contFromTop) && (document.documentElement.scrollTop < contFromBot || document.body.scrollTop < contFromBot) && !((document.documentElement.scrollTop > commFromTop || document.body.scrollTop > commFromTop) && (document.documentElement.scrollTop < commFromBot || document.body.scrollTop < commFromBot))) {
        contInd.style.backgroundColor = "#328c71";
    } else {
        contInd.style.backgroundColor = "black";
    }
};


window.onclick = function() {
    const contInd = document.querySelector("#cont-link");
    const contHigh = document.getElementById("cont-link");
    const commHigh = document.getElementById("comm-link");

    contInd.addEventListener('click', (event) => {
        contHigh.style.backgroundColor = "#328c71";
        commHigh.style.backgroundColor = "black";
    });
}

// modal opening
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeButton = document.querySelector(".modal-close");
const modalTitle = document.getElementById("modalTitle");
const modalCaption = document.getElementById("modalCaption");

const portfolioImages = document.querySelectorAll(".port-imgs img");

portfolioImages.forEach(function(image) {
    image.onclick = function() {
        modal.classList.add("show");
        modalImage.src = image.src;
        modalTitle.textContent = image.dataset.title;
        modalCaption.textContent = image.dataset.caption;
    };
});

closeButton.onclick = function() {
    modal.classList.remove("show");
};

modal.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
};

// need to commit again, adding comment
// css transition: email appear 
const emailIcon = document.getElementById("emailIcon");
const emailText = document.getElementById("emailText");

emailIcon.onclick = function() {
    emailIcon.style.opacity = "0";

    setTimeout(function() {
        emailIcon.style.display = "none";
        emailText.style.display = "block";
        emailText.style.opacity = "0";

        setTimeout(function() {
            emailText.style.opacity = "1";
        }, 50);
    }, 500);
};

