import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { COLORS, DEFAULT_IMAGE, PhoneColor } from '../data/colors';
import { usePhone } from '../PhoneContext';
type Props = NativeStackScreenProps<RootStackParamList, 'Color'>;

// Dữ liệu viết cứng cho bước này. Bạn đổi ảnh cho khớp với từng màu.


export default function ColorScreen({navigation}: Props) {
  const {selected: savedColor, setSelected: saveColor} = usePhone();
  const [selected, setSelected] = useState<PhoneColor | null>(savedColor);
  const handleDone = () => {
    if(selected) saveColor(selected);
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={selected ? selected.image : DEFAULT_IMAGE}
          style={styles.thumb}
          resizeMode="contain"
        />
        <View style={styles.info}>
          <Text style={styles.name}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          {selected && <Text style={styles.colorText}>Màu: {selected.name}</Text>}
          <Text style={styles.price}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Chọn một màu bên dưới:</Text>

        {COLORS.map((c) => (
          <TouchableOpacity
            key={c.id}
            onPress={() => setSelected(c)}
            style={[
              styles.swatch,
              { backgroundColor: c.hex },
              selected?.id === c.id && styles.swatchSelected,
            ]}
          />
        ))}

        <View style={{ flex: 1 }} />

        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', padding: 12, backgroundColor: '#fff' },
  thumb: { width: 90, height: 100 },
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 14 },
  colorText: { fontSize: 14, fontWeight: 'bold', marginTop: 4 },
  price: { fontSize: 16, fontWeight: 'bold', marginTop: 4 },
  body: { flex: 1, backgroundColor: '#C4C4C4', alignItems: 'center', padding: 16 },
  title: { alignSelf: 'flex-start', fontSize: 16, marginBottom: 16 },
  swatch: { width: 80, height: 80, marginBottom: 16, borderWidth: 2, borderColor: 'transparent' },
  swatchSelected: { borderColor: '#4A5DB8' },
  doneButton: {
    alignSelf: 'stretch',
    backgroundColor: '#4A5DB8',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
  },
  doneText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});