import React from "react";
import { NavLink } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="footer-contaner">
      <div>
        <h5>Giới Thiệu Về Chúng Tôi
          {/* About */}
        </h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">
              Công Ty
              {/* Company */}
              </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Địa chỉ
              {/* Location */}
              </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Liên Hệ
              {/* Contacts */}
              </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Giờ Mở Cửa
              {/* Opening Hours */}
              </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>
          Liên Kết Hỗ Trợ
          {/* Useful links */}
          </h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">
              Trợ Giúp
              {/* Help */}
              </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Chính Sách Bảo Mật
              {/* Privacy Ploicy */}
              </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Các Điều Khoản - Điều Kiện
              {/* Terms and Conditions */}
              </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Câu hỏi thường gặp mua hàng
              {/* FAQ */}
              </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>
          Dịch vụ
          {/* Customer Servie */}

        </h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">
              Phương Thức Thanh Toán
              {/* Payment Methods */}
              </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Hoàn Tiền
              {/* Money-back */}
              </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Chính Sách Đổi trả
              {/* Returns */}
              </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Giao hàng - Vận chuyển
              {/* Shipping */}
              </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>
          Liên Kết Với Chúng Tôi
          {/* Join Us */}
          </h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Twitter</NavLink>
          </li>
          <li>
            <NavLink to="/">Facebook</NavLink>
          </li>
          <li>
            <NavLink to="/">Instagram</NavLink>
          </li>
          <li>
            <NavLink to="/">Linkedin</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
