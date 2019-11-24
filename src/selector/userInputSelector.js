import { createSelector } from 'reselect';

const getDishes = state => state.dishes || null;
const getSelectedMeal = state => state.userInput.selectedMeal || null;
const getSelectedRestaurant = state => state.userInput.restaurant || null;

export const getRestrantList = createSelector(
  [getDishes, getSelectedMeal],
  (dishes, selectedMeal) => {
    return dishes.items.filter(d => {
      return d.availableMeals.indexOf(selectedMeal) >= 0 || false
    })
  }
)

export const getDishList = createSelector(
  [getDishes, getSelectedMeal, getSelectedRestaurant],
  (dishes, selectedMeal, restaurant) => {
    console.log(dishes, selectedMeal, restaurant)
    return dishes.items.filter(d => {
      return d.availableMeals.indexOf(selectedMeal) >= 0 && d.restaurant === restaurant
    })
  }
)

