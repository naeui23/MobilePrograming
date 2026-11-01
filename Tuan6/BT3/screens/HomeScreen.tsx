import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ITEMS } from '../data/items';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  row: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#eee' },
  text: { fontSize: 16 },
});