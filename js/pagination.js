
var imagens = [
		{
			full: "images/1200/alongamento_01.jpg",
			img: "images/600/alongamento_01_menor.jpg",
			descricao: "Alongamento 1"
		},
		{
			full: "images/1200/alongamento_02.jpg",
			img: "images/600/alongamento_02_menor.jpg",
			descricao: "Alongamento 2"
		},
		{
			full: "images/1200/alongamento_03.jpg",
			img: "images/600/alongamento_03_menor.jpg",
			descricao: "Alongamento 3"
		},
		{
			full: "images/1200/especialidade.jpg",
			img: "images/600/especialidade_menor.jpg",
			descricao: "Especialidade"
		},
		{
			full: "images/1200/especialidade02.jpg",
			img: "images/600/especialidade02_menor.jpg",
			descricao: "Especialidade 2"
		},
		{
			full: "images/1200/especialidade03.jpg",
			img: "images/600/especialidade03_menor.jpg",
			descricao: "Especialidade 3"
		},
		{
			full: "images/1200/especialidade04.jpg",
			img: "images/600/especialidade04_menor.jpg",
			descricao: "Especialidade 4"
		},
		{
			full: "images/1200/especialidade05.jpg",
			img: "images/600/especialidade05_menor.jpg",
			descricao: "Especialidade 5"
		},
		{
			full: "images/1200/especialidade06.jpg",
			img: "images/600/especialidade06_menor.jpg",
			descricao: "Especialidade 6"
		},
		{
			full: "images/1200/especialidade07.jpg",
			img: "images/600/especialidade07_menor.jpg",
			descricao: "Especialidade 7"
		},
{
	full: "images/1200/especialidade08.jpg",
	img: "images/600/especialidade08_menor.jpg",
			descricao: "Especialidade 8"
		},
		{
			full: "images/1200/especialidade09.jpg",
			img: "images/600/especialidade09_menor.jpg",
			descricao: "Especialidade 9"
		},
		{
			full: "images/1200/especialidade10.jpg",
			img: "images/600/especialidade10_menor.jpg",
			descricao: "Especialidade 10"
		},
		{
			full: "images/1200/especialidade11.jpg",
			img: "images/600/especialidade11_menor.jpg",
			descricao: "Especialidade 11"
		},
		{
			full: "images/1200/especialidade12.jpg",
			img: "images/600/especialidade12_menor.jpg",
			descricao: "Especialidade 12"
		},
		{
			full: "images/1200/especialidade13.jpg",
			img: "images/600/especialidade13_menor.jpg",
			descricao: "Especialidade 13"
		},
		{
			full: "images/1200/especialidade14.jpg",
			img: "images/600/especialidade14_menor.jpg",
			descricao: "Especialidade 14"
		},
		{
			full: "images/1200/Massagem_01.jpg",
			img: "images/600/massagem01.jpg",
			descricao: "Massagem 1"
		},
		{
			full: "images/1200/Massagem_02.jpg",
			img: "images/600/massagem02.jpg",
			descricao: "Massagem 2"
		},
		{
			full: "images/1200/Massagem_03.jpg",
			img: "images/600/massagem03.jpg",
			descricao: "Massagem 3"
		},
		{
			full: "images/1200/Massagem_04.jpg",
			img: "images/600/massagem04.jpg",
			descricao: "Massagem 4"
		},
		{
			full: "images/1200/Massagem_05.jpg",
			img: "images/600/massagem05.jpg",
			descricao: "Massagem 5"
		},
		{
			full: "images/1200/consultorio.jpg",
			img: "images/600/consultorio_menor.jpg",
			descricao: "Consultorio"
		},
		{
			full: "images/1200/fachada.jpg",
			img: "images/600/fachada_menor.jpg",
			descricao: "Fachada"
		},
		{
			full: "images/1200/Mobilia_01.jpg",
			img: "images/600/mobilia01_menor.jpg",
			descricao: "Mobilia 1"
		},
		{
			full: "images/1200/Mobilia_02.jpg",
			img: "images/600/mobilia02_menor.jpg",
			descricao: "Mobilia 2"
		},
		{
			full: "images/1200/Mobilia_03.jpg",
			img: "images/600/mobilia03_menor.jpg",
			descricao: "Mobilia 3"
		},
		{
			full: "images/1200/banheiro_01.jpg",
			img: "images/600/banheiro01_menor.jpg",
			descricao: "Banheiro 1"
		},
		{
			full: "images/1200/banheiro_02.jpg",
			img: "images/600/banheiro02_menor.jpg",
			descricao: "Banheiro 2"
		},
		{
			full: "images/1200/logofachada.jpg",
			img: "images/600/logofachada.jpg",
			descricao: "Logo Fachada"
		},
		
	
	
]

