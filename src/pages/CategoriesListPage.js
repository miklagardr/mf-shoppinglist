import React, { useEffect } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { fetchCategories } from '../store'
import { useDispatch , useSelector } from 'react-redux'
function CategoriesListPage() {
    const { category } = useParams()
    const dispatch = useDispatch(); 
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
           await dispatch(fetchCategories(category)).unwrap()   
        }
        fetchData()
    },[])

    const { categories } = useSelector((state) => {
        return state.categories
    });
  
    const handleClick = (productID) => {
        navigate(`/singleproduct/${productID}`)
    }

  return (
    <div>
        <Navbar/>
        
        <div className='container mx-auto mt-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {categories.map((category) => {
                    return (
                        <div onClick={() => handleClick(category.productID)} key={category._id} className='border rounded p-4 cursor-pointer transition duration-300 hover:border-stone-500'>
                            <img className='object-contain w-full h-48' src={category.thumbnail} alt={category.title}/>
                            <h2 className='text-xl font-bold mt-2 text-center'>{category.title}</h2>
                        </div>
                    )
                })}
            </div>
        </div> 
    </div>
  )
}

export default CategoriesListPage