import { MyContextProvider } from "@/contexts/SpareContext";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

function RootLayout() {
  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <MyContextProvider>
        <Outlet />
      </MyContextProvider>
    </>
  );
}

export default RootLayout;
