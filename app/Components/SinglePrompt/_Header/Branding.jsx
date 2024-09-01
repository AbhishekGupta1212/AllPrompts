
"use client"

import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Tags from "./Tags.jsx";

function Branding({ title, emoji, description, promptId, tags,category }) {
    const { id } = useParams(); 
    // console.log(id)
    const [productData, setProductData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`https://prompt-api-206d.onrender.com/promptList/${id}`);
            setProductData(res.data); 
          } catch (error) {
            console.log('Error fetching data');
          }
        };
        fetchData();
      }, [id]);
    
// console.log(productData)
    
  return (
    <main className="flex flex-col self-center pt-12 w-full max-w-screen-xl text-base bg-blend-normal min-h-[411px] max-md:max-w-full">
      <Header category={productData.Categories}/>
      <Content title={productData.name} emoji={emoji} description={productData.Description} promptId={promptId} />
      <Tags tags={productData.Categories} />
    </main>
  );
}

export default Branding;