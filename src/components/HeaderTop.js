import React from "react";

const HeaderTop = () => {
  return (
    <div className="tekup-header-top bg-accent">
      <div className="container-fluid">
        <div className="tekup-header-info-wrap">
          <div className="tekup-header-info">
            <ul>
              <li>
                <i className="ri-map-pin-2-fill" />
                2774 Oak Drive, Plattsburgh, New York
              </li>
            </ul>
          </div>
          <div className="tekup-header-info">
            <ul>
              <li>
                <a href="tel:5185643200">
                  <i className="ri-phone-fill" />
                  518-564-3200
                </a>
              </li>
              <li>
                <a href="mailto:tachup@example.com">
                  <i className="ri-mail-fill" />
                  tachup@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
