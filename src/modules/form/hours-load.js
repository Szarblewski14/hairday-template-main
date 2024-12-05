import { openingHours } from "../../utils/opening-hours.js"

import dayjs from "dayjs"

const hours = document.getElementById("hours")

export function hoursLoad({date}) {
    const opening = openingHours.map((hour) => {
        //Recuperar somente a hora
        const [scheduleHour] = hour.split(":")
        
        //Adiciona a data na hora e verifica se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
        return {
            hour,
            available: isHourPast,
        }     
    })

    //Renderizar os horários
    opening.forEach(({ hour, available }) =>{
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour
        hours.append(li)
    })
}