import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ArticleScreen({ route }) {
    const { article } = route.params;
    // 分割代入
    // const email = this.state.email;
    // const password = this.state.password;　を
    // const { email, password } = this.state;  と書く

    return (
        <SafeAreaView style={styles.container}>
            <WebView source={{ uri: article.url }} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
