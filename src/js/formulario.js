const todosOsInputs = document.querySelectorAll(".input")
const botaoEnviar = document.querySelector(".botao")
const todasAsAreas = document.querySelectorAll(".area-do-input")



botaoEnviar.addEventListener('click', function () {
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


