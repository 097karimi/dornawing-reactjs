import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import './body_products.css';
import Product_Table from '../product_table/Product_Table';
import { myContexts } from '../../../../../contexts';

const Body_Products = () => {

    const { items, setItems, newItem, setNewItem, productEditing, editingName, setEditingName,
        editingPrice, setEditingPrice, editingQty, setEditingQty, setProductEditing, editingImage, setEditingImage
    } = useContext(myContexts);

    function editProduct(id, item) {
        const updatedProducts = [...items].map((item) => {
            if (item.id === id) {
                item.name = editingName
                item.price = editingPrice
                item.qty = editingQty
                item.image = editingImage
            }
            return item
        })
        setItems(updatedProducts)
        setProductEditing(item)
        setEditingName("")
        setEditingPrice("")
        setEditingQty("")
        setEditingImage("")
    }

    function toggleComplete(id) {
        const updatedProducts = [...items].map((item) => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        })
        setItems(updatedProducts)
    }


    function deleteselected() {
        const updatedProducts = [...items].filter((item) => item.completed !== true)
        setItems(updatedProducts)
    }

    const addNewItem = () => {
        if (newItem.name && newItem.price && newItem.qty) {
            setItems([...items, newItem]);
            setNewItem({
                id: '',
                name: '',
                price: '',
                qty: '',
                image: '',
            })
        }
    }

    return (
        <section id="products-body">

            <div className="row m-0">
                <div className="buttons">
                    <button className="btn btn-delete" onClick={deleteselected}>
                        <span><FaTrash /></span>
                    </button>
                    <button type="button" className="btn btn-add" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add <span><MdAdd /></span>
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form >
                                        <div className="form-input">
                                            <span>Id:</span>
                                            <input
                                                type="text"
                                                onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
                                                value={newItem.id}
                                            />
                                        </div>
                                        <div className="form-input">
                                            <span>Name:</span>
                                            <input
                                                type="text"
                                                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                                value={newItem.name}
                                            />
                                        </div>
                                        <div className="form-input">
                                            <span>Price:</span>
                                            <input
                                                type="text"
                                                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                                                value={newItem.price}
                                            />
                                        </div>
                                        <div className="form-input">
                                            <span>Qty:</span>
                                            <input
                                                type="text"
                                                onChange={(e) => setNewItem({ ...newItem, qty: e.target.value })}
                                                value={newItem.qty}
                                            />
                                        </div>
                                        <div className="form-input">
                                            <span>Image:</span>
                                            <input
                                                type="file"
                                                onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                                                value={newItem.image}
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button onClick={addNewItem} type="submit" class="btn btn-primary">Add Product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container"> */}
            <div className="row product-box">
                {/* {products.map((item) => {
                        return (
                            <Product_List
                                item={item}
                                products={products}
                                setProducts={setProducts}
                            />
                        )
                    })} */}

                <Product_Table
                    items={items}
                    setItems={setItems}
                    productEditing={productEditing}
                    setProductEditing={setProductEditing}
                    editingName={editingName}
                    setEditingName={setEditingName}
                    editingPrice={editingPrice}
                    setEditingPrice={setEditingPrice}
                    editingQty={editingQty}
                    setEditingQty={setEditingQty}
                    editingImage={editingImage}
                    setEditingImage={setEditingImage}
                    editProduct={editProduct}
                    toggleComplete={toggleComplete}
                    newItem={newItem}
                    setNewItem={setNewItem}
                    addNewItem={addNewItem}
                />
            </div>

            {/* </div> */}
        </section>
    );
}

export default Body_Products;