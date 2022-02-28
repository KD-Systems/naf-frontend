import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { useParams, Link } from "react-router-dom";
import PartService from "services/PartService";
const PrintPart = () => {
  let { id } = useParams();
  const [data, setData] = useState({
    aliases: [],
  });
  const getPart = async () => {
    setData(await PartService.get(id));
  };

  useEffect(async () => {
    if (id) {
      await getPart();
    //   window.print();
    }
  }, [id]);

  return (
    <>
      {" "}
      <div className="post d-flex flex-column-fluid" id="printpart">
        <div className="container-xxl">
          <div className="d-flex flex-column flex-lg-row justify-content-center">
            <div className="flex-column flex-lg-row-auto w-lg-250px w-xl-350px mb-10">
              <div className="card mb-5 mb-xl-8">
                <div className="card-body">
                  <div className="pb-5 fs-6 text-center">
                        <img
                          src={`data:image/jpeg;base64,${data?.barcode}`}
                          alt="barcode"
                        />
                      {data?.aliases?.map((item, index) => (
                        <p key={index} to={item?.id}>
                          {item?.machine?.name}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintPart;
