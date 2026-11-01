export type PhoneColor = {
  id: string;
  name: string;
  hex: string;
  image: any; // ảnh trong assets, dùng require
};

// Bảng tra cứu: id màu (khớp với giá trị trong mảng "colors" của API) -> thông tin hiển thị
export const COLOR_TABLE: Record<string, PhoneColor> = {
  lightblue: { id: 'lightblue', name: 'xanh nhạt', hex: '#C5F0FF', image: require('../assets/phones/silver.jpg') },
  red:       { id: 'red',       name: 'đỏ',        hex: '#F30D0D', image: require('../assets/phones/red.jpg') },
  black:     { id: 'black',     name: 'đen',       hex: '#000000', image: require('../assets/phones/black.jpg') },
  blue:      { id: 'blue',      name: 'xanh đậm',  hex: '#234896', image: require('../assets/phones/blue.jpg') },
};

export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviewCount: number;
  supplier: string;
  badge: string;
  colors: string[];      // ví dụ ["lightblue", "red", "black", "blue"]
  defaultColor: string;  // ví dụ "blue"
};

// Thay bằng endpoint của bạn
const API_URL = 'https://6addb8614e88f1bba4a491fb.mockapi.io/phones';

export async function fetchProduct(): Promise<Product> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Không tải được dữ liệu (mã lỗi ' + response.status + ')');
  }
  const list: Product[] = await response.json();
  return list[0]; // mockapi trả về một mảng, lấy bản ghi đầu tiên
}

export const DEFAULT_IMAGE = require('../assets/phones/blue.jpg');