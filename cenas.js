
/*
cenas: lista com informações sobre as cenas
nextTela: podemos separar o jogo em sessões/telas (tela inicial, tela de história/cena, configurações etc)
jump: nome da próxima tela
*/
let cena1 = {
    cenas: [
        {
            name: "João",
            text: "Desculpe, cheguei no horário certo? Eu não posso me atrasar..."
        },
        {
            name: "Psicólogo",
            text: "Está tudo bem, vamos começar quando você estiver pronto.",
        },
        {
            name: "João",
            text: "Ah, que bom... Eu não sou bom com horários. Já estou tão sobrecarregado, mal consigo lidar com tudo que tenho que fazer.",
        },
        {
            name: "Psicólogo",
            text: "Compreendo, parece que você tem muita coisa na cabeça. Vamos começar com uma pequena conversa para nos conhecermos melhor.",
        }
    ],
    nextTela: "cenaMenu",
    jump: "menu1"
};

let cena2 = {
    cenas: [
        {
            name: "João",
            text: "Meu nome é João, tenho 29 anos."
        },
        {
            name: "João",
            text: "Eu trabalho como analista de sistemas em uma empresa de tecnologia, mas, ultimamente, as coisas não têm ido muito bem."
        },
        {
            name: "João",
            text: "Sinto que o trabalho tem me consumido, e em casa também não tem sido fácil... minha relação com minha família está tensa, e isso só aumenta minha ansiedade."
        }
    ],
    nextTela: "cenaMenu",
    jump: "menu2"
};

let cena3 = {
    cenas: [
        {
            name: "João",
            text: "Bem, acho que... o que me trouxe até aqui é que minha vida tem sido um turbilhão nos últimos meses."
        },
        {
            name: "João",
            text: "Trabalho o tempo todo, e minha cabeça não desliga. São prazos, reuniões, e eu sinto que estou sempre no limite. As pessoas esperam muito de mim, e eu sinto que, se falhar em alguma coisa, vai ser o fim."
        },
        {
            name: "João",
            text: "Eu só quero encontrar uma forma de descansar, de não me sentir tão exausto o tempo todo."
        }
    ],
    nextTela: "cenaMenu",
    jump: "menu2"
};

let cena4 = {
    cenas: [
        {
            name: "João",
            text: "Bem... eu... eu realmente não sei por onde começar."
        },
        {
            name: "João",
            text: "Eu... Eu tenho me sentido muito sobrecarregado no trabalho, e tem sido difícil dormir, pensar em outra coisa que não seja o trabalho, sabe?"
        },
        {
            name: "João",
            text: "Tenho medo de errar, de decepcionar as pessoas. E tudo parece tão urgente... parece que estou perdendo o controle."
        }
    ],
    nextTela: "cenaMenu",
    jump: "menu2"
};

let cena5 = {
    cenas: [
        {
            name: "João",
            text: "É, talvez você tenha razão. Eu... não queria parecer fraco, acho. Mas tem sido difícil, não sei mais como lidar com tudo."
        }
    ],
    nextTela: "cenaMenu",
    jump: "menu3"
};

let cena6 = {
    cenas: [
        {
            name: "João",
            text: "Sim, tem afetado bastante. Eu mal consigo passar tempo com minha família ou amigos."
        },
        {
            name: "João",
            text: "Quando estou em casa, estou tão cansado que não consigo me concentrar nas conversas ou aproveitar o tempo com eles. Isso tem gerado um certo distanciamento, e eu sinto falta dessa conexão"
        },
    ],
    nextTela: "cenaMenu",
    jump: "menu3"
};

let cena7 = {
    cenas: [
        {
            name: "João",
            text: "Na verdade, estou me sentindo cada vez mais isolado. O trabalho tem consumido tanto o meu tempo que eu nem tenho mais tempo para mim mesmo."
        },
        {
            name: "João",
            text: "Quando termino as tarefas, só quero descansar, mas mal consigo relaxar porque fico pensando nas pendências. Isso está me fazendo perder o interesse por coisas que eu costumava gostar."
        },
    ],
    nextTela: "cenaMenu",
    jump: "menu3"
};

let cena8 = {
    cenas: [
        {
            name: "João",
            text: "É... eu entendo, talvez eu só precise ser mais organizado. Mas ainda não sei se isso vai resolver tudo..."
        },
        {
            name: "Psicólogo",
            text: "É isso mesmo, João. Como já mencionei, todos têm responsabilidades e pressões. A chave está em se organizar, priorizar e aprender a lidar com essas demandas."
        },
        {
            name: "Psicólogo",
            text: "Às vezes, a solução está em dar um passo atrás e ver o que realmente precisa de sua atenção. Isso vai melhorar conforme você ajusta sua abordagem ao trabalho."
        },
        {
            name: "João",
            text: "Entendi. Vou tentar... espero que ajude."
        },
        {
            name: "Psicólogo",
            text: "Bom, João, espero que você consiga encontrar uma forma de se organizar e lidar com essas pressões. Não hesite em procurar ajuda caso precise."
        },
        {
            name: "Psicólogo",
            text: "Até a próxima!"
        }
    ],
    nextTela: "inicio",
    jump: ""
};

