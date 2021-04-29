import React from "react"
import { Text, View, StyleSheet } from "react-native"
import colors from "../../../assets/colors/colors"
import { DiscoverItem } from "../../../assets/data/discoverData"

export type InfoItemsProps = {
  item: DiscoverItem
}

export default function InfoItems({ item }: InfoItemsProps) {
  return (
    <View style={styles.infoWrapper}>
      <View>
        <Text style={styles.infoTitle}>PRICE</Text>
        <View style={styles.infoTextWrapper}>
          <Text style={styles.infoItemText}>${item.price}</Text>
          <Text style={styles.infoItemSubText}> /person</Text>
        </View>
      </View>

      <View>
        <Text style={styles.infoTitle}>RATING</Text>
        <View style={styles.infoTextWrapper}>
          <Text style={styles.infoItemText}>{item.rating}</Text>
          <Text style={styles.infoItemSubText}> /5</Text>
        </View>
      </View>

      <View>
        <Text style={styles.infoTitle}>DURATION</Text>
        <View style={styles.infoTextWrapper}>
          <Text style={styles.infoItemText}>{item.duration}</Text>
          <Text style={styles.infoItemSubText}> hours</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  infoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  infoTitle: {
    color: colors.gray,
    fontSize: 12,
    fontWeight: "700",
  },
  infoTextWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  infoItemText: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.orange,
  },
  infoItemSubText: {
    color: colors.gray,
  },
})
