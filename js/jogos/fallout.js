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


  // JS do jogo


// Matriz de imagens de baralho de cartas
const deckCards = ["Agility.png", "Agility.png", "Boat.png", "Boat.png", "Citizenship.png", "Citizenship.png", "Hack.png", "Hack.png", "Nerd-Rage.png", "Nerd-Rage.png", "Nuka-Cola.png", "Nuka-Cola.png", "Robotics.png", "Robotics.png", "Shock.png", "Shock.png"];

// Global Arrays
// Acesse o <ul> com classe de .deck
const deck = document.querySelector(".deck");
// Crie um array vazio para armazenar os cartões abertos
let opened = [];
// Crie uma matriz vazia para armazenar os cartões correspondentes
let matched = [];

// Acesse o modal
const modal = document.getElementById("modal");

// Acesse o botão resetar
const reset = document.querySelector(".reset-btn");
// Acesse o botão play novamente
const playAgain = document.querySelector(".play-again-btn");

// Selecione a classe move-counter e altere seu HTML
const movesCount = document.querySelector(".moves-counter");
// Criar variável para contador de movimentos, iniciar a contagem em zero
let moves = 0;

// Acesse o elemento <ul> para a seção de classificação por estrelas e, em seguida, os elementos <li> dentro dela
const star = document.getElementById("star-rating").querySelectorAll(".star");
// Variável para acompanhar quantas estrelas restam
let starCount = 3;

//Obtenha a tag span para o timer.
const timeCounter = document.querySelector(".timer");
// Para usar esta variável para parar o tempo iniciado no timer
let time;
// Crie variáveis ​​para contagem de tempo, comece tudo do zero
let minutes = 0;
let seconds = 0;
// Para uso no ouvinte de eventos do cartão de clique
let timeStart = false;

// Função de embaralhamento de http://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}

/*
Comece o jogo: embaralhe o baralho, crie tags <li> e <img>
tags e anexar ao deck <ul> com o novo conteúdo embaralhado
*/
function startGame() {
	// Invoque a função shuffle e armazene na variável
	const shuffledDeck = shuffle(deckCards); 
	// Alterar sobre o array do baralho de cartas
	for (let i = 0; i < shuffledDeck.length; i++) {
		// Crie as tags <li>
		const liTag = document.createElement('LI');
		// Dê <li> classe de cartão
		liTag.classList.add('card');
		//Crie as tags <img>
		const addImage = document.createElement("IMG");
		// Anexar <img> a <li>
		liTag.appendChild(addImage);
		// Defina o caminho img src com o baralho embaralhado
		addImage.setAttribute("src", "https://github.com/FoxyStoat/memory-game/blob/master/assets/img/" + shuffledDeck[i] + "?raw=true");
		// Adicione uma tag alt à imagem
		addImage.setAttribute("alt", "image of vault boy from fallout");
		// Atualize o novo <li> para o deck <ul>
		deck.appendChild(liTag);
	}
}

startGame();

/*
Remova todos os nós filhos das tags <li> do deck e
tags <img>. Para ser chamado na função set Everything apenas
*/
function removeCard() {
	//Desde que o deck <ul> tenha um nó filho, remova-o
	while (deck.hasChildNodes()) {
		deck.removeChild(deck.firstChild);
	}
}

/*
Atualize o cronômetro no HTML para minutos e segundos
Esta função timer() é invocada no ouvinte de eventos
no primeiro cartão clique
Usando: https://www.w3schools.com/js/js_timing.asp
*/
function timer() {
	//Atualizar a contagem a cada 1 segundo
	time = setInterval(function() {
		seconds++;
			if (seconds === 60) {
				minutes++;
				seconds = 0;
			}
		//Atualize o cronômetro em HTML com o tempo que o usuário leva para jogar o jogo
		timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: " + minutes + " Mins " + seconds + " Secs" ;
	}, 1000);
}

/*
Pare o cronômetro assim que o usuário tiver correspondido
todas as 16 cartas, total de 8 pares
Usando: https://www.w3schools.com/js/js_timing.asp
*/
function stopTime() {
	clearInterval(time);
}

