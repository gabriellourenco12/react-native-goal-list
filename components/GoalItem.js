import {Pressable, StyleSheet, Text, View} from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#440c7e'}}
                style={({pressed}) =>
                    pressed ? {backgroundColor: '#440c7e'} : {backgroundColor: '#5e0acc'}}
                onPress={props.onDelete.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.goalText}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    goalText: {
        padding: 8,
        color: 'white'
    }
});