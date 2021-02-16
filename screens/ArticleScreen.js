import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ArticleScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <WebView source={{ uri: 'https://expo.io' }} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
