import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProfileContext from '../../../context/profile/profileContext';
import CardItem from './CardItem';
import Spinner from '../Spinner';
import { GridColumn } from 'semantic-ui-react';

const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    padding: "10px",
    GridColumnGap: "10px"
  }


const Card = () => { 
    const profileContext = useContext(ProfileContext);

    const { profiles, filtered, getProfiles, loading } = profileContext;

    useEffect(()=>{
        getProfiles();
        // eslint-disable-next-line
    },[]); 

    if(profiles !== null && profiles.length === 0 && !loading) { 
        return <h4>Please add a profile</h4>
    }

    //const SearchItem


    return (
        <Fragment>
            <div class="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
            </div>
        {profiles !== null && !loading ? (
            <TransitionGroup>
            <div style={gridContainerStyle}>
            {filtered !== null
             ? filtered.map(profile => (
                 <CSSTransition key={profile._id} timeout={500} classNames="item">
                <CardItem profile={profile} />
                </CSSTransition>
             ))
            : profiles.map(profile => (
                <CSSTransition key={profile._id} timeout={500} classNames="item">
                <CardItem profile={profile} />
                </CSSTransition>
            ))}
            </div>
            </TransitionGroup>      
        ): <Spinner/>}
        </Fragment>
    );
};

export default Card;