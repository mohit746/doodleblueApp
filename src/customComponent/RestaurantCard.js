import React from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveHorizontalSize,
  widthPercentageToDP,
} from '../utils/ResponsiveSize';
import colors from '../utils/colors';

const RestaurantCard = (props) => {
  const {RestaurantName, contact, timing, rating, handleBookATable} = props;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>{RestaurantName}</Text>
      <View style={styles.ratingTextContainer}>
        <View style={styles.directionRow}>
          <Icon name="star-outline" size={20} color={colors.grey} />
          <Text style={styles.text16_center}>{rating} |</Text>
        </View>
        <Text style={styles.text16_center}>{timing}</Text>
      </View>
      <View style={styles.contactContainer}>
        <FeatherIcon name="phone-call" size={20} color={colors.black} />
        <Text style={styles.text16_center}>React us at: {contact}</Text>
      </View>
      <TouchableOpacity
        style={styles.bookTableButton}
        onPress={() => {
          handleBookATable();
        }}>
        <Text style={styles.bookTableText}>BOOK A TABLE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  directionRow: {flexDirection: 'row'},
  text16_center: {
    fontSize: responsiveFontSize(16),
    textAlign: 'center',
    marginStart: responsiveHorizontalSize(2),
  },
  mainContainer: {
    height: heightPercentageToDP(30),
    width: widthPercentageToDP(90),
    elevation: 20,
    borderRadius: 6,
    backgroundColor: colors.white,
    position: 'absolute',
    zIndex: 0,
    bottom: 0,
  },
  bookTableButton: {
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(40),
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.navyBlueColor,
  },
  bookTableText: {color: colors.white, textAlign: 'center'},
  headerText: {
    fontSize: responsiveFontSize(28),
    textAlign: 'center',
    textAlignVertical: 'center',
    height: heightPercentageToDP(8),
  },
  ratingTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPercentageToDP(8),
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: heightPercentageToDP(6),
  },
});

export default RestaurantCard;
