"use server"

import { redirect } from "next/navigation";

export async function FilterProducts(formData){
    console.log(formData);
    const productName = formData.get("productName");
    const category = formData.get("category");
    let query = [];
    if(productName){
        query.push(`productName=${productName}`)
    }
    if(category){
        query.push(`category=${category}`)
    }
    const resultQuery = query.join("&");
    return redirect(`/?${resultQuery}`);
}