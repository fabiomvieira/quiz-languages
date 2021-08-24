let quest1 = document.getElementById("quest1");
let quest1_btns = document.querySelectorAll("#quest1_btn");
let quest2 = document.getElementById("quest2");
let quest2_btns = document.querySelectorAll("#quest2_btn");
let quest3 = document.getElementById("quest3");
let quest3_btns = document.querySelectorAll("#quest3_btn");
let quest4 = document.getElementById("quest4");
let quest4_btns = document.querySelectorAll("#quest4_btn");
let quest5 = document.getElementById("quest5");
let quest5_btns = document.querySelectorAll("#quest5_btn");
let quests_points = document.querySelector(".points");
let textFinal = document.getElementById("textFinal");
let darkModeBtn = document.getElementById("darkMode");
let body = document.querySelector("body");
let currentLevel = 1;
let points = 0;
let darkMode = false;

quests_points.textContent = "Seus pontos: " + points;


quest1_btns[0].addEventListener('click', () => {
    quest1_btns[0].style.backgroundColor = "#d9534f";
    blockBtns();
    quest1_btns[0].style.color = "#000000";
    quest1_btns[0].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
}); quest1_btns[1].addEventListener('click', () => {
    quest1_btns[1].style.backgroundColor = "#d9534f";
    blockBtns();
    quest1_btns[1].style.color = "#000000";
    quest1_btns[1].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
}); quest1_btns[2].addEventListener('click', () => {
    quest1_btns[2].style.backgroundColor = "#d9534f";
    blockBtns();
    quest1_btns[2].style.color = "#000000";
    quest1_btns[2].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
}); quest1_btns[3].addEventListener('click', () => {
    quest1_btns[3].style.backgroundColor = "#5cb85c";
    blockBtns();
    quest1_btns[3].style.color = "#000000";
    quest1_btns[3].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        points++;
        quests_points.textContent = "Seus pontos: " + points;
        levelUp()
    }, 2000)
}); quest1_btns[4].addEventListener('click', () => {
    quest1_btns[4].style.backgroundColor = "#d9534f";
    blockBtns();
    quest1_btns[4].style.color = "#000000";
    quest1_btns[4].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
})


quest2_btns[0].addEventListener('click', () => {
    quest2_btns[0].style.backgroundColor = "#5cb85c";
    blockBtns();
    quest2_btns[0].style.color = "#000000";
    quest2_btns[0].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        points++;
        quests_points.textContent = "Seus pontos: " + points;
        levelUp()
    }, 2000)
}); quest2_btns[1].addEventListener('click', () => {
    quest2_btns[1].style.backgroundColor = "#d9534f";
    blockBtns();
    quest2_btns[1].style.color = "#000000";
    quest2_btns[1].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
}); quest2_btns[2].addEventListener('click', () => {
    quest2_btns[2].style.backgroundColor = "#d9534f";
    blockBtns();
    quest2_btns[2].style.color = "#000000";
    quest2_btns[2].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
}); quest2_btns[3].addEventListener('click', () => {
    quest2_btns[3].style.backgroundColor = "#d9534f";
    blockBtns();
    quest2_btns[3].style.color = "#000000";
    quest2_btns[3].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
}); quest2_btns[4].addEventListener('click', () => {
    quest2_btns[4].style.backgroundColor = "#d9534f";
    blockBtns();
    quest2_btns[4].style.color = "#000000";
    quest2_btns[4].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
})


quest3_btns[0].addEventListener('click', () => {
    quest3_btns[0].style.backgroundColor = "#d9534f";
    blockBtns();
    quest3_btns[0].style.color = "#000000";
    quest3_btns[0].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
}); quest3_btns[1].addEventListener('click', () => {
    quest3_btns[1].style.backgroundColor = "#d9534f";
    blockBtns();
    quest3_btns[1].style.color = "#000000";
    quest3_btns[1].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
}); quest3_btns[2].addEventListener('click', () => {
    quest3_btns[2].style.backgroundColor = "#d9534f";
    blockBtns();
    quest3_btns[2].style.color = "#000000";
    quest3_btns[2].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
}); quest3_btns[3].addEventListener('click', () => {
    quest3_btns[3].style.backgroundColor = "#d9534f";
    blockBtns();
    quest3_btns[3].style.color = "#000000";
    quest3_btns[3].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
}); quest3_btns[4].addEventListener('click', () => {
    quest3_btns[4].style.backgroundColor = "#5cb85c";
    blockBtns();
    quest3_btns[4].style.color = "#000000";
    quest3_btns[4].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        points++;
        quests_points.textContent = "Seus pontos: " + points;
        levelUp()
    }, 2000)
})


