import { useEffect, useState } from "react";
import API from "../services/api";

export default function DashboardPage() {
  const [msg, setMsg] = useState("Loading…");

  useEffect(()=>{
    (async()=>{
      try {
        const { data } = await API.get("/protected");
        setMsg(data.message);
      } catch {
        setMsg("Failed to load (maybe token expired?)");
      }
    })();
  },[]);

  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p>{msg}</p>
    </div>
  );
}