let cena9 = {
    cenas: [
        {
            name: "João",
            text: "Eu realmente me senti perdido com tudo isso... não sabia nem como começar a falar. Mas é bom saber que não estou sozinho."
        },
        {
            name: "Psicólogo",
            text: "Você fez muito bem em começar essa conversa, João.Às vezes, só precisamos de alguém para ouvir e ajudar a organizar nossos pensamentos."
        },
        {
            name: "Psicólogo",
            text: "Fico feliz que tenha se aberto.Isso é um passo importante para lidar com tudo o que está pesando sobre você."
        }
    ],
    nextTela: "cena",
    jump: "cena12"
};

let cena10 = {
    cenas: [
        {
            name: "João",
            text: "Eu já tentei fazer listas antes, mas parece que a quantidade de coisas não diminui. Eu só me sinto ainda mais pressionado."
        },
        {
            name: "Psicólogo",
            text: "Entendo, João. Às vezes, as listas podem parecer sobrecarregadas se não conseguirmos ver um progresso imediato."
        },
        {
            name: "Psicólogo",
            text: "Talvez, além de listar, você possa dividir suas tarefas em partes menores e realizáveis. Em vez de ver a lista inteira, foque no que você pode fazer naquele momento e comemore até as pequenas conquistas."
        },
        {
            name: "Psicólogo",
            text: "Isso pode ajudar a diminuir a sensação de que a pressão está sempre lá."
        },
        {
            name: "João",
            text: "É, eu acho que sim... Vou tentar colocar tudo isso em prática, pelo menos dar uma chance para pensar de outra forma."
        }
    ],
    nextTela: "cena",
    jump: "cena12"
};

let cena11 = {
    cenas: [
        {
            name: "João",
            text: "Quando penso nas minhas responsabilidades, sinto uma pressão constante no peito."
        },
        {
            name: "João",
            text: "É como se estivesse sempre correndo contra o tempo, e por mais que eu tente, parece que nunca consigo alcançar o que preciso."
        },
        {
            name: "João",
            text: "Às vezes, tenho dificuldades até para me concentrar nas coisas mais simples, porque minha mente está sempre ocupada com as preocupações."
        },
        {
            name: "Psicólogo",
            text: "Isso parece muito difícil, João.Eu entendo como isso pode ser cansativo."
        },
        {
            name: "Psicólogo",
            text: "Quando nossa mente fica sobrecarregada, é difícil encontrar clareza, não é?"
        },
        {
            name: "Psicólogo",
            text: "Pode ser que seu corpo e mente estejam tentando lidar com essa pressão de uma maneira que acaba deixando você sem energia."
        },
        {
            name: "Psicólogo",
            text: "Vamos tentar entender melhor como essa pressão afeta você no dia a dia."
        },
        {
            name: "Psicólogo",
            text: "Quais são os momentos mais intensos para você?"
        },
        {
            name: "João",
            text: "Bem, acho que os momentos mais difíceis são de manhã, quando começo o dia já pensando nas tarefas que tenho que fazer."
        },
        {
            name: "João",
            text: "Parece que a ansiedade começa logo cedo, e eu mal consigo sair da cama.Quando não consigo dar conta das coisas, me sinto ainda pior."
        },
        {
            name: "Psicólogo",
            text: "Entendo, João.Essa sensação de estar sobrecarregado logo ao acordar pode realmente ser desgastante."
        },
        {
            name: "Psicólogo",
            text: "Às vezes, a ansiedade se manifesta antes de termos a chance de agir.Que tal explorarmos maneiras de criar momentos mais tranquilos, mesmo nas manhãs agitadas ?"
        },
        {
            name: "Psicólogo",
            text: "Podemos trabalhar juntos para encontrar uma forma de lidar com esses sentimentos mais cedo no dia."
        },
        {
            name: "João",
            text: "Sim, eu adoraria tentar algo assim...talvez eu consiga começar o dia de uma forma mais leve."
        },
        {
            name: "Psicólogo",
            text: "Vamos explorar algumas estratégias juntos, João.O importante é que você já começou a refletir sobre isso e está aberto a encontrar maneiras de aliviar essa pressão.Vamos construir um caminho juntos, passo a passo."
        }
    ],
    nextTela: "inicio",
    jump: ""
};

