import Banner from './components/Banner';
import Form from './components/Form/Form';
import Footer from './components/Footer';
import { styles } from './assets/styles/styles1'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';




export default function App() {
  
  
  
  //let mimage = "images.png"


  return (
    <View style={styles.container}>
    {/* <Banner imagename={}></Banner> */}
    <View style={{ flex: 8, alignItems: 'center', justifyContent: 'center' }}>
    <Form></Form>

    </View>
    <View >
      <Footer message=""></Footer>
    </View>
  </View>
  );
}


