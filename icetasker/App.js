import {useState, useEffect} from 'react';
import {
	View,
	Button,
	Text,
	StyleSheet,
} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from 'react-native-stack';
import {createAppContainer} from 'react-navigation';
import Data from '../icetasker/AsecScrn';
import Navigator from './AsecScrn';



function App(){
	const [count, setCount] = useState(0);
	const [dispText, setDispText] = useState('');

	

	useEffect(() => {
				// whatev code we want to execute, just because…
				setDispText('Effect - The count is ' + count);
	}, [count]);
				// dependancy array - expected to contain list of variables that
				// useEffect is supposed to “listen out for” in order to know 
				// that it needs to execute
	
	return(
	<View style={styles.container}>
		<Text style={styles.textDisp}>
			COUNTER + USEEFFECT
		</Text>
	<View style={styles.buttons}>
		<Button
			title='Increment'
			onPress={() => setCount(count + 1)}
		/>
	</View>
	<View style={styles.buttons}>
		<Button
			title='Decrement'
			onPress={() => setCount(count -1)}
		/>
	</View>
	<Text style={styles.textDisp}>Count: {count}</Text>
	<Text style={styles.textDisp}>{dispText}</Text>
	</View>
		


	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	buttons: {
		margin: 5,
		padding: 5,
	},
	textDisp: {
		fontSize: 32,
		fontWeight: 'bold',
	},
});

export default App;