/*
Redefinir todas as variáveis ​​globais e o conteúdo dos elementos HTML
temporizador, estrelas, movimentos, e os movimentos e temporizador HTML interno
*/
function resetEverything() {
	// Pare o tempo, redefina os minutos e segundos atualize o HTML interno do tempo
	stopTime();
	timeStart = false;
	seconds = 0;
	minutes = 0;
	timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Tempo: 00:00";
	// Redefina a contagem de estrelas e adicione a classe de volta para mostrar estrelas novamente
	star[1].firstElementChild.classList.add("fa-star");
	star[2].firstElementChild.classList.add("fa-star");
	starCount = 3;
	// Redefinir a contagem de movimentos e redefinir seu HTML interno
	moves = 0;
	movesCount.innerHTML = 0;
	// Limpe ambas os array que contêm os cartões abertos e combinados
	matched = [];
	opened = [];
	// Limpe o baralho
	removeCard();
	// Criar um novo baralho
	startGame();
}

/*
Aumente o contador de movimentos. Para ser chamado em cada
comparação para cada dois cartões comparados adiciona um à contagem
*/
function movesCounter() {
	// Atualize o html para o contador de movimentos
	movesCount.innerHTML ++;
	//Acompanhe o número de movimentos para cada par verificado
	moves ++;
}

/*
Atualize a classificação por estrelas. Dependendo do número de
move o usuário completa o jogo, as estrelas vão diminuir
quanto mais movimentos o usuário fizer.
*/
function starRating() {
	if (moves === 14) {
		// O primeiro elemento filho é o <i> dentro do <li>
		star[2].firstElementChild.classList.remove("fa-star");
		starCount--;
	}
	if (moves === 18) {
		star[1].firstElementChild.classList.remove("fa-star");
		starCount--;
	}
}

/*
Compare dois cartões para ver se eles combinam ou não
*/
function compareTwo() {
	// Quando há 2 cartas na matriz aberta
	if (opened.length === 2) {
  		// Desative quaisquer outros cliques do mouse em outros cartões
  		document.body.style.pointerEvents = "none";
  }
	// Compare as duas imagens src
	if (opened.length === 2 && opened[0].src === opened[1].src) {
		// If matched call match()
		match();
		// console.log("It's a Match!");
	} else if (opened.length === 2 && opened[0].src != opened[1].src) {
		// If No match call noMatch()
		noMatch();
		// console.log("NO Match!");
	}
}

/*
Se as duas cartas combinarem, mantenha as cartas abertas e
aplicar classe de correspondência
*/ 
function match() {
	/* Acesse os dois cartões no array aberto e adicione
a classe de correspondência com o pai das imagens: a tag <li>
	*/
	setTimeout(function() {
		opened[0].parentElement.classList.add("match");
		opened[1].parentElement.classList.add("match");
		// Empurre os cartões correspondentes para o array correspondente
		matched.push(...opened);
		// Permitir mais cliques do mouse nos cartões
		document.body.style.pointerEvents = "auto";
		// Verifique se o jogo foi ganho com todos os 8 pares
		winGame();
		//Limpe o array aberto
		opened = [];
	}, 600);
	//Chame movesCounter para incrementar em um
	movesCounter();
	starRating();
}

/*
Se as duas cartas não corresponderem, remova as cartas
do array aberto e vire as cartas de volta por
removendo a classe flip.
*/
function noMatch() {
	/* Após 700 milissegundos as duas cartas abertas terão
a classe de flip foi removida do elemento pai das imagens <li>*/
	setTimeout(function() {
		// Remove class flip on images parent element
		opened[0].parentElement.classList.remove("flip");
		opened[1].parentElement.classList.remove("flip");
		// Permitir mais cliques do mouse nos cartões
		document.body.style.pointerEvents = "auto";
		// Remova os cartões aberto do array
		opened = [];
	}, 700);
	// Chame movesCounter para incrementar em um
	movesCounter();
	starRating();
}

