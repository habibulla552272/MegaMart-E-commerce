
import DailyEssentials from "@/components/DailyEssentials/DailyEssentials";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import SmartPhone from "@/components/smartPhone/SmartPhone";
import TopCategories from "@/components/TopCategories/TopCategories";


export default function Home() {
  return (
    <>
       <Header />
        <Navbar />
        <SmartPhone />
        <TopCategories />
        <DailyEssentials />
    </>
  );
}
