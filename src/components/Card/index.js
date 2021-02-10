import React from 'react';
import {View} from 'react-native';
import {
  Card,
  ContainerCard,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  FlagX,
  FlagY,
  ContainerFlag,
} from './styles';
import TextInfo from '../../components/Text';

const Payment = () => {
  return (
    <ContainerCard>
      <Card>
        <CardHeader>
          <Chip />
          <ContainerFlag>
            <FlagX />
            <FlagY />
          </ContainerFlag>
        </CardHeader>
        <CardBody>
          <TextInfo
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'HelveticaNeue Bold',
            }}
            data="•••• •••• •••• •••• 1234"
          />
        </CardBody>
        <CardFooter>
          <View
            style={{
              width: '50%',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View>
              <TextInfo
                style={{
                  color: 'white',
                  fontSize: 8,
                  fontFamily: 'HelveticaNeue Light',
                }}
                data="Nome"
              />
              <TextInfo
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'HelveticaNeue Medium',
                }}
                data="MARIA CLARA M."
              />
            </View>
            <View />
          </View>
          <View
            style={{
              width: '10%',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View>
              <TextInfo
                style={{
                  color: 'white',
                  fontSize: 8,
                  fontFamily: 'HelveticaNeue Light',
                }}
                data="Validade"
              />
              <TextInfo
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'HelveticaNeue Medium',
                }}
                data="12/12"
              />
            </View>
            <View />
          </View>
          <View
            style={{
              width: '10%',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View>
              <TextInfo
                style={{
                  color: 'white',
                  fontSize: 8,
                  fontFamily: 'HelveticaNeue Light',
                }}
                data="Validade"
              />
              <TextInfo
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'HelveticaNeue Medium',
                }}
                data="12/12"
              />
            </View>
            <View />
          </View>
        </CardFooter>
      </Card>
    </ContainerCard>
  );
};
export default Payment;
