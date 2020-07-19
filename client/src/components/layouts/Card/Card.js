import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BusinessContext from '../../../context/business/BusinessContext';
import CardItem from './CardItem';
import Spinner from '../Spinner';
//import { GridColumn } from 'semantic-ui-react';

const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    padding: "10px",
    GridColumnGap: "10px"
  }



const Card = () => { 
    const businessContext = useContext(BusinessContext);

    const { businesses, filtered, getBusinesses, loading } = businessContext;

    useEffect(()=>{
        getBusinesses();
        // eslint-disable-next-line
    },[]); 

    if(businesses !== null && businesses.length === 0 && !loading) { 
        return <h4>Please add a profile</h4>
    }

    return (
        <Fragment>
       
        {businesses !== null && !loading ? (
            <TransitionGroup>
            <div style={gridContainerStyle}>
            {filtered !== null
             ? filtered.map(business => (
                 <CSSTransition key={business._id} timeout={500} classNames="item">
                <CardItem business={business} />
                </CSSTransition>
             ))
            : businesses.map(business => (
                <CSSTransition key={business._id} timeout={500} classNames="item">
                <CardItem business={business} />
                </CSSTransition>
            ))}
            </div>
            </TransitionGroup>      
        ): <Spinner/>}
        </Fragment>
    );
};

export default Card;