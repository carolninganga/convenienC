import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileContext from '../../../context/profile/profileContext';
import { Link } from 'react-router-dom';


const CardItem = ({ profile }) => {
    const profileContext = useContext(ProfileContext);
    const { deleteProfile, setCurrent, clearCurrent } = profileContext;

    const { _id, name, phone, city, zipcode, item1, item2, bio } = profile;

    const onDelete = () => {
        deleteProfile(name);
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
                    <i class="fas fa-phone"/>{phone}
                    </li>
                )}
                {city && (
                    <li>
                    <i class="fas fa-map-marker-alt"/> {city} {zipcode}
                    </li>
                )}
                {item1 && (
                    <li>
                    <i class="fas fa-shopping-cart"/> {item1}
                    </li>
                )}
                {item2 && (
                    <li>
                    <i class="fas fa-shopping-cart"/> {item2}
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

                <Link to={{pathname:`/detail/${_id}`, query:{name: name, phone: phone, item1: item1, item2: item2, bio: bio, city: city, zipcode: zipcode}}} className="btn btn-success btn-sm">Read More</Link>


            </p>
        </div>
    )
};

CardItem.propTypes = {
    profile: PropTypes.object.isRequired
};

export default CardItem;