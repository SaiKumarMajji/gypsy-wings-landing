import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import store, { useAppDispatch } from "./services/redux/store";
import UserDetailPopup from "./components/common/user-details-popup";
import { useEffect } from "react";
import { setShowUserDetailPopup } from "./services/redux/slices/authSlice";

const AppContent = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(setShowUserDetailPopup(true));
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <Provider store={store}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
        <UserDetailPopup />
      </BrowserRouter>
    </TooltipProvider>
  </Provider>
);

export default App;
