import React from 'react'
import { ScrollView, Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

const doAdd = (a, b, callback) => {
    callback(a + b);
  };
  
  test("calls callback with arguments added", () => {
    const mockCallback = jest.fn();
    doAdd(1, 2, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(3);
  });

// fireEvent.scroll example

// const onScrollMock = jest.fn();
// const eventData = {
//   nativeEvent: {
//     contentOffset: {
//       y: 200,
//     },
//   },
// };

// const { getByText } = render(
//   <ScrollView onScroll={onScrollMock}>
//     <Text>XD</Text>
//   </ScrollView>
// );

// fireEvent.scroll(getByText('scroll-view'), eventData);