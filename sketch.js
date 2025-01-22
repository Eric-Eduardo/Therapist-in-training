let currentCena = cena1; // cena atual
let currentMenu = [];

let positionTextBox = [100, 520]; // posição do texto da fala
let widthTextBox = [500, 160];

let positionMenuBox = [100, 300]; // posição da caixa de falas
let widthMenuBox = [255, 350];

let wrappedText = [];

let tela = "cena"; // Estado inicial da aplicação
let indiceTexto = 0; // Índice do texto atual
//Imagens do jogo
let imagemFundo;
let mapImagePerson = {};
let lastImagePerson = "";
let buttonsTela = [];
let pontuacao = 0;

//Funcao que carrega os valores das variaveis
function preload() {
    imagemFundo = loadImage("./img/bg.png");
    imagemFundoEscura = loadImage("./img/bg_escuro.png");

    preloadJoao();
}

//Funcao que delimita a area do jogo
function setup() {
    textFont('Roboto Mono');
    createCanvas(1280, 720);
    resizeWindow();    

    // document.querySelector("canvas").style.height = "695px";
    widthTextBox[0] = width - positionTextBox[0] * 2;
}

function resizeWindow() {
    let windowRatio = window.innerWidth / window.innerHeight;

    if (windowRatio < 1280 / 720) {
        document.querySelector("canvas").style.width = `${window.innerWidth}px`;
        document.querySelector("canvas").style.height = `${(720 * window.innerWidth) / 1280}px`;
    } else {
        document.querySelector("canvas").style.width = `${(1280 * window.innerHeight) / 720}px`;
        document.querySelector("canvas").style.height = `${window.innerHeight}px`;
    }
}

function windowResized() {
    resizeWindow();
}

let mostrou = false;
//Funcao que exibe coisas na tela
function draw() {
    background(0);
        
    if (tela === "inicio") {
        mostrarTelaInicial();
    } else if (tela === "selecaoFase") {
        // mostrarTelaSelecaoFase();
    } else if (tela === "cena") {
        mostrarCena(currentCena);
    } else if (tela === "cenaMenu") {
        mostrarCenaMenu(currentMenu);
    } else if (tela === "final") {
        mostrarTelaFinal(); // Nova função para exibir a tela final
    }
}

function drawButton(textBtn, xBtn, yBtn, widthBtn, heightBtn, colorBtn) {
    textFont("Roboto Mono");
    textStyle(NORMAL);
    textSize(20);

    noStroke();

    rectMode(CORNER);
    fill(colorBtn);
    rect(xBtn, yBtn, widthBtn, heightBtn, heightBtn / 2);

    textAlign(CENTER, CENTER);
    fill("white");
    text(textBtn, xBtn + widthBtn / 2, yBtn + heightBtn / 2);
}


function wrapText(text, maxWidth) {
    let words = text.split(' '); // Divide o texto em palavras
    let lines = [];
    let currentLine = "";
    let testLine = "";

    for (let word of words) {
        // console.log(">> ", word);
        testLine = currentLine + (currentLine === "" ? "" : " ") + word;

        if (textWidth(testLine) > maxWidth) {
            lines.push(currentLine);
            // console.log(currentLine);
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    }

    if (currentLine !== "") {
        // console.log(currentLine);
        lines.push(currentLine);
    }

    return lines;
}


//Funcao que monta a tela inicial
function mostrarTelaInicial() {
    background(imagemFundoEscura);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);


    textFont("Dancing Script");
    textSize(64);
    textStyle(BOLD);
    fill("white");
    text("Therapist in Training", width / 2, 102);

    drawButton("Jogar", 547, 336, 186, 48, "#9F554B");
    drawButton("Como jogar", 547, 420, 186, 48, "#9F554B");
}

// Padroniza a criação da imagem referente aos pacientes
function showPerson(img, size) {
    let newWidth = size;

    // Calcula a altura proporcional
    let aspectRatio = img.height / img.width; // Razão de aspecto
    let newHeight = newWidth * aspectRatio;

    // Desenha a imagem redimensionada
    image(img, 410, 75, newWidth, newHeight);
}

// Mostra a caixa de diálogo
function showMessage(name, message) {
    rectMode(CORNER);
    fill("#983f34DC"); // Cor de preenchimento da caixa
    noStroke(); // Sem borda
    rect(positionTextBox[0], positionTextBox[1], widthTextBox[0], widthTextBox[1], 20); // Caixa com bordas arredondadas
    textSize(20);
    fill("white");
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    text(name, positionTextBox[0] + 30, positionTextBox[1] + 20);
    textStyle(NORMAL);

    wrappedText = wrapText(message, widthTextBox[0] - 30 * 2);

    for (let i = 0; i < wrappedText.length; i++) {
        text(wrappedText[i], positionTextBox[0] + 30, positionTextBox[1] + 60 + i * 25);
    }
}

