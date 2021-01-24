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
} from 'react-native';
import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveHorizontalSize,
  responsiveVerticalSize,
  widthPercentageToDP,
} from '../utils/ResponsiveSize';
import colors from '../utils/colors';

const ItemComponent = (props) => {
  const {
    itemId,
    itemCount,
    itemName,
    itemDescription,
    itemAmount,
    showD,
    handleSubtractItem,
    handleAddItem,
  } = props;
  return (
    <View
      style={{
        height: heightPercentageToDP(10),
        width: widthPercentageToDP(100),
        flexDirection: 'row',
        marginVertical: responsiveVerticalSize(1),
      }}>
      <View
        style={{
          width: widthPercentageToDP(70),
          paddingHorizontal: responsiveHorizontalSize(4),
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{borderWidth: 1, borderRadius: 4}}>
            <Text>N</Text>
          </View>
          <Text
            style={{
              fontSize: responsiveFontSize(18),
              paddingStart: responsiveHorizontalSize(2),
            }}>
            {itemName}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: responsiveVerticalSize(1),
          }}>
          {showD == true ? (
            <View style={{borderWidth: 1, borderRadius: 4}}>
              <Text>D</Text>
            </View>
          ) : null}
          <Text
            style={{
              fontSize: responsiveFontSize(12),
              paddingStart: responsiveHorizontalSize(showD == true ? 2 : 5),
            }}>
            {itemDescription}
          </Text>
        </View>
        <Text
          style={{
            paddingStart: responsiveHorizontalSize(4),
            fontSize: responsiveFontSize(20),
            color: colors.goldenColor,
          }}>
          € {itemAmount}
        </Text>
      </View>
      <View
        style={{
          width: widthPercentageToDP(30),
          justifyContent: 'flex-start',
          // alignItems: 'center',
        }}>
        {itemCount > 0 ? (
          <View
            style={{
              height: heightPercentageToDP(4),
              borderWidth: 2,
              borderColor: colors.goldenColor,
              width: widthPercentageToDP(26),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: widthPercentageToDP(8),
                fontSize: responsiveFontSize(18),
                color: colors.goldenColor,
              }}
              onPress={() => {
                handleSubtractItem(itemId);
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(20),
                  color: colors.navyBlueColor,
                }}>
                {'-'}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                width: widthPercentageToDP(10),
                textAlign: 'center',
                fontSize: responsiveFontSize(14),
                color: colors.navyBlueColor,
              }}>
              {itemCount}
            </Text>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: widthPercentageToDP(8),
                fontSize: responsiveFontSize(18),
                color: colors.goldenColor,
              }}
              onPress={() => {
                console.log('ItemComponent', 'Clicked itemId ' + itemId);
                console.log('ItemComponent', 'Clicked itemName ' + itemName);
                console.log(
                  'ItemComponent',
                  'Clicked itemDescription ' + itemDescription,
                );
                console.log(
                  'ItemComponent',
                  'Clicked itemAmount ' + itemAmount,
                );
                handleAddItem(
                  itemId,
                  itemName,
                  itemDescription,
                  itemAmount,
                  showD,
                );
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(20),
                  color: colors.navyBlueColor,
                }}>
                {'+'}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={{
              height: heightPercentageToDP(4),
              borderWidth: 2,
              borderColor: colors.goldenColor,
              width: widthPercentageToDP(26),
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              handleAddItem(
                itemId,
                itemName,
                itemDescription,
                itemAmount,
                showD,
              );
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: responsiveFontSize(14),
                color: colors.navyBlueColor,
              }}>
              {'ADD'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default ItemComponent;
