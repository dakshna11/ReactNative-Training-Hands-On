import React, {useEffect} from 'react';
import {StyleSheet,ActivityIndicator, View,Text, FlatList,} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContactData} from '../actions/contactActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.contactReducers.user);
  const loading = useSelector(state => state.contactReducers.loading);
  
  //console.log(users[3].name)
  useEffect(() => {
    dispatch(fetchContactData({}));
  }, []);

  const renderItem = ({ item }) => (
    <View  style={{flexDirection: 'row'}} >
    <Text style={styles.name}>
        {item.name}
        {'\n'}
        {item.phone}
    </Text>
</View>
  );

  return (
    <View style={styles.container}>
      {loading ? (<ActivityIndicator style={styles.activityIndicator} size={'large'} color={'black'}/>) : 
      (
            <View style={{flexDirection: 'row', padding: 10}} >
                <FlatList data={users} renderItem={renderItem} keyExtractor={item => item.id}/>
            </View>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    marginHorizontal: 10,
    width: '95%',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    marginLeft: 10,
    marginTop: 3,
  },
  phone: {
    fontSize: 14,
    fontWeight: 'normal',
    width: '92%',
    marginTop: 2,
  }
});

export default HomeScreen;