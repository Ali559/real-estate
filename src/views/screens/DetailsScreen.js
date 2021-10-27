import React from "react";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View } from "react-native";
import COLORS from "../../constants/colors";

const DetailsScreen = ({ navigation, route }) => {
  const house = route.params.house;
  const [heartColor, setHeartColor] = React.useState(COLORS.grey);
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <ScrollView>
        <View style={style.backgroundImageContainer}>
          <ImageBackground style={style.backgroundImage} source={house.image}>
            <View style={style.header}>
              <View
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 5,
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  onPress={navigation.goBack}
                  name="arrow-back-ios"
                  style={{ padding: 10 }}
                  size={20}
                  color={COLORS.dark}
                />
              </View>
              <View
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 5,
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  onPress={() =>
                    heartColor == COLORS.red
                      ? setHeartColor(COLORS.grey)
                      : setHeartColor(COLORS.red)
                  }
                  name="favorite"
                  size={20}
                  color={heartColor}
                  style={{ padding: 10 }}
                />
              </View>
            </View>
          </ImageBackground>
          <View
            style={{
              width: 120,
              height: 40,
              backgroundColor: COLORS.dark,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              position: "absolute",
              top: 330,
            }}
          >
            <Text style={{ color: COLORS.white }}>Virtaul Tour</Text>
          </View>
        </View>
        <View style={style.detailsContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {house.title}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={style.ratingTag}>
                <Text style={{ color: COLORS.white }}>4.8</Text>
              </View>
              <Text style={{ fontSize: 13, marginLeft: 5 }}>ratings</Text>
            </View>
          </View>
          <Text style={{ fontSize: 14, color: COLORS.grey }}>
            {" "}
            {house.location}
          </Text>

          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <View
              style={{
                flexDirection: "row",
                marginRight: 20,
              }}
            >
              <Icon name="hotel" size={18} />
              <Text style={{ marginLeft: 5, color: COLORS.grey }}>
                {house.bedrooms}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginRight: 15,
              }}
            >
              <Icon name="bathtub" size={18} />
              <Text style={{ marginLeft: 5, color: COLORS.grey }}>
                {house.bathrooms}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginRight: 15,
              }}
            >
              <Icon name="aspect-ratio" size={18} />
              <Text style={{ marginLeft: 5, color: COLORS.grey }}>
                {house.area} area
              </Text>
            </View>
          </View>
          <Text style={{ marginTop: 20 }}>{house.details}</Text>
          <View
            style={{
              borderRadius: 10,
              paddingHorizontal: 20,
              height: 70,
              backgroundColor: COLORS.light,
              marginVertical: 20,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{ color: COLORS.blue, fontWeight: "bold", fontSize: 18 }}
              >
                ${house.price}
              </Text>
              <Text
                style={{ color: COLORS.grey, fontWeight: "bold", fontSize: 12 }}
              >
                Total Price
              </Text>
            </View>
            <Pressable onPress={() => console.log("Hello")}>
              <View style={style.bookNowBtn}>
                <Text style={{ color: COLORS.white }}>Book Now</Text>
              </View>
            </Pressable>
          </View>
          <Pressable
            onPress={() => navigation.navigate("InteriorScreen", house)}
          >
            <View
              style={[
                house.bedrooms ? style.InteriorImagesPage : { display: "none" },
              ]}
            >
              <Text style={{ color: COLORS.light, fontSize: 18 }}>
                View House
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  InteriorImagesPage: {
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    paddingHorizontal: 80,
    height: 60,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  bookNowBtn: {
    height: 50,
    backgroundColor: COLORS.dark,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: "center",
    height: 350,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
});

export default DetailsScreen;
