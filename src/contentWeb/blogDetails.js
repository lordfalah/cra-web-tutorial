import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useState } from "react/cjs/react.development";

 
export default function BlogDetails(){
    const getUrl = useParams();
    const [dataApi, setApi] = useState({});
    const [loading, setLoading] = useState(true);
    const [fail, setFail] = useState(true);

    useEffect(() =>{
        async function getApiArticle(){
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${getUrl.details}`);
            if(!request.ok && !request.ok){
                return setFail(false);
            }
            
            const response = await request.json();
    
            setLoading(false);
            setApi(response)
            document.title = response.title;
        };

        getApiArticle();
    }, [getUrl, loading]);

    // console.log(dataApi)

    return (
        <section>

            {fail === false ? "" : <h2>Ini Blog Details Artikel tersebut</h2>}

            {fail === false ? <h3>Sorry server is Bad :(</h3> : 
        
                loading ? <h4>Loading...</h4> : (
                    <article>
                        <h4>{dataApi.title}</h4>

                        <div>
                            <p>{new Date(dataApi.publishedAt).toLocaleDateString()}</p>
                            <img src={`${dataApi.imageUrl}`} alt={dataApi.title}/>

                            <p>{dataApi.summary}</p>
                        </div>
                    </article>
                )
            
            }




        </section>
    )
}

