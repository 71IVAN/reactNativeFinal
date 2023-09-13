import { View, Text, Image} from "react-native";
import { styles, myimage } from '../assets/styles/styles1'




function Banner(props) {
    return (
      <Image
        style={{flex: 1, width:'20%',height:'10%', resizeMode:'stretch', marginTop:'5%',alignItems: 'center'}}
        source={require(`../assets/images/${props.imagename}`)}
      />
    );
}

export default Banner;