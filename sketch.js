//Textos do jogo
let textos01 = [];
let textos02 = [];
let textos03 = [];
let textos04 = [];

let opcoes10 = [];
let textos11 = [];
let textos12 = [];
let textos13 = [];
let textos14 = [];

let opcoes20 = [];
let textos21 = [];
let textos22 = [];
let textos23 = [];
let textos34 = [];

let respostas11 = [];
let respostas12 = [];
let respostas13 = [];
let respostas14 = [];

let respostas21 = [];
let respostas22 = [];
let respostas23 = [];
let respostas24 = [];

let currentCena = cena1; // cena atual
let currentMenu = [];

let positionTextBox = [100, 520]; // posição do texto da fala
let widthTextBox = [500, 160];

let positionMenuBox = [100, 300];
let widthMenuBox = [255, 350];
// let positionMenuBox = [100, 100];
// let widthMenuBox = [255, 300];

let wrappedText = [];

let tela = "inicio"; // Estado inicial da aplicação
let indiceTexto = 0; // Índice do texto atual
//Imagens do jogo
let imagemInicial;
let imagemTalking;
let imagemListening;

//Funcao que carrega os valores das variaveis
function preload() {
    textos01 = loadStrings("./textos/textos01.txt");
    textos02 = loadStrings("./textos/textos02.txt");
    textos03 = loadStrings("./textos/textos03.txt");
    textos04 = loadStrings("./textos/textos04.txt");

    opcoes10 = loadStrings("./textos/opcoes10/opcoes10.txt");
    textos11 = loadStrings("./textos/opcoes10/textos11.txt");
    textos12 = loadStrings("./textos/opcoes10/textos12.txt");
    textos13 = loadStrings("./textos/opcoes10/textos13.txt");
    textos14 = loadStrings("./textos/opcoes10/textos14.txt");

    opcoes20 = loadStrings("./textos/opcoes20/opcoes20.txt");
    textos21 = loadStrings("./textos/opcoes20/textos21.txt");
    textos22 = loadStrings("./textos/opcoes20/textos22.txt");
    textos23 = loadStrings("./textos/opcoes20/textos23.txt");
    textos24 = loadStrings("./textos/opcoes20/textos24.txt");

    respostas11 = loadStrings("./textos/respostas10/respostas11.txt");
    respostas12 = loadStrings("./textos/respostas10/respostas12.txt");
    respostas13 = loadStrings("./textos/respostas10/respostas13.txt");
    respostas14 = loadStrings("./textos/respostas10/respostas14.txt");

    respostas21 = loadStrings("./textos/respostas20/respostas21.txt");
    respostas22 = loadStrings("./textos/respostas20/respostas22.txt");
    respostas23 = loadStrings("./textos/respostas20/respostas23.txt");
    respostas24 = loadStrings("./textos/respostas20/respostas24.txt");

    imagemInicial = loadImage("./img/bg_03.png");
    imagemTalking = loadImage("./img/bg_03.png");
    imagemListening = loadImage("./img/bg_03.png");

    preloadJoao();
}

function preloadJoao() {
    joaoNormal = loadImage('img/joao/joao_01.png');
    joaoFalando = loadImage('img/joao/joao_02.png');
    joaoFalandoTriste = loadImage('img/joao/joao_03.png');
}

//Funcao que delimita a area do jogo
function setup() {
    createCanvas(1280, 720);
    widthTextBox[0] = width - positionTextBox[0] * 2;
}


