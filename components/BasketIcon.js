import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <View style={tw`absolute bottom-10 w-full z-50`}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        style={tw`mx-5 bg-[#00CCBB] p-4  rounded-lg flex-row items-center space-x-1`}
      >
        <Text
          style={tw`text-white font-extrabold text-lg py-1 px-2 bg-[#01A296]`}
        >
          {items.length}
        </Text>
        <Text style={tw`flex-1 text-white font-extrabold text-lg text-center`}>
          View Basket
        </Text>
        <Text style={tw`text-lg text-white font-extrabold`}>
          <Currency quantity={basketTotal} currency="GBP"></Currency>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;

const styles = StyleSheet.create({});
