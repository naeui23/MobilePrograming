import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/200?img=12' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Nguyễn Văn A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', paddingTop: 48 },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  name: { fontSize: 20, fontWeight: 'bold', marginTop: 16 },
});