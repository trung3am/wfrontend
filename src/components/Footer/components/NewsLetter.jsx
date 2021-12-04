import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter-contaner mt-2">
      <h5>Tin tức từ Tulody?</h5>
      <p className="text-muted">
      Đăng ký nhận bản tin của chúng tôi để cập nhật những ưu đãi mới nhất!
        {/* Subscribe to our newsletter to get updates on our lates offers! */}
      </p>
      <div className="input-contaner mt-2">
        <div className="input-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
            >
              Đăng ký theo dõi 
              {/* Subscribe */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
