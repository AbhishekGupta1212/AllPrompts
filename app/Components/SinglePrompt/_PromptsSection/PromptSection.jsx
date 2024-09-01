
"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PromptCard from './PromptCard';
import { useParams } from 'react-router-dom';


const PromptSection = () => {
    const {id} = useParams(); 
    console.log(id)
    const [promptData,setPromptData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://prompt-api-206d.onrender.com/promptList/${id}`);
        setPromptData(res.data.prompts); 
        console.log(res.data.prompts);
      } catch (error) {
        console.log('Error fetching data');
      }
    };
    fetchData();
  }, [id]);

  console.log(promptData)

  return (
    <section className="flex flex-col grow shrink pb-[20px] bg-blend-normal min-w-[240px] w-[704px] max-md:pb-24 max-md:max-w-full">
      {promptData.map((prompt, index) => (
        // console.log(prompt)
        <PromptCard key={index} number={index+1} content={prompt} />
      ))}
    </section>
  );
};

export default PromptSection;