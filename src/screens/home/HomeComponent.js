import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveHorizontalSize,
  responsiveVerticalSize,
  widthPercentageToDP,
} from '../../utils/ResponsiveSize';
import colors from '../../utils/colors';
import RestaurantCard from '../../customComponent/RestaurantCard';
import ItemComponent from '../../customComponent/ItemComponent';

const HomeComponent = (props) => {
  const {
    itemsId,
    search,
    totalSelectedCount,
    handleMyCartClick,
    handleGoBack,
    handleShareIcon,
    handleInfoIcon,
    handleBookATable,
    handleSubtractItem,
    handleAddItem,
  } = props;
  return (
    <SafeAreaView style={styles.backgroundBack}>
      <StatusBar
        backgroundColor={'black'}
        barStyle="light-content"
        translucent={false}
      />
      <View style={styles.mainContainer}>
        <View style={styles.height92}>
          <View style={styles.topContainer}>
            <Image
              style={styles.imageStyle}
              source={require('../../assets/food_image.jpg')}
            />
            <View style={styles.topHeaderContainer}>
              <View style={styles.width20}>
                <TouchableOpacity
                  onPress={() => {
                    handleGoBack();
                  }}
                  style={styles.topBackArrow}>
                  <Icon name="arrow-back" size={30} color="white" />
                </TouchableOpacity>
              </View>
              <View style={styles.headerShareContainer}>
                <TouchableOpacity
                  onPress={() => {
                    handleShareIcon();
                  }}>
                  <Icon
                    name="ios-share-outline"
                    size={30}
                    color="white"
                    style={styles.mh4}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleInfoIcon();
                  }}>
                  <Icon
                    name="ios-information-circle-outline"
                    size={30}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <RestaurantCard
              RestaurantName={'Inka Restaurant'}
              contact={'9854562142'}
              timing={'All days : 09:00 AM - 06:00 PM'}
              rating={'5.0(200+)'}
              handleBookATable={handleBookATable}
            />
          </View>
          <View style={styles.height42}>
            <Text style={styles.bodyTitle}>Starter</Text>
            <FlatList
              keyExtractor={(item) => item.id}
              data={itemsId}
              renderItem={({item, index}) => (
                <ItemComponent
                  itemId={item.id}
                  itemCount={search(item.id)}
                  itemName={item.itemName}
                  itemDescription={item.itemDescription}
                  handleSubtractItem={handleSubtractItem}
                  handleAddItem={handleAddItem}
                  itemAmount={item.itemAmount}
                  showD={item.showD}
                />
              )}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.viewCartContainer}
          onPress={() => handleMyCartClick()}
          disabled={totalSelectedCount <= 0}>
          <Icon
            name="md-cart-outline"
            size={heightPercentageToDP(4)}
            color={'white'}
          />
          <Text style={styles.viewCartText}>
            VIEW CART ({totalSelectedCount} ITEMS)
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mh4: {marginHorizontal: responsiveHorizontalSize(4)},
  bodyTitle: {
    fontSize: responsiveFontSize(28),
    paddingStart: responsiveHorizontalSize(6),
    textAlignVertical: 'center',
    height: heightPercentageToDP(10),
  },
  height92: {
    height: heightPercentageToDP(92),
  },
  height42: {height: heightPercentageToDP(42)},
  topBackArrow: {
    alignItems: 'center',
    marginVertical: responsiveVerticalSize(2),
  },
  topHeaderContainer: {
    width: widthPercentageToDP(100),
    alignItems: 'center',
    position: 'absolute',
    zIndex: 0,
    flexDirection: 'row',
  },
  imageStyle: {
    height: heightPercentageToDP(30),
    width: widthPercentageToDP(100),
    resizeMode: 'cover',
  },
  topContainer: {
    height: heightPercentageToDP(50),
    alignItems: 'center',
  },
  mainContainer: {
    height: heightPercentageToDP(100),
    backgroundColor: colors.dullWhite,
  },
  backgroundBack: {
    backgroundColor: 'black',
  },
  width20: {width: widthPercentageToDP(20)},
  headerShareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthPercentageToDP(80),
    paddingEnd: responsiveHorizontalSize(4),
    justifyContent: 'flex-end',
  },
  directionRow: {flexDirection: 'row'},
  viewCartContainer: {
    height: heightPercentageToDP(8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.navyBlueColor,
    flexDirection: 'row',
  },
  viewCartText: {
    color: colors.white,
    marginStart: responsiveHorizontalSize(4),
    textAlign: 'center',
    fontSize: responsiveFontSize(18),
  },
});

export default HomeComponent;
