import React from 'react';
import {Text} from 'react-native';

export default class App extends React.Component {

    static navigationOptions = {
        title: "我的收藏",
    };

    render() {
        return <Text>收藏夹</Text>
    }
}