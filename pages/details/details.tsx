import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import colors from "../../assets/colors/colors"
import { DiscoverItem } from "../../assets/data/discoverData"
import InfoItems from "./components/info-items"

const height = Dimensions.get("window").height

export type DetailsProps = {
  route: any
  navigation: any
}

export default function Details({ route, navigation }: DetailsProps) {
  const { item }: { item: DiscoverItem } = route.params
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.imageBig}
        style={styles.detailImageWrapper}
        imageStyle={styles.backgroundImage}
      >
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.descriptionTitleWrapper}>
          <Text style={styles.descriptionTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={20} color={colors.white} />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.likeButton}>
          <Entypo
            name="heart"
            size={32}
            color={item.liked ? colors.orange : colors.white}
          />
        </View>
        <Text style={styles.descriptionTitleText}>Description</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
        <InfoItems item={item} />
        <TouchableOpacity onPress={() => alert("Your trip is booked!")}>
          <View style={styles.bookNowButton}>
            <Text style={styles.buttonText}>Book Now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  detailImageWrapper: {
    justifyContent: "space-between",
    paddingVertical: 15,
    height: height * 0.6,
  },
  backgroundImage: {
    width: "100%",
    height: height * 0.6,
  },
  backIcon: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  descriptionTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: colors.white,
    marginHorizontal: 20,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginHorizontal: 20,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.white,
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: -20,
  },
  likeButton: {
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    position: "absolute",
    top: -32,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  descriptionTitleWrapper: {
    marginBottom: 30,
  },
  descriptionTitleText: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 20,
  },
  descriptionText: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: "500",
  },
  bookNowButton: {
    backgroundColor: colors.orange,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
})
