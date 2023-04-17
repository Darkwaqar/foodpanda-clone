import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Catagories from "../components/Catagories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategory, setFeaturedCategory] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="featured"]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type->{
              name
            },
          }
        }`
      )
      .then((data) => setFeaturedCategory(data));
  }, []);
  return (
    <SafeAreaView style={tw`bg-white pt-0`}>
      <View style={tw`flex-row pb-3 items-center mx-4`}>
        <Image
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          source={{
            uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
          }}
        ></Image>
        <View style={tw`flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
          <Text style={tw`font-bold text-xl`}>
            Current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>
        <UserIcon size={20} color="#00ccbb" />
      </View>
      {/* Search */}
      <View style={tw`flex-row items-center space-x-2 pb-2 mx-4`}>
        <View style={tw`flex-row space-x-2 flex-1 bg-gray-200 p-3`}>
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          ></TextInput>
        </View>
        <AdjustmentsVerticalIcon color="#00ccbb" />
      </View>
      {/* body */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        style={tw`bg-gray-100`}
      >
        {/* Categories */}
        <Catagories></Catagories>
        {/* Feature Row */}

        {featuredCategory?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