let mostrou = false;
//Funcao que exibe coisas na tela
function draw() {
    background(0);

    if (tela === "inicio") {
        mostrarTelaInicial();
    } else if (tela === "cena") {
        mostrarCena(currentCena);
    } else if (tela === "cenaMenu") {
        // console.log("Mostrando cenaMenu");
        mostrarCenaMenu(currentMenu);
    }

    // if (tela === "inicio") {
    //     mostrarTelaInicial();
    // } else if (tela === "cena01") {
    //     mostrarCena(currentCena);
    // } else if (tela === "02") {
    //     mostrarCena02();
    // } else if (tela === "03") {
    //     mostrarCena03();
    // } else if (tela === "04") {
    //     mostrarCena04();
    // } else if (tela == "10") {
    //     mostrarCena10();
    // } else if (tela == "11p") {
    //     mostrarCena11p();
    // } else if (tela == "12p") {
    //     mostrarCena12p();
    // } else if (tela == "13p") {
    //     mostrarCena13p();
    // } else if (tela == "14p") {
    //     mostrarCena14p();
    // } else if (tela == "11r") {
    //     mostrarCena11r();
    // } else if (tela == "12r") {
    //     mostrarCena12r();
    // } else if (tela == "13r") {
    //     mostrarCena13r();
    // } else if (tela == "14r") {
    //     mostrarCena14r();
    // }
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
    background(imagemInicial);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
    text("Minha Visual Novel", width / 2, height / 2 - 50);

    // Desenhar o botão
    rectMode(CENTER);
    fill(0, 100, 255);
    rect(width / 2, height / 2 + 50, 200, 50);
    fill(0);
    textSize(24);
    text("Iniciar", width / 2, height / 2 + 50);
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

    wrappedText = wrapText(message, widthTextBox[0]-30*2);

    for (let i = 0; i < wrappedText.length; i++) {
        text(wrappedText[i], positionTextBox[0] + 30, positionTextBox[1] + 60 + i * 25);
    }
}

function mostrarCena(cena) {
    background(imagemTalking);

    showPerson(joaoFalando, 500);

    showMessage(cena.cenas[indiceTexto].name, cena.cenas[indiceTexto].text);

    // Botão para avançar
    rectMode(CENTER);
    fill(0, 200, 0);
    rect(width - 100, height - 50, 150, 40);
    fill(0);
    textSize(18);
    text("Próximo", width - 100, height - 50);
}

function showMenu(menu) {
    let wrappedTextMenu = "";

    // Cor de preenchimento da caixa
    // fill("red");
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
    background(imagemTalking);

    showPerson(joaoNormal, 500);

    showMenu(menu);
}

function mousePressed() {
    if (tela === "inicio") {
        if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
            mouseY > height / 2 + 25 && mouseY < height / 2 + 75) {
            tela = "cena";
            currentCena = cena1;
            indiceTexto = 0
        }
    } else if (tela === "cena") {
        if (mouseX > width - 175 && mouseX < width - 25 && mouseY > height - 70 && mouseY < height - 30) {
            indiceTexto++;
            if (indiceTexto >= currentCena.cenas.length) {
                tela = currentCena.nextTela;

                // console.log(tela, currentCena.jump);

                // console.log("-", currentCena.jump, "-");
                indiceTexto = 0;

                if (tela === "cena") {
                    currentCena = mapCenas[currentCena.jump]; 
                } else if (tela === "cenaMenu") {
                    currentMenu = mapMenus[currentCena.jump];
                }
            }
        }
    } else if (tela === "cenaMenu") {
        let selectedOption = -1;
        for (let i = 0; i < currentMenu.length; i ++) {
            if (mouseX > positionMenuBox[0] + i * (widthMenuBox[0] + 15) && mouseX < positionMenuBox[0] + i * (widthMenuBox[0] + 15) + widthMenuBox[0] &&
                mouseY > positionMenuBox[1] && mouseY < positionMenuBox[1] + widthMenuBox[1]) {
                selectedOption = i;
            }
        }

        tela = currentMenu[selectedOption].nextTela;

        
        if (tela === "cena") {
            currentCena = mapCenas[currentMenu[selectedOption].jump]; 
        } else if (tela === "cenaMenu") {
            currentMenu = mapMenus[currentMenu[selectedOption].jump];
        }

        // currentCena = mapCenas[currentMenu[selectedOption].jump];
        // currentMenu = mapMenus[currentMenu[selectedOption].jump];

    }
}

