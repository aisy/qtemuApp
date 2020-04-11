import React from 'react'
import { Layout, Typography } from 'antd'

const NavbarApp = () => {

  const { Header } = Layout;
  const { Text } = Typography;

  return (
    <Header
      style={{
        background: "#fff",
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.07)",
        marginBottom: 20,
      }}
    >
      <div>
        <Text>Qtemu</Text>
      </div>
    </Header>
  )
}

export default NavbarApp
