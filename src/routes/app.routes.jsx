import { Route, Routes } from "react-router-dom";

import { Home } from '../pages/Home';
import { CreateNote } from '../pages/CreateNote';
import { Profile } from '../pages/Profile';
import { ShowNote } from '../pages/ShowNote';

export function AppRoutes(){

    return(

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateNote />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/note/:id" element={<ShowNote />} />
        </Routes>

    )

}