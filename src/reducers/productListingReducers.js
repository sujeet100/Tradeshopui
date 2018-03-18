import GET_PRODUCTS from '../actions/actionTypes';
import productListingInitialState from './productListingInitialState';

const getProducts = (state = productListingInitialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: [
          {
            name: 'Wrangler T Shirt',
            description: 'White Size M',
            price: 1000,
            imagePath: null,
            sku: 'WRANG',
            stockInfo: []
          },
          {
            name: 'Google Pixel',
            description: null,
            price: 10000,
            imagePath: null,
            sku: 'XXX',
            stockInfo: []
          },
          {
            name: 'Bose QC 35',
            description: 'World-class noise cancellation makes quiet sound quieter and music sound better',
            price: 29363,
            imagePath: 'http://ecx.images-amazon.com/images/I/919m6Fn487L._SL1500_.jpg',
            sku: 'BOSEQC',
            stockInfo: []
          },
          {
            name: 'Sony PS4 Pro',
            description: 'Battle friends and foes with the Sony PlayStation 4 Pro console.' +
            ' Its 1TB capacity lets you store plenty of games without an external hard drive, and the dual-shock controller improves your hands-on gaming experience.' +
            ' See enemies in clear, vibrant detail with the included HDMI cable of the Sony PlayStation 4 Pro console.',
            price: 36489,
            imagePath: 'http://i.ebayimg.com/00/s/OTYwWDk2MA==/z/UgIAAOSwKVNYXOA9/$_57.JPG',
            sku: 'SONYPS4',
            stockInfo: []
          },
          {
            name: 'Apple Iphone 6S',
            description: '12MP primary camera with auto focus, 4K video recording, flash and 5MP front facing camera',
            price: 34999,
            imagePath: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/' +
            'r/ef/refurb/iphone6s/refurb-iphone6s-plus-silver?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5%2C0.5%2C0%2C0&iccEmbed=0&layer=comp&.v=1476121780367',
            sku: 'ABC',
            stockInfo: [
              {
                sellerId: 2,
                price: 40000,
                quantity: 2
              }
            ]
          }
        ]
      };
    }
    default:
      return state;
  }
};

export default getProducts;
