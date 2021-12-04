import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const ProductAdmin = (props) =>{
    
    let d = props.products.map(item => <div>
        <br /><Link key={item} to={"/admin/product/" + item.slug}>{item.name} Click để edit </Link>
    </div> )
    return(
        
        d
    )
}


const mapStateToProps = (state) =>{
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductAdmin)