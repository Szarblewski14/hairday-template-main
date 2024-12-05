import { hoursLoad } from "../form/hours-load" 

//Seleciona o input de data
const selectDate = document.getElementById("date")

export function schedulesDay () {
    //Obtem a data do input
    const date = selectDate.value

    //Renderiza as horas disponiveis
    hoursLoad({date})
}