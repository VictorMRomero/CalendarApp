import { NavBar } from "../";


export const CalendarPage = () => {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(numeroAleatorio)

    return(
        <>
            <NavBar />
        </>
    )
}