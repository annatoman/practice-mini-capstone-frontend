import { useState } from 'react'
import './App.css'

function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#products-index">All Flowers</a> | <a href="#products-new">New Flower</a>
      </header>
    </div>
  );
}

function ProductsNew() {
  return (
    <div id="products-new">
      <h1>New Flower</h1>
      <form action="">Flower: <input type="text"></input></form>
      <form action="">Description: <input type="text"></input></form>
      <form action="">Image: <input type="text"></input></form>
      <button type="button">Purchase</button>
    </div>
  );
}

function ProductsIndex(props) {
  console.log(props);
  return (
    <div id="products-index">
      <h1>
        All Flowers
      </h1>
      {props.products.map((product) => (
        <div key={product.id} className="products">
          <h2>{product.title}</h2>
          <img src={product.image} alt="" />
          <p>{product.body}</p>
          <button>More info</button>
        </div>
      )
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function Content() {
  return (
    <div>
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
