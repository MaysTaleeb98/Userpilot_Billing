import "./OrganizationInfo.css";
import Label from "./Label";
import Input from "./Input";
import Selectemail from "./Selectemail";
import React, { useState } from "react";
import { useMemo } from "react";

const OrganizationInfo = ({ data }) => {
  const [active, setActive] = useState(false);
  const [billigValue, setBillingValue] = useState(false);
  const [organizationName, setOrganizationName] = useState(false);
  const [organizationNameEmpty, isOrganizationNameEmpty] = useState(false);
  const [submit, setSubmit] = useState(false);

  const computedOptions = useMemo(() => {
    if (data && data.organization && data.organization.billing_contacts) {
      return data.organization.billing_contacts.map((email) => ({
        label: email,
        value: email,
      }));
    }
    return [];
  }, [data]);

  return (
    <div>
      <div className="headPos">
        <h className="hed">Organization Information </h>
      </div>
      <div className="formOrgInfo">
        <div className="container">
          <div className="colA">
            <Label text="Organization Name" />
            <Input
              data={data.organization.name}
              onChange={() => {
                setActive(true);
              }}
            />
            <div className="empty">
              <h
                style={{ display: isOrganizationNameEmpty ? "none" : "block" }}
              >
                This field is required
              </h>
            </div>
            <div className="Lp">
              <Label text="Primary Organization Contact" />
            </div>
            <Input
              data={data.organization.primary_contact}
              onChange={() => {
                setOrganizationName(true);
                setActive(true);
              }}
            />

            <div className="Lp">
              <Label text="Billing Contact(s)" />
            </div>
            <Selectemail
              onChange={() => {
                setBillingValue(true);
                setActive(true);
              }}
              optionsOfEmail={computedOptions}
            />
          </div>

          <div className="colB">
            <div className="Lp">
              <Label text="Billing Address" />
            </div>
            <textarea className="textareaAdd" onChange={() => setActive(true)}>
              {data.organization.billing_address}
            </textarea>
          </div>
          <div className="colC">
            <Label text="VAT Number" />

            <Input
              data={data.organization.var_number}
              onChange={() => setActive(true)}
            />

            <div className="labelAddInfo">
              <div className="LAddInfo">
                <Label text="Additional Information" />
              </div>
              <textarea
                className="textarea"
                placeholder="Add any additional info here..."
                onChange={() => setActive(true)}
              ></textarea>
            </div>
          </div>
        </div>
        <div classNname="boxBtn">
          <button
            className="btn"
            id="button"
            style={{ backgroundColor: active ? "green" : "gray" }}
            onClick={() => setSubmit(true)}
          >
            Save
          </button>
          {submit === true && billigValue === false && (
            <React.Fragment>
              <div className="errorBox">
                <h className="error"> This field is required</h>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrganizationInfo;
