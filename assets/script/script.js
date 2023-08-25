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

function tiraCard(key) {
	var lista = JSON.parse(localStorage.getItem('prazo'))
	var index = key
	lista.splice(index,1)
	localStorage.setItem('prazo',JSON.stringify(lista))
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

	var novos = JSON.parse(localStorage.getItem('prazo'))
	for (var [key, i] of novos.entries()){
		let novos2 = JSON.parse(i)
		secaoPrazo.innerHTML +=  `
		<div class="box" id="card">
			<div class="divtitulo">
				<h4 id="">`+novos2.titulo+`</h4>
			</div>
			<div>
				<p class= "desc">`+novos2.conteudo+`</p>
			</div>
			<div class="divbotao">
				<button class="editar"><i class="fa-solid fa-pen-to-square"></i></button>
				<button class="concluir" onclick='concluir(`+i+`,${key})'><i class="fa-solid fa-check" style="color: #00c2a0;"></i></button>
				<button class="excluir" onclick="tiraCard(${key})"><i class="fa-solid fa-trash-can"></i></button>
			</div>
		</div>
		`
	}
}

function concluir(objeto, index){
	console.log('teste');
	let contagem = JSON.parse(localStorage.getItem('concluidas')) ?? []
	contagem.push(objeto)
	lista = JSON.stringify(contagem)
	localStorage.setItem('concluidas', lista)
	tiraCard(index)
}

criar_card()