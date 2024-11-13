import React, { useState } from "react"
import { SafeAreaView, StyleSheet, Text } from "react-native";

const TextInANest = () => {
    const [titleText, setTitleText] = useState("Bird's Nest");
    const bodyText = 'This is not realy a bird nest.';

    const onPressTitle= () => {
        setTitleText("Bird's Nest [pressed]");
    };

    return (
        <SafeAreaView>
            <Text style={styles.baseText}>
                <Text style={styles.titleText} onPress={onPressTitle}>
                    {titleText}
                    {'\n'}
                    {'\n'}
                </Text>
                <Text numberOfLines={5}>{bodyText}</Text>
            </Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default TextInANest;