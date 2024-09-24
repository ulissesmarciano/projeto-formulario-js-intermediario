//Aqui fica toda minha lógica funcionando normalmente.

// const todosOsInputs = document.querySelectorAll(".input")
// const botaoEnviar = document.querySelector(".botao")
// const todasAsAreas = document.querySelectorAll(".area-do-input")
// const formulario = document.querySelector(".formulario")


// function validarInput (input, areaDoInput) {
//     if (input.value !== "") {
//         areaDoInput.classList.remove('invalidado')
//         areaDoInput.classList.add('validado')
//     }   else {
//         areaDoInput.classList.add('invalidado')
//         areaDoInput.classList.remove('validado')
//     }
// }


// botaoEnviar.addEventListener('click', function (evento) {
//     evento.preventDefault()//busquei no stackoverflow a resposta de por que o form faz um submit e vi que a resposta era utilizar este método. Somente assim encontrei uma solução para a tag form. Se não teria que utilizar uma div.
//     for (let i = 0; i < todosOsInputs.length; i++) {
//         validarInput(todosOsInputs[i], todasAsAreas[i])
//     }
// })

// todosOsInputs.forEach((input, index) => {
//     const areaDoInput = todasAsAreas[index]
//     input.addEventListener('change', () => {
//         validarInput(input, areaDoInput)
//     })
// })


//=======================================================



//CORREÇÃO DA LÓGICA SEGUINDO A IDEIA DO ARQUIVO ENVIADO PELO CORRETOR DO CURSO

const todosOsInputs = document.querySelectorAll('.input')
const botaoEnviar = document.querySelector('.botao')

botaoEnviar.addEventListener('click', (evento) => {
    evento.preventDefault()
    todosOsInputs.forEach((input) => {
       if (input.value){
        input.parentElement.classList.add('validado')
        input.parentElement.classList.remove('invalidado')
       } else {
        input.parentElement.classList.remove('validado')
        input.parentElement.classList.add('invalidado')
       }
        
    })
    
})
