/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Container} from './styles';
import Loading from '../../components/Loading';
import {useDispatch, useSelector} from 'react-redux';
import Carousel from '../../components/carousel/carousel';
import * as ACTION_COURSE from '../../store/actions/course';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.list);
  const loading = useSelector((state) => state.course.loading);
  function getDataCourse() {
    dispatch(ACTION_COURSE.RESQUEST());
  }

  useEffect(() => {
    getDataCourse();
  }, []);

  if (loading) {
    return (
      <Container>
        <Loading color="#FF8686" size="large" style={{marginTop: 40}} />
      </Container>
    );
  }

  return (
    <Container>
      <Carousel data={courses} navigation={navigation} />
    </Container>
  );
};
export default Home;
