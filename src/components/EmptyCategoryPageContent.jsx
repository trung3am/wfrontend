import React from 'react';

const EmptyCategoryPageContent = () => {
    return (
        <div className={'shop-div p-4 w-100'}>
            <h5>Sản phẩm hiện hết hàng. Vui lòng quay lại sau!</h5> 
            {/* There are currently no products. Please check back later */}
        </div>
    )
};

export default EmptyCategoryPageContent;
