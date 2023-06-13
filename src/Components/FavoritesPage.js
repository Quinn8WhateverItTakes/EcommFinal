import React, { useContext } from 'react';
import { FavoriteItemsContext } from '../Context/FavoriteItemsContext';

const FavoritesPage = () => {
  const { favoriteItems, removeFavoriteItem } = useContext(FavoriteItemsContext);
  console.log('Favorite Items:', favoriteItems);
  return (
    <div>
      <h1>Your Favorites</h1>
      {favoriteItems.length === 0 ? (
        <p>No items favorited yet</p>
      ) : (
        <ul>
          {favoriteItems.map((item) => (
            <li key={item.id}>
               <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <button onClick={() => removeFavoriteItem(item.id)}>
                Remove from Favorites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
