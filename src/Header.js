import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ name, bgColor }) => {
  return (
    <TouchableOpacity hitSlop={{ top: 15, bottom: 15}} style={{ paddingHorizontal: 6, backgroundColor: bgColor }}>
      {/* expo 기본 제공 Icon */}
      <Ionicons name={name} size={24} color="black" />
    </TouchableOpacity>
  );
};

/* 바로 export하는 방법 */
export default () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10}}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>친구</Text>
      <View style={{ flexDirection: "row"}}>
        <IconButton name="search-outline"/>
        <IconButton name="person-add-outline"/>
        <IconButton name="md-musical-notes-outline"/>
        <IconButton name="ios-settings-outline"/>
      </View>
    </View>
  )
}

/* 명시적으로 export하는 방법 */
// const Header = () => {
//   return (
//     <View>
//       <Text>친구</Text>
//     </View>
//   )
// }

// export default Header;