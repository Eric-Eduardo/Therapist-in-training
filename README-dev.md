# Guia para Desenvolvedores - Theraphist in Training

Bem-vindo ao guia de desenvolvimento da aplicação **Theraphist in Training**. Este documento fornece as informações necessárias para configurar o ambiente, entender a arquitetura do projeto e contribuir com o desenvolvimento.


## Índice
1. [Descrição do Projeto](#descrição-do-projeto)
2. [Estruturação](#estruturação)
2. [Detalhes de implementação](#detalhes-de-implementação)

---
# Descrição do Projeto

A aplicação utiliza a biblioteca [p5.js](https://p5js.org/reference/) para a construção da interface. Toda a lógica do jogo é contruída através do JavaScript.

# Estruturação

O projeto possui a seguinte estrutura de pastas:

```bash
/img                # imagens do projeto
/textos             # textos dos personagens
/index.html         # HTML principal
/p5.js              # Arquivo da biblioteca p5.js
/p5.sound.min.js    # Arquivo da biblioteca p5.js
/sketch.js          # Arquivo principal do p5.js
/style.css          # CSS principal
```


A pasta `/img` deverá conter todas as imagens que serão utilizadas no jogo. É necessário criar uma pasta, dentro da pasta `/img` para as imagens referentes aos personagens que aparecerão nas cenas do jogo. Por exemplo, `/img/person1` conterá todas as imagens de ***person1***.

A pasta `/textos` conterá arquivos referente as falas e cenas que serão carregadas no jogo. Esses textos consistem apenas em arquivos `.json`. Cada arquivo consiste em uma história/fase diferente. Abaixo está um exemplo de como esse arquivo deve estar estruturado:

```json
{
    "imagens": {
        "neutro": "img/person1/person1_neutro.png",
        "falando": "img/person1/person1_falando.png",
        "preocupado": "img/person1/person1_preocupado.png",
        "feliz": "img/person1/person1_feliz.png",
    },
    "cenas": {
        "nameCena1": {
            "dialogos": [
                {
                    "name": "Name Person",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "imgPerson": "falando"
                },
                {
                    "name": "Psicólogo",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "imgPerson": "neutro"
                },
                {
                    "name": "Name Person",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "imgPerson": "falando"
                },
                {
                    "name": "Psicólogo",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "imgPerson": "feliz"
                }
            ],
            "nextTela": "cenaMenu",
            "jump": "menu1"
        },
        "nameCena2": {
             "dialogos": [
                {
                    "name": "Name Person",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "imgPerson": "preocupado"
                },
                {
                    "name": "Psicólogo",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "imgPerson": "neutro"
                },
                {
                    "name": "Psicólogo",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "imgPerson": "feliz"
                }
            ],
            "nextTela": "final",
            "jump": ""
        }
    },
    "menus": {
        "nameMenu1": {
            "opcoes": [
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "pontuacao": 1,
                    "nextTela": "cena",
                    "jump": "cena2"
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "pontuacao": 0,
                    "nextTela": "cena",
                    "jump": "cena2"
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "pontuacao": 2,
                    "nextTela": "cena",
                    "jump": "cena2"
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "pontuacao": -1,
                    "nextTela": "cena",
                    "jump": "cena3"
                }
            ],
        },
        "nameMenu2": {
            "opcoes": [
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "pontuacao": 1,
                    "nextTela": "cena",
                    "jump": "cena2"
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "pontuacao": 0,
                    "nextTela": "cena",
                    "jump": "cena2"
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "pontuacao": 2,
                    "nextTela": "cena",
                    "jump": "cena2"
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "pontuacao": -1,
                    "nextTela": "cena",
                    "jump": "cena3"
                }
            ],
        },
    }
}
```

Esse arquivo irá carregar todas as informações necessárias para cada cena: imagem do personagem, fala, opções e as direções que a história deve seguir ao longo do tempo.

É importante destacar que é considerado uma "cena" as parte do jogo em que está havendo apenas falas. É considerado "menu" a parte em que é mostrada opções de fala ao usuário. A escolha de cada opção pode levar a diferentes "cenas".

- `imagens`: deve conter um "mapeamento" do **nome da imagem**, que pode ser qualquer texto, para o local onde a imagem está guardada. 

- `cenas`: contém todas as cenas daquela fase/história. Cada cena pode ser separadas por falas/**diálogos**. Cada cena possui as seguintes informações:

    - `nextTela`: consiste no nome da tela que será carregada após a cena acabar. As possívels opções são:
        
        - *inicio*: tela inicial do jogo;

        - *cena*: uma cena da história

        - *cenaMenu*: menu de opções da história

        - *selecaoFase*: tela de seleção de fases

        - *final*: tela com a pontuação obtida

    - `jump`: caso a "*nextTela*" seja uma cena ou um menu, indica o nome da próxima cena/menu. 

    - `dialogos`: armazena os diálogos da cena. Podemos dizer que cada diálogo consiste em uma frase que está sendo dita na cena. Cada um desses diálogos/frases possuem as seguintes informações

        - `name`: nome da personagem que está falando (nome do paciente ou o psicólogo)

        - `text`: texto da fala

        - `imgPerson`: nome da imagem do persongem que será carregada na tela

- `menus`: contém todos os menus que serão exibidos na história. Cada menu possui as seguintes informações:

    - `opcoes`: consiste em uma lista de opções que serão exibidas na tela para o usuário. Cada opção possui as seguintes propriedades:

        - `text`: texto da opção 
        
        - `pontuacao`: pontuação dessa determinada opção
        
        - `nextTela` e `jump` possuem o mesmo sentido do que o explicado anteriormente
        

# Detalhes de Implementação

O programa tenta automatizar o máximo possível alguns processos, fazendo com que o programador apenas se preocupe mais com a lógica do jogo do que com detalhes de layout da tela. Abaixo estão algumas funções que são de grande importância para o programa:

- `loadHistory(path)`: carrega uma determinada história (arquivo .json) 

- `addClickObject(x1, y1, x2, y2, action)`: essa função armazena em um Map um elemento "clicável" da tela. Por exemplo, podemos criar um retângulo ou qualquer outro elemento na tela, e passar as coordenadas da ponta esqueda superior ***(x1, y1)*** e ponta direita inferior ***(x2, y2)*** desse objeto para a função. Dessa forma, quando o usuário clicar na tela, o programa verifica se as coordenadas do clique estão "dentro" de algum dos objetos armazenados no Map. Caso sim, será acionado a varviável ***action***, que consiste em um *arrow function* da ação que será realizada ao clicar nesse objeto.

- `drawButton(textBtn, xBtn, yBtn, widthBtn, heightBtn, colorBtn, action)`: padroniza a criação de botões. Essa função recebe os parâmetros:

    - `textBtn`: texto que será exibido no botão

    - `xBtn` e `yBtn`: coordenadas *x* e *y* (da ponta superior esquerda) do botão.

    - `widthBtn` e `heightBtn`: largura e altura

    - `colorBtn`: cor de fundo botão

    - `action`: função que será acionado ao clicar o botão

- `wrapText(text, maxWidth)`: essa função recebe um texto e uma largura como parâmetros. Ela é utlizada para auxiliar na quebra de linhas de um texto em um determinado elemento. Por exemplo, ela pode ser usada para fazer com que um texto não ultrapasse a largura de um determinado elemento. Essa função retorna um *array*, onde cada elemento consiste em uma linha do texto.

- `showPerson(img, size)`: padroniza a insersão da imagem do personagem na cena (os personagens precisam estar em uma coordenada específica). Ela recebe o objeto da imagem e o tamanho que a imagem deve ficar na tela.

- `showMessage(name, message)`: mostra o balão de fala na tela. Ela recebe o nome de quem está falando e o texto da mensagem.


