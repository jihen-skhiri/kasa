import React from 'react';
import { useEffect, useState } from "react";
import Banner from '../../components/Banner';
import Card from '../../components/Cards'
import { Link } from "react-router-dom";

function Accueil() {
  const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8080/api/properties/")
      .then(response => response.json())
      .then(data => setData(data))
    },[])


  return (
    <React.Fragment>
   <Banner />
   <div className="CardList">
				{data.map((item,id) => (
      
					<div className="CardItem" key={id}>
						<Link className="" to={`/logement/${item.id}`}>
            <Card cover={item.cover} title={item.title} />
						</Link>
         
					</div>
				))}
			</div>
   </React.Fragment>
  );
};

export default Accueil;
