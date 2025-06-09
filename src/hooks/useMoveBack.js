import { useNavigate } from "react-router-dom";

export function useMoveBack(fallback = "/") {
  const navigate = useNavigate();

  return () => {
    if (window.history.length > 1) {
      navigate(-1); // go back if history exists
    } else {
      navigate(fallback); // no history, go to fallback
    }
  };
}
