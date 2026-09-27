import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './screens/HomeScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { CartScreen } from './screens/CartScreen';
import { TabBar, TabKey } from './components/TabBar';
import { BOOKS, CartItem } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const selectedBook = BOOKS.find((b) => b.id === selectedBookId) ?? null;

  const handleTabChange = (tab: TabKey) => {
    setSelectedBookId(null);
    setActiveTab(tab);
  };

  const handleAddToCart = () => {
    if (!selectedBook) return;
    setCartItems((prev) => {
      const existing = prev.find((i) => i.book.id === selectedBook.id);
      if (existing) {
        // Nếu đã có trong giỏ thì tăng số lượng
        return prev.map((i) =>
          i.book.id === selectedBook.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // Chưa có thì thêm mới với quantity = 1
      return [...prev, { book: selectedBook, quantity: 1 }];
    });
    setSelectedBookId(null);
    setActiveTab('cart'); 
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        {selectedBook ? (
          /* --- Màn hình Chi tiết sách (không có TabBar) --- */
          <BookDetailScreen
            book={selectedBook}
            onBack={() => setSelectedBookId(null)}
            onAddToCart={handleAddToCart}
          />
        ) : (
          /* --- Các màn hình chính có TabBar cố định ở đáy --- */
          <>
            {/* Nội dung theo tab đang chọn */}
            <View style={styles.content}>
              {activeTab === 'home' && (
                <HomeScreen
                  cartCount={cartItems.length}
                  onPressBook={(id) => setSelectedBookId(id)}
                  onPressCart={() => setActiveTab('cart')}
                />
              )}

              {activeTab === 'cart' && (
                <CartScreen items={cartItems} />
              )}

              {/* Placeholder cho các tab khác (Danh mục, Tài khoản) */}
              {activeTab !== 'home' && activeTab !== 'cart' && (
                <View style={styles.placeholder} />
              )}
            </View>

            {/* TabBar: props đúng theo TabBar.tsx: active + onChange */}
            <TabBar
              active={activeTab}
              onChange={handleTabChange}
            />
          </>
        )}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FFFFFF' },
  body: { flex: 1 },
  content: { flex: 1 },
  placeholder: { flex: 1 },
});