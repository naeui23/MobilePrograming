import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { usePhone } from '../PhoneContext';
import { DEFAULT_IMAGE } from '../data/colors';
type Props = NativeStackScreenProps<RootStackParamList, 'Product'>;
export default function ProductScreen({navigation}: Props) {
  const {selected} = usePhone();
  return (
    <View style={styles.container}>
      {/* Phần nội dung: flex: 1 để chiếm hết chỗ, đẩy nút CHỌN MUA xuống đáy */}
      <View style={styles.content}>
        <Image
          source={selected ? selected.image : DEFAULT_IMAGE}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.name}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

        <View style={styles.ratingRow}>
          <Text style={styles.stars}>★★★★★</Text>
          <Text style={styles.reviewCount}>(Xem 828 đánh giá)</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>1.790.000 đ</Text>
          <Text style={styles.oldPrice}>1.790.000 đ</Text>
        </View>

        <Text style={styles.cheaper}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>

        <TouchableOpacity 
          style={styles.colorButton}
          onPress={()=>navigation.navigate('Color')}
          >
          
          <Text style={styles.colorButtonText}>4 MÀU - CHỌN LOẠI</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  content: { flex: 1 },
  image: { width: '100%', height: 300 },
  name: { fontSize: 15, marginTop: 12 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  stars: { color: '#FFC107', fontSize: 18, marginRight: 8 },
  reviewCount: { fontSize: 12, color: '#555' },
  priceRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  price: { fontSize: 18, fontWeight: 'bold', color: '#000', marginRight: 12 },
  oldPrice: { fontSize: 14, color: '#999', textDecorationLine: 'line-through' },
  cheaper: { fontSize: 11, fontWeight: 'bold', color: '#E53935', marginTop: 8 },
  colorButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 16,
  },
  colorButtonText: { fontSize: 13 },
  arrow: { fontSize: 16 },
  buyButton: {
    backgroundColor: '#E53935',
    borderRadius: 6,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buyButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});