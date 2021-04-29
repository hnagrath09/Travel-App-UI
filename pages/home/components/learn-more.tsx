import React from "react"
import { FlatList, Text, View, StyleSheet, ImageBackground } from "react-native"
import colors from "../../../assets/colors/colors"
import learnMoreData, {
  LearnMoreItem,
} from "../../../assets/data/learnMoreData"

export default function LearnMore() {
  const renderLearnMoreItems = ({ item }: { item: LearnMoreItem }) => {
    return (
      <ImageBackground
        source={item.image}
        style={styles.learnMoreItem}
        imageStyle={styles.learnMoreItemImage}
      >
        <Text style={styles.learnMoreItemTitle}>{item.title}</Text>
      </ImageBackground>
    )
  }

  return (
    <View style={styles.learnMoreWrapper}>
      <Text style={styles.learnMoreTitle}>Learn More</Text>
      <View style={styles.learnMoreItemsWrapper}>
        <FlatList
          data={learnMoreData}
          renderItem={renderLearnMoreItems}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  learnMoreWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  learnMoreTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  learnMoreItemsWrapper: {
    marginTop: 20,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    marginRight: 20,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },
  learnMoreItemTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.white,
  },
})
