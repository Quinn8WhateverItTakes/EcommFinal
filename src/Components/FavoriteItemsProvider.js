import React, { createContext, useState } from 'react'


export const FavoriteItemsContext = createContext(); 

const FavoriteItemsProvider = ({children}) => {
    const [favoriteItems,setFavoriteItems] = useState([]);

    const addFavoriteItem = (itemId) => {
        setFavoriteItems((prevItems) => [...prevItems,itemId]);

    };

    const removeFavoriteItem = (itemId) => {
        setFavoriteItems((prevItems)=>
        prevItems.filter((id) => id !==itemId)

        );
    };

    const contextValue ={
        favoriteItems,
        addFavoriteItem,
        removeFavoriteItem,
    };
  return (
    <FavoriteItemsContext.Provider value={contextValue}>
        {children}
      
    </FavoriteItemsContext.Provider>
  );
};

export default FavoriteItemsProvider
