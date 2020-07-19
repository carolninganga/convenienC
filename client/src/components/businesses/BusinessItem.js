// import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import BusinessContext from '../../context/business/BusinessContext';
// import { Link } from 'react-router-dom';

// const BusinessItem = ({ business }) => {
//   const businessContext = useContext(BusinessContext);
//   const { deleteBusiness, setCurrent, clearCurrent } = businessContext;

//   const { _id,name, email, phone, zipcode, items } = business;
  
//   const onDelete = () => {
//     // deleteBusiness(_id);
//     clearCurrent();
//   };

//   return (
//     <div className="card bg-light">
//       <h3 className="text-primary text-left">{name}</h3>
//       <ul className="list">
//         {email && (
//           <li>
//             <i className="fas fa-envelope-open" /> {email}
//           </li>
//         )}
//         {phone && (
//           <li>
//             <i className="fas fa-phone" /> {phone}
//           </li>
//         )}
//         {zipcode && (
//           <li>
//             <i className="fas fa-map-marker-smile" /> {zipcode}
//           </li>
//         )}
//         {items && (
//           <li> 
//             <ul>
//             {items.map( item => <li>
//             <i className="fas" /> {item.name}
//             </li>)}
//             </ul>
//           </li> 
//         )}
//       </ul>
//       <p>
//         <button
//           className="btn btn-dark btn-sm"
//           onClick={() => setCurrent(business)}
//         >
//           Edit
//         </button>
//         <button className="btn btn-danger btn-sm" onClick={onDelete}>
//           Delete
//         </button>
//         <Link to={{pathname:`/landingPage/${_id}`,query:{name: name, email:email, phone:phone, zipcode:zipcode}}} className="btn btn-success">Home</Link>
//       </p>
//     </div>
//   );
// };

// BusinessItem.propTypes = {
//   business: PropTypes.object.isRequired,
// };

// export default BusinessItem;
