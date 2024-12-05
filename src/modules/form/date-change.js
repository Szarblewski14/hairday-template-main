import { schedulesDay } from "../schedules/load"

//seleciona o input de data 
const selectedDate = document.getElementById("date") 

//Recarrega a lista de horários qunado o dia mudar
selectedDate.onchange = () => schedulesDay()