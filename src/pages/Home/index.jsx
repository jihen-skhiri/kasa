import React from 'react';
import { useEffect, useState } from "react";
import Banner from '../../components/Banner';
import Card from '../../components/Cards'
//import { Link } from "react-router-dom";
import axios from "axios";

function Accueil() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/properties/").then((res) => setData(res.data));

}, [])
  return (
    <React.Fragment>
   <Banner />
   <div className="cards-container">
				{data.map((appart, id) => (
					<div className="CardList" key={id}>
						
							<Card cover={appart.cover} title={appart.title} />
						
					</div>
				))}
			</div>
   </React.Fragment>
  );
}

export default Accueil;
