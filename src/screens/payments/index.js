import React, {useState} from 'react';
import {Container, Row} from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [nameCard, setNameCard] = useState('');
  const [cardValidate, setValidation] = useState('');
  const [cvv, setCvv] = useState('');
  return (
    <Container>
      <Card />
      <Input
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 18,
          height: 50,
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
        style={{marginLeft: 20, marginRight: 20, marginTop: 12, height: 50}}
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
            height: 50,
            width: '48%',
            marginRight: 10,
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
            height: 50,
            width: '40%',
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
    </Container>
  );
};
export default Payment;
