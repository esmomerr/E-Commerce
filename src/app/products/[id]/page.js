import "@/CSS/product-details.css";
import Link from "next/link";
import Image from "next/image";
import products from "@/Json/products.json";
import { notFound } from "next/navigation";

export default function ProductDetailPages({ params }){
    const {id} = params;
    const searchedProduct = products.find((product) => product.id == id);

    if (!searchedProduct) {
        return notFound();
    }
    return(
        <>
        <div className="container">
            <div className="product-details-page">
                <div className="left-page">
                <Image src={searchedProduct.thumbnail} alt={searchedProduct.title} width={445} height={445}/>

                {searchedProduct.images.map((image, index) => (
                    <div className="thumbnail" key={index}>
                        <Image src={`${image}`} alt={image} width={88} height={88} />
                    </div>
                ))}
                </div>


                <div className="right-page">
                <span className="product-category">{searchedProduct.category}</span>
                <h1 className="product-name">{searchedProduct.title}</h1>
                <p className="product-details">{searchedProduct.description}</p>
                <div className="price">
                    <div className="price-discount">
                    <span className="product-price">${searchedProduct.price}</span>
                    <span className="discount">%{searchedProduct.discountPercentage}</span>
                    </div>
                    <span className="discountPrice">${searchedProduct.price}</span>
                </div>  
                <div className="order-section">
                    <div className="plus-minus">
                    <button className="minus-btn">-</button>
                    <span className="quantity">0</span>
                    <button className="plus-btn">+</button>
                    </div>
                    <button className="add-to-card-btn"><Image src="/shape.svg" alt="light-basket-icon" width={16} height={16} />Add to cart</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}