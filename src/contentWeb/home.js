import { useEffect } from "react"

export default function Home(){
    
    useEffect(() =>{
        document.title = "Home";
    }, [])

    return (
        <section id="home">
            <h1>This is Home</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis incidunt ullam corporis ad voluptas, alias molestias accusantium eaque deserunt est, consequatur veritatis eum earum pariatur animi at mollitia fugit excepturi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis incidunt ullam corporis ad voluptas, alias molestias accusantium eaque deserunt est, consequatur veritatis eum earum pariatur animi at mollitia fugit excepturi.</p>
        </section>
    )
}