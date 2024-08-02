import "@/CSS/style.css";
import "@/CSS/card.css";
import Link from "next/link";
import products from "@/Json/products.json";
import Categories from "@/Json/products-category.json"
import { FilterProducts } from "./action";
import Image from "next/image";

export default function Home({ searchParams}) {
  let filteredProducts = products;
  console.log(searchParams.productName, "sdkf");
  
  if(searchParams.productName){
    filteredProducts = filteredProducts.filter((product) => product.title.toLocaleLowerCase("tr").includes(searchParams.productName.toLocaleLowerCase("tr")));
  }
  if(searchParams.category){
    const searchedCategory = Categories.find((category) => category.name.toLocaleLowerCase("tr") == searchParams.category.toLocaleLowerCase("tr"));
    filteredProducts = filteredProducts.filter((product) => product.categoryId == searchParams.category);
  }
  console.log(searchParams.category);
  console.log(filteredProducts);
  
  
  return (
    <>
    <div className="container">
      <form action={FilterProducts} className="form">
        <input className="input" name="productName" placeholder="Search..." type="search" />
        <select name="category" className="selected-category">
          {Categories.map((category) => (
            <option key={category.id} value={category.id}>
                {category.name}
            </option>
          ))}
        </select>
        <button type="submit" className="filter">Filtrele</button>
      </form>

      <div className="cards">
        {filteredProducts.map((product, index) => (
          <Link href={`/products/${product.id}`} key={index}>
            <div className="card">
              <Image src={product.thumbnail} alt={product.title} width={80} height={50} className="card-img" />
              <div className="card-info">
                <p className="text-title">{product.title} </p>
                <p className="text-body">Categories: {product.category}</p>
              </div>
              <div className="card-footer">
                <span className="text-title">${product.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
