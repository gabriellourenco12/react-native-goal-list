import {Button, FlatList, StatusBar, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals(prevState => [...prevState, {text: enteredGoalText, id: Math.random().toString()}]);
        endAddGoalHandler();
    }

    function deleteGoalHandler(id) {
        setCourseGoals(prevState => prevState.filter(goal => goal.id !== id));
    }

    return (
        <>
            <StatusBar barStyle={"light-content"}/>
            <View style={styles.appContainer}>
                <Button
                    title={'Add New Goal'}
                    color={'#5e0acc'}
                    onPress={startAddGoalHandler}
                />
                <GoalInput visible={modalIsVisible}
                           onAddGoal={addGoalHandler}
                           onCancel={endAddGoalHandler}/>
                <View style={styles.goalsContainer}>
                    <FlatList data={courseGoals}
                              renderItem={
                                  itemData => <GoalItem
                                      goalText={itemData.item.text}
                                      id={itemData.item.id}
                                      onDelete={deleteGoalHandler}/>
                              }
                              keyExtractor={(item, index) => item.id}
                              alwaysBounceVertical={false}/>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    goalsContainer: {
        flex: 5,
        marginBottom: 16
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    goalText: {
        color: 'white'
    }
});
