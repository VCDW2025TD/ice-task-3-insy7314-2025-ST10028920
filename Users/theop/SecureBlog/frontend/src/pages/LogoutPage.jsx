import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const navigate = useNavigate();
  useEffect(()=>{
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  }, [navigate]);
  return <p style={{padding:16}}>Logging out…</p>;
}
