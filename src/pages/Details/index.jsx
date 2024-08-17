import '../../styles/Details.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel";
import Collapse from "../../components/Collapse";
//import Host from "../../components/Host";
//import Rate from "../../components/Rate";
//import Tags from "../../components/Tags";


function Detail() {
    const params = useParams();
    //console.log("test",params)
    const [Appart, setAppart] = useState([]);
  
        useEffect(() => {
            const fetchImages = async () => {
                try {
                    const response = await fetch('http://localhost:8080/api/properties');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    // Utilisez find pour obtenir l'id spécifique
                    const LogID = data.find(({ id }) => id === params.id); console.log("log",LogID); 
                    if (LogID) {
                        data.map(() => setAppart(LogID));
                    }
                } catch (error) {
                    console.error('Erreur lors de la récupération des images:', error);
                }
                
            };
           
            fetchImages();
        }, [params.id]);
        const slidePictures = Appart && Appart.pictures;
        
        //const tags = Appart && Appart.tags;
       console.log("Appart",Appart)
        const equipments = Appart && Appart.equipments;
        const equip =
            Appart &&
            equipments?.map((item, index) => (
                <li key={index} >
                    {item}
                </li>
            ));
       
    return (
        Appart && (
			<div key={params.id} className="fiche-container">
             <Carrousel slides={slidePictures} />
                <div >
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