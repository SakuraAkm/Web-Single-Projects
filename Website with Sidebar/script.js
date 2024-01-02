const arrowMenu = document.querySelector(".arrow");
const arrow = document.getElementById("arrow");
const menu = document.querySelector(".navbar");
const textMenu = document.querySelectorAll(".link-text");
const menuSections = document.querySelectorAll(".navbar .nav-item");
const sections = document.querySelectorAll("sections");
const pointers = document.querySelectorAll(".pointer");
const body = document.querySelector("body");

// SECTIONS
const home = document.getElementById("home");
const posts = document.getElementById("posts");
const game = document.getElementById("game");
const contactUs = document.getElementById("contact-us");

// NAVIGATION MENU
arrowMenu.addEventListener("click", () => {
    arrow.classList.toggle("rotate");
    menu.classList.toggle("navbar-wide");

    pointers.forEach(pointer => {
        pointer.classList.toggle("hide");
    })

    textMenu.forEach(text => {
        text.classList.toggle("hide");
    })
})

menuSections.forEach(section => {

    section.addEventListener("click", () => {

        menuSections.forEach(section => {
            section.classList.remove("selected-border");
            section.children[0].classList.remove('selected-color');
        })

        section.classList.add("selected-border");
        section.children[0].classList.add('selected-color');

        if (section.children[0].children[1].innerText == "HOME") {
            posts.classList.add("hide");
            game.classList.add("hide");
            contactUs.classList.add("hide");
            home.classList.remove("hide");
        } else if (section.children[0].children[1].innerText == "POSTS") {
            home.classList.add("hide");
            game.classList.add("hide");
            contactUs.classList.add("hide");
            posts.classList.remove("hide");
        } else if (section.children[0].children[1].innerText == "GAME") {
            home.classList.add("hide");
            posts.classList.add("hide");
            contactUs.classList.add("hide");
            game.classList.remove("hide");
        } else if (section.children[0].children[1].innerText == "CONTACT US") {
            home.classList.add("hide");
            posts.classList.add("hide");
            game.classList.add("hide");
            contactUs.classList.remove("hide");
        }

    })

})


// POINTERS MOVING
const tl = gsap.timeline({ repeat: -1 });
tl.to(pointers, { duration: 0.75, scale: 1.2, opacity: 1, delay: 5 })
    .to(pointers, { x: -15, duration: 0.75, stagger: 0.3, scale: 1.2, delay: 0.5 })
    .to(pointers, { x: 0, duration: 1, scale: 1, opacity: 0 })
    .to(pointers, { delay: 5 });


// DARK / LIGHT THEME
const ying = document.querySelector(".ying");
const main = document.querySelector("main");

ying.addEventListener("click", () => {
    ying.children[0].children[0].classList.toggle("rotate");

    if (ying.children[0].children[1].textContent == "DARK MODE") {
        ying.children[0].children[1].textContent = "LIGHT MODE";
        main.classList.add("dark");
        main.classList.remove("light");
        body.classList.add("body-dark");
        body.classList.remove("body-light");
    } else {
        ying.children[0].children[1].textContent = "DARK MODE";
        main.classList.add("light");
        main.classList.remove("dark");
        body.classList.remove("body-dark");
        body.classList.add("body-light");
    }
})

// ROCK PAPER SCISSOR ~~~~~~~~~~~
const moves = document.querySelectorAll('.RPS-select');
const player = document.getElementById('me');
const opponent = document.getElementById('opponent');
const RPSajax = document.getElementById('RPSajax');

moves.forEach(move => {
    move.addEventListener("click", () => {
        let playerDecision = move.innerText;

        player.innerText = '';
        player.classList.remove("Rock", "Paper", "Scissor");
        player.classList.add(playerDecision);

        opponent.innerText = '';
        opponent.classList.remove("Rock", "Paper", "Scissor");
        let opponentDecision = Math.floor(Math.random() * 3) + 1;

        switch (opponentDecision) {
            case 1:
                opponentDecision = "Rock";
                break;
            case 2:
                opponentDecision = "Paper";
                break;
            case 3:
                opponentDecision = "Scissor";
                break;
        }

        opponent.classList.add(opponentDecision);

        if (opponentDecision == playerDecision) {
            RPSajax.innerText = "Draw!!";
        } else if (opponentDecision == "Paper") {
            return playerDecision == "Scissor" ? RPSajax.innerText = "You Win!!" : RPSajax.innerText = "You Lose!!"
        } else if (opponentDecision == "Scissor") {
            return playerDecision == "Rock" ? RPSajax.innerText = "You Win!!" : RPSajax.innerText = "You Lose!!"
        } else if (opponentDecision == "Rock") {
            return playerDecision == "Paper" ? RPSajax.innerText = "You Win!!" : RPSajax.innerText = "You Lose!!"
        }
    });
})

