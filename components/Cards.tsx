import { Text, View } from "react-native"

const Card = ({prop}: any) => {
  return (
    <View>
    <Text className="text-white">{prop}</Text>
    </View>
  )
}

export default Card
