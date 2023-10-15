import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Profile from './src/Profile';
import { friendProfiles, myProfile } from './src/data';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';
import { useState } from 'react';
import TabBar from './src/TabBar';

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

//console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);  //탭이 선택된 인덱스 저장

  console.log('init isOpend ? ', isOpened);
  const onPressArrow = () => {
    setIsOpened(!isOpened);
    console.log('onPress isOpend ? ', isOpened);
  }

  const ItemSeparatorComponent = () => <Margin height={13}/>;

  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header />

      <Margin height={10} />
      
      <Profile 
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />

      <Margin height={15} />
      
      <Division />

      <Margin height={12} />

      <FriendSection 
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />

      <Margin height={5} />
    </View>
  );

  const ListFooterComponent = () => <Margin height={10}/>;

  return (
    <View style={styles.container}>
      <FlatList 
        data={isOpened ? friendProfiles : []}
        stickyHeaderIndices={[0]}  //헤더 고정
        contentContainerStyle={{ paddingHorizontal: 15 }} //안쪽 스타일링
        keyExtractor={(_, index) => index}  //사용하지 않는 아규먼트는 _
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        showsVerticalScrollIndicator={false}
      />
      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
      
    </View>
  );

  /**
   * ScrollView이용방법
   */
  // return (
  //   //Iphone-x-helper사용 하는 방법
  //   <View style={styles.container}>
  //     <View style={{ flex: 1, paddingHorizontal: 15 }}>
  //       <Header />

  //       <Margin height={10} />
        
  //       <Profile 
  //         uri={myProfile.uri}
  //         name={myProfile.name}
  //         introduction={myProfile.introduction}
  //       />

  //       <Margin height={15} />
        
  //       <Division />

  //       <Margin height={12} />

  //       <FriendSection 
  //         friendProfileLen={friendProfiles.length}
  //         onPressArrow={onPressArrow}
  //         isOpened={isOpened}
  //       />

  //       <FriendList 
  //         data={friendProfiles}
  //         isOpened={isOpened}
  //       />
  //     </View>

  //     <TabBar
  //       selectedTabIdx={selectedTabIdx}
  //       setSelectedTabIdx={setSelectedTabIdx}
  //     />
      
  //   </View>

  //   //react-native-safe-area-context 를 사용한 방법
  //   // <SafeAreaProvider>
  //   //   <SafeAreaView edges={['right', 'left']} style={styles.container}>
  //   //     <Header />
  //   //   </SafeAreaView>
  //   // </SafeAreaProvider>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
    //paddingHorizontal: 15,  //양옆
  },
});
