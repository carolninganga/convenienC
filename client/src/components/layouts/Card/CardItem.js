import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BusinessContext from '../../../context/business/BusinessContext';
//import { Link } from 'react-router-dom';


const CardItem = ({ business }) => {
    const businessContext = useContext(BusinessContext);
    const { deleteBusiness, clearCurrent } = businessContext;

    const { name, phone, city, zipcode, item1, item2, item3 } = business;

    const onDelete = () => {
        deleteBusiness(name);
        clearCurrent();

    };


    return (
        <div className='card bg-light' style={{margin: "0.7rem"}}>
            {/* <h3 className='text-primary text-left'>
                {name}{' '} <span style={{ float: 'right' }} 
                    className={'badge ' + (type === 'professional' ? 'badge-dark' : 'badge-dark' )}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3> */}
            <ul className="list">
                {name && ( 
                    <li>
                    <i class="fas fa-user"/> {name}
                    </li>
                )}
                {phone && (
                    <li>
                    <i class="fas fa-map-marker-alt"/> {phone} 
                    </li>
                )}
                {city && (
                    <li>
                    <i class="fas fa-map-marker-alt"/> {city} {zipcode}
                    </li>
                )}
                {item1 && (
                    <li>
                    <i class="fab fa-slideshare"/> {item1}
                    </li>
                )}
                 {item2 && (
                    <li>
                    <i class="fab fa-slideshare"/> {item2}
                    </li>
                )} {item3 && (
                    <li>
                    <i class="fab fa-slideshare"/> {item3}
                    </li>
                )}
                {/* {bio && (
                    <li>
                    <i class="fas fa-info-circle"/> {bio}
                    </li>
                )} */}
            </ul>
            <p>
                {/* <button className="btn btn-dark btn-sm" onClick={() => setCurrent(profile)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button> */}

                {/* <Link to={{pathname:`/detail/${_id}`, query:{firstname: firstname, lastname: lastname, skillshare: skillshare, skillwanted: skillwanted, bio: bio, city: city, zipcode: zipcode}}} className="btn btn-success btn-sm">Read More</Link> */}


            </p>
        </div>
    )
};

CardItem.propTypes = {
    business: PropTypes.object.isRequired
};

export default CardItem;