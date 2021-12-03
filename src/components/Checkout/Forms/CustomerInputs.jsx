import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../UI/Input/InputField';

const customerInputs = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <InputField
                    label={'Full Name'}
                    type={'text'}
                    placeholder={'Full Name'}
                    identifier={props.customerInfo.fullName}
                    changed={(event) => props.inputChanged(event, 'fullName')}/>
                </div>

                <div className="col-md-6 mb-3">
                    <InputField
                    label={'Phone number'}
                    type={'number'}
                    placeholder={'Phone number'}
                    identifier={props.customerInfo.phoneNumber}
                    changed={(event) => props.inputChanged(event, 'phoneNumber')}/>
                </div>
            </div>

            <div className="mb-3">
                <InputField
                    label={'Email'}
                    type={'email'}
                    placeholder={'you@example.com'}
                    identifier={props.customerInfo.email}
                    changed={(event) => props.inputChanged(event, 'email')}/>

            </div>
            <div className="mb-3">
                <InputField
                    label={'address'}
                    type={'text'}
                    placeholder={'adress'}
                    identifier={props.customerInfo.address}
                    changed={(event) => props.inputChanged(event, 'address')}/>

            </div>
        </React.Fragment>
    )
};

customerInputs.propTypes = {
    inputChanged: PropTypes.func.isRequired,
    customerInfo: PropTypes.object.isRequired,
};

export default customerInputs;