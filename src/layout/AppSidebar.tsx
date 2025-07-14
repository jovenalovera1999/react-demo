import { useSidebar } from "../context/SidebarContext";

const AppSidebar = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  const sidebarMenuItems = [
    {
      name: "Gender List",
    },
    {
      name: "Add Gender",
    },
    { name: "User List" },
    { name: "Add User" },
  ];

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-400 opacity-50 sm:hidden"
          onClick={toggleMobileSidebar}
        />
      )}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-18 transition-transform ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sidebarMenuItems.map((item) => (
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
