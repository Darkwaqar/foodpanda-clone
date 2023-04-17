import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import tw from "twrnc";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="featured" && _id == $id]{
            ...,
            restaurants[]->{
            ...,
            dishes[]->,
            type->{
                name
            },
            }
        }[0]`,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, []);

  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text>{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text style={tw`text-sm text-gray-500 px-4`}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        style={tw`pt-4`}
      >
        {/* RestaurantCard */}
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            genre={restaurant.genre}
            rating={restaurant.rating}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          ></RestaurantCard>
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});
