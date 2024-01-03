import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import BoardCounsel from '../components/Board/BoardCounsel';
import BoardFree from '../components/Board/BoardFree';
import BoardFreeReply from '../components/Board/BoardFreeReply';
import BoardFreeWrite from '../components/Board/BoardFreeWrite';
import Bupbong from '../components/Bupbong/Bupbong';
import ConsultPage from '../components/Consult/ConsultPage';
import DeepPage from '../components/Consult/DeepPage';
import FAQPage from '../components/FAQ/FAQPage';
import JoinMain from '../components/Join/JoinMain';
import JoinListPage from '../components/JoinList/JoinListPage';
import LoginMain from '../components/Login/LoginMain';
import MainLayout from '../components/MainLayout';
import MainPage from '../components/MainPage';
import MyConsultListPage from '../components/MyConsultList/MyConsultListPage';
import MyPostListPage from '../components/MyPostList/MyPostListPage';
import LawyerModify from '../components/modify/LawyerModify';
import UserModify from '../components/modify/UserModify';
import DeepWrite from '../components/write/DeepWrite';
import OnlineWrite from '../components/write/OnlineWrite';

import MypageLayout from '../components/MypageLayout';
import '../index.css';
import commUtil from '../util/commUtil';
import NaverLoginHandler from '../components/Login/NaverLoginHandler';
import KakaoLoginHandler from '../components/Login/KakaoLoginHandler';
const RouterIndex = () => {
  const isLogin = commUtil.isNotEmpty(localStorage.getItem('accessToken'));

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login'); //// ntwjd
    } else {
      if (location.pathname === '/login') {
        navigate('/');
      }
    }
  }, []);

  return (
    <Routes>
      <Route
        path='/login/'
        element={<LoginMain />}
      />
      <Route
        path='/join/'
        element={<JoinMain />}
      />
      <Route
        path='/'
        element={<MainPage />}
      ></Route>
      <Route
        path='/*'
        element={<></>}
      ></Route>
      <Route
        path='/oauth/redirected/kakao'
        element={<KakaoLoginHandler />}
      />

      <Route element={<MainLayout />}>
        <Route
          path='/faq/'
          element={<FAQPage />}
        ></Route>

        <Route
          path='/counsel/'
          element={<BoardCounsel />}
        ></Route>
        <Route
          path='/free/'
          element={<BoardFree />}
        ></Route>
        <Route
          path='/freewrite/'
          element={<BoardFreeWrite />}
        ></Route>
        <Route
          path='/freereply/'
          element={<BoardFreeReply />}
        ></Route>

        <Route
          path='/counsel/detail/:consultNum'
          element={<ConsultPage />}
        ></Route>

        <Route
          path='/counsel/write/'
          element={<OnlineWrite />}
        ></Route>
        <Route
          path='/counsel/deep/'
          element={<DeepWrite />}
        ></Route>
      </Route>

      {/* 마이페이지 카테고리가 필요한 부분 */}
      <Route element={<MypageLayout />}>
        <Route
          path='/mypage/user/'
          element={<UserModify />}
        ></Route>
        <Route
          path='/mypage/lawyer/'
          element={<LawyerModify />}
        ></Route>
        <Route
          path='/myfree/'
          element={<MyPostListPage />}
        ></Route>
        <Route
          path='/mycounsel/'
          element={<MyConsultListPage />}
        ></Route>
        <Route
          path='/deep/:consultNum/'
          element={<DeepPage />}
        ></Route>
        <Route
          path='/bupbong/'
          element={<Bupbong />}
        ></Route>
      </Route>
      <Route
        path='/naverLogin/redirect'
        element={<NaverLoginHandler />}
      />
      <Route
        path='/joinlist/'
        element={<JoinListPage />}
      />
    </Routes>
  );
};

export default RouterIndex;