// Carrega a cena (fundo, imagem do personagem e fala)
function mostrarCena(cena) {
    background(imagemFundo);

    // showPerson(joaoFalando, 500);
    lastImagePerson = cena.cenas[indiceTexto].imgPerson;
    showPerson(mapImagePerson[lastImagePerson], 500);

    showMessage(cena.cenas[indiceTexto].name, cena.cenas[indiceTexto].text);

    // Botão para avançar
    rectMode(CENTER);
    fill(0, 200, 0);
    rect(width - 100, height - 50, 150, 40);
    fill(0);
    textSize(18);
    text("Próximo", width - 100, height - 50);
}

// Mostra o menu de opções
function showMenu(menu) {
    let wrappedTextMenu = "";

    noStroke(); // Sem borda

    rectMode(CORNER);
    for (let i = 0; i < menu.length; i++) {
        fill("#983f34DC");
        rect(positionMenuBox[0] + i * (widthMenuBox[0] + 15), positionMenuBox[1], widthMenuBox[0], widthMenuBox[1], 20);

        textSize(24);
        fill("white");
        textAlign(CENTER, TOP);
        textStyle(BOLD);
        // rectMode(CENTER);
        text(i + 1, positionMenuBox[0] + widthMenuBox[0] / 2 + i * (widthMenuBox[0] + 15), positionMenuBox[1] + 20);
        textStyle(NORMAL);
        textAlign(LEFT, TOP);
        textSize(16);

        wrappedTextMenu = wrapText(menu[i].text, widthMenuBox[0] - 30);

        for (let a = 0; a < wrappedTextMenu.length; a++) {
            text(wrappedTextMenu[a], 20 + positionMenuBox[0] + i * (widthMenuBox[0] + 15), positionMenuBox[1] + 60 + a * 20);
        }
    }
}

function mostrarCenaMenu(menu) {
    background(imagemFundo);

    showPerson(mapImagePerson[lastImagePerson], 500);

    showMenu(menu);
}

function mostrarTelaFinal() {
    background(imagemFundo); // Fundo bg_03.png

    // Retângulo central para mostrar a pontuação
    rectMode(CENTER);
    fill(255, 200); // Cor branca semitransparente
    rect(width / 2, height / 2, 400, 200, 20);

    // Texto da pontuação
    textSize(32);
    fill(0); // Cor preta
    textAlign(CENTER, CENTER);
    text("Pontuação Final", width / 2, height / 2 - 40);
    textSize(48);
    text(`${pontuacao}`, width / 2, height / 2 + 20);

    // Texto de reinício ou saída
    textSize(24);
    fill(100);
    text("Clique para reiniciar", width / 2, height / 2 + 80);
}

function mousePressed() {
    if (tela === "inicio") {
        if (mouseX > 517 && mouseX < 517 + 186 &&
            mouseY > 336 && mouseY < 336 + 48) {
            tela = "selecaoFase";
            indiceTexto = 0;
        } else if (mouseX > 517 && mouseX < 517 + 186 &&
            mouseY > 420 && mouseY < 420 + 48) {
            console.log("Como jogar");
            
        }
    } else if (tela === "cena") {
        if (mouseX > width - 175 && mouseX < width - 25 && mouseY > height - 70 && mouseY < height - 30) {
            indiceTexto++;
            if (indiceTexto >= currentCena.cenas.length) {
                tela = currentCena.nextTela;
                indiceTexto = 0;

                if (tela === "cena") {
                    currentCena = mapCenas[currentCena.jump];
                } else if (tela === "cenaMenu") {
                    currentMenu = mapMenus[currentCena.jump];
                } else if (tela === "final") {
                    // Nada a fazer, já está na tela final
                }
            }
        }
    } else if (tela === "cenaMenu") {
        let selectedOption = -1;

        for (let i = 0; i < currentMenu.length; i++) {
            if (mouseX > positionMenuBox[0] + i * (widthMenuBox[0] + 15) &&
                mouseX < positionMenuBox[0] + i * (widthMenuBox[0] + 15) + widthMenuBox[0] &&
                mouseY > positionMenuBox[1] && mouseY < positionMenuBox[1] + widthMenuBox[1]) {
                selectedOption = i;
            }
        }

        if (selectedOption !== -1) {
            pontuacao += currentMenu[selectedOption].pontuacao;
            tela = currentMenu[selectedOption].nextTela;

            if (tela === "cena") {
                currentCena = mapCenas[currentMenu[selectedOption].jump];
            } else if (tela === "cenaMenu") {
                currentMenu = mapMenus[currentMenu[selectedOption].jump];
            } else if (tela === "final") {
                // Nada a fazer, já está na tela final
            }
        }
    } else if (tela === "final") {
        // Reiniciar o jogo ao clicar na tela final
        tela = "inicio";
        pontuacao = 0; // Reinicia a pontuação
        indiceTexto = 0;
        currentCena = cena1; // Reinicia a primeira cena
    }
}