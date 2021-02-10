import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Card, Container, HeaderCard, HeaderBody, HeaderFooter} from './styles';
import {scrollInterpolator, animatedStyles} from './animation';
import TextBold from '../TextBold';
import TextInfo from '../Text/index';
import Button from '../Buttom/index';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const CarouselComponent = ({data, navigation}) => {
  let carouselItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
  ];

  function renderItems({item, index}) {
    return (
      <Card>
        <HeaderCard>
          <TextBold
            data="Curso básico de agilidade 1"
            style={{
              color: '#707070',
              fontSize: 24,
              fontFamily: 'HelveticaNeue Bold',
            }}
          />
        </HeaderCard>
        <HeaderBody>
          <TextInfo
            style={{
              color: '#707070',
              fontSize: 14,
              marginLeft: 20,
              marginTop: 2,
              fontFamily: 'HelveticaNeue Light',
            }}
            data="• Introdução 1"
          />
          <TextInfo
            style={{
              color: '#707070',
              fontSize: 14,
              marginLeft: 20,
              marginTop: 2,
              fontFamily: 'HelveticaNeue Light',
            }}
            data="• Introdução 1"
          />
          <TextInfo
            style={{
              color: '#707070',
              fontSize: 14,
              marginLeft: 20,
              marginTop: 2,
              fontFamily: 'HelveticaNeue Light',
            }}
            data="• Introdução 1"
          />
          <View style={{flexDirection: 'row', marginTop: 22}}>
            <TextBold
              data="Duração:"
              style={{
                color: '#707070',
                fontSize: 14,
                marginLeft: 21,
                fontFamily: 'HelveticaNeue Bold',
              }}
            />
            <TextInfo
              style={{
                color: '#707070',
                fontSize: 14,
                marginLeft: 4,
                fontFamily: 'HelveticaNeue Light',
              }}
              data="45 Horas"
            />
          </View>
        </HeaderBody>
        <HeaderFooter>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: '50%'}}>
              <TextInfo
                style={{color: '#707070', fontSize: 10, margin: 2}}
                data="Investimento:"
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <TextBold
                  data="R$"
                  style={{
                    color: '#7BBDF5',
                    fontSize: 20,
                    marginTop: 2,
                    marginRight: 6,
                    fontFamily: 'HelveticaNeue Bold',
                  }}
                />
              </View>
              <View>
                <TextBold
                  data="799,90"
                  style={{
                    color: '#7BBDF5',
                    fontSize: 30,
                    fontFamily: 'HelveticaNeue Bold',
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Button
              color="#FF8686"
              data="Comprar"
              uppercase={false}
              style={{borderRadius: 8, width: 150, marginBottom: 10}}
              contentStyle={{height: 40, width: 147}}
              labelStyle={{
                color: 'white',
                fontFamily: 'HelveticaNeue Medium',
                fontSize: 14,
              }}
              mode="contained"
              onPress={() => navigation.navigate('Payment')}
            />
          </View>
        </HeaderFooter>
      </Card>
    );
  }
  return (
    <Container>
      <View style={{width: '80%', margin: 22}}>
        <TextBold
          data="Conheça nossos cursos:"
          style={{
            color: '#FF8686',
            fontSize: 32,
            marginTop: 10,
            fontFamily: 'HelveticaNeue Light',
          }}
        />
      </View>
      <Carousel
        layout="default"
        data={carouselItems}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={315}
        containerCustomStyle={styles.carouselContainer}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView
        enableMomentum
        renderItem={renderItems}
        activeSlideAlignment="center"
      />
    </Container>
  );
};
export default CarouselComponent;

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT + 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#2e5d0c',
    borderRadius: 5,
  },
});
