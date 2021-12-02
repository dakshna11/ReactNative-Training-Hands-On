import 'react-native'
import React from 'react'
import Home from "../DeepLinking/WebtoAppLink/Home";
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
    fetchMock.resetMocks();
  });
  
  test("returns result if array", () => {
    fetchMock.mockResponseOnce(JSON.stringify([{ id: 1 }]));
    const onResponse = jest.fn();
    const onError = jest.fn();
  
    return Home("/users")
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
  
        expect(onResponse.mock.calls[0][0][0]).toEqual({ id: 1 });
      });
  });


