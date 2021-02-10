import React, {useState} from 'react';
import {Container, Row} from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Buttom';
import TextBold from '../../components/TextBold';
import TextInfo from '../../components/Text';
import {Divider} from 'react-native-elements';
import Notification from '../../components/Notification';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [nameCard, setNameCard] = useState('');
  const [cardValidate, setValidation] = useState('');
  const [cvv, setCvv] = useState('');
  const [success, setSuccess] = useState(false);
  return (
    <>
      {success ? (
        <Notification
          info="Sucesso! Compra concluída"
          message="Você receberá um email com os detalhes da sua compra."
        />
      ) : (
        <Container>
          <Card />
          <Input
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginTop: 18,
              height: 45,
              backgroundColor: 'white',
            }}
            label="Número do cartão de crédito"
            mode="outlined"
            setValue={setCardNumber}
            value={cardNumber}
            returnKeyType="done"
            type="custom"
            keyboardType="numeric"
            options={{
              mask: '9999 9999 9999 9999 9999 ',
            }}
          />
          <Input
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginTop: 12,
              height: 45,
              backgroundColor: 'white',
            }}
            label="Nome"
            mode="outlined"
            value={nameCard}
            setValue={setNameCard}
            returnKeyType="done"
            keyboardType="default"
            numberOfLines={40}
            autoCapitalize="characters"
          />
          <Row>
            <Input
              style={{
                marginTop: 12,
                height: 45,
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
                height: 45,
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
              data="Curso de agilidade 2"
            />
            <TextInfo
              style={{
                color: '#707070',
                fontSize: 14,
                marginTop: 2,
                fontFamily: 'HelveticaNeue Light',
              }}
              data="R$ 899,00"
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
              data="Desconto 10%"
            />
            <TextInfo
              style={{
                color: '#FF8686',
                fontSize: 14,
                marginTop: 2,
                fontFamily: 'HelveticaNeue Light',
              }}
              data="- R$ 89,00"
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
          <Row style={{justifyContent: 'space-between', margin: 20}}>
            <TextBold
              data="Total:"
              style={{
                color: '#707070',
                fontSize: 20,
                fontFamily: 'HelveticaNeue Bold',
              }}
            />
            <TextBold
              data="R$ 809,10"
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
        </Container>
      )}
    </>
  );
};
export default Payment;
