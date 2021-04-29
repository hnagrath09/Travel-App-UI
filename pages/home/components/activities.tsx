import React from "react"
import { FlatList, Text, View, StyleSheet, Image } from "react-native"
import colors from "../../../assets/colors/colors"
import activitiesData, {
  ActivityItem,
} from "../../../assets/data/activitiesData"

export default function Activities() {
  const renderActivities = ({ item }: { item: ActivityItem }) => {
    return (
      <View style={styles.activityItemWrapper}>
        <Image source={item.image} style={styles.activityItemImage} />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    )
  }

  return (
    <View style={styles.activitiesWrapper}>
      <Text style={styles.activitiesTitle}>Activities</Text>
      <View style={styles.activitiesItemsWrapper}>
        <FlatList
          data={activitiesData}
          renderItem={renderActivities}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
})