const galeryLightbox = () => {
	var a = document.getElementById("modal-gallery-inside");
	for(var i=0; i<imagens.length; i++){
		var div = document.createElement("div");
		div.setAttribute("class", "mySlides");
		var img = document.createElement("img");
		img.setAttribute("style", "width: 100%");
		img.setAttribute("src", imagens[i].full);
		div.appendChild(img);
		a.appendChild(div);
	}

	var iconLeft = document.createElement("a");
	iconLeft.setAttribute("onClick", "plusSlides(-1)");
	iconLeft.setAttribute("class", "prev");
	iconLeft.innerHTML = "&#10094;"

	var iconRight = document.createElement("a");
	iconRight.setAttribute("onClick", "plusSlides(1)");
	iconRight.setAttribute("class", "next");
	iconRight.innerHTML = "&#10095;"
	
	a.appendChild(iconLeft);
	a.appendChild(iconRight);

}

galeryLightbox();

var galeria = document.getElementById("galleryPagination");
var paginaAtual;
function buildPaginationGallery(page){
	//Inserindo na variavel global a página atual;
	paginaAtual = page;

	//Limpando galeria
	galeria.innerHTML = "";

	var indexFim = page * 6; 
	var indexInicio = indexFim - 6;
	
	if(indexFim>imagens.length){
		indexFim = imagens.length;
	}

	for(var i=indexInicio; i<indexFim; i++){
			//Criando o element <a>
			var a  = document.createElement("a");
			a.setAttribute("onclick", `openModal();currentSlide(${i+1})`);
			a.setAttribute("data-lightbox", "gallery-item");

			//Criando o element <img>
			var img = document.createElement("img");
			img.setAttribute("class", "image-fade");
			img.setAttribute("src", imagens[i].img);
			img.setAttribute("alt", imagens[i].descricao);

			//Inserindo o <img> dentro do <a>
			a.appendChild(img)

			galeria.appendChild(a);
		}
			
}
		

function changePage(page){
	//Essa função executará ao clicar no item da paginação

	buildPaginationGallery(page);

}

  // <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
var ulPagination = document.getElementById("paginationList");
function definePaginationList(){
	//Para definir a quantidade de páginas, é o tamanho da lista de imagens dividido por 6 (quantiade máxima por página) arredondado pra cima
	var qtPaginas = Math.ceil(imagens.length/6);

	//Adicionarndoo primeiro item da paginação (<)
	var first = returnPageItem("«");
	first.addEventListener("click", function() {

		//Verificação se já está na primeira paginação (Se tiver, nada mudará)
		var novaPagina;
		if(paginaAtual>1){
			novaPagina = paginaAtual-1;
			buildPaginationGallery(novaPagina);
		} 
		
    });
	ulPagination.appendChild(first);

	//Adicioanndo a quantidade de páginas exata
	for(var i=1; i<=qtPaginas; i++){
		var item = returnPageItem(i);
		item.setAttribute("onclick","changePage("+i+")");
		// item.addEventListener("click", function() {
		// 	buildPaginationGallery(i);
  //      	})
		ulPagination.appendChild(item);
	}

	//Adicionando o ultimo item da paginação (>)
	var last = returnPageItem("»");
	last.addEventListener("click", function() {
		//Verificação se já está na última paginação (Se estiver, nada mudará)
		var novaPagina;
		if(paginaAtual<qtPaginas){
			novaPagina = paginaAtual+1;
			buildPaginationGallery(novaPagina);
		} 
    });
	ulPagination.appendChild(last);

}

function returnPageItem (number){
	var itemPage = document.createElement("li");
	itemPage.setAttribute("class", "page-item");

	//Inserindo numero da página
	var a = document.createElement("a");
	a.setAttribute("class", "page-link");
	a.appendChild(document.createTextNode(number));
	itemPage.appendChild(a);
	return itemPage;
}

definePaginationList();

//Inicializando galeria na primeira página
buildPaginationGallery(1);