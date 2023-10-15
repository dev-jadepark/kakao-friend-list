import { Text, View, Image } from "react-native"
import Margin from "./Margin";
import styled from "styled-components/native";

const Container = styled.View`
  flexDirection: row;
`;
const ProfileImage = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  borderRadius: ${(props) => props.size * 0.4}px;
`;
const TextContainer = styled.View`
  justifyContent: center;
  marginLeft: 10px;
`;
const NameText = styled.Text`
  fontWeight: ${(props) => props.isMe ? "bold": "normal"};
  fontSize: ${(props) => props.isMe ? 16 : 15}px;
`;
const IntroductionText = styled.Text`
  fontSize: ${(props) => props.isMe ? 12 : 11}px; 
  color: grey;
`;
/**
 * props활용방법
 */
// export default (props) => { //props
//   return (
//     <View style={{ flexDirection: "row" }}>
//       <Image source={{ uri: props.uri }} style={{ width: 50, height: 50, borderRadius: 20 }} />
//       <View style={{ justifyContent: "center", marginLeft: 10}}>
//         <Text style={{ fontWeight: "bold", fontSize: 16 }}>{props.name}</Text>
//         <Margin height={6} />
//         <Text style={{ fontSize: 12, color: "grey" }}>{props.introduction}</Text>
//       </View>
//     </View>
//   );
// };


/**
 * 배열구조분해 활용방법 (조금더 직관적이고 유지보수가 좋아보임)
 */
export default ({ uri, name, introduction, isMe }) => { 
  const size = isMe ? 50 : 40;

  /**
   * 인라인 스타일
   */
  // return (
  //   <View style={{ flexDirection: "row" }}>
  //     <Image source={{ uri }} style={{ width: size, height: size, borderRadius: size * 0.4 }} />
  //     <View style={{ justifyContent: "center", marginLeft: 10}}>
  //       <Text style={{ fontWeight: isMe ? "bold" : undefined, fontSize: isMe ? 16 : 15 }}>{name}</Text>
  //       {/* !! -> boolean으로 변환하는 방법 */}
  //       {!!introduction && (
  //         <View>
  //           <Margin height={isMe ? 6 : 2} />
  //           <Text style={{ fontSize: isMe ? 12 : 11 , color: "grey" }}>{introduction}</Text>
  //         </View>
  //       )}
  //     </View>
  //   </View>
  // );

  /**
   * styled component
   */
  return (
    <Container>
      <ProfileImage source={{ uri }} size={size} />
      <TextContainer>
        <NameText isMe={isMe}>{name}</NameText>
        {!!introduction && (
          <View>
            <Margin height={isMe ? 6 : 2} />
            <IntroductionText>{introduction}</IntroductionText>
          </View>
        )}
      </TextContainer>
    </Container>
  );
};