import { createContext, useState } from "react";
import data_fake from './data_fake.json';

export const myContexts = createContext({
    pitem: [], setPitem: [],
    newItem: [], setNewItem: [],
    items: [], setItems: [],
    productEditing: [], setProductEditing: [],
    product: [], setProduct: [],
    editingName: [], setEditingName: [],
    editingPrice: [], setEditingPrice: [],
    editingQty: [], setEditingQty: [],
    editingImage: [], setEditingImage: [],
});

const Contexts = ({ children }) => {
    const [newItem, setNewItem] = useState({
        id: '',
        name: '',
        price: '',
        qty: '',
        image: ''
    })

    const [pitem, setPitem] = useState("");
    const [items, setItems] = useState(data_fake);
    const [productEditing, setProductEditing] = useState(null);
    const [product, setProduct] = useState("");
    const [editingName, setEditingName] = useState("");
    const [editingPrice, setEditingPrice] = useState("");
    const [editingQty, setEditingQty] = useState("");
    const [editingImage, setEditingImage] = useState("");

    return (
        <myContexts.Provider value={{
            pitem, setPitem,
            newItem, setNewItem,
            items, setItems,
            productEditing, setProductEditing,
            product, setProduct,
            editingName, setEditingName,
            editingPrice, setEditingPrice,
            editingQty, setEditingQty,
            editingImage, setEditingImage,
        }}>
            {children}
        </myContexts.Provider>
    );
}

export default Contexts;