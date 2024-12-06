import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load" 

//Seleciona o input de data
const selectDate = document.getElementById("date")

export async function schedulesDay () {
    //Obtem a data do input
    const date = selectDate.value

    //Buscar na api os agendamentos 
    const dailySchedules = await scheduleFetchByDay({ date })


    //Renderiza as horas disponiveis
    hoursLoad({date})
}