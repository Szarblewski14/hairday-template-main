import { openingHours } from "../../utils/opening-hours.js"
import dayjs from "dayjs"

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
}