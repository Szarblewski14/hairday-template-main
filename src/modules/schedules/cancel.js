const periods = document.querySelectorAll('.period')

//gera evento de click pra cada lista manha tarde e noite 
periods.forEach((period) => {
    //captura o evento de click na lista
    period.addEventListener("click", (e) => {
        if(e.target.classList.contains("cancel-icon")) {
            //obtem a li pai do elemento clicado
            const item = e.target.closest("li")
            const { id } = item.dataset


            if(id){
                const isConfirm = confrim("Tem certeza que deseja cancelar?")

                if(isConfirm) {
                    
                }
            }
        }
    })
})