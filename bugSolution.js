// bugSolution.js
import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Example asynchronous operation

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('@my_key');
        if (value !== null) {
          setData(value);
        } 
      } catch (error) {
        console.error('Error fetching data:', error); 
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>Data: {data}</Text>
       <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
};
export default App;