//Funcao que verifica quando o mouse é pressionado
// function mousePressed() {
//     if (tela === "00") {
//         if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
//             mouseY > height / 2 + 25 && mouseY < height / 2 + 75) {
//             tela = "01";
//             indiceTexto = 0
//         }
//     } else if (tela === "01") {
//         if (mouseX > width - 175 && mouseX < width - 25 && mouseY > height - 70 && mouseY < height - 30) {
//             indiceTexto++;
//             if (indiceTexto >= textos01.length) {
//                 tela = "02";
//                 indiceTexto = 0
//             }
//         }
//     } else if (tela === "02") {
//         if (mouseX > width - 175 && mouseX < width - 25 && mouseY > height - 70 && mouseY < height - 30) {
//             indiceTexto++;
//             if (indiceTexto >= textos02.length) {
//                 tela = "03";
//                 indiceTexto = 0;
//             }
//         }
//     } else if (tela === "03") {
//         if (mouseX > width - 175 && mouseX < width - 25 && mouseY > height - 70 && mouseY < height - 30) {
//             indiceTexto++;
//             if (indiceTexto >= textos03.length) {
//                 tela = "04";
//                 indiceTexto = 0;
//             }
//         }
//     } else if (tela === "04") {
//         if (mouseX > width - 175 && mouseX < width - 25 && mouseY > height - 70 && mouseY < height - 30) {
//             indiceTexto++;
//             if (indiceTexto >= textos04.length) {
//                 tela = "10"
//                 indiceTexto = 0;
//             }
//         }
//     } else if (tela === "10") {
//         let margem = 50;
//         let larguraUtil = width - 2 * margem;
//         let larguraPorBloco = larguraUtil / 4;
//         let btnAltura = 50;
//         let yBase = height - 100;

//         for (let i = 0; i < 4; i++) {
//             let x = margem + i * larguraPorBloco;

//             // Verifica se o mouse está dentro do botão
//             if (
//                 mouseX > x + larguraPorBloco / 2 - 25 && // Esquerda do botão
//                 mouseX < x + larguraPorBloco / 2 + 25 && // Direita do botão
//                 mouseY > yBase && mouseY < yBase + btnAltura // Dentro da altura do botão
//             ) {
//                 if (i === 0) tela = "11p";
//                 if (i === 1) tela = "12p";
//                 if (i === 2) tela = "13p";
//                 if (i === 3) tela = "14p";
//             }
//         }
//     } else if (tela === "11p") {
//         if (mouseX > width - 175 && mouseX < width - 25 && mouseY > height - 70 && mouseY < height - 30) {
//             indiceTexto++;
//             if (indiceTexto >= textos11.length) {
//                 tela = "11r"
//                 indiceTexto = 0;
//             }
//         }
//     } else if (tela === "12p") {
//         if (mouseX > width - 175 && mouseX < width - 25 && mouseY > height - 70 && mouseY < height - 30) {
//             indiceTexto++;
//             if (indiceTexto >= textos12.length) {
//                 tela = "12r"
//                 indiceTexto = 0;
//             }
//         }
//     } else if (tela === "13p") {
//         if (mouseX > width - 175 && mouseX < width - 25 && mouseY > height - 70 && mouseY < height - 30) {
//             indiceTexto++;
//             if (indiceTexto >= textos13.length) {
//                 tela = "13r"
//                 indiceTexto = 0;
//             }
//         }
//     } else if (tela === "14p") {
//         if (mouseX > width - 175 && mouseX < width - 25 && mouseY > height - 70 && mouseY < height - 30) {
//             indiceTexto++;
//             if (indiceTexto >= textos14.length) {
//                 tela = "14r"
//                 indiceTexto = 0;
//             }
//         }
//     } else if (tela === "11r") {
//         if (mouseX > width - 175 && mouseX < width - 25 && mouseY > height - 70 && mouseY < height - 30) {
//             indiceTexto++;
//             if (indiceTexto >= respostas11.length) {
//                 tela = "20"
//                 indiceTexto = 0;
//             }
//         }
//     } else if (tela === "12r") {
//         if (mouseX > width - 175 && mouseX < width - 25 && mouseY > height - 70 && mouseY < height - 30) {
//             indiceTexto++;
//             if (indiceTexto >= respostas12.length) {
//                 tela = "20"
//                 indiceTexto = 0;
//             }
//         }
//     } else if (tela === "13r") {
//         if (mouseX > width - 175 && mouseX < width - 25 && mouseY > height - 70 && mouseY < height - 30) {
//             indiceTexto++;
//             if (indiceTexto >= respostas13.length) {
//                 tela = "20"
//                 indiceTexto = 0;
//             }
//         }
//     } else if (tela === "14r") {
//         if (mouseX > width - 175 && mouseX < width - 25 && mouseY > height - 70 && mouseY < height - 30) {
//             indiceTexto++;
//             if (indiceTexto >= respostas14.length) {
//                 tela = "20"
//                 indiceTexto = 0;
//             }
//         }
//     }
// }
