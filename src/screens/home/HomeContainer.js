import React, {useState, useEffect} from 'react';
import {BackHandler} from 'react-native';
import Toast from 'react-native-simple-toast';
import APIValue from '../../APIValue';

import HomeComponent from './HomeComponent';

const HomeContainer = (props) => {
  const {navigation} = props;

  const [selectedItem, setSelectedItem] = useState([]);
  const [totalSelectedCount, setTotalSelectedCount] = useState(0);

  const handleMyCartClick = () => {
    navigation.navigate('MyCartContainer', {
      selectedItem: selectedItem,
      totalSelectedCount: totalSelectedCount,
      showMoreClicked: selectedItem && selectedItem.length > 2 ? false : true,
      updateSelectedItemsList: updateSelectedItemsList,
    });
  };

  useEffect(() => {}, [selectedItem]);

  const handleGoBack = () => {
    BackHandler.exitApp();
  };

  const handleShareIcon = () => {
    Toast.show('Clicked on Share button', Toast.SHORT);
  };

  const handleInfoIcon = () => {
    Toast.show('Clicked on Info button', Toast.SHORT);
  };
  const handleBookATable = () => {
    Toast.show('Clicked on Book table', Toast.SHORT);
  };
  const handleSubtractItem = (id) => {
    console.log('handleSubtractItem...', ' ---' + id);
    let array = selectedItem;
    let index = array.findIndex((item) => item.id == id);
    let count = 1;
    if (index != -1) {
      count = array[index].itemCount;
      array[index].itemCount = count - 1;
      setSelectedItem(array);
    }
    if (totalSelectedCount > 0) {
      setTotalSelectedCount(totalSelectedCount - 1);
    }
    console.log('HomeContainer', 'total after - Count ' + count);
  };
  const handleAddItem = (
    idValue,
    itemNameValue,
    itemDescriptionValue,
    itemAmountValue,
    showD,
  ) => {
    console.log('HomeContainer', 'Clicked handleAddItem itemId ' + idValue);

    let array = [...selectedItem];
    let index = array.findIndex((item) => item.id == idValue);
    let count = 1;
    if (index != -1) {
      console.log('handleAddItem...', 'FOUND');
      count = array[index].itemCount;
      array[index].itemCount = count + 1;
      setSelectedItem(array);
    } else {
      console.log('handleAddItem...', 'CREATING NEW');
      const data = {
        id: idValue,
        itemCount: count,
        itemName: itemNameValue,
        itemDescription: itemDescriptionValue,
        itemAmount: itemAmountValue,
        showD: showD,
      };
      console.log('handleAddItem...', 'DATA--- ' + JSON.stringify(data));
      array.push(data);
      setSelectedItem(array);
    }
    setTotalSelectedCount(totalSelectedCount + 1);
    console.log(
      'HomeContainer',
      'total after + array ' + JSON.stringify(array),
    );
  };

  const updateSelectedItemsList = (array, total) => {
    console.log(
      'HomeComponent',
      'updateSelectedItemsList : ' + JSON.stringify(array),
    );
    setSelectedItem(array);
    setTotalSelectedCount(total);
  };

  const search = (Key) => {
    for (var i = 0; i < selectedItem.length; i++) {
      if (selectedItem[i].id === Key) {
        // console.log('HomeContainer', 'Count: ' + selectedItem[i].itemCount);
        return selectedItem[i].itemCount;
      }
    }
  };

  return (
    <HomeComponent
      navigation={navigation}
      itemsId={APIValue.itemsId}
      search={search}
      totalSelectedCount={totalSelectedCount}
      handleMyCartClick={handleMyCartClick}
      handleGoBack={handleGoBack}
      handleShareIcon={handleShareIcon}
      handleInfoIcon={handleInfoIcon}
      handleBookATable={handleBookATable}
      handleSubtractItem={handleSubtractItem}
      handleAddItem={handleAddItem}
    />
  );
};

export default HomeContainer;
