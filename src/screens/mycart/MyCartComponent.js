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
import ItemComponent from '../../customComponent/ItemComponent';
import colors from '../../utils/colors';
import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveHorizontalSize,
  responsiveVerticalSize,
  widthPercentageToDP,
} from '../../utils/ResponsiveSize';

const MyCartComponent = (props) => {
  const {
    totalAmount,
    showMore,
    showMoreClicked,
    setShowMoreClicked,
    handlePlaceOrder,
    handleGoBack,
    selectedItem,
    handleSubtractItem,
    handleAddItem,
  } = props;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: heightPercentageToDP(30),
          backgroundColor: colors.navyBlueColor,
          paddingHorizontal: responsiveHorizontalSize(4),
        }}>
        <View
          style={{
            height: heightPercentageToDP(10),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              handleGoBack();
            }}
            style={styles.topBackArrow}>
            <Icon name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>My Cart</Text>
          </View>
        </View>
        <View
          style={{
            height: heightPercentageToDP(12),
            width: widthPercentageToDP(60),
            borderRadius: 4,
            elevation: 10,
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: colors.dullWhite,
          }}>
          <Text
            style={{
              color: colors.goldenColor,
              fontSize: responsiveFontSize(20),
              textAlign: 'center',
            }}>
            Total Cost
          </Text>
          <Text style={{fontSize: responsiveFontSize(20), textAlign: 'center'}}>
            €{totalAmount.toFixed(2)}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: heightPercentageToDP(70),
          backgroundColor: colors.dullWhite,
        }}>
        <View
          style={{height: heightPercentageToDP(62), alignItems: 'flex-end'}}>
          <Text
            style={{
              color: colors.navyBlueColor,
              fontSize: responsiveFontSize(20),
              marginHorizontal: responsiveHorizontalSize(4),
              marginVertical: responsiveVerticalSize(2),
              alignSelf: 'flex-start',
            }}>
            Review Order
          </Text>
          <View style={{height: heightPercentageToDP(40)}}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={selectedItem}
              renderItem={({item, index}) =>
                item.itemCount > 0 ? (
                  index < 2 ? (
                    <ItemComponent
                      itemId={item.id}
                      itemCount={item.itemCount}
                      itemName={item.itemName}
                      itemDescription={item.itemDescription}
                      handleSubtractItem={handleSubtractItem}
                      handleAddItem={handleAddItem}
                      itemAmount={item.itemAmount}
                      showD={item.showD}
                    />
                  ) : showMoreClicked == true ? (
                    <ItemComponent
                      itemId={item.id}
                      itemCount={item.itemCount}
                      itemName={item.itemName}
                      itemDescription={item.itemDescription}
                      handleSubtractItem={handleSubtractItem}
                      handleAddItem={handleAddItem}
                      itemAmount={item.itemAmount}
                      showD={item.showD}
                    />
                  ) : null
                ) : null
              }
            />
          </View>
          {showMoreClicked == false ? (
            <TouchableOpacity
              style={{
                height: heightPercentageToDP(4),
                width: widthPercentageToDP(30),
              }}
              onPress={() => {
                setShowMoreClicked(true);
              }}>
              <Text
                style={{
                  color: colors.navyBlueColor,
                  textDecorationLine: 'underline',
                  fontSize: responsiveFontSize(20),
                }}>
                Show more
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <TouchableOpacity
          style={styles.viewCartContainer}
          onPress={() => handlePlaceOrder()}>
          <Text style={styles.viewCartText}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  topBackArrow: {
    alignItems: 'center',
    marginVertical: responsiveVerticalSize(2),
  },
  headerText: {
    color: colors.white,
    marginStart: responsiveHorizontalSize(4),
    textAlign: 'center',
    fontSize: responsiveFontSize(20),
  },
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

export default MyCartComponent;
