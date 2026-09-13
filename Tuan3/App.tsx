import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Header } from './components/Header';
import { CategoryChips } from './components/CategoryChips';
import { BookGrid } from './components/BookGrid';
import { FloatingCartButton } from './components/FloatingCartButton';
import { BOOKS } from './data';
export default function App() {
  const [carCount, setCartCount] = useState(0);
  return (
    <View style={styles.screen}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <CategoryChips />
        <Text style={styles.sectionTitle}> Menu</Text>
        <BookGrid
          books={BOOKS}
          onPressBook={(id) => console.log("Open Book", id)}
        />
      </ScrollView>
      <FloatingCartButton
        count={carCount}
        onPress={() => setCartCount((n) => n + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F8FAFC" },
  content: { padding: 16 },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
    marginTop: 4,
  },
});