import React from 'react';
import { Layout } from "antd";

import NavbarApp from '../components/commons/NavbarApp'
import DetailCard from "../components/MainPage/DetailCard";
import NextMeetup from "../components/MainPage/NextMeetup";
import AboutMeetup from "../components/MainPage/AboutMeetup";
import MembersCard from "../components/MainPage/MembersCard";
import PastMeetup from '../components/MainPage/PastMeetup';

const MainPage = () => {

  return (
    <>
      <Layout>
        <NavbarApp />

        <Layout style={{ padding: 50 }}>
          <DetailCard />
          <NextMeetup />
          <AboutMeetup />
          <MembersCard />
          <PastMeetup />
        </Layout>
      </Layout>
    </>
  );
}

export default MainPage;
