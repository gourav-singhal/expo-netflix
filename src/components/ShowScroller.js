import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, images } from '../api/constants';

import mockData from '../mockdata/data';

const ShowScroller = props => {
  const { dataset, type } = props;
  const dataArray = Object.values(mockData[dataset]);

  return (
    <FlatList
      contentContainerStyle={{ paddingHorizontal: 4 }}
      data={dataArray}
      horizontal
      keyExtractor={itemObj => itemObj.id.toString()}
      renderItem={itemObj => {
        const { item } = itemObj;

        let renderItem = <View style={styles[type]} />;
        if (item.image) {
          renderItem = (
            <Image source={images[item.image]} style={styles[type]} />
          );
        }

        return renderItem;
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

ShowScroller.defaultProps = {
  dataset: 'dumbData',
  type: 'rectangle'
};

ShowScroller.propTypes = {
  // optional
  dataset: PropTypes.string,
  type: PropTypes.string
};

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: colors.infoGrey,
    height: 131,
    marginRight: 8,
    width: 91
  },
  round: {
    backgroundColor: colors.infoGrey,
    borderRadius: 48,
    height: 96,
    marginRight: 8,
    width: 96
  }
});

export default ShowScroller;
