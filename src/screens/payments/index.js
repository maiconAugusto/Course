import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {Container, Row} from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Buttom';
import TextBold from '../../components/TextBold';
import TextInfo from '../../components/Text';
import {Divider} from 'react-native-elements';
import Notification from '../../components/Notification';

const Payment = ({navigation, route}) => {

  const [cardNumber, setCardNumber] = useState('');
  const [nameCard, setNameCard] = useState('');
  const [cardValidate, setValidation] = useState('');
  const [cvv, setCvv] = useState('');
  const [success, setSuccess] = useState(false);
  const [percent] = useState(10);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -80

  const {id: courseId, price: coursePrice, name: courseName} = route.params;

  function percentCalculation(value, percentX) {
    var response = parseFloat(value).toFixed(2) * (Number(percentX) / 100);
    return parseFloat(response.toFixed(2));
  }

  function applyDiscount(value, discount) {
    const response =
      parseFloat(value).toFixed(2) - parseFloat(discount).toFixed(2);
    return response;
  }

  return (
    <>
      {success ? (
        <Notification
          onPress={() =>
            navigation.reset({index: 0, routes: [{name: 'Initial'}]})
          }
          info="Sucesso! Compra concluída"
          message="Você receberá um email com os detalhes da sua compra."
        />
      ) : (
        <Container keyboardShouldPersistTaps='handled'>
          <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
          <Card cardNumber={cardNumber} nameCard={nameCard} cardValidate={cardValidate} cvv={cvv} />
          <Input
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginTop: 18,
              backgroundColor: 'white',
            }}
            label="Número do cartão de crédito"
            mode="outlined"
            setValue={setCardNumber}
            value={cardNumber}
            returnKeyType="done"
            type="custom"
            keyboardType="default"
            autoFocus
            options={{
              mask: '9999 9999 9999 9999 9999 ',
            }}
          />
          <Input
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginTop: 12,
              backgroundColor: 'white',
            }}
            label="Nome"
            mode="outlined"
            value={nameCard}
            maxLength={35}
            setValue={setNameCard}
            returnKeyType="done"
            keyboardType="default"
            numberOfLines={30}
            autoCapitalize="characters"
          />
          <Row>
            <Input
              style={{
                marginTop: 12,
                width: '48%',
                marginRight: 10,
                backgroundColor: 'white',
              }}
              label="Validade"
              mode="outlined"
              type="custom"
              value={cardValidate}
              setValue={setValidation}
              returnKeyType="done"
              keyboardType="numeric"
              options={{
                mask: '99/99',
              }}
            />
            <Input
              style={{
                marginTop: 12,
                width: '40%',
                backgroundColor: 'white',
              }}
              label="CVV"
              mode="outlined"
              value={cvv}
              setValue={setCvv}
              type="custom"
              returnKeyType="done"
              keyboardType="numeric"
              options={{
                mask: '999',
              }}
            />
          </Row>
          <Divider
            style={{
              backgroundColor: '#CCCCCC',
              marginTop: 25,
              marginBottom: 20,
              marginLeft: 20,
              marginRight: 20,
            }}
          />
          <Row
            style={{
              justifyContent: 'space-between',
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 12,
            }}>
            <TextInfo
              style={{
                color: '#707070',
                fontSize: 14,
                fontFamily: 'HelveticaNeue Light',
              }}
              data={courseName}
            />
            <TextInfo
              style={{
                color: '#707070',
                fontSize: 14,
                marginTop: 2,
                fontFamily: 'HelveticaNeue Light',
              }}
              data={parseFloat(coursePrice).toFixed(2)}
            />
          </Row>
          <Row
            style={{
              justifyContent: 'space-between',
              marginLeft: 20,
              marginRight: 20,
              marginTop: -8,
            }}>
            <TextInfo
              style={{
                color: '#707070',
                fontSize: 14,
                fontFamily: 'HelveticaNeue Light',
              }}
              data={`Desconto ${percent}%`}
            />
            <TextInfo
              style={{
                color: '#FF8686',
                fontSize: 14,
                marginTop: 2,
                fontFamily: 'HelveticaNeue Light',
              }}
              data={percentCalculation(coursePrice, percent)}
            />
          </Row>
          <Divider
            style={{
              backgroundColor: '#CCCCCC',
              marginTop: 20,
              marginBottom: 20,
              marginLeft: 20,
              marginRight: 20,
            }}
          />
          <Row style={{justifyContent: 'space-between', marginLeft: 20, marginRight: 20}}>
            <TextBold
              data="Total:"
              style={{
                color: '#707070',
                fontSize: 20,
                fontFamily: 'HelveticaNeue Bold',
              }}
            />
            <TextBold
              data={`R$ ${applyDiscount(
                coursePrice,
                percentCalculation(coursePrice, percent),
              )}`}
              style={{
                color: '#707070',
                fontSize: 20,
                fontFamily: 'HelveticaNeue Bold',
              }}
            />
          </Row>
          <Row style={{margin: 20}}>
            <Button
              color="#FF8686"
              data="Pagar"
              uppercase={false}
              style={{
                borderRadius: 8,
                width: '100%',
              }}
              contentStyle={{height: 40, width: '100%'}}
              labelStyle={{
                color: 'white',
                fontFamily: 'HelveticaNeue Medium',
                fontSize: 14,
              }}
              mode="contained"
              onPress={() => {
                setSuccess(true);
              }}
            />
          </Row>
          </KeyboardAvoidingView>
        </Container>
      )}
    </>
  );
};
export default Payment;
