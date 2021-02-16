import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import axios from 'axios';

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default function HomeScreen({ navigation }) {
    const [articles, setArticles] = useState([]);
    //   stateの変数名 ←に値セットする関数を宣言　articlesの初期値を指定（ここでは空）

    useEffect(() => {
        // 第二引数に空の配列[]を渡した場合、マウント時に第一引数の関数が実行される
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await axios.get(URL);
            setArticles(response.data.articles); // 引数のデータがstate変数のarticlesに入る
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={articles} // FlatListで表示したいデータの配列を入れる
                renderItem={(
                    { item } // itemはarticles配列の１項目
                ) => (
                    <ListItem
                        imageUrl={item.urlToImage}
                        title={item.title}
                        author={item.author}
                        onPress={() => navigation.navigate('Article')}
                    />
                )}
                keyExtractor={(item, index) => index.toString()} // 配列内各項目にユニークなキーの指定が必要
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
