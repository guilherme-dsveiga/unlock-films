import { useEffect } from "react";

const useScrollListener = (setState) => {
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 150) {
        setState(true);
      } else {
        setState(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [setState]);
};

export default useScrollListener;
