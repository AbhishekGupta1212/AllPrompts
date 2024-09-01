"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CategoryItem from './_CategoryItem';
import Card from '../_Card';

const categories = [
  'All',
  'Agency',
  'Assistants',
  'Business',
  'Copywriting',
  'HR',
  'Marketing',
  'Productivity',
  'Real Estate',
  'Sales',
  'Startups',
  'Support',
  'Web Development'
];

function CategoryList() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [allData, setAllData] = useState([]);
    const [searchResult, setSearchResult] = useState([]); 
    const [categoryData, setCategoryData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(100);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

  useEffect(()=>{
    fetchData()
  },[])
  
  const handleClick=async(id)=>{
    try {
        const res = await axios.get(`https://prompt-api-206d.onrender.com/promptList/${id}`);
        console.log(res.data);
        navigate(`/${id}`); 
      } catch (error) {
        console.log('Data not found');
      }
  }

  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
    try {
      const res = await axios.post(`https://prompt-api-206d.onrender.com/promptList/search`, { query: searchQuery });
      const data = res.data.prompts;
      console.log(data);
      setSearchResult(data); // update searchResult state
    } catch (error) {
      console.error(error);
    }
  };


  const fetchData=async()=>{
    try {
      const res=await axios.get('https://prompt-api-206d.onrender.com/promptList')
      setAllData(res.data.prompts);
      // console.log(res.data.prompts)
      setCategoryData(res.data.prompts);
      setSearchResult(res.data.prompts); // update searchResult state
    } catch (error) {
     console.log("Failed to Fetch Data")
    }
   
  }
  const handleCategoryClick = async (category) => {
    console.log(category)
    setSelectedCategory(category);
    if(category === 'All') {
      setCategoryData(allData);
    } else {
      const filteredData = allData.filter(data => data.Categories === category);
      setCategoryData(filteredData)
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categoryData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleSort = (e) => {
    const sort = e.target.value;
    fetch('https://prompt-api-206d.onrender.com/promptList/sort', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sort }),
    })
    .then((res) => res.json())
    .then((data) => {
      setCategoryData(data.prompts);
      console.log(data);
    })
    .catch((error) => console.error(error));
  }

  return (
    <>
     <nav className="flex items-start text-base font-medium border border-rgb(249, 250, 251)-200  bg-slate-100 w-[100%]">
    
      <ul className="mt-5 w-[25%] px-4 text-justify">
      <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
        {categories.map((category, index) => 
          <CategoryItem
            key={index}
            name={category}
            isActive={selectedCategory === category}
            onClick={() => handleCategoryClick(category)}
          />
        )}
      </ul>
      
      <div className="mt-5 grid grid-cols-3 gap-4 w-[70%] items-center">
      <input
  type="text"
  placeholder='Search For Prompts'
  className='rounded-3xl p-3'
  value={searchQuery}
  onChange={handleSearch}
/>
    <p className='ml-10'>Showing {itemsPerPage*currentPage} of {allData.length} prompts</p>
    <select name="sort" id="" className='p-3 bg-transparent w-32' onChange={(e) => handleSort(e)}>
  <option value="asc">Sort A-Z</option>
  <option value="desc">Sort Z-A</option>
</select>
        {currentItems && currentItems.map((data, index) => (
              <Card
              key={index}
              title={data.name}
              description={data.Description}
              buttonText={data.Categories}
              onClick={()=>handleClick(data._id)}
              />
        ))}
      </div>
    
    </nav>
    <div className="pagination flex justify-center space-x-2 mt-4 mb-3">
  {[...Array(Math.ceil(categoryData.length / itemsPerPage))].map((_, index) => (
    <button
      key={index}
      className={`px-4 py-2 rounded border border-gray-300 ${
        index + 1 === currentPage ? 'bg-gray-300 text-gray-800' : 'bg-white text-gray-600'
      } hover:bg-gray-200 transition-colors duration-200 ease-in-out`}
      onClick={() => paginate(index + 1)}
    >
      {index + 1}
    </button>
  ))}
</div>
    </>
   
  );
}

export default CategoryList;