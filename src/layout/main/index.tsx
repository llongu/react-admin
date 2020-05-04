import React, { ReactElement } from "react"
import { Route } from "react-router-dom"
import matchRoutes from "@utils/matchRoutes"
import { Layout } from "antd"
const { Content } = Layout
import Header from "@/components/Header"
import Sider from "@/components/Sider"
import Breadcrumb from "@/components/Breadcrumb"
import DrawerSetting from "@/components/DrawerSetting"
import { InsProgressBar } from "react-ins-progress-bar"
import "./main.css"
import { RouteComponentProps } from "react-router-dom"
interface MyRouteComponentProps extends RouteComponentProps {
  route: { children: { component: React.FunctionComponent<{}> }[] }
}

const Main = (props: MyRouteComponentProps): ReactElement<HTMLElement> => {
  return (
    <Layout>
      <Sider {...props} />
      <Layout>
        <Header {...props} />
        <Breadcrumb {...props} />
        {/* loop render error */}
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280,
            position: "relative"
          }}
        >
          {/* matchroutes */}
          <Route component={matchRoutes(props.location.pathname, props.route.children)} />
        </Content>
        <DrawerSetting />
        <InsProgressBar height={"3px"} />
      </Layout>
    </Layout>
  )
}

export default Main
