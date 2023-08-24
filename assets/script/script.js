pesquisa = document.getElementById('pesquisa')
popup = document.getElementById('criar')

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