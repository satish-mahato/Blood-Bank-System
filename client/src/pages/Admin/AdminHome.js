import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          
            <h4>Welcome to our Blood Bank Management System – where every donation counts, and every life saved is a testament to the power of human compassion.</h4>
            <p> In a world where blood shortages can mean the difference between life and death, every contribution matters. Join us in our mission to combat blood shortages, one donation at a time. Together, we can make a tangible difference in the lives of countless individuals, serving as beacons of hope and heroes in our communities.</p>
            <button class="button custom-font">Join Us in the Fight Against Blood Shortages</button>

        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
