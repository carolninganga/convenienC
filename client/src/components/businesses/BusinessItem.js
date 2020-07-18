import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import BusinessContext from '../../context/business/BusinessContext';

const BusinessItem = ({ business }) => {
  const businessContext = useContext(BusinessContext);
  const { deleteBusiness, setCurrent, clearCurrent } = businessContext;

  const { _id, name, email, phone, zipcode, items } = business;
  //console.log('test', business)
  //console.log('test2', items)

// useEffect(async () => {
//   try {
//     const response = await fetch('/api/items');
//     if (response.status !== 200) throw new Error('Error');

//     const data = await response.json();
//     console.log(data);
//     items=(data.filter( e => items.some(e._id)));
//   } catch (error) {
//     console.warn(error.message);
//   }

// })

  const onDelete = () => {
    deleteBusiness(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">{name}</h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
        {zipcode && (
          <li>
            <i className="fas fa-map-marker-smile" /> {zipcode}
          </li>
        )}
        {items && (
          <li> 
            <ul>
            {items.map( item => <li>
            <i className="fas" /> {item}
            </li>)}
            </ul>
          </li> 
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(business)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

BusinessItem.propTypes = {
  business: PropTypes.object.isRequired,
};

export default BusinessItem;
