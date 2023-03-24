import { getStoredCart } from "../../utilities/fakedb";

export const LoadDataExt = async () => {
    // get product data
    const productData = await fetch('products.json');
    const products = await productData.json();

    // get data from local storage

    const saveCart = getStoredCart();
    const finalCart = [];
    for(const id in saveCart){
        const addedProducts = products.find(product => product.id === id);
        // console.log(id, addedProducts);
        if(addedProducts){
            const quantity = saveCart[id];
            addedProducts.quantity = quantity;
            finalCart.push(addedProducts);
        }
    }
    // console.log(finalCart)

    return {products, finalCart};
}