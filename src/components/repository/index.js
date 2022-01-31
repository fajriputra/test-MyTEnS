import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.css";
import ListRepository from "./list-repository";

export default function Repository() {
  const [repository, setRepository] = useState([]);

  const getAllRepository = () => {
    axios
      .get("https://api.github.com/users/fajriputra/repos")
      .then((res) => {
        setRepository(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllRepository();
  }, []);

  return (
    <div className="repository">
      {repository.map((e) => {
        return (
          <ListRepository
            visibility={e.visibility}
            name={e.name}
            language={e.language}
            url={e.html_url}
          />
        );
      })}
    </div>
  );
}
