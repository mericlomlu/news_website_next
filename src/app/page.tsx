'use client'
import { ConfigProvider} from "antd";
import theme from '../theme/themeConfig';
import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
      <ConfigProvider theme={theme}>
         <main className="w-full min-h-screen">
             <Navbar/>
         </main>
      </ConfigProvider>
  )
}
