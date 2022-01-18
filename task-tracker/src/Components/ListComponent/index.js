import react from "react"
import "./index.css"

export default function displayLIst ({title, date, completed, link, comment}) {
    return <main>
        <h1>{title}</h1>
        <ul>
            <li>{title}</li>
            <li>{date}</li>
            <li>{completed}</li>
            <li><a href={link}/></li>
            <li>{comment}</li>
        </ul>
    </main>
}
