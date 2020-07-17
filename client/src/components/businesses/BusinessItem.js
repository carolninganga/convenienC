import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BusinessContext from '../../context/business/BusinessContext';


const BusinessItem = ({ business }) => {
    const businessContext = useContext(BusinessContext);
    const { deleteBusiness, setCurrent, clearCurrent } = businessContext;

    const { _id, name, email, phone, zipcode, type } = business;

    const onDelete = () => {
        deleteBusiness(_id);
        clearCurrent();

    };


    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '} <span style={{ float: 'right' }} 
                    className={'badge ' + (type === 'toilet-paper' ? 'badge-success' : 'badge-primary' )}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className="list">
                {email && ( 
                    <li>
                        <i className='fas fa-envelope-open' /> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className='fas fa-phone' /> {phone}
                    </li>
                )}
                {zipcode && (
                    <li>
                       <i className="fas fa-map-marker-smile" /> {zipcode}
                    </li>
                )}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={() => setCurrent(business)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>

            </p>
        </div>
    )
};

BusinessItem.propTypes = {
    business: PropTypes.object.isRequired
};

export default BusinessItem;