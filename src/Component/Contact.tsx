import React from "react";

type ContactProps = {
  blackColor: React.CSSProperties;
  LightBlue: React.CSSProperties;
};

export default function Contact(props: ContactProps) {
  return (
    <div className="container-fluid" style={props.blackColor}>
      <div className="row">
        <div className="col-md-12 text-center">
          <div style={props.LightBlue} className="text-6xl mt-4">
            {" "}
            Get in{" "}
          </div>
          <div style={props.LightBlue} className="text-6xl mt-3">
            {" "}
            Touch{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
