import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BusinessContext from '../../context/business/BusinessContext';
import Spinner from '../layouts/Spinner';
import BusinessItem from './BusinessItem';

const Businesses = () => {
  const businessContext = useContext(BusinessContext);

  const { businesses, filtered, getBusinesses, loading } = businessContext;

  useEffect(() => {
    getBusinesses();
    //eslint-disable-next-line
  }, []);

  if (businesses !== null && businesses.length === 0 && !loading) {
    return <h4>Please add a Business</h4>;
  }

  console.log(businesses);

  return (
    <Fragment>
      {businesses !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((business) => (
                <CSSTransition
                  key={business._id}
                  timeout={500}
                  classNames="item"
                >
                  <BusinessItem business={business} />
                </CSSTransition>
              ))
            : businesses.map((business) => (
                <CSSTransition
                  key={business._id}
                  timeout={500}
                  classNames="item"
                >
                  <BusinessItem business={business} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Businesses;
