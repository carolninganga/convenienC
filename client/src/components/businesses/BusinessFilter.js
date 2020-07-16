import React, { useContext, useRef, useEffect } from 'react';
import BusinessContext from '../../context/business/BusinessContext';

const BusinessFilter = () => {
    const businessContext = useContext(BusinessContext);
    const text = useRef('');

    const { filterBusinesses, clearFilter, filtered } = businessContext;

    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = e => {
        if(text.current.value !== '') {
            filterBusinesses(e.target.value);
        } else {
            clearFilter();
        }
    }
    return (
        <form>
            <input ref={text} type="text" placeholder="Search Local Store..." onChange={onChange} />
        </form>
    )
}

export default BusinessFilter;
