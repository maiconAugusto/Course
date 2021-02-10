import React from 'react';
import {Container} from './styles';
import Carousel from '../../components/carousel/carousel';

const Home = ({navigation}) => {
  return (
    <Container>
      <Carousel navigation={navigation} />
    </Container>
  );
};
export default Home;
