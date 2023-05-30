import { useContext } from "react";
import AppStateContext from "../contents/AppStateContext";

export default function useOrders() {
  const { orders } = useContext(AppStateContext);

  return orders;
}
