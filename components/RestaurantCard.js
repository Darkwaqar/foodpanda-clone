import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`bg-white mr-3 shadow`}
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        })
      }
    >
      <Image
        source={{ uri: urlFor(imgUrl).size(200).url() }}
        style={tw`h-36 w-64 rounded-sm`}
        resizeMode="cover"
      ></Image>
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`font-bold text-lg pt-2 `}>{title}</Text>
        <View style={tw`flex-row items-center space-x-1`}>
          <StarIcon color="green" opacity={0.5} size={22}></StarIcon>
          <Text style={tw`text-gray-500`}>
            <Text style={tw`text-green-500`}>
              {rating}-{urlFor(imgUrl).url()}
            </Text>{" "}
            -{genre}
          </Text>
        </View>
        <View style={tw`flex-row items-center space-x-1`}>
          <MapPinIcon color="gray" opacity={0.4} size={22}></MapPinIcon>
          <Text style={tw`text-xs text-gray-500`}>Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({});
