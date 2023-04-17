import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant, setRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import tw from "twrnc";
import { TouchableOpacity } from "react-native-gesture-handler";
import { XCircleIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigate = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
  const basketTotal = useSelector(selectBasketTotal);

  useMemo(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupItemsInBasket(groupItems);
  }, [items]);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`p-5 border-b border-[#00CCBB] bg-white shadow-sm`}>
          <TouchableOpacity
            onPress={() => navigate.goBack()}
            style={tw`rounded-full  absolute top-0 right-0`}
          >
            <XCircleIcon size={50}></XCircleIcon>
          </TouchableOpacity>
          <View>
            <Text style={tw`text-lg font-bold text-center`}>Basket</Text>
            <Text style={tw`text-center text-gray-400`}>
              {restaurant.title}
            </Text>
          </View>
        </View>
        <View
          style={tw`flex-row items-center space-x-4 px-4 py-4 bg-white my-5`}
        >
          <Image
            source={{
              uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
            }}
            style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          ></Image>
          <Text style={tw`flex-1 pl-4`}>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text style={tw`text-[#00CCBB] `}>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={tw`divide-y divide-gray-200`}>
          {Object.entries(groupItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              style={tw`flex-row items-center space-x-3 bg-white py-2 px-5`}
            >
              <Text>{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                style={tw`h-12 w-12 rounded-full mx-3`}
              ></Image>
              <Text style={tw`flex-1 mx-3`}>{items[0]?.name}</Text>
              <Text>
                <Currency quantity={items[0].price} currency="GBP"></Currency>
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text style={tw`text-[#00CCBB] text-xs ml-3`}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={tw`p-5 bg-white mt-5 space-y-4`}>
          <View style={tw`flex-row justify-between py-4`}>
            <Text style={tw`text-gray-400`}>SubTotal</Text>
            <Text style={tw`text-gray-400`}>
              <Currency quantity={basketTotal} currency="GBP"></Currency>
            </Text>
          </View>
          <View style={tw`flex-row justify-between py-4`}>
            <Text style={tw`text-gray-400`}>Delivery Fee</Text>
            <Text style={tw`text-gray-400`}>
              <Currency quantity={5.99} currency="GBP"></Currency>
            </Text>
          </View>
          <View style={tw`flex-row justify-between py-4`}>
            <Text>SubTotal</Text>
            <Text style={tw`font-extrabold`}>
              <Currency quantity={basketTotal + 5.99} currency="GBP"></Currency>
            </Text>
          </View>
          <TouchableOpacity
            style={tw`rounded-lg bg-[#00CCBB]  p-4`}
            onPress={() => navigate.navigate("PreparingOrderScreen")}
          >
            <Text style={tw`text-center text-white text-lg font-bold`}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({});
