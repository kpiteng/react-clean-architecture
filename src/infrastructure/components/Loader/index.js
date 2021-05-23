import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Styles from './Styles';

function Loader(props)  {
    const { loading } = props;
    if (loading) {
        return (
            <View style={Styles.loaderWrapper}>
                <ActivityIndicator size="large" />
            </View>
        ) 
    } else {
        <View />
    }    
}

export default Loader;
