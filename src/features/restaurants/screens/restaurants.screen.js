import React from 'react';
import { Searchbar } from 'react-native-paper';
// eslint-disable-next-line no-unused-vars
import { StatusBar, StyleSheet, SafeAreaView, Text, View, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/restaurant-info- card.components';
import { Spacer } from '../../../components/spacer/space.component';

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
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
    <RestaurantInfoCard />
  </SafeArea>
);
