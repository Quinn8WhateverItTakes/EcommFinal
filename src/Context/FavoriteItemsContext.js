import React, { createContext, useState } from 'react';

export const FavoriteItemsContext = createContext();
export const FavoriteItemsProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addFavoriteItem = (itemId) => {
    setFavoriteItems((prevItems) => {
      const updatedItems = [...prevItems, itemId];
      console.log('Added item:', itemId);
      console.log('Favorite Items:', updatedItems);
      return updatedItems;
    });
  };

  const removeFavoriteItem = (productId) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };
  
  

  return (
    <FavoriteItemsContext.Provider value={{ favoriteItems, addFavoriteItem, removeFavoriteItem }}>
      {children}
    </FavoriteItemsContext.Provider>
  );
};

export default FavoriteItemsProvider;
