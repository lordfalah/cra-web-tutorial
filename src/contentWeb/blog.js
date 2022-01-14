import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog(){
    const [api, setApi] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fail, setFail] = useState(true);


    useEffect(() =>{
        document.title = "Blog";

        try{
            const getApi = async () =>{
                const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
                
                if(!request.ok && !request.ok){
                    return setFail(false);
                }

                erorrApi(request);

                const response = await request.json();
                setApi(response);            
                setLoading(true);

            
            }
            getApi();
        
        }catch(dataError){
            console.log(dataError)

        }

        
        
    }, [fail])


    return (
        <section>
            <h1>This is Blog Saya</h1>
            <article>
                <p>Dan ini adalah macam-macam article untuk membaca 
                    lebih lanjut lagi silahkan di click saja link yang bercetak teballl.....
                </p>


                {fail === false ? <h3>Sorry server is Bad :(</h3> : 
                    !loading ? <h4>Loading...</h4> : (
                        
                        api.map((data, index) =>{
                            return (
                                <ul key={data.id}>
                                    <li>
                                        <h4><i>Title</i></h4>
                                        <h4>{data.title}</h4>   
                                        
                                        <article>
                                            <h5><Link to={`/blog/${data.id}`}>Link : {data.newsSite}</Link></h5>
                                            <p>Date : {new Date().toLocaleDateString()}</p>
                                        </article>
                                    </li>
                                </ul>
                            )
                        })

                    )
                }




            </article>
        </section>
    )
}


function erorrApi(server){
    if(!server.ok && !server.ok){
        throw new Error ("ASHILLLL");
    };
}