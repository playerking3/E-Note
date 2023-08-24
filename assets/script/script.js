pesquisa = document.getElementById('pesquisa')
popup = document.getElementById('criar')
confirma = document.getElementById('criarform')

function show(){
	pesquisa.style.display = 'inline-block'
}

function habilitar(element){
	if (element.checked){
		document.getElementById('prazo').disabled = false
	}
	else{
		document.getElementById('prazo').disabled = true
	}
}

function abrir(){
	popup.style.top = '0%'
	document.getElementById("escuro").style.display = "inline-block"
}

function fechar(btn){
    let pai = btn.parentElement
    popup.style.top = '-100%'
    document.getElementById("escuro").style.display = "none"
}

confirma.addEventListener("submit",(event) => {
	event.preventDefault()
	let data = new FormData(document.getElementById("criarform"))
	let titulo = data.get("titulo")
	let conteudo = data.get("conteudo")
	let prazo = data.get("prazo")

	console.log(titulo, conteudo, prazo)
	secaoPrazo = document.getElementById("secPrazo")
	secaoPrazo.innerHTML +=  `
	<div class="box" id="card">
		<div class="divtitulo">
			<h4 id="">`+titulo+`</h4>
		</div>
		<div>
			<p class= "desc">`+conteudo+`</p>
		</div>
		<div class="divbotao">
			<button class="editar"><i class="fa-solid fa-pen-to-square"></i></button>
			<button class="excluir" onclick="tiraCard(this)"><i class="fa-solid fa-trash-can"></i></button>
		</div>
	</div>
	`
	fechar(document.getElementById("criarform"))
})

function tiraCard(element) {
	element.parentElement.parentElement.remove()
}