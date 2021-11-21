import React from "react";
import { View, StyleSheet, Linking } from "react-native";
import { Text } from "react-native-elements";
import AppColors from "../../../constants/Colors";

type StockMoreInfoProps = {
  companyUrl: string | null;
  industry: string | null;
  description: string | null;
};

const StockMoreInfo = ({
  companyUrl,
  industry,
  description,
}: StockMoreInfoProps) => {
  return (
    <View style={styles.container}>
      {(companyUrl || industry || description) && (
        <>
          {companyUrl && (
            <View style={[styles.detailContainer, styles.detailContainerRow]}>
              <Text style={[styles.detailHeader, styles.detailHeaderAbout]}>
                About
              </Text>
              <Text
                style={styles.link}
                onPress={() => Linking.openURL(companyUrl)}
              >
                Visit Website
              </Text>
            </View>
          )}
          {industry && (
            <View style={styles.detailContainer}>
              <Text style={styles.detailHeader}>Industry</Text>
              <Text style={styles.dataText}>{industry}</Text>
            </View>
          )}
          {description && (
            <View>
              <Text style={styles.detailHeader}>Description</Text>
              <Text style={styles.dataText}>{description}</Text>
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryDarker,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailContainer: {
    marginBottom: 10,
  },
  detailContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailHeader: {
    color: AppColors.lighGray,
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "bold",
  },
  detailHeaderAbout: {
    color: AppColors.white,
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 0,
  },
  link: {
    textDecorationLine: "underline",
    color: "blue",
  },
  dataText: {
    color: AppColors.white,
  },
});

export default StockMoreInfo;
