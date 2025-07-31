import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//it is used for Page tracking using google analytics
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-DTC5PSLJNW", {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default usePageTracking;
