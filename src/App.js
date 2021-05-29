import "./App.css";
import React, { useState } from "react";
import OrganizationInfo from "./components/OrganizationInfComponents/OrganizationInfo";
import Header from "./components/navbarCompoents/Header";
import Sidder from "./components/navbarCompoents/sidder";
import PlanDetails from "./components/planDetailsComponents/BasePlanDetails";
import Invoices from "./components/invoicesCompoents/Invoices";
import { useEffect } from "react";
import BasePayment from "./components/paymentCompoents/BasePayment";
import axios from "axios";
import Cancel from "./components/CancelCompoents/Cancel";


function App() {
  const [api, setApi] = useState([]); //At the beginning, api is an empty array
  const [isLoading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // The REST API endpoint
  const API_URL = "https://mocki.io/v1/cffdf9e2-36af-42b7-ae34-6bc7f197169f";

  // Define the function that fetches the data from API
  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(API_URL);
    setApi(response.data);
    setLoading(false); //change the state of isLoading to false so
    //that application knows that loading has completed and all is clear to render the data.
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

  /* make use of isLoading to either display the loading message or the requested data. 
The data will be displayed when isLoading is false, 
else a loading message will be shown on the screen */
  if (isLoading) {
    return "Loading...";
  }

  const handleOpen = (isOpen) => {
    setIsOpen(isOpen);
  };

  return (
    <div className="component-app">
      <div className="page">
        <div className="sidebar">
          <Sidder onOpen={handleOpen} />
        </div>
        <div className={`content ${isOpen && "open"}`}>
          <Header />
          <div className="content-components">
            <OrganizationInfo data={api} />
            <PlanDetails data={api} />
            <BasePayment data={api} />
            <Invoices data={api} />
          </div>
          {(api.organization.plan_details.plan_type === "Standard" ||
            api.organization.plan_details.plan_type === "Enterprise") && (
            <div className="content">
              <Cancel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