/*
Obtenha estatísticas sobre o tempo, quantos movimentos e classificação por estrelas
para o final do jogo e atualize o modal com essas estatísticas
*/
function AddStats() {
	//Acesse a div de conteúdo modal
	const stats = document.querySelector(".modal-content");
	//Crie três parágrafos diferentes
	for (let i = 1; i <= 3; i++) {
		// Criar um novo parágrafo
		const statsElement = document.createElement("p");
		// Adicionar uma classe ao novo parágrafo
		statsElement.classList.add("stats");
		// Adicione a nova tag <p> criada ao conteúdo modal
		stats.appendChild(statsElement);
	}
	// Selecione todas as tags p com a classe de estatísticas e atualize o conteúdo
	let p = stats.querySelectorAll("p.stats");
			// Defina o novo <p> para ter o conteúdo das estatísticas (tempo, movimentos e classificação por estrelas)
		p[0].innerHTML = "Tempo para completar: " + minutes + " Minutos e " + seconds + " Segundos";
		p[1].innerHTML = "Movimentos Realizados: " + moves;
		p[2].innerHTML = "Sua classificação por estrelas é: " + starCount + " de 3";
}

/*
Exibir o modal ao vencer o jogo
Ajuda com o modal de:
https://www.w3schools.com/howto/howto_css_modals.asp
*/
function displayModal() {
// Acesse o elemento modal <span> (x) que fecha o modal
const modalClose = document.getElementsByClassName("close")[0];
	// Quando o jogo for ganho, defina modal para exibir o bloco para mostrá-lo
	modal.style.display= "block";

	//Quando o usuário clicar em <span> (x), feche o modal
	modalClose.onclick = function() {
		modal.style.display = "none";
	};
// Quando o usuário clicar em qualquer lugar fora do modal, feche-o
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
}

/*
Verifique o comprimento do array correspondente e se houver
são 8 pares de 16 cartas todos juntos, então o jogo é ganho.
Pare o cronômetro atualize o modal com estatísticas e mostre o modal
*/
function winGame() {
	if (matched.length === 16) {
		stopTime();
		AddStats();
		displayModal();
	}
}

/*----------------------------------  
Ouvinte do evento principal
------------------------------------*/
/*
Ouvinte de eventos se um cartão <li> for clicado
chamar flipCard()
*/
deck.addEventListener("click", function(evt) {
	if (evt.target.nodeName === "LI") {
		// Para consolar se eu estava clicando no elemento correto
		console.log(evt.target.nodeName + " Was clicked");
		// Inicie o cronômetro após o primeiro clique de um cartão
	// Executa a função timer()
		if (timeStart === false) {
			timeStart = true; 
			timer();
		}
		//Chamar a função flipCard()
		flipCard();
	}

	//Vire o cartão e exiba os cartões img
	function flipCard() {
		// Quando <li> for clicado, adicione a classe .flip para mostrar a img
		evt.target.classList.add("flip");
		// Call addToOpened() function
		addToOpened();
	}
	 
	//Adicione as cartas viradas ao array vazio de cartas abertas
	function addToOpened() {
		/* Se o array aberto tiver zero ou uma outra img, empurre outra
img no array para que possamos comparar esses dois para serem correspondidos
		*/
		if (opened.length === 0 || opened.length === 1) {
			// Empurre essa img para a matriz aberta
			opened.push(evt.target.firstElementChild);
		}
		// Chamar a função compareTwo()
		compareTwo();
	}
}); //Ouvinte de eventos

/*----------------------------------  
Botões de reinicialização
------------------------------------*/
/*
Event Listener para ouvir um clique na redefinição
botão, uma vez clicado, chame resetEverything()
*/
reset.addEventListener('click', resetEverything);

/*
Event Listener para ouvir um clique na reprodução
botão novamente, uma vez clicado, chame resetEverything()
*/
playAgain.addEventListener('click',function() {
	modal.style.display = "none";
	resetEverything();
});
  