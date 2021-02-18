import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default ClipScreen = ({ navigation }) => {
    const user = useSelector(state => state.user);
    const { clips } = user;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={clips} // FlatListで表示したいデータの配列を入れる
                renderItem={(
                    { item } // itemはclips配列のうちの１要素
                ) => (
                    <ListItem
                        imageUrl={item.urlToImage}
                        title={item.title}
                        author={item.author}
                        onPress={() =>
                            navigation.navigate('Article', {
                                article: item, // ここで名付けたarticleというキー名を遷移先で使用し、中身のitemを展開する
                            })
                        }
                    />
                )}
                keyExtractor={(item, index) => index.toString()} // 配列内各項目にユニークなキーの指定が必要
            />
        </SafeAreaView>
    );
};
