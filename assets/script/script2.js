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

	criar_json(titulo,conteudo,prazo)
	criar_card()
	fechar(document.getElementById("criarform"))
})

function tiraCard(element, key) {
	var card = element.parentElement.parentElement
	var lista = JSON.parse(localStorage.getItem('concluidas'))
	var index = key
	lista.splice(index,1)
	localStorage.setItem('concluidas',JSON.stringify(lista))
	criar_card()
}

function criar_json(titulo,conteudo,prazo){
	var contagem = JSON.parse(localStorage.getItem('prazo')) ?? []

	var valores = {
		titulo: titulo,
		conteudo: conteudo,
		prazo: prazo,
	}

	var string = JSON.stringify(valores)
	contagem.push(string)
	lista = JSON.stringify(contagem)
	localStorage.setItem('prazo', lista)
}

function criar_card(){
	secaoPrazo = document.getElementById("secPrazo")
	secaoPrazo.innerHTML = ""

	var novos = JSON.parse(localStorage.getItem('concluidas')) ?? []
	for (var [key, i] of novos.entries()){
		console.log(key, i)
		let novos2 = i
		secaoPrazo.innerHTML +=  `
		<div class="box-concluida" id="card">
			<div class="divtitulo divtitulo2">
				<h4 id="">`+novos2.titulo+`</h4>
			</div>
			<div>
				<p class= "desc">`+novos2.conteudo+`</p>
			</div>
			<div class="divbotao">
				<button class="editar editar2"><i class="fa-solid fa-pen-to-square"></i></button>
				<button class=" excluir excluir2" onclick="tiraCard(this, ${key})"><i class="fa-solid fa-trash-can"></i></button>
			</div>
		</div>
		`
	}
}
criar_card()