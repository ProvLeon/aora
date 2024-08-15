import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "@/context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext()

  if (!isLoading && isLoggedIn) {
    <Redirect href="/home" />
  }
  return (
    <SafeAreaView
      className="bg-primary h-full"
    >
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full  justify-center items-center min-h-[90vh] px-4">
          <Image
          source={images.logo}
          className="w-[130px] h-[84px]"
          resizeMode="contain"
          />
          <Image
          source={images.cards}
          className="max-w-[380px] w-full h-[300px]"
          resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white text-center">
              Discover Endless Possibilities with {' '}
              <View  className="w-100 h-100 self-center">
                <Text className="text-secondary-200 text-3xl">
                  Aora
                </Text>
                <Image
                source={images.path}
                className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                resizeMode="contain"
                />
              </View>
            </Text>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation: embark on the journey of  limitless exploration with Aora
          </Text>
          <CustomButton
          title="Continue with Email"
          handPress={() => router.push('/sign-in')}
          containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
