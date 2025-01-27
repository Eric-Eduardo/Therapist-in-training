let histories = ["historia002.json", "historiaJoao.json"];
let jsonHistories = [];
let actualImagesMap = null;
let allImagesMap = [];

let currentCena = ""; // cena atual
let currentMenu = "";

let currentHistory = null;

let positionTextBox = [100, 520]; // posição do texto da fala
let widthTextBox = [500, 160];

let positionMenuBox = [100, 300]; // posição da caixa de falas
let widthMenuBox = [255, 350];

let wrappedText = [];

let tela = "inicio"; // Estado inicial da aplicação
let indiceTexto = 0; // Índice do texto atual
//Imagens do jogo
let imagemFundo;
let lastImagePerson;
let pontuacao = 0;

let mapButtons = new Map();

//Funcao que carrega os valores das variaveis
function preload() {
    imagemFundo = loadImage("./img/bg.png");
    imagemFundoEscura = loadImage("./img/bg_escuro.png");
    // preloadJoao();
    loadHistories(histories);

    // loadHistory("textos/historia002.json");
}

//Funcao que delimita a area do jogo
function setup() {
    createCanvas(1280, 720);
    resizeWindow();
    noLoop();
    // document.querySelector("canvas").style.height = "695px";
    widthTextBox[0] = width - positionTextBox[0] * 2;
    
    // currentHistory = jsonHistories[0];
    // currentCena = currentHistory.firstCena;
    // tela = currentHistory.firstTela;
    // indiceTexto = 0;
    // actualImagesMap = allImagesMap[0];
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

function loadHistories(arrayHistories) {
    for (let h of arrayHistories) {
        loadHistory(`textos/${h}`);
    }
}

function carregarImagensDaHistoria(imagens) {
    let objectImages = new Map();

    if (imagens) {
        for (let imageName in imagens) {
            objectImages.set(imageName, loadImage(imagens[imageName], () => console.log(`Image ${imagens[imageName]} carregada`), () => "Erro ao carregar imagem "));
        }
    }

    allImagesMap.push(objectImages);
    // lastImagePerson = imagesMap[Object.keys(imagesMap)[0]];
}

function loadHistory(path) {
    loadJSON(path, (data) => {
        jsonHistories.push(data);
        // currentHistory = data;
        // currentCena = Object.keys(currentHistory.cenas)[0];
        carregarImagensDaHistoria(data.imagens);
    });
}

//Funcao que exibe coisas na tela
function draw() {
    textFont('Roboto Mono');
    mapButtons.clear();
    background(0);

    if (tela === "inicio") {
        mostrarTelaInicial();
    } else if (tela === "selecaoFase") {
        mostrarTelaSelecaoFase();
    } else if (tela === "cena") {
        mostrarCena(currentCena);
    } else if (tela === "cenaMenu") {
        mostrarCenaMenu(currentMenu);
    } else if (tela === "final") {
        mostrarTelaFinal(); // Nova função para exibir a tela final
    }

    // image(allImagesMap[0].get('neutro'), 0, 0, 500, 500);
}

// Para cada tela do jogo, sempre que o jogador clicar na tela o programa irá buscar em mapButtons se há algum botão naquela coordenada que sofreu o click. Caso sim, serão disparado a ffunção "action" referente aquele detereminado botão. Funciona como um "onclick" no JS
function addClickObject(x1, y1, x2, y2, action) {
    mapButtons.set(`${x1}${y1}${x2}${y2}`, { x1: x1, y1: y1, x2: x2, y2: y2, action: action });
}

function drawButton(textBtn, xBtn, yBtn, widthBtn, heightBtn, colorBtn, action) {
    // Os botões são adicionados automaticamente no "mapa de botões"  
    addClickObject(xBtn, yBtn, xBtn + widthBtn, yBtn + heightBtn, action);
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
    // let lines = [];
    let line = "";
    let currentLine = "";
    let testLine = "";

    for (let word of words) {
        testLine = currentLine + (currentLine === "" ? "" : " ") + word;

        if (textWidth(testLine) > maxWidth) {
            // lines.push(currentLine);
            line += currentLine + "\n"
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    }

    if (currentLine !== "") {
        // lines.push(currentLine);
        line += currentLine;
    }

    // return lines;
    return line;
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

    drawButton("Jogar", 547, 336, 186, 48, "#9F554B", () => {
        tela = "selecaoFase";
        // currentCena = Object.keys(currentHistory.cenas)[0];
        // indiceTexto = 0;
    });
    drawButton("Como jogar", 547, 420, 186, 48, "#9F554B", () => {
        console.log("Como jogar");
    });
}

// Padroniza a criação da imagem referente aos pacientes
function showPerson(img, size) {
    let newWidth = size;

    // Calcula a altura proporcional
    let aspectRatio = img.height / img.width; // Razão de aspecto
    let newHeight = newWidth * aspectRatio;

    // Desenha a imagem redimensionada
    image(img, 395, 76, newWidth, newHeight);
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
    textSize(16);
    text(name, positionTextBox[0] + 30, positionTextBox[1] + 20);
    textStyle(NORMAL);

    text(wrapText(message, widthTextBox[0] - 30 * 2), positionTextBox[0] + 30, positionTextBox[1] + 60);
}

// Carrega a cena (fundo, imagem do personagem e fala)
function mostrarCena() {
    background(imagemFundo);
    lastImagePerson = actualImagesMap.get(currentHistory.cenas[currentCena].dialogos[indiceTexto].imgPerson);
    showPerson(lastImagePerson, 500);
    showMessage(currentHistory.cenas[currentCena].dialogos[indiceTexto].name, currentHistory.cenas[currentCena].dialogos[indiceTexto].text);

    // Botão para avançar
    let action = () => {
        indiceTexto++;
        if (indiceTexto >= currentHistory.cenas[currentCena].dialogos.length) {
            tela = currentHistory.cenas[currentCena].nextTela;
            indiceTexto = 0;
            let nextJump = currentHistory.cenas[currentCena].jump;
            
            currentCena = currentHistory.cenas[nextJump] ? nextJump : currentCena;
            currentMenu = currentHistory.menus[nextJump] ? nextJump : currentMenu;

        }
    }
    drawButton("Próximo", positionTextBox[0] + widthTextBox[0] - 90, positionTextBox[1] + widthTextBox[1] - 20, 150, 40, "#983f34", action);
}

// Mostra o menu de opções
function showMenu(menu) {
    let maxLineNumber = 0;
    let textsize = 16;
    let texts = [];

    let gap = 10;
    let xMenu = 100; // posição x do primeiro card
    let widthMenu = (width - 2 * xMenu - (menu.length - 1) * gap) / (menu.length);
    let heightMenu;


    noStroke(); // Sem borda

    rectMode(CORNER);

    textSize(textsize);

    for (let i = 0; i < menu.length; i++) {
        texts.push(wrapText(menu[i].text, widthMenu - 30));
        let numLines = texts[i].split('\n').length;
        maxLineNumber = numLines > maxLineNumber ? numLines : maxLineNumber;
    }

    heightMenu = maxLineNumber * (textsize * 1.25) + 75;

    for (let i = 0; i < menu.length; i++) {
        fill("#983f34DC");
        rectMode(CORNER);
        rect(xMenu + i * (widthMenu + gap), height / 2 - heightMenu / 2, widthMenu, heightMenu, 20);

        textSize(24);
        fill("white");
        textAlign(CENTER, TOP);
        textStyle(BOLD);
        rectMode(CENTER);
        text(i + 1, xMenu + widthMenu / 2 + i * (widthMenu + gap), height / 2 - heightMenu / 2 + 20);
        textStyle(NORMAL);
        textAlign(LEFT, TOP);
        textSize(textsize);


        text(texts[i], xMenu + 15 + i * (widthMenu + gap), height / 2 - heightMenu / 2 + 60);

        addClickObject(xMenu + i * (widthMenu + gap), height / 2 - heightMenu / 2, xMenu + i * (widthMenu + gap) + widthMenu, height / 2 - heightMenu / 2 + heightMenu, () => {
            pontuacao += currentHistory.menus[currentMenu].opcoes[i].pontuacao;
            tela = currentHistory.menus[currentMenu].opcoes[i].nextTela;

            let nextJump = currentHistory.menus[currentMenu].opcoes[i].jump;
            currentCena = currentHistory.cenas[nextJump] ? nextJump : currentCena;
            currentMenu = currentHistory.menus[nextJump] ? nextJump : currentMenu;
        })
    }

}

function mostrarCenaMenu() {
    background(imagemFundo);
    showPerson(lastImagePerson, 500);
    showMenu(currentHistory.menus[currentMenu].opcoes);
}

function mostrarTelaSelecaoFase() {
    let widthCard = 180;
    let heightCard = 130;
    let gap = 40;
    let marginTop = 190;

    rectMode(CORNER);
    background(imagemFundoEscura);
    textSize(36);

    textStyle(BOLD);
    fill("white");

    textAlign(LEFT, TOP);
    text("Selecione uma sessão", 110, 102);


    noStroke();
    for (let i in jsonHistories) {
        fill("#9B3E27");
        rect(110 + i * (widthCard + gap), marginTop, widthCard, heightCard, 20);
        fill("white");
        textAlign(CENTER, CENTER);
        textSize(20);
        text(jsonHistories[i].title, 110 + widthCard / 2 + i * (widthCard + gap), marginTop + heightCard / 2);


        addClickObject(110 + i * (widthCard + gap), marginTop, 110 + i * (widthCard + gap) + widthCard, marginTop + heightCard, () => {
            currentHistory = jsonHistories[i];
            currentCena = currentHistory.firstCena;
            tela = currentHistory.firstTela;
            indiceTexto = 0;
            actualImagesMap = allImagesMap[i];
            // lastImagePerson = allImagesMap[i].get('neutro');
            // console.log(Object.keys(allImagesMap[i]));
            // carregarImagensDaHistoria(currentHistory.imagens);

        })
        // console.log(jsonHistories[i].title);
    }



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
    addClickObject(width / 2 - 200, height / 2 - 100, width / 2 + 200, height / 2 + 100, () => {
        tela = "inicio";
        pontuacao = 0; // Reinicia a pontuação
        indiceTexto = 0;
    })
}

function mousePressed() {

    mapButtons.forEach((valor, chave) => {
        if (mouseX > valor.x1 && mouseX < valor.x2 && mouseY > valor.y1 && mouseY < valor.y2) {
            valor.action();
        }
    })

    redraw();
}