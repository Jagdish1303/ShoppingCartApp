import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = ({currentMode}) => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([])

  async function fetchProductData(){
    setLoading(true)
    try{
      const res = await fetch(API_URL)
      const data = await res.json()

      setPost(data);
    } catch(error){
      console.log('Error while fetching the data')
      setPost([]);
    }
    setLoading(false)
  }

  useEffect(() =>{
    fetchProductData()
  }, [])

  return (
    <div>
      {
        loading ? <div className="h-[80vh] flex justify-center items-center"><Spinner/></div> : 
        post.length > 0 ? 
        (<div className=" pb-10 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:pl-10 md:pr-10 pr-5  mx-auto lg:grid-cols-4 p-3 space-y-10 space-x-5 min-h-[80vh] ">
        
          {
            post.map( (post) => (
              <Product currentMode= {currentMode} key={post.id} post={post}/>
             ) )
          }
        </div>) : 
        (<div className="flex justify-center items-center font-bold text-2xl">
          No Data Found
        </div>)
      }
    </div>
  );
};

export default Home;
