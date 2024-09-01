
"use client"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleProduct from '../Components/SinglePrompt/page';
import CategoryList from '../Components/CategoryList/CategoryList';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CategoryList/>} />
        <Route path="/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;