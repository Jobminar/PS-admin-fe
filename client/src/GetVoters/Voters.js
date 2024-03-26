import  { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./voters.css";
import Chandra from "./Chandra";

const Voters = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/getpeople");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Voters data</h2>
     
       <Chandra />

      {loading ? (
        <CircularProgress />
      ) : (
        <table className="voters-table">
          <thead>
            <tr>
              <th>SNO</th>
              <th>EPIC_NUMBER</th>
              <th>SNOP</th>
              <th>PARTNO</th>
              <th>PARTY</th>
              <th>SUB_CASTE</th>
              <th>GENDER</th>
              <th>AGE</th>
              <th>RELATION</th>
              <th>ST</th>
              <th>VOTER_NAME</th>
              <th>SURNAME</th>
              <th>GAURDIEN</th>
              <th>VillAGE</th>
              <th>H_NO</th>
              <th>R_TYPE</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((ele, ind) => (
                <tr key={ind}>
                  <td>{ele.SNO}</td>
                  <td>{ele.EPIC_NUMBER}</td>
                  <td>{ele.SNOP}</td>
                  <td>{ele.PARTNO}</td>
                  <td>{ele.PARTY}</td>
                  <td>{ele.SUB_CASTE}</td>
                  <td>{ele.GENDER}</td>
                  <td>{ele.AGE}</td>
                  <td>{ele.RELATION}</td>
                  <td>{ele.ST}</td>
                  <td>{ele.VOTER_NAME}</td>
                  <td>{ele.SURNAME}</td>
                  <td>{ele.GAURDIEN}</td>
                  <td>{ele.VillAGE}</td>
                  <td>{ele.H_NO}</td>
                  <td>{ele.R_TYPE}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Voters;
