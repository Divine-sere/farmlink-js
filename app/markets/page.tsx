"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function MarketsPage() {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const fetchMarkets = async () => {
      const { data, error } = await supabase.from("markets").select("*");
      if (error) console.error("Error loading markets:", error);
      else setMarkets(data);
    };

    fetchMarkets();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold text-green-700">Nearby Markets</h1>
      <ul className="grid gap-4 md:grid-cols-2">
        {markets.map((market) => (
          <li
            key={market.id}
            className="p-4 bg-white shadow-md rounded-lg border border-green-100"
          >
            <h2 className="text-lg font-semibold text-gray-800">{market.name}</h2>
            <p className="text-sm text-gray-600">{market.location}</p>
            <p className="text-xs text-gray-400">Contact: {market.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}