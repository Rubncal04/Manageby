import React from 'react-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputProduct } from './InputProduct';
import { TextAreaProduct } from './TextAreaProduct';
import { NewProductButton } from '../../services/NewProductButton';


function CardNewProduct() {
  const [message, setMessage] = useState('');
  const navegate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({
    code: '', name: '',
    price: 0, description: ''
  });

  const {
    code, name, price, description } = product;

  const onChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value});
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    setProduct({code: '', name: '', price: 0, description: ''})

    if (code !== '' && name !== '' && description !== '' && price !== 0) {

      const newProduct = {
        code, name, description, price
      };

      setLoading(true);

      await fetch('http://localhost:8080/api/v1/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      })
      .then((res) => res.json())
      .then(res => {
        if (res.error) {
          setMessage(res.error)
        } else {
          setProduct({code: '', name: '', price: 0, description: ''})
          setTimeout(() => {
            setMessage('');
            navegate(`/product/${res.id}/orders`)
          }, 2500)
          .catch((error) => {
            console.error(error);
            setMessage('Something went wrong');
            setTimeout(() => {
              setMessage('');
            }, 1500)
          })
        }
      });
    } else {
      setMessage('Please. Make sure you have filled up all fields.', '','error')
    }

    setLoading(false);
  }

  return (
    <div className="card card-product">
      <h1>New product</h1>
      <form onSubmit={(e) => saveProduct(e)}>
        <div className="card-body">
          <div className='row'>
            <div className='col-6'>
              <InputProduct label='Code' name='code' value={code} placeholder='Enter code' onChange={onChange}/>
            </div>
            <div className='col-6'>
              <InputProduct label='Name' name='name' value={name} placeholder='Enter product name' onChange={onChange}/>
            </div>
            <div className='col-6'>
              <InputProduct type='number' name='price' value={price} label='Price' placeholder='Enter price' onChange={onChange}/>
            </div>
            <div className='col-6'>
              <TextAreaProduct label='Description' name='description' value={description} placeholder='Enter product description' onChange={onChange}/>
            </div>
          </div>
        </div>
        <div className='card-footer mt-2'>
          <NewProductButton textButton='Next' loading={loading}/>
        </div>
      </form>
      {message && <div className='message-toast'>{message}</div>}
    </div>
  );
}

export { CardNewProduct }
