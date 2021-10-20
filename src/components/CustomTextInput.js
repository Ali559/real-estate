import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constants/colors';

const CustomTextInput = ({ placeholder, state, setState, iconName, iconSize, isHidden = false, keyboardType, multiLine = false, height = 40, numberOfLines = 1, alignItems = 'center', textAlignVertical = 'center', paddingVertical = 0 }) => {
    return (
        <View style={{
            backgroundColor: COLORS.light,
            flex: 1,
            flexDirection: 'row',
            alignItems: alignItems,
            paddingHorizontal: 20,
            paddingVertical: paddingVertical,
            borderRadius: 10,
            display: (isHidden === false) ? 'flex' : 'none',
            marginBottom: 40,
        }}>
            <Icon name={iconName} size={iconSize} color={COLORS.grey} />
            <TextInput
                multiline={multiLine}
                numberOfLines={numberOfLines}
                keyboardType={keyboardType}
                style={{ marginLeft: 10, width: "90%", height: height, textAlignVertical: textAlignVertical }}
                onChangeText={value => setState(value)}
                value={state}
                placeholder={placeholder} />
        </View>
    );
}



export default CustomTextInput;
