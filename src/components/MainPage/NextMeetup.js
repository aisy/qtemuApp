import React from "react";
import { Typography, Card } from "antd";

const NextMeetup = () => {
  const { Paragraph, Title, Text } = Typography;

  return (
    <div>
      <Title level={4}>Next Meetup</Title>
      <div style={{ padding: 10 }}>
        <Card>
          <Paragraph>Awesome Meetup</Paragraph>
          <Text style={{ color: "grey" }}>25 january 2020</Text>
          <br />
          <br />
          <Paragraph>
            Hello, Javascrpt & Nodejs ninjas! Get Ready for our Monthly meetup
            JakartaJS! this will be our fifth meetup 2020 The Meetup format will
            contain some short stories and technical talks.
          </Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default NextMeetup;
