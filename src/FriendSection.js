import { TouchableOpacity, View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export default (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
      <Text style={{ color: "grey" }}>친구 {props.friendProfileLen}</Text>
      {/* props의 이벤트 함수 데이터를 받는다 */}
      <TouchableOpacity onPress={props.onPressArrow}> 
        <MaterialIcons name={props.isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="lightgrey" />
      </TouchableOpacity>

    </View>
  );
};