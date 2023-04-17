import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import tw from "twrnc";
import { XMarkIcon } from "react-native-heroicons/outline";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View style={tw`flex-1 bg-[#00CCBB]`}>
      <SafeAreaView style={tw`z-50`}>
        <View style={tw`flex-row justify-between items-center p-5`}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30}></XMarkIcon>
          </TouchableOpacity>
          <Text style={tw`font-light text-white text-lg`}>Order Help</Text>
        </View>
        <View style={tw`bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md`}>
          <View style={tw`flex-row justify-between`}>
            <View>
              <Text style={tw`text-lg text-gray-500`}>Estimated arrival</Text>
              <Text style={tw`text-4xl`}>45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://i.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.webp",
              }}
              style={tw`h-20 w-20`}
            ></Image>
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text style={tw`mt-3 text-gray-500`}>
            Your Order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={tw`flex-1 -mt-10 z-0`}
        mapType="mutedStandard"
      >
        <Marker
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView style={tw`bg-white flex-row items-center space-x-5 h-28 `}>
        <Image
          source={{
            uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
          }}
          style={tw`h-12 w-12 bg-gray-300 p-4 rounded-full ml-5 mx-2`}
        ></Image>
        <View style={tw`flex-1 mx-2`}>
          <Text style={tw`text-lg `}>Waqar Khan</Text>
          <Text style={tw`text-gray-500`}>Your Rider</Text>
        </View>
        <Text style={tw`text-[#00CCBB] text-xl mr-4`}>Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({});
