import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import tw from "twrnc";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
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
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    dispatch(
      setRestaurant({
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
    );
  }, [dispatch]);

  return (
    <>
      <BasketIcon></BasketIcon>
      <ScrollView>
        <View style={tw`relative`}>
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            style={tw`w-full  h-56 bg-gray-300 p-4`}
          ></Image>
        </View>
        <TouchableOpacity
          onPress={() => navigate.goBack()}
          style={tw`absolute top-14 left-5 p-2 bg-gray-100 rounded-full`}
        >
          <ArrowLeftIcon size={20}></ArrowLeftIcon>
        </TouchableOpacity>
        <View style={tw`bg-white`}>
          <View style={tw`px-4 pt-4`}>
            <Text style={tw`text-3xl font-bold `}>{title}</Text>
            <View style={tw`flex-row items-center space-x-2 my-1`}>
              <View style={tw`flex-row items-center space-x-1`}>
                <StarIcon color="green" opacity={0.5} size={22}></StarIcon>
                <Text style={tw`text-xs text-gray-500`}>
                  <Text style={tw`text-green-500`}>{rating}</Text>.{genre}
                </Text>
              </View>
              <View style={tw`flex-row items-center space-x-1`}>
                <MapPinIcon color="gray" opacity={0.5} size={22}></MapPinIcon>
                <Text style={tw`text-xs text-gray-500`}>
                  <Text style={tw`text-gray-500`}>Nearby</Text>.{address}
                </Text>
              </View>
            </View>
            <Text style={tw`text-gray-500 mt-2 pb-4`}>{short_description}</Text>
          </View>
          <TouchableOpacity
            style={tw`flex-row items-center space-x-2 p-4 border-y border-gray-300`}
          >
            <QuestionMarkCircleIcon
              color="gray"
              opacity={0.5}
              size={22}
            ></QuestionMarkCircleIcon>
            <Text style={tw`pl-2 flex-1 text-md font-bold`}>
              Have a food allergy
            </Text>
            <ChevronRightIcon color="#00ccbb"></ChevronRightIcon>
          </TouchableOpacity>
        </View>
        <View style={tw`pb-36`}>
          <Text style={tw`px-4 pt-6 mb-3 font-bold text-xl`}>Menu</Text>
          {/* DishRow */}
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            ></DishRow>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
