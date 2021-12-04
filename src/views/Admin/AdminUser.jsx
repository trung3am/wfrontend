import React from "react";
import { connect } from "react-redux";


const AdminUser = (props) => {

    let e  = props.users.map(item => <div>
        <span>user_id: {item.user_id}    </span>
        <span>user_name: {item.user_name}    </span>
        <span>email: {item.email}   </span>
        <span>phone: {item.phone_number}   </span>
        <span>banned: {item.banned==="1" ? "Yes" : " No"}   </span>
    </div>)

    return (e)
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(AdminUser);