import React, {useEffect} from 'react';
import {StyleSheet,ActivityIndicator, View,Text, ScrollView,} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDetailsData} from '../actions/detailsActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.detailsReducers.user);
  const loading = useSelector(state => state.detailsReducers.loading);
  
  useEffect(() => {
    dispatch(fetchDetailsData({}));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (<ActivityIndicator style={styles.activityIndicator} size={'large'} color={'black'}/>) : 
      (<ScrollView style={styles.scrollView} >
            <View style={{flexDirection: 'row', padding: 10}} >
                {users.map(user => {
                    return (
                    <View  style={{flexDirection: 'row'}} key={user.id}>
                        <Text style={styles.name}>
                            {user.name}
                            {'\n'}
                            <View>
                            <Text style={styles.phone}>{user.phone}</Text>
                            </View>
                        </Text>
                    </View>
                    );
                })}
            </View>
        </ScrollView>)}
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