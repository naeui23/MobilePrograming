import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { ITEMS } from '../data/items';

export default function SearchScreen() {
  const [keyword, setKeyword] = useState('');

  const results = ITEMS.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập từ khóa..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Không có kết quả</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  row: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#eee' },
  text: { fontSize: 16 },
  empty: { textAlign: 'center', color: '#888', marginTop: 24 },
});