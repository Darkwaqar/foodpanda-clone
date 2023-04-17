import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity style={tw`relative mr-2`}>
      <Image
        style={tw`h-20 w-20 rounded`}
        source={{
          uri: imgUrl,
        }}
      ></Image>
      <Text style={tw`absolute bottom-1 left-1 text-white font-bold`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
