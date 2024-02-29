import React, {useEffect, useState} from 'react';
import './App.css';
import {Product, ProductWithUUID, SelectedIngredients} from "./interfaces/interfaces";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import AppHeader from "./components/app-header/app-header";
import {useGetIngredients} from "./hooks/use-get-ingredients";
import {DataContext} from "./components/context/data-context"
import { v4 as uuidv4 } from 'uuid';
import {config} from "./config";

const isBun = (product: Product):boolean => {
  return product.type === "bun";
}

const accInitialValue: Product = {
  calories: 0,
  carbohydrates: 0,
  fat: 0,
  image: '',
  image_large: '',
  image_mobile: '',
  name: '',
  price: 0,
  proteins: 0,
  type: '',
  __v:0,
  _id: ''
}
const getProductById = (ingredients: Product[], id: string): Product => {
  return  ingredients.reduce((acc, currentValue) => {
    if (currentValue._id === id) {
      return currentValue;
    }
    return acc;
  },accInitialValue)
}

function App() {
  const {data:ingredients} = useGetIngredients(config.productsAPI);

  const [selectedIngredients, setSelectedIngredients] = useState<SelectedIngredients>({bun: [], ingredients:[]});


  const getProductWithUUID = (product: Product): ProductWithUUID => {
    return {
      ...product,
      uuid: uuidv4()
    }
  }
  const removeProduct = (id:string) => {

  }
  const addProduct = (id:string) => {
    const product = getProductById(ingredients, id);

    if (isBun(product)) {
      const topBun = getProductWithUUID(product);
      const bottomBun = getProductWithUUID(product);
      setSelectedIngredients({
        bun: [topBun, bottomBun],
        ingredients: selectedIngredients.ingredients
      });
    } else {
      const newProduct: ProductWithUUID = getProductWithUUID(product);
      const updatedIngredients = [...selectedIngredients.ingredients, newProduct]
      setSelectedIngredients({
        bun: selectedIngredients.bun,
        ingredients: updatedIngredients
      });
    }
  }

  useEffect(()=>{
    console.log(selectedIngredients)
  },[selectedIngredients])

  return (
    <div className="App">
      <AppHeader />
      <main className="pl-4 pr-4">
        <div className="container">
          <DataContext.Provider value={ingredients }>
            <section>
              <h1 className={"text text_type_main-large  mt-10 mb-5"}>Соберите бургер</h1>
              <BurgerIngredients addProduct={addProduct}/>
            </section>
            <section className={"pt-25 pl-4 pr-4"}>
              <BurgerConstructor selectedIngredients={selectedIngredients} removeProduct={removeProduct}/>
            </section>
          </DataContext.Provider>
        </div>
      </main>
    </div>
  );
}

export default App;
