export type PhoneColor = {
  id: string;
  name: string;
  hex: string;
  image: any;
};

export const COLORS: PhoneColor[] = [
  { id: 'lightblue', name: 'xanh nhạt', hex: '#C5F0FF', image: require('../assets/phones/silver.jpg') },
  { id: 'red', name: 'đỏ', hex: '#F30D0D', image: require('../assets/phones/red.jpg') },
  { id: 'black', name: 'đen', hex: '#000000', image: require('../assets/phones/black.jpg') },
  { id: 'blue', name: 'xanh đậm', hex: '#234896', image: require('../assets/phones/blue.jpg') },
];

// Ảnh hiển thị khi chưa chọn màu nào
export const DEFAULT_IMAGE = require('../assets/phones/blue.jpg');