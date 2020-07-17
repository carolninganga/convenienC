import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
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
                zipcode: '',
                type: 'toilet-paper',
                essentialproduct: ''
            });
        }
    }, [businessContext, current]);

    const [business, setBusiness] = useState({
        name: '',
        email: '',
        phone: '',
        zipcode: '',
        type: 'toilet-paperl',
        //essentialproduct: ''
    });

    const { name, email, phone, type, zipcode, essentialproduct } = business;

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
            zipcode: '',
            type: 'toilet-paper',
            //essentialproduct: ''
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
                <input
                type='text'
                placeholder='zipcode'
                name='zipcode'
                value={zipcode}
                onChange={onChange}
                /> 
                <h5>Available Essential Product</h5> 
                <input type="radio" name="type" value="toilet-paper" checked={type === 'toilet-paper'} onChange={onChange} />Toilet Paper{' '}
                <input type="radio" name="type" value="bleach" checked={type === 'bleach'} onChange={onChange} />Bleach{' '}
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

                
                      <div>
                          <Link to='/landingpage' className="btn btn-light btn-block">
                              Home
                          </Link>
                      </div>
                

                {/* <div className="row">
                    <div className="form-group col">
                    <p>Which skill do you want to share?</p>
                    <select id="essentialproduct" name="essentialproduct" onChange={onChange} value={this.state.essentialproduct} className="form-control" required>
                        <option disabled selected value>Select an option</option>
                        <option value="JavaScript">Toilet Paper</option>
                        <option value="Node.js">Bleach</option>
                        <option value="Project Management">Lysol</option>
                        <option value="SQL">Batteries</option>
                        <option value="Python">Water</option>
                        <option value="Skateboarding">Pizza</option>
                        <option value="Access">icecream</option>
                    </select>
                    </div>
                    </div> */}
        </form>
    );
};

export default BusinessForm;