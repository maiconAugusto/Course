import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  background-color: white;
  flex: 1;
`;

export const Card = styled.View.attrs({
  shadowColor: '#CFCFCF',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.28,
  shadowRadius: 5.65,
  elevation: 10,
})`
  display: flex;
  height: 370px;
  margin: 4px 25px 0px 25px;
  border-radius: 30px;
`;
export const HeaderCard = styled.View`
  display: flex;
  margin-top: 24px;
  margin-left: 24px;
  height: 20%;
`;
export const HeaderBody = styled.View`
  display: flex;
  justify-content: center;
  height: 30%;
`;
export const HeaderFooter = styled.View`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 48%;
  width: 100%;
`;
