import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import colors from "../assets/colors/colors";
import discoverData, { DiscoverItem } from "../assets/data/discoverData";
import activitiesData, { ActivityItem } from "../assets/data/activitiesData";

const profile = require("../assets/images/person.png");

export default function Home() {
  const renderDiscoverItem = ({ item }: { item: DiscoverItem }) => {
    return (
      <TouchableOpacity>
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
    );
  };

  const renderActivities = ({ item }: { item: ActivityItem }) => {
    return (
      <View style={styles.activityItemWrapper}>
        <Image source={item.image} style={styles.activityItemImage} />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather name="menu" size={32} />
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>

        {/* Discover */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text
              style={[styles.discoverCategoryText, { color: colors.orange }]}
            >
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
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Activities */}
        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivities}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
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
    paddingHorizontal: 10,
    paddingVertical: 15,
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
  },
  discoverItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  discoverItemLocationText: {
    color: colors.white,
    fontSize: 12,
    marginLeft: 5,
  },
  activitiesWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  activitiesTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  activitiesItemsWrapper: {
    marginTop: 20,
  },
  activityItemWrapper: {
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  activityItemImage: {
    width: 32,
    height: 32,
    marginBottom: 5,
  },
  activityItemText: {
    fontSize: 12,
    color: colors.gray,
  },
});
