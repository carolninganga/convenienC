import React, { useState, useContext, useEffect } from 'react'
import BusinessContext from '../../context/business/BusinessContext';


const BusinessForm = () => {
    const businessContext = useContext((BusinessContext));

    const { addBusiness, updateBusiness, clearCurrent, current } = businessContext;

    useEffect(() => {
        if(current !== null) {
            setBusiness(current);
        } else {
            setBusiness({
                name: '',
                email:'',
                phone: '',
                type: 'toilet-paper'
            });
        }
    }, [businessContext, current]);

    const [business, setBusiness] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'toilet-paperl'
    });

    const { name, email, phone, type } = business;

    const onChange = e =>
        setBusiness({ ...business, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        if(current === null) {
            addBusiness(business);
        } else {
            updateBusiness(business);
        }
        setBusiness({
            name: '',
            email:'',
            phone: '',
            type: 'toilet-paper'
        });
    };
    
    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>{current ? 'Edit Business' : 'Add Business'}</h2>
            <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={onChange}
                />
                <input
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onChange}
                /> <input
                type='text'
                placeholder='Phone'
                name='phone'
                value={phone}
                onChange={onChange}
                /> 
                <h5>Available Essential Product</h5> 
                <input type="radio" name="type" value="toilet-paper" checked={type === 'toilet-paper'} onChange={onChange} />Toilet Paper{' '}
                <input type="radio" name="type" value="bleach" checked={type === 'bleach'} onChange={onChange} />Bleach{' '}
                {/* <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} />Personal{' '}
                <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} />Personal{' '}
                <input type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onChange} /> Professional*/}
                <div> 
                  <input type="submit" value={current ? 'Update Business' : 'Add Business'} className="btn btn-primary btn-block" />
                  </div>
                  {current && (
                      <div>
                          <button className="btn btn-light btn-block" onClick={clearAll}>
                              Clear
                          </button>
                      </div>
                  )}
        </form>
    );
};

export default BusinessForm;