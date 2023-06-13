import React,{useState,useEffect, useContext} from 'react'
import { HeartFill, Heart } from 'react-bootstrap-icons'
import '../App.css'
import axios from 'axios'
import { FavoriteItemsContext } from '../Context/FavoriteItemsContext';


const Products = () => {
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([]);
    const { favoriteItems, addFavoriteItem, removeFavoriteItem } = useContext(FavoriteItemsContext);

 useEffect(()=>{
      setLoading(true);
    axios({

        method:"GET",
        url:"https://fakestoreapi.com/products"
    })
    
      .then(res=>{
        console.log(res.data)
        setData(res.data)

    })
    .catch(e=>console.log(e))
    .finally(()=>setLoading(false))

 },[]);

 const toggleFavorite = (productId) => {
  const selectedProduct = data.find((product) => product.id === productId);

  if (selectedProduct) {
    if (favoriteItems.some((item) => item.id === productId)) {
      removeFavoriteItem(productId);
    } else {
      addFavoriteItem({
        id: productId,
        title: selectedProduct.title,
        image: selectedProduct.image,
      });
    }
  }
};


  return (
    <div className='products-container'>
        {loading &&( 
        <div>
            {" "}
            <h1>Loading...</h1>

        </div>
        )}

        {data.map((product)=> {
            const isFavorite = favoriteItems.some((item) => item.id === product.id);
        
          return(
            <div key={product.id} className="card">
                <div>
                  <img src={product.image} alt = "#"/>
                </div>
                <div className='card-description'></div>
                   <h6>{product.title}</h6>
                   <h6>{`Price:${product.price}`}</h6>
                   <h6>{`Category:${product.category}`}</h6>

            <button onClick={() => toggleFavorite(product.id)}>
                {isFavorite ? <HeartFill/> : <Heart/>}
            </button>

            </div>
          );
            
          })}
    
    </div>
  );
};

export default Products
