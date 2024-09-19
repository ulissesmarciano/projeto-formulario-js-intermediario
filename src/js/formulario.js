const todosOsInputs = document.querySelectorAll(".input")
const botaoEnviar = document.querySelector(".botao")
const todasAsAreas = document.querySelectorAll(".area-do-input")
const formulario = document.querySelector(".formulario")



botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault()//busquei no stackoverflow a resposta de por que o form faz um submit e vi que a resposta era utilizar este método. Somente assim encontrei uma solução para a tag form. Se não teria que utilizar uma div.
    for (let i = 0; i < todosOsInputs.length; i++) {
        const input = todosOsInputs[i].value
        const areaDoInput = todasAsAreas[i]

        if (input !== "") {
            areaDoInput.classList.add('validado')
            areaDoInput.classList.remove('invalidado') //neste caso coloquei somente para que não haja sobreposição de 
        } else {
            areaDoInput.classList.remove('validado') //neste caso coloquei somente para que não haja sobreposição de
            areaDoInput.classList.add('invalidado')
        }
        
    }
})


