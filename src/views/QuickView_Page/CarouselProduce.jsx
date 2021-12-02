import { Carousel } from 'react-carousel-minimal';
import { Typography } from '@mui/material';

function CarouselProduce() {
 const data = [
    {
      image: "img/QuickView_img/2.jpg",
     // image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco"
    },
    {
      image: "img/QuickView_img/3.jpg",
      caption: "Scotland"
    },
    {
        image: "img/QuickView_img/4.jpg",
        caption: "Scotland"
      },
    {
      image: "img/QuickView_img/5.jpg",
      caption: "Darjeeling"
    }
  
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
          <Typography variant="h6">
         Hình ảnh chụp từ sản phẩm
          </Typography>
        
        {/* <p>Hình ảnh chụp từ sản phẩm</p> */}
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="550px"
            height="350px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselProduce;