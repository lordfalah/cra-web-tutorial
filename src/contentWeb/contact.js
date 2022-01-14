import { useEffect } from "react"

export default function Contact(){

    useEffect(() =>{
        document.title = "Contact";
    }, [])    

    return (
        <section>
            <h1>This is Contact</h1>
        </section>
    )
}