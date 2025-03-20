import React from "react";

const HeaderTop = () => {
  return (
    <div className="tekup-header-top bg-accent">
    <div className="container-fluid">
      <div className="tekup-header-info-wrap">
        <div className="tekup-header-info">
          <ul>
            <li><i className="ri-map-pin-2-fill"></i>Coimbatore, Tamilnadu, India.</li>
          </ul>
        </div>
        <div className="tekup-header-info">
          <ul>
            {/* <li><a href="tel:+918667853720"><i className="ri-phone-fill"></i>8667853720</a></li> */}
            <li>
              <a href="tel:+918667853720" aria-label="Call us at +91 86678 53720">
                <i className="ri-phone-fill"></i> +91 86678 53720
              </a>
            </li>
            <li><a href="mailto:digitalaraa@gmail.com"><i className="ri-mail-fill"></i>digitalaraa@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HeaderTop;
