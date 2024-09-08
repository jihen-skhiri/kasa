import {  Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home';
import Propos from '../../pages/Propos';
import Details from '../../pages/Details';
import Error from '../../pages/Error';

const Router=()=> {
    return (
<Routes>
                <Route path="/" element={<Home />} />
                <Route path="/propos" element={<Propos />} />
                <Route path="/logement/:id" element={<Details />} />
                <Route path="*" element={<Error />} />
</Routes>
           ) }
export default Router;