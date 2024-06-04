import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

const Edit = () => {
  const [description, setDescription] = useState('');
  const [vol, setVol] = useState(0);
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, "productos", id);
    const data = {
      description,
      vol,
      type,
      status,
      stock
    };
    await updateDoc(product, data);
    navigate('/');
  };

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, "productos", id));
    if (product.exists()) {
      const productData = product.data();
      setDescription(productData.description);
      setVol(productData.vol);
      setType(productData.type);
      setStatus(productData.status);
      setStock(productData.stock);
    } else {
      console.log('El producto no existe');
    }
  };

  useEffect(() => {
    getProductById(id);
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Editar Producto</h1>
          <form onSubmit={update}>
            <div className='mb-3'>
              <label className='form-label'>Description</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Vol</label>
              <input
                value={vol}
                onChange={(e) => setVol(e.target.value)}
                type='number'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Type</label>
              <input
                value={type}
                onChange={(e) => setType(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Status</label>
              <input
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Stock</label>
              <input
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                type='number'
                className='form-control'
              />
            </div>
            <button type='submit' className='btn btn-primary'>Actualizar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
