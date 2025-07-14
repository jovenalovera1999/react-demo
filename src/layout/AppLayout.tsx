import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { SidebarProvider } from "../context/SidebarContext";
import { HeaderProvider } from "../context/HeaderContext";

const LayoutContent = () => {
  return (
    <>
      <div className="min-h-screen xl:flex">
        <div>
          <AppSidebar />
        </div>
        <div>
          <AppHeader />
          <div className="pt-15 md:pt-12 pl-0 sm:pl-64 transition-all">
            <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderProvider>
        <SidebarProvider>
          <LayoutContent />
        </SidebarProvider>
      </HeaderProvider>
    </>
  );
};

export default AppLayout;
