import React from "react"
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import colors from "../../../assets/colors/colors"
import discoverData, { DiscoverItem } from "../../../assets/data/discoverData"

export type DiscoverProps = {
  navigation: any
}

export default function Discover({ navigation }: DiscoverProps) {
  const renderDiscoverItem = ({ item }: { item: DiscoverItem }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { item })}
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            { marginLeft: item.id === "discover-1" ? 20 : 0 },
          ]}
          imageStyle={styles.discoverItemImage}
        >
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.discoverWrapper}>
      <Text style={styles.discoverTitle}>Discover</Text>
      <View style={styles.discoverCategoriesWrapper}>
        <Text style={[styles.discoverCategoryText, { color: colors.orange }]}>
          All
        </Text>
        <Text style={styles.discoverCategoryText}>Destinations</Text>
        <Text style={styles.discoverCategoryText}>Cities</Text>
        <Text style={styles.discoverCategoryText}>Experiences</Text>
      </View>
      <View style={styles.discoverItemsWrapper}>
        <FlatList
          data={discoverData}
          renderItem={renderDiscoverItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  discoverWrapper: {
    marginTop: 20,
  },
  discoverTitle: {
    fontSize: 32,
    fontWeight: "700",
    marginHorizontal: 20,
  },
  discoverCategoriesWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 20,
  },
  discoverCategoryText: {
    fontSize: 16,
    color: colors.gray,
  },
  discoverItemsWrapper: {
    marginTop: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    marginRight: 20,
    justifyContent: "flex-end",
  },
  discoverItemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  discoverItemTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 10,
  },
  discoverItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  discoverItemLocationText: {
    color: colors.white,
    fontSize: 12,
    marginLeft: 5,
  },
})
