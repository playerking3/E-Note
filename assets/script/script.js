pesquisa = document.getElementById('pesquisa')
popup = document.getElementById('criar')
confirma = document.getElementById('criarform')

function show(){
	pesquisa.style.visibility = 'visible'
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
	fechar(document.getElementById("criarform"))
})