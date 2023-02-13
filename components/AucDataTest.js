import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AucData() {
  const [show, setShow] = useState(null);
  const [rainfall, setRainfall] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://archive-api.open-meteo.com/v1/archive?latitude=-36.85&longitude=174.76&start_date=2023-01-18&end_date=2023-02-10&daily=precipitation_sum&timezone=Pacific%2FAuckland"
      )
      .then((response) => {
        console.log(response);
      });
  }, []);

  return <div>{show + rainfall}</div>;
}

// can import this to test API data
