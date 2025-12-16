import Header from "@/widgets/header/ui/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen w-screen flex-col bg-[linear-gradient(180deg,#F6F7F9_0%,#E9ECF5_100%)]">
      <Header />
      <Outlet />
    </div>
  );
};
export default MainLayout;
