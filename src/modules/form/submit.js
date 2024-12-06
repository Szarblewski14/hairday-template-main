import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedules-new.js"
import {schedulesDay} from "../schedules/load.js"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

//Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carregando a data atual e define a data minima
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (e) => {
    //previne o comportamento do formulário de carregamento
    e.preventDefault()

    try {
        //Recuperando o nome do cliente
        const name = clientName.value.trim()

        if(!name){
            return alert("Informe o nome do cliente!")
        }

        //Recuperar o horário selecionado
        const hourSelected = document.querySelector(".hour-selected")
        
        //Recupera o horário selecionado
        if(!hourSelected){
            return alert("Selecione a hora.")
        }

        //Recuperar somente a hora
        const [hour] = hourSelected.innerText.split(":")
        

        //Insere a data na hora
        const when = dayjs(selectedDate.value).add(hour, "hour") 
        
        //Gera um id
        const id = new Date().getTime()

        //Faz agendamento 
        await scheduleNew({
            id,
            name,
            when,
        });
        
        

        //Recarrega agendamentos 
        schedulesDay()

        //Limpa o input de nome do cliente
        clientName.value = ""

    } catch (error) {
        alert("Não foi possivel realizar o agendamento.")
        console.log(error);
        
    }
    
}