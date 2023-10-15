import { ScrollView, View } from "react-native";
import Profile from './Profile';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Margin from "./Margin";

const bottomSpace = getBottomSpace();

export default (props) => {

  //console.log("friendProfiles data => ", props.data);

  /**
   * Case 1. 삼항연산자 이용
   */
  // return props.isOpened ? (
  //   // 스크롤뷰 + 맵함수 이용
  //   /**
  //   item = {
  //     uri: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
  //     name: "김민호",
  //     introduction: "Minho Kim",
  //   }
  //    */
  //   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
  //     {props.data.map((item, index) => (
  //       <View key={index} >
  //         <Profile
  //           uri={item.uri}
  //           name={item.name}
  //           introduction={item.introduction}
  //         />
  //         <Margin height={13}/>
  //       </View>

  //     ))}
  //   </ScrollView>
  // ) : null;

  /**
   * Case 2. if문 (케이스를 확인하기 쉬움)
   */
  // if (!props.isOpened) return null;
  // return (
  //   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
  //     {props.data.map((item, index) => (
  //       <View key={index} >
  //         <Profile
  //           uri={item.uri}
  //           name={item.name}
  //           introduction={item.introduction}
  //         />
  //         <Margin height={13}/>
  //       </View>

  //     ))}
  //   </ScrollView>
  // );

  /**
   * Case 3. &&
   */
    return props.isOpened && (
      // <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
      <ScrollView showsVerticalScrollIndicator={false} >
        {props.data.map((item, index) => (
          <View key={index} >
            <Profile
              uri={item.uri}
              name={item.name}
              introduction={item.introduction}
            />
            <Margin height={13}/>
          </View>
  
        ))}
      </ScrollView>
    );
};