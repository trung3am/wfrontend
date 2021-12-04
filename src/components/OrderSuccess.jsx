import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <React.Fragment>
      <div className={"text-center"}>
        <h3 className={"text-success"}>Success!</h3>
        <h5 className={"py-4"}>
          Bạn đã đặt hàng thành công. Cám ơn Quí khách!
          {/* Your order is successful. Thank you for shopping with us. */}
        </h5>
        <Link className="btn btn-lg shop-btn-secondary checkout" to={"/"}>
          Tiếp Tục Mua Sắm
          {/* Continue Shopping */}
        </Link>
        <div className={"text-muted py-3"}>
          Kiểm tra sản phẩm trong đơn hàng của bạn.
          {/* check your order object in your console */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderSuccess;
