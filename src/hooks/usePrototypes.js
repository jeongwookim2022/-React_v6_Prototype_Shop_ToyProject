import { useContext } from "react";
import AppStateContext from "../contents/AppStateContext";

export default function usePrototypes() {
  const { prototypes } = useContext(AppStateContext);

  return prototypes;
}
