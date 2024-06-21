import { View, Text, TouchableOpacity } from 'react-native';

const ButtonComponent = ({value, handlePress}) => {
  return (
    <View className="mr-3 flex-row justify-between p-3 w-full">
        <TouchableOpacity className="h-20 w-20 rounded-full mr-2 justify-center items-center" 
            style={{backgroundColor: "rgba(10, 10, 10, 0.6)"}}
            onPress={() => handlePress(value[0])}
            >
            <Text className="text-4xl text-white text-center">
                {value[0]}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-20 w-20 bg-white rounded-full mr-2 justify-center items-center"
            style={{backgroundColor: "rgba(10, 10, 10, 0.6)"}}
            onPress={() => handlePress(value[1])}
        >
            <Text className="text-4xl text-white text-center">
            {value[1]}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-20 w-20 bg-white rounded-full mr-2 justify-center items-center"
            style={{backgroundColor: "rgba(10, 10, 10, 0.6)"}}
            onPress={() => handlePress(value[2])}
        >
            <Text className="text-4xl text-white text-center">
            {value[2]}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-20 w-20 bg-white rounded-full mr-2 justify-center items-center"
            style={{backgroundColor: "rgba(10, 10, 10, 0.6)"}}
            onPress={() => handlePress(value[3])}
        >
            <Text className="text-4xl text-white text-center justify-center items-center">
            {value[3]}
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default ButtonComponent;