let cena12 = {
    cenas: [
        {
            name: "Psicólogo",
            text: "É isso, João. O que você está fazendo aqui, buscando ajuda e tentando entender o que está acontecendo, já é um grande passo. Lembre-se de que é normal ter altos e baixos, e você não precisa enfrentar tudo sozinho. Podemos continuar trabalhando nisso juntos, ok?"
        },
        {
            name: "João",
            text: "Obrigado, vou tentar melhorar. Até a próxima."
        },
        {
            name: "João",
            text: "Fico feliz que tenha se sentido mais tranquilo. Cuide de si, João. Estarei aqui para ajudar sempre que precisar. Até a próxima."
        }
    ],
    nextTela: "inicio",
    jump: ""
}
let menu1 = [
    {
        text: "Eu gostaria de conhecer um pouco mais sobre você. Pode me dizer seu nome, idade e algo sobre sua vida que você sinta ser importante para nossa conversa?",
        pontuacao: 0,
        nextTela: "cena",
        jump: "cena2"
    },
    {
        text: "Antes de começarmos, me diga um pouco sobre sua história. Como você se sente hoje e o que espera desta sessão?",
        pontuacao: 0,
        nextTela: "cena",
        jump: "cena3"
    },
    {
        text: "Então, me fale um pouco sobre você. Qual é o seu nome? E o que trouxe você até aqui hoje?",
        pontuacao: 0,
        nextTela: "cena",
        jump: "cena3"
    },
    {
        text: "Ok, vamos lá. Diga logo o que está te incomodando, porque estamos com pouco tempo.",
        pontuacao: 0,
        nextTela: "cena",
        jump: "cena4"
    }
];

let menu2 = [
    {
        text: "Bom, isso é comum. Todo mundo tem pressões no trabalho. Acho que você só precisa aprender a lidar melhor com isso. A vida é cheia de responsabilidades, e todos nós precisamos aprender a administrar",
        pontuacao: 0,
        nextTela: "cena",
        jump: "cena5"
    },
    {
        text: "Eu posso ver como isso deve estar sendo muito desafiador para você. Parece que essa pressão toda está tirando seu equilíbrio. É normal que, quando estamos sobrecarregados, nossa mente fique em um ciclo, repetindo os mesmos pensamentos. Você consegue perceber em que momentos do dia esse estresse parece ser mais forte? Ou talvez, como ele afeta seu descanso e a forma como você se relaciona com outras pessoas?",
        pontuacao: 0,
        nextTela: "cena",
        jump: "cena6"
    },
    {
        text: "Entendo, João. Parece que o trabalho tem realmente tomado muito espaço na sua vida. O medo de errar e a sensação de urgência podem ser muito difíceis de lidar. Além disso, a dificuldade para dormir é uma resposta comum quando estamos sobrecarregados. Eu gostaria de saber mais sobre como isso afeta outras áreas da sua vida. Você tem sentido que o trabalho tem influenciado suas relações pessoais ou até seu tempo para si mesmo?",
        pontuacao: 0,
        nextTela: "cena",
        jump: "cena6"
    },
    {
        text: "Parece que você está vivendo com um nível muito alto de pressão e medo de falhar, João. Como isso te faz se sentir no dia a dia? Você tem experimentado ansiedade ou medo constante, ou há momentos em que isso diminui?",
        pontuacao: 0,
        nextTela: "cena",
        jump: "cena7"
    }
];

let menu3 = [
    {
        text: "Todo mundo tem responsabilidades e pressões. Você só precisa se organizar melhor e gerenciar melhor o tempo. Isso vai passar quando você aprender a lidar com as demandas do trabalho.",
        pontuacao: 0,
        nextTela: "cena",
        jump: "cena8"
    },
    {
        text: "Eu entendo como isso pode ser difícil, João. É normal se sentir sobrecarregado quando as responsabilidades começam a pesar tanto. Mas não é sobre ser fraco. Às vezes, precisamos de um espaço para conversar sobre o que estamos vivendo para poder lidar com isso de forma mais saudável. Você não está sozinho nisso.",
        pontuacao: 0,
        nextTela: "cena",
        jump: "cena9"
    },
    {
        text: "Eu entendo que seja difícil, mas talvez uma lista de tarefas e um cronograma de prioridades possam ajudar a aliviar um pouco da pressão. Você já tentou organizar suas tarefas dessa forma? Isso pode tornar as coisas mais gerenciáveis.",
        pontuacao: 0,
        nextTela: "cena",
        jump: "cena10"
    },
    {
        text: "Isso soa realmente desafiador. Parece que você está lidando com muita pressão, João. Quero ouvir mais sobre como está afetando você. O que você sente quando pensa sobre essas responsabilidades? Vamos explorar isso juntos.",
        pontuacao: 0,
        nextTela: "cena",
        jump: "cena11"
    }
];

let mapCenas = {
    "cena1": cena1,
    "cena2": cena2,
    "cena3": cena3,
    "cena4": cena4,
    "cena5": cena5,
    "cena6": cena6,
    "cena7": cena7,
    "cena8": cena8,
    "cena9": cena9,
    "cena10": cena10,
    "cena11": cena11,
    "cena12": cena12
}


let mapMenus = {
    "menu1": menu1,
    "menu2": menu2,
    "menu3": menu3
}