import {  Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Home from '../../pages/Home';
import Propos from '../../pages/Propos';
import Details from '../../pages/Details';
import Error from '../../pages/Error';

const Router=()=> {
    const [data, setData] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/properties/")
            
                // Evite les re-renders ici, ne mets pas `setData` dans le body du useEffect si pas nécessaire
                
                const result = await response.json();
                setData(result);
        }
        catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    }
        fetchData();
    },[])

    return (
<Routes>
                <Route path="/" element={<Home data={data}/>} />
                <Route path="/propos" element={<Propos />} />
                <Route path="/logement/:id" element={<Details data={data}/>} />
                <Route path="*" element={<Error />} />
</Routes>
           ) }
export default Router;