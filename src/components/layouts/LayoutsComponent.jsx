import { Layout } from "antd";
import React from "react";

const LayoutsComponent = ({ children }) => {
  const { Content } = Layout;
  return (
    <div>
      <Layout>
        {/* Header */}

        {/* Content */}
        <Content>
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: "#fff",
            }}
          >
            {children}
          </div>
        </Content>

      </Layout>
    </div>
  );
};

export default LayoutsComponent;
