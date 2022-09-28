(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 






let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria:"LUGARES"
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria:"LUGARES"
    },
    palavra003 = {
        nome: "CHILE",
        categoria:"LUGARES"
    },
    palavra004 = {
        nome: "INDONESIA",
        categoria:"LUGARES"
    },
    palavra005 = {
        nome: "MALDIVAS",
        categoria:"LUGARES"
    },
    palavra006 = {
        nome: "INGLATERRA",
        categoria:"LUGARES"
    },
    palavra007 = {
        nome: "GROELANDIA",
        categoria:"LUGARES"
    },
    palavra008 = {
        nome: "BRASIL",
        categoria:"LUGARES"
    },
    palavra009 = {
        nome: "INDONESIA",
        categoria:"LUGARES"
    },
    palavra010 = {
        nome: "CHINA",
        categoria:"LUGARES"
    },
    palavra011 = {
        nome: "CINGAPURA",
        categoria:"LUGARES"
    },
    palavra012 = {
        nome: "NORUEGA",
        categoria:"LUGARES"
    },
    palavra013 = {
        nome: "PORTUGAL",
        categoria:"LUGARES"
    },
    palavra014 = {
        nome: "MALTA",
        categoria:"LUGARES"
    },
    palavra015 = {
        nome: "NEPAL",
        categoria:"LUGARES"
    },
    palavra016 = {
        nome: "IRAQUE",
        categoria:"LUGARES"
    },
    palavra017 = {
        nome: "ESPANHA",
        categoria:"LUGARES"
    },
    palavra018 = {
        nome: "COREIA DO SUL",
        categoria:"LUGARES"
    },
    palavra019 = {
        nome: "LAOS",
        categoria:"LUGARES"
    },
    palavra020 = {
        nome: "URUGUAI",
        categoria:"LUGARES"
    },
    palavra021 = {
        nome: "JAMAICA",
        categoria:"LUGARES"
    },
    palavra022 = {
        nome: "PARAGUAI",
        categoria:"LUGARES"
    },
    palavra023 = {
        nome: "ARGENTINA",
        categoria:"LUGARES"
    },
    palavra024 = {
        nome: "COSTA RICA",
        categoria:"LUGARES"
    },
    palavra025 = {
        nome: "EL SALVADOR",
        categoria:"LUGARES"
    },
    palavra026 = {
        nome: "EGITO",
        categoria:"LUGARES"
    },
    palavra027 = {
        nome: "GANA",
        categoria:"LUGARES"
    },
    palavra028 = {
        nome: "SENEGAL",
        categoria:"LUGARES"
    },
    palavra029 = {
        nome: "HONDURAS",
        categoria:"LUGARES"
    },
    palavra030 = {
        nome: "PERU",
        categoria:"LUGARES"
    },
    palavra031 = {
        nome: "MONTENEGRO",
        categoria:"LUGARES"
    },
    palavra032 = {
        nome: "REINO UNIDO",
        categoria:"LUGARES"
    },
    palavra033 = {
        nome: "CATAR",
        categoria:"LUGARES"
    },
    palavra034 = {
        nome: "FILIPINAS",
        categoria:"LUGARES"
    },
    palavra035 = {
        nome: "HUNGRIA",
        categoria:"LUGARES"
    },
    palavra036 = {
        nome: "TURQUIA",
        categoria:"LUGARES"
    },
    palavra037 = {
        nome: "BICICLETA",
        categoria:"TRANSPORTE"
    },
    palavra038 = {
        nome: "LANCHA",
        categoria:"TRANSPORTE"
    },
    palavra039 = {
        nome: "NAVIO",
        categoria:"TRANSPORTE"
    },
    palavra040 = {
        nome: "TELEFERICO",
        categoria:"TRANSPORTE"
    },
    palavra041 = {
        nome: "MOTOCICLETA",
        categoria:"TRANSPORTE"
    },
    palavra042 = {
        nome: "BARCO",
        categoria:"TRANSPORTE"
    },
    palavra043 = {
        nome: "AERONAVE",
        categoria:"TRANSPORTE"
    },
    palavra044 = {
        nome: "TREM",
        categoria:"TRANSPORTE"
    },
    palavra045 = {
        nome: "CAIAQUE",
        categoria:"TRANSPORTE"
    },
    palavra046 = {
        nome: "JET SKI",
        categoria:"TRANSPORTE"
    },
    palavra047 = {
        nome: "CANOA",
        categoria:"TRANSPORTE"
    },
    palavra048 = {
        nome: "XICARA",
        categoria:"OBJETOS"
    },
    palavra049 = {
        nome: "MOEDA",
        categoria:"OBJETOS"
    },
    palavra050 = {
        nome: "ESPARADRAPO",
        categoria:"OBJETOS"
    },
    palavra051 = {
        nome: "SINO",
        categoria:"OBJETOS"
    },
    palavra052 = {
        nome: "CHUVEIRO",
        categoria:"OBJETOS"
    },
    palavra053 = {
        nome: "APITO",
        categoria:"OBJETOS"
    },
    palavra054 = {
        nome: "LAMPADA",
        categoria:"OBJETOS"
    },
    palavra055 = {
        nome: "ARMADURA",
        categoria:"OBJETOS"
    },
    palavra056 = {
        nome: "CORTINA",
        categoria:"OBJETOS"
    },
    palavra057 = {
        nome: "LAPIS",
        categoria:"OBJETOS"
    },
    palavra058 = {
        nome: "ALMOFADA",
        categoria:"OBJETOS"
    },
    palavra059 = {
        nome: "APONTADOR",
        categoria:"OBJETOS"
    },
    palavra060 = {
        nome: "BONECA",
        categoria:"OBJETOS"
    },
    palavra061 = {
        nome: "BOLA",
        categoria:"OBJETOS"
    },
    palavra062 = {
        nome: "BALDE",
        categoria:"OBJETOS"
    },
    palavra063 = {
        nome: "CANETA",
        categoria:"OBJETOS"
    },
    palavra064 = {
        nome: "COLHER",
        categoria:"OBJETOS"
    },
    palavra065 = {
        nome: "DISCO",
        categoria:"OBJETOS"
    },
    palavra066 = {
        nome: "ENVELOPE",
        categoria:"OBJETOS"
    },
    palavra067 = {
        nome: "MELANCIA",
        categoria:"ALIMENTOS"
    },
    palavra068 = {
        nome: "AMENDOIM",
        categoria:"ALIMENTOS"
    },
    palavra069 = {
        nome: "ESFIRRA",
        categoria:"ALIMENTOS"
    },
    palavra070 = {
        nome: "GOROROBA",
        categoria:"ALIMENTOS"
    },
    palavra071 = {
        nome: "JANTAR",
        categoria:"ALIMENTOS"
    },
    palavra072 = {
        nome: "SABOROSO",
        categoria:"ALIMENTOS"
    },
    palavra073 = {
        nome: "DESJEJUM",
        categoria:"ALIMENTOS"
    },
    palavra074 = {
        nome: "MASTIGAR",
        categoria:"ALIMENTOS"
    },
    palavra075 = {
        nome: "ENGOLIR",
        categoria:"ALIMENTOS"
    },
    palavra076 = {
        nome: "DOCERIA",
        categoria:"ALIMENTOS"
    },
    palavra077 = {
        nome: "DRAGAO",
        categoria:"ANIMAIS"
    },
    palavra078 = {
        nome: "GALINHA",
        categoria:"ANIMAIS"
    },
    palavra079 = {
        nome: "PAVAO",
        categoria:"ANIMAIS"
    },
    palavra080 = {
        nome: "CAMELO",
        categoria:"ANIMAIS"
    },
    palavra081 = {
        nome: "CACHORRO",
        categoria:"ANIMAIS"
    },
    palavra082 = {
        nome: "ZEBRA",
        categoria:"ANIMAIS"
    },
    palavra083 = {
        nome: "DROMEDARIO",
        categoria:"ANIMAIS"
    },
    palavra084 = {
        nome: "CALANGO",
        categoria:"ANIMAIS"
    },
    palavra085 = {
        nome: "TUCANO",
        categoria:"ANIMAIS"
    },
    palavra086 = {
        nome: "LAGARTIXA",
        categoria:"ANIMAIS"
    },
    palavra087 = {
        nome: "HIPOPOTAMO",
        categoria:"ANIMAIS"
    },
    palavra088 = {
        nome: "A ERA DO GELO",
        categoria:"TV E CINEMA"
    },
    palavra089 = {
        nome: "HOMEM ARANHA",
        categoria:"TV E CINEMA"
    },
    palavra090 = {
        nome: "CASA MONSTRO",
        categoria:"TV E CINEMA"
    },
    palavra091 = {
        nome: "TELA QUENTE",
        categoria:"TV E CINEMA"
    },
    palavra092 = {
        nome: "STRANGER THINGS",
        categoria:"TV E CINEMA"
    },
    palavra093 = {
        nome: "GATO DE BOTAS",
        categoria:"TV E CINEMA"
    },
    palavra094 = {
        nome: "MULHER MARAVILHA",
        categoria:"TV E CINEMA"
    },
    palavra095 = {
        nome: "O INCRIVEL HULK",
        categoria:"TV E CINEMA"
    },
    palavra096 = {
        nome: "BOB ESPONJA",
        categoria:"TV E CINEMA"
    },
    palavra097 = {
        nome: "SHREK",
        categoria:"TV E CINEMA"
    },
    palavra098 = {
        nome: "MINIONS",
        categoria:"TV E CINEMA"
    },
    palavra099 = {
        nome: "CALL OF DUTY",
        categoria:"JOGOS"
    },
    palavra100 = {
        nome: "LEAGUE OF LEGENDS",
        categoria:"JOGOS"
    },
    palavra101 = {
        nome: "ROCKET LEAGUE",
        categoria:"JOGOS"
    },
    palavra102 = {
        nome: "FREE FIRE",
        categoria:"JOGOS"
    },
    palavra103 = {
        nome: "FORTNITE",
        categoria:"JOGOS"
    },
    palavra104 = {
        nome: "COUNTER STRIKE",
        categoria:"JOGOS"
    },
    palavra105 = {
        nome: "THE LAST OF US",
        categoria:"JOGOS"
    },
    palavra106 = {
        nome: "GUITAR HERO",
        categoria:"JOGOS"
    },
    palavra107 = {
        nome: "STARDEW VALLEY",
        categoria:"JOGOS"
    },
    palavra108 = {
        nome: "SUPER MARIO",
        categoria:"JOGOS"
    }
];


criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
    
    for(i = 0; i < palavraSecretaSorteada.length; i++){  
        if(listaDinamica[i] == undefined){
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }     
        }
        else{
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }    
        }
    }   
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false)
    {
        document.getElementById(tecla).style.background = "#B22222";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }

    
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});




