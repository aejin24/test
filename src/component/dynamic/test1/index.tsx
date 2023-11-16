"use client";

import { useEffect, useState } from "react";

export default function Test1({ id, data }: { id: string, data: any }) {
  const [state, setState] = useState("");

  useEffect(() => {
    setState(id);
  }, []);

  return <div>
    {state}
    {JSON.stringify(data)}
  </div>
}