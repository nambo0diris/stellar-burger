import React, {useState} from 'react';
import './App.css';
import data from "./utils/data";
import {ParsedDataProps, Product} from "./interfaces/interfaces";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import AppHeader from "./components/app-header/app-header";
import {useGetIngredients} from "./hooks/useGetIngredients";


function App() {
  const {ingredients, isLoading, isError} = useGetIngredients();
  const productList: Product[] = ingredients;
  const parsedData: ParsedDataProps = productList.reduce((acc, product) => {
    if(!acc[product.type]){
      acc[product.type] = [];
    }
    acc[product.type].push(product);
    return acc;
  }, {} as { [key: string]: Product[] })




  const [selectedProducts, setSelectedProducts] = useState<{[key:string]:number}>({});
  const removeProduct = (id:string) => {
    if (selectedProducts[id] > 1) {
      setSelectedProducts({
        ...selectedProducts,
        [`${id}`]: selectedProducts[`${id}`] - 1
      })
    } else {
      setSelectedProducts({
        ...selectedProducts,
        [`${id}`]: 0
      })
    }
  }
  const addProduct = (id:string) => {
    if (!selectedProducts[id]) {
      setSelectedProducts({
        ...selectedProducts,
        [`${id}`]: 1
      })
    } else {
      setSelectedProducts({
        ...selectedProducts,
        [`${id}`]: selectedProducts[`${id}`] + 1
      })
    }
  }

  return (
    <div className="App">
      <AppHeader />
      <main className="pl-4 pr-4">
        <div className="container">
          <section>
            <h1 className={"text text_type_main-large  mt-10 mb-5"}>Соберите бургер</h1>
            {ingredients.length && <BurgerIngredients data={parsedData}  addProduct={addProduct}/>}
          </section>
          <section className={"pt-25 pl-4 pr-4"}>
            {ingredients.length && <BurgerConstructor data={parsedData} removeProduct={removeProduct}/>}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
