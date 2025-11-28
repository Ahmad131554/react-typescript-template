import { Outlet } from "react-router";
import { Toaster } from "sonner";

function RootLayout() {
  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <Outlet />
    </>
  );
}

export default RootLayout;
