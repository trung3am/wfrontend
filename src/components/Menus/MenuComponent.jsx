import React from 'react';
import MenuItem from "../UI/MenuItem/MenuItem";
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

const MenuComponent = (props) => {
    return (
        <React.Fragment>
             <SearchBar/> 
            <MenuItem linkTo={'/all'}>Trang Chủ</MenuItem>
            <MenuItem linkTo={'/category/men'}>Nam</MenuItem>
            <MenuItem linkTo={'/category/women'}>Nữ</MenuItem>
            <MenuItem linkTo={'/category/kids'}>Trẻ Em</MenuItem>
            <MenuItem linkTo={'/sale'}>Sale</MenuItem>
            <MenuItem linkTo={'/cart'}>
                Giỏ Hàng <span className="badge badge-light">{props.cartCount}</span>
            </MenuItem>
            <MenuItem linkTo={props.currentUser ? '/user' :"/login"}>{props.currentUser ? props.currentUser : "Đăng Nhập/ Đăng Ký"}</MenuItem>
        </React.Fragment>
    )
};

MenuComponent.propTypes = {
    cartCount: PropTypes.number
};

export default MenuComponent;
