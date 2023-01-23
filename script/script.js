const navBar = document.querySelector("header"),
    hamburger = document.querySelector(".hamburger"),
    logo = document.querySelector("header container a svg path"),
    navUlItems = document.querySelectorAll("header nav li a"),
    navUl = document.querySelector("header nav ul"),
    hamburgerPaths = document.querySelectorAll(".hamburger path"),
    navBtn = document.querySelector("header .btn"),
    logoPaths = {
        pet: document.querySelector("header a svg .pet"),
        care: document.querySelector("header a svg .care"),
        g: document.querySelectorAll("header a svg g path")
    },
    testamonials = document.querySelector(".testamonials"),
    selectTestamonial = document.querySelectorAll(".testamonials-parts div"),
    statsTitle = document.querySelectorAll(".container-main .stats div h4"),
    socioIcons = document.querySelector(".container-header .socio-icons"),
    navSections = document.querySelectorAll(".navbar-anchor");


let counter = 0,
    hamurgerCounter = 0;


const setScrolledItems = () => {
    navBar.style.backgroundColor = "#c3324d";
    navBtn.classList.add("onScrollBtn");
    hamburgerPaths.forEach((path) => {
        path.style.stroke = "#fff";
    })
    navUlItems.forEach((item) => {
        item.style.color = "#fff";
    })
    logoPaths.g.forEach((path) => {
        path.style.fill = "#fff";
    })
    logoPaths.pet.style.fill = logoPaths.care.style.fill = "#fff";
}

const resetScrolledItems = () => {
    navBar.style.backgroundColor = "#d8eefe";
    navBtn.classList.remove("onScrollBtn");
    hamburgerPaths.forEach((path) => {
        path.style.stroke = "rgb(239, 69, 101)";
    })
    navUlItems.forEach((item) => {
        item.style.color = "#094067";
    })
    logoPaths.g.forEach((path) => {
        path.style.fill = "#094067";
    })
    logoPaths.pet.style.fill = "#094067";
    logoPaths.care.style.fill = "rgb(239, 69, 101)";
}

const increaseNumber = (element, value, ryhtme, time) => {
    let counter = 0;
    const interval = setInterval(() => {
        counter += ryhtme;
        element.textContent = `+${counter}`;
        if (value == counter) {
            clearInterval(interval);
        }
    }, time);
}

const scrollStyle = () => {
    if (window.scrollY > 0) {
        setScrolledItems();
    } else {
        resetScrolledItems();
    }
}

scrollStyle();

const automaticSelect = setInterval(() => {
    if (selectTestamonial[0].classList.contains("active")) {
        testamonials.scrollTo(5000, 0);
    } else {
        testamonials.scrollTo(0, 0);
    }
    selectTestamonial.forEach((select) => {
        select.classList.toggle("active");
    });
}, 2500)

selectTestamonial[0].addEventListener("click", () => {
    clearInterval(automaticSelect);
    testamonials.scrollTo(0, 0);
    selectTestamonial[0].classList.add("active")
    selectTestamonial[1].classList.remove("active")

})
selectTestamonial[1].addEventListener("click", () => {
    clearInterval(automaticSelect);
    testamonials.scrollTo(5000, 0);
    selectTestamonial[0].classList.remove("active")
    selectTestamonial[1].classList.add("active")
})

window.addEventListener("scroll", () => {
    for (let i = 0; i < navSections.length; i++) { //changing selected anchor tag when scroll
        if (navSections[i].offsetTop <= this.scrollY+10) { //first scroll to have the condition on up and the last one for the down condition
            navUlItems.forEach((item) => {
                item.classList.remove("selected")
            })
            navUlItems[i].classList.add("selected");
        }
        if ((i == 3) && (navSections[i].offsetTop + navSections[i].scrollHeight < this.scrollY+10)){
            navUlItems.forEach((item) => {
                item.classList.remove("selected")
            })
        }
    }
    if (navBar.classList.contains("mobile-navBar")) return;
    scrollStyle();
    if (this.scrollY > statsTitle[0].offsetTop) {
        counter++;
        if (counter > 1) {
            return;
        }
        increaseNumber(statsTitle[0], 1254, 209, 300);
        increaseNumber(statsTitle[1], 10, 1, 100);
        increaseNumber(statsTitle[2], 15, 1, 100);
    }
})

hamburger.addEventListener("click", () => {
    hamurgerCounter++;
    if (hamurgerCounter % 2 == 0) {
        resetScrolledItems();
    } else {
        setScrolledItems();
    }
    if (window.scrollY > 0) {
        setScrolledItems();
    }
    socioIcons.classList.toggle("navBar-socio-icons");
    navBtn.classList.toggle("navBar-delete-btn");
    navUl.classList.toggle("navBar-ul");
    navBar.classList.toggle("mobile-navBar");
})
