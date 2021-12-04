import React from 'react';
import { connect } from 'react-redux';


const AdminOrder = (props) => {
    console.log(props.orders)
    let a = props.orders.map(item=> <div><span>order id : {item.id} </span> <span>
        client: {item.client} </span>
        <span>email: {item.email} </span>
        <span>address: {item.address} </span>
        <span>phone: {item.phone} </span>
        <span>status: {item.status} </span>
        </div>)
    
    return(
        a
    )
}

const mapStateToProps = (state) => {
    return{
        orders : state.order
    }
}

export default connect(mapStateToProps)(AdminOrder);