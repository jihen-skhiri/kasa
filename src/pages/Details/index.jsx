import '../../styles/Details.css'
import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import '../../styles/Details.css'
import '../../styles/Collapes.css'
import Carrousel from "../../components/Carrousel";
import Collapse from "../../components/Collapse";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import Tags from "../../components/Tags";
import Error from '../../pages/Error';


function Detail() {
    const params = useParams();
    const navigate = useNavigate();
    console.log("test",params)
    const [Appart, setAppart] = useState([]);
  
        useEffect(() => {
            const fetchImages = async () => {
                try {
                    const response = await fetch('http://localhost:8080/api/properties/');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    // Utilisez find pour obtenir l'id spécifique
                    const LogID = data.find(({ id }) => id === params.id); console.log("log",LogID); 
                    if (LogID) {
                        data.map(() => setAppart(LogID));
                    }
                    if (LogID === undefined) {
                      navigate("/404", { state: { message: "Can't get data" } }); //renvoi vers la page 404 en cas d'URL de logement invalide
                    
                    }
                } catch (error) {
                    console.error('Erreur lors de la récupération des images:', error);
                }
                
            };
           
            fetchImages();
        }, [params,navigate]);
        const slidePictures = Appart && Appart.pictures;
        
        const tags = Appart && Appart.tags;
       console.log("Appart",Appart)
       const hostName=Appart.host;
        const equipments = Appart.equipments;
        const equip =
            equipments?.map((item, index) => (
                <li key={index} className='equipList'>
                    {item}
                </li>
            ));
       
    return (
     
        
        Appart && (
			<div key={params.id} className="fiche-container">
             <Carrousel slides={slidePictures} />
             <section className='Info-logement'>
                <div className='Title-container'>
                <div className='Host-Title'>
                    <h1>{Appart.title}</h1>
                    <h2 className='tags-title'>{Appart.location}</h2>
                </div>
                <div className="Info-tags">
					{tags?.map((tag) => (
						<Tags key={tag} tag={tag} />
					))}
				</div>
                </div>
            <div className="rate-host-container">
                <div className="host-container">
                    <Host
                    hostName={hostName?.name}
                    hostPic={hostName?.picture}
                    />
                </div>
                <div className="rate-container">
				    <Rate score={Appart.rating} />
			    </div>
            </div>
            </section>
                <div className='collapse_container'>
					<Collapse 
						aboutTitle="Description"
						aboutText={Appart.description}
					/>
					<Collapse aboutTitle="Équipements" aboutText={equip} />
				</div>

        </div>
        
    )
     
			
         

                
    
               
)
}

export default Detail;