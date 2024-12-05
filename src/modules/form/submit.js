import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carregando a data atual e define a data minima
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (e) => {
    //previne o comportamento do formulário de carregamento
    e.preventDefault()

    console.log("enviado");
    
}