import React, {useState, useEffect} from 'react';
import Toast from 'react-native-simple-toast';

import APIValue from '../../APIValue';
import MyCartComponent from './MyCartComponent';

const MyCartContainer = (props) => {
  const {navigation} = props;
  console.log('MyCartContainer', 'props' + JSON.stringify(props));
  const [selectedItem, setSelectedItem] = useState(
    props.route.params.selectedItem,
  );
  const [totalAmount, setTotalAmount] = useState(0);
  const [showMore, setShowMore] = useState(true);
  const [showMoreClicked, setShowMoreClicked] = useState(
    props.route.params.showMoreClicked,
  );
  const [totalSelectedCount, setTotalSelectedCount] = useState(
    props.route.params.totalSelectedCount,
  );

  console.log(
    'MyCartContainer',
    'selectedItem ' + JSON.stringify(selectedItem),
  );
  useEffect(() => {
    console.log('MyCartContainer', 'USEEFFECT ' + selectedItem.length);
    let totalValue = 0;
    for (var i = 0; i < selectedItem.length; i++) {
      if (selectedItem[i].itemCount > 0) {
        const totalValueOfItem =
          selectedItem[i].itemCount * selectedItem[i].itemAmount;
        totalValue = totalValue + totalValueOfItem;
      }
    }
    setTotalAmount(totalValue);
  }, [selectedItem]);

  const search = (Key) => {
    for (var i = 0; i < APIValue.itemsId.length; i++) {
      if (APIValue.itemsId[i].id === Key) {
        return APIValue.itemsId[i].itemAmount;
      }
    }
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handlePlaceOrder = () => {
    Toast.show('Clicked Place order', Toast.SHORT);
  };
  const handleSubtractItem = (id) => {
    console.log('handleSubtractItem...', ' ---' + id);
    let array = [...selectedItem];
    let index = array.findIndex((item) => item.id == id);
    let count = 1;
    if (index != -1) {
      count = array[index].itemCount;
      if (count > 0) {
        count = count - 1;
        array[index].itemCount = count;
      } else {
        array.pop(index);
      }
    }
    setSelectedItem(array);
    if (totalSelectedCount > 0) {
      props.route.params.updateSelectedItemsList(array, totalSelectedCount - 1);
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
      props.route.params.updateSelectedItemsList(array, totalSelectedCount + 1);
      setTotalSelectedCount(totalSelectedCount + 1);
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
      props.route.params.updateSelectedItemsList(array, totalSelectedCount + 1);
      setTotalSelectedCount(totalSelectedCount + 1);
    }
    if (array && array.length > 2) {
      setShowMoreClicked(false);
    }
    console.log(
      'HomeContainer',
      'total after + array ' + JSON.stringify(array),
    );
  };

  return (
    <MyCartComponent
      navigation={navigation}
      totalAmount={totalAmount}
      search={search}
      showMore={showMore}
      setShowMore={setShowMore}
      showMoreClicked={showMoreClicked}
      setShowMoreClicked={setShowMoreClicked}
      selectedItem={selectedItem}
      handleGoBack={handleGoBack}
      handlePlaceOrder={handlePlaceOrder}
      handleSubtractItem={handleSubtractItem}
      handleAddItem={handleAddItem}
    />
  );
};

export default MyCartContainer;
