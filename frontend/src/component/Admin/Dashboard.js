import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useAlert } from "react-alert";
import DashboardCard from "../../component/Admin/DashboardCard.js";
import "./Dashboard.css";

const Dashboard = ({ setComponent }) => {
  const [loading, setLoading] = useState(true);
  const [productsCount, setProductsCount] = useState();
  const [usersCount, setUsersCount] = useState();
  const [queriesCount, setQueriesCount] = useState();
  // const alert = useAlert();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: "/api/v1/products/admin/stats",
        });
        setProductsCount(data.productsCount);
        setUsersCount(data.usersCount);
        setQueriesCount(data.queriesCount);
        setLoading(false);
        // alert.success("Data Fetched!");
      } catch (error) {
        console.log(error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className='container row d-flex flex-wrap align-items-center'>
      {loading ? (
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      ) : (
        <>
          {" "}
          <DashboardCard
            setComponent={setComponent}
            title={"Products"}
            number={productsCount}
          />
          <DashboardCard
            setComponent={setComponent}
            title={"Users"}
            number={usersCount}
          />
          <DashboardCard
            setComponent={setComponent}
            title={"Queries"}
            number={queriesCount}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
