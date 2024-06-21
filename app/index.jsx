import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import ButtonComponent from '../components/buttonComponet';

const Index = () => {

    const buttonValues = [["MC", "M+", "M-", "MR"],
                            ["C", "\u00F7", "\u00D7", "\u232B"],
                            ["7", "8", "9", "\u2212"],
                            ["4", "5", "6", "+"],
                            ["1", "2", "3", "\u003D"],
                            ["\u0025", "0", ".", ""]
                        ]

    const [value, setValue] = useState("");
    const [answer, setAnswer] = useState("");

    const HandleValues = (buttonValue) => {
        if ( buttonValue === buttonValues[1][0]) {
            setValue("");
            setAnswer("");
        } else if(buttonValue === buttonValues[4][3]) {
            
            let exp = `${value}`.replaceAll(buttonValues[1][1], "/")
                            .replaceAll(buttonValues[1][2], "*")
                            .replaceAll(buttonValues[2][3], "-");

            try {
                setValue(eval(exp) + "");
                setAnswer("");
            } catch (error) {
                setAnswer("");
                setValue("Error!");
            }
        } else if(buttonValue === buttonValues[1][3]) {
            value.includes("Error") || !answer ? setValue(""): setValue(value.slice(0, -1));
        } else if ( buttonValue === buttonValues[0][0] || buttonValue === buttonValues[0][1] || 
            buttonValue === buttonValues[0][2] || buttonValue === buttonValues[0][3]) {

        } else if(buttonValue === buttonValues[5][0]) {
            try {
                setAnswer((parseInt(eval(value))/100).toString());
                setValue((parseInt(eval(value))/100).toString() + "");
            } catch (error) {
                setAnswer("");
                setValue("Error!");
            }
        } else { 
            value.includes("Error") ? setValue(buttonValue) : setValue(value+buttonValue);;

            let exp = `${value+buttonValue}`.replaceAll(buttonValues[1][1], "/")
                            .replaceAll(buttonValues[1][2], "*")
                            .replaceAll(buttonValues[2][3], "-");

            try {
                setAnswer(eval(exp));
            } catch (error) {
                setAnswer(answer);
            }
        }
    }

  return (
    <SafeAreaView className="bg-black h-full">
        <View className="absolute right-2 p-4 mt-6"> 
            <Entypo 
                name="grid"
                color="white"
                size={30}
            />
        </View>
        <View className="w-full mt-12"> 
            <View className="h-[120px] w-full">
                <TextInput 
                    editable={false}
                    showSoftInputOnFocus={false}
                    value={value}
                    className="h-full w-full text-7xl text-white text-right px-2"
                />
            </View>
            <View className="h-[100px] w-full">
                <Text className="text-4xl text-gray-100 text-right px-2">
                    {answer}
                </Text>
            </View>
        </View>
        <View 
            className="rounded-t-3xl w-full h-full relative"
            style={{backgroundColor: 'rgba(35, 35, 35, 0.5)'}}
        >
            {
                buttonValues.map((button) => {
                    return(
                        <ButtonComponent 
                            key={button}
                            value={button}
                            handlePress={HandleValues}
                        />
                    )
                })
            }
            <TouchableOpacity 
                className="absolute right-5 top-96 mt-8 rounded-full  bottom-0 h-[200px] w-[80px] justify-center items-center" 
                style={{backgroundColor: "blue"}}
                onPress={() => HandleValues(buttonValues[4][3])}
                
            >
                <Text className="text-center text-6xl text-white">
                    {"\u003D"}
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Index;