import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "./utils/data";
import {ParsedDataProps, Product} from "./interfaces/interfaces";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import AppHeader from "./components/app-header/app-header";


function App() {
  const productList: Product[] = data;
  const parsedData: ParsedDataProps = productList.reduce((acc, product) => {
    if(!acc[product.type]){
      acc[product.type] = [];
    }
    acc[product.type].push(product);
    return acc;
  }, {} as { [key: string]: Product[] })




  const [selectedProducts, setSelectedProducts] = useState({} as {[key:string]:number});
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
    <div className="App" style={{minHeight:"100vh"}}>
      <AppHeader />
      <main className="pl-4 pr-4">
        <div className="container" style={{maxWidth:"1240px", display: "flex", margin:"auto"}}>
          <section style={{flex:1}}>
            <h2 className={"text text_type_main-large  mt-10 mb-5"}>Соберите бургер</h2>
            <BurgerIngredients data={parsedData}  addProduct={addProduct}/>
          </section>
          <section style={{flex:1,}} className={"pt-25 pl-4 pr-4"}>
            <BurgerConstructor  data={parsedData} removeProduct={removeProduct}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
