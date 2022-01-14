import { useEffect } from "react"

export default function Profile(){

    useEffect(() =>{
        document.title = "Profile";
    }, [])

    return (
        <section>
            <h1>This is Profile</h1>
        </section>
    )
}