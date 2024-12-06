const periods = document.querySelectorAll(".period")
import {scheduleCancel} from "../../services/schedule-cancel.js"
import {schedulesDay} from "./load.js"

//Gera evento click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
    //captura o evento de clique na lista 
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){
            //obtem a li pai do elemento clicado
            const item = event.target.closest("li")

            //pega o id do agendamento para remover
            const { id } = item.dataset
            
            //confirma que o id foi selecionado
            if (id){
                //confirma se o usuario cancelar
                const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")

                if(isConfirm){
                    //faz a requisição na api pra cancelar 
                    await scheduleCancel({ id })

                    //recarrega os agendamentos
                    schedulesDay()
                }
            }

            
        }
        
    })
})