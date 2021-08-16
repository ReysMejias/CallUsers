import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [ loading, setLoading ] = useState(true)
  const [ users, setUsers ] = useState([])
  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    setUsers(json)
    setLoading(false)
  }

  useEffect(()=>{
    fetchUsers()
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {loading ? 'Cargando' : users[1].name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:24,
  }
});
