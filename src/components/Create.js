import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';

const Create = () => {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [vol, setVol] = useState(0);
  const [type, setType] = useState('');
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  const productsCollection = collection(db, "productos");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(productsCollection, {
      description,
      status,
      vol,
      type,
      stock
    });
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Agregar Producto</h1>
          <form onSubmit={store}>
            <div className='mb-3'>
              <label className='form-label'>Descripción</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
                type='text'
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
              <label className='form-label'>Stock</label>
              <input
                value={stock}
                onChange={(e) => setStock(e.target.value)} 
                type='number'
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
              <label className='form-label'>Vol</label>
              <input
                value={vol}
                onChange={(e) => setVol(e.target.value)} 
                type='number'
                className='form-control'
              />
            </div>
            <button type='submit' className='btn btn-primary'>Agregar</button>
          </form>   
        </div>
      </div>
    </div>
  );
}

export default Create;
