import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BusinessContext from '../../context/business/BusinessContext';

const initialState = {
  name: '',
  email: '',
  phone: '',
  zipcode: '',
  items: [],
};

const BusinessForm = () => {
  const { addBusiness, updateBusiness, clearCurrent, current } = useContext(
    BusinessContext
  );
  const [business, setBusiness] = useState(initialState);
  const [item, setItem] = useState({ name: '' });
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (current !== null) {
      setBusiness(current);
    } else {
      setBusiness(initialState);
    }
  }, [setBusiness, current]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch('/api/items');
        if (response.status !== 200) throw new Error('Error');

        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (error) {
        console.warn(error.message);
      }
    };
    getItems();
  }, []);

  const { name, email, phone, zipcode } = business;

  const onChange = (e) =>
    setBusiness({ ...business, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(business)
    if (current === null) {
      addBusiness(business);
    } else {
      updateBusiness(business);
    }
  
    setBusiness(initialState);
  };

  const clearAll = () => {
    clearCurrent();
  };

  const updateItem = (e) => setItem({ name: e.target.value });
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      if (response.status !== 200) throw new Error('Error');

      const data = await response.json();
      //console.log(data);
      setItems([...items, data]);
    } catch (error) {
      console.warn(error.message);
    }
  };

  const checkItem = (e) => {
    if (e.target.checked) {
      setBusiness({
        ...business,
        items: [...business.items, e.target.value],
      });
    } else {
      setBusiness({
        ...business,
        items: business.items.filter((id) => id !== e.target.value),
      });
    }
  };
  return (
    <>
      <form onSubmit={addItem}>
        <input value={item.name} onChange={updateItem} />
        <input type="submit" value="add item" />
      </form>

      <form onSubmit={onSubmit}>
        <h2 className="text-primary">
          {current ? 'Edit Business' : 'Add Business'}
        </h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />{' '}
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="zipcode"
          name="zipcode"
          value={zipcode}
          onChange={onChange}
        />
        {/* <input
        key={item.id}
        Item={Item.itemName}
        value={Item.val}
        getItems={this.getItems}
        /> */}
        <h5>Available Essential Product</h5>
        {items.map((element, index) => (
          <div key={index + '-element'}>
            <input type="checkbox" value={element._id} onChange={checkItem} />{' '}
            {element.name}
          </div>
        ))}
                
             
                    
                          
                    
            
                  
                        
        {/* <input
          type="radio"
          name="type"
          value="toilet-paper"
          checked={type === 'toilet-paper'}
          onChange={onChange}
        />
        Toilet Paper{' '}
        <input
          type="radio"
          name="type"
          value="bleach"
          checked={type === 'bleach'}
          onChange={onChange}
        />
        Bleach{' '} */}
        <div>
          <input
            type="submit"
            value={current ? 'Update Business' : 'Add Business'}
            className="btn btn-primary btn-block"
          />
        </div>
        {current && (
          <div>
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
        <div>
          <Link to="/landingpage" className="btn btn-light btn-block">
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
    </>
  );
};

export default BusinessForm;