quest4_btns[0].addEventListener('click', () => {
    quest4_btns[0].style.backgroundColor = "#d9534f";
    blockBtns();
    quest4_btns[0].style.color = "#000000";
    quest4_btns[0].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
}); quest4_btns[1].addEventListener('click', () => {
    quest4_btns[1].style.backgroundColor = "#5cb85c";
    blockBtns();
    quest4_btns[1].style.color = "#000000";
    quest4_btns[1].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        points++;
        quests_points.textContent = "Seus pontos: " + points;
        levelUp()
    }, 2000)
}); quest4_btns[2].addEventListener('click', () => {
    quest4_btns[2].style.backgroundColor = "#d9534f";
    blockBtns();
    quest4_btns[2].style.color = "#000000";
    quest4_btns[2].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
}); quest4_btns[3].addEventListener('click', () => {
    quest4_btns[3].style.backgroundColor = "#d9534f";
    blockBtns();
    quest4_btns[3].style.color = "#000000";
    quest4_btns[3].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
}); quest4_btns[4].addEventListener('click', () => {
    quest4_btns[4].style.backgroundColor = "#d9534f";
    blockBtns();
    quest4_btns[4].style.color = "#000000";
    quest4_btns[4].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        levelUp()
    }, 2000)
})


quest5_btns[0].addEventListener('click', () => {
    quest5_btns[0].style.backgroundColor = "#d9534f";
    blockBtns();
    quest5_btns[0].style.color = "#000000";
    quest5_btns[0].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        final()
    }, 2000)
}); quest5_btns[1].addEventListener('click', () => {
    quest5_btns[1].style.backgroundColor = "#5cb85c";
    blockBtns();
    quest5_btns[1].style.color = "#000000";
    quest5_btns[1].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        points++;
        quests_points.textContent = "Seus pontos: " + points;
        final()
    }, 2000)
}); quest5_btns[2].addEventListener('click', () => {
    quest5_btns[2].style.backgroundColor = "#d9534f";
    blockBtns();
    quest5_btns[2].style.color = "#000000";
    quest5_btns[2].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        final()
    }, 2000)
}); quest5_btns[3].addEventListener('click', () => {
    quest5_btns[3].style.backgroundColor = "#d9534f";
    blockBtns();
    quest5_btns[3].style.color = "#000000";
    quest5_btns[3].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        final()
    }, 2000)
}); quest5_btns[4].addEventListener('click', () => {
    quest5_btns[4].style.backgroundColor = "#d9534f";
    blockBtns();
    quest5_btns[4].style.color = "#000000";
    quest5_btns[4].style.fontStyle = "italic";
    setTimeout(function() {
        currentLevel++;
        final()
    }, 2000)
})


darkModeBtn.addEventListener("click", () => {
    if (darkMode == false) {
        body.style.backgroundColor = "rgb(20, 20, 20)";
        quest1.classList.add("dark");
        quest2.classList.add("dark");
        quest3.classList.add("dark");
        quest4.classList.add("dark");
        quest5.classList.add("dark");
        darkModeBtn.classList.add("dark");
        darkModeBtn.textContent = "WhiteMode";
        quests_points.classList.add("dark");
        textFinal.classList.add("dark");
        darkMode = true;
    } else {
        body.style.backgroundColor = "white";
        quest1.classList.remove("dark");
        quest2.classList.remove("dark");
        quest3.classList.remove("dark");
        quest4.classList.remove("dark");
        quest5.classList.remove("dark");
        darkModeBtn.classList.remove("dark");
        darkModeBtn.textContent = "DarkMode";
        quests_points.classList.remove("dark");
        textFinal.classList.remove("dark");
        darkMode = false;
    }
})


function levelUp() {
    if (currentLevel == 2) {
        quest1.classList.remove("currentLevel");
        quest2.classList.add("currentLevel")
    } if (currentLevel == 3) {
        quest2.classList.remove("currentLevel")
        quest3.classList.add("currentLevel")
    } if (currentLevel == 4) {
        quest3.classList.remove("currentLevel")
        quest4.classList.add("currentLevel")
    } if (currentLevel == 5) {
        quest4.classList.remove("currentLevel")
        quest5.classList.add("currentLevel")
    }
}

function blockBtns() {
    if (currentLevel == 1) {
        quest1_btns.forEach((e) => {
            e.disabled = true;
        })
    } if (currentLevel == 2) {
        quest2_btns.forEach((e) => {
            e.disabled = true;
        })
    } if (currentLevel == 3) {
        quest3_btns.forEach((e) => {
            e.disabled = true;
        })
    } if (currentLevel == 4) {
        quest4_btns.forEach((e) => {
            e.disabled = true;
        })
    } if (currentLevel == 5) {
        quest5_btns.forEach((e) => {
            e.disabled = true;
        })
    }
}

function final() {
    quest5.classList.remove("currentLevel");
    if (points == 3 || points == 4) {
        textFinal.textContent = "Parabéns!!! Você fez um total de " + points + " pontos!"
    } if (points == 5) {
        textFinal.textContent = "Woow, meus parabéns! Você acertou todas as perguntas!!"
    } if (points == 2 || points == 1) {
        textFinal.textContent = "Vocês fez um total de " + points + " pontos! Você pode tentar novamente."
    }
}