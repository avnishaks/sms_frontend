import { Outlet } from "react-router-dom";
import {AnimationComponent} from "./components/index";
import { useState, useEffect } from "react";

export default function App() {
  const [status, setStatus] = useState('loading'); // Initialize with 'loading'

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('xyxxs');
    }, 1000);
    return () => {
      clearTimeout(timer); 
    }
  }, []); 

  return (
    <div className="flex flex-1 justify-center items-center h-screen w-screen bg-violet-600">
      {status === 'loading' ? (
        <AnimationComponent status={status} />
      ) : (
        <Outlet />
      )}
    </div>
  );
}

