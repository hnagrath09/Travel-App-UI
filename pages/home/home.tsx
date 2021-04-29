import React from "react"
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  FlatList,
  ImageBackground,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Feather from "react-native-vector-icons/Feather"
import colors from "../../assets/colors/colors"
import learnMoreData, { LearnMoreItem } from "../../assets/data/learnMoreData"
import Activities from "./components/activities"
import Discover from "./components/discover"
import LearnMore from "./components/learn-more"

const profile = require("../../assets/images/person.png")

export type HomeProps = {
  navigation: any
}

export default function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather name="menu" size={32} />
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>
        <Discover navigation={navigation} />
        <Activities />
        <LearnMore />
      </ScrollView>
    </View>
  )
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
})
