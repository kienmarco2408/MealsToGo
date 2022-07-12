import React from 'react';
import { Searchbar } from 'react-native-paper';
// eslint-disable-next-line no-unused-vars
import { StatusBar, StyleSheet, SafeAreaView, Text, View, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/restaurant-info.components';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList 
      data={[]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={}
    />
    <RestaurantInfoCard />
  </SafeArea>
);
