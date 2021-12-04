import React, {useState} from "react";
import { connect } from "react-redux";
import EditProductApi from "../../api/EditProductApi";
import CustomButton from "../../components/CustomButton/custom-button.component";
import FormInput from "../../components/FormInput/form-input.component";


const ProductEdit = (props) =>{
    const [productInfo, setProductInfo] = useState({
        name: props.product.name, category: props.product.category, price: props.product.price, color: props.product.color, quantity: props.product.quantity
    })
    const {name, category, price, color, quantity} = productInfo;

    const handleChange = (event) =>{
        const {value, name} = event.target;
        setProductInfo({...productInfo, [name]:value})

    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        const id = props.product.id
        const jwt = props.jwt
        const res = await EditProductApi(id, name, category, price, color, quantity, jwt)
        if(!res || res.error){
            alert("failed to edit")
            return;
        }
        
        alert("Edit success")
    }

    return(
        <div className="edit-product">
            <form className="sign-up-form" onSubmit={handleSubmit} >
          
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            label="name"
            required
          />
          <FormInput
            type="text"
            name="category"
            value={category}
            onChange={handleChange}
            label="category"
            required
          />
          <FormInput
            type="text"
            name="color"
            value={color}
            onChange={handleChange}
            label="color"
            required
          />
          <FormInput
            type="text"
            name="quantity"
            value={quantity}
            onChange={handleChange}
            label="quantity"
            required
          />
          <FormInput
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
            label="price"
            required
          />
          <CustomButton type="submit">Thay Đổi Thông tin</CustomButton>
        </form>
        </div>
    )
}



const mapStateToProps = (state) =>{
    return{
        jwt: state.user_data.jwt,
        product: state.products.find((product)=> product.slug === window.location.pathname.split("/")[3])
    }
}

export default connect(mapStateToProps)(ProductEdit)