
import React, { useContext } from 'react';
import BusinessItem from '../businesses/BusinessItem';
import BusinessContext from '../../context/business/BusinessContext';
import Businesses from '../businesses/Businesses';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../../components/layouts/Spinner';
import BusinessFilter from '../businesses/BusinessFilter';
import './LandingPage.css';


const LandingPage = () => {
  const businessContext = useContext(BusinessContext);

  const { businesses, filtered, getBusinesses, loading } = businessContext;
  //  const authContext = useContext(AuthContext);

  //  useEffect(() => {
  //      authContext.loadUser();
  //      // eslint-disable-next-line-next
  //  }, []);

  return (
    <div className="home-page">
      <div className="grid-2">
  
        <div>
          <BusinessFilter />
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
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
