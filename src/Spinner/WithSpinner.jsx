
import React from 'react';

import Spinner from './Spinner';


const WithSpinner = WrappedComponent => {
    const SpinnerState  = ({isLoading, ...otherProps}) =>
    {
        return isLoading ? (
        <Spinner/>
        )
        : (
        <WrappedComponent {...otherProps}/>
        )
}
    return SpinnerState;

}

export default WithSpinner;