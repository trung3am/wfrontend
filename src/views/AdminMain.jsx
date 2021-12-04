import React from "react";
import { Link } from "react-router-dom";
const AdminMain = ()=> {
    

    return(
        <div className="fucku">
            <Link to={"/admin/product"}>Quản lý mặt hàng</Link><br />
            <Link to={"/admin/user"}>Quản lý người dùng</Link><br />
            <Link to={"/admin/order"}>Quản lý đơn hàng</Link><br />
        </div>
    )
}

export default AdminMain;