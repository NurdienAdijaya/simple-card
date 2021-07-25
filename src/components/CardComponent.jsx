import React, { Fragment } from "react";
import "./CardComponent.css";

export default function CardComponent() {
  return (
    <Fragment>
      <div class="body">
        <div class="card">
          <div>
            <a
              href="https://travel.detik.com/cerita-perjalanan/d-5393134/percaya-nggak-ada-hutan-mangrove-cantik-di-bekasi/1"
              target="blank"
            >
              <img
                href="https://travel.detik.com/cerita-perjalanan/d-5393134/percaya-nggak-ada-hutan-mangrove-cantik-di-bekasi/1"
                class="img"
                src="https://akcdn.detik.net.id/community/media/visual/2021/02/04/dev-percaya-nggak-ada-hutan-mangrove-cantik-di-bekasi-1.jpeg?w=600&q=90"
                alt=""
              />
            </a>
          </div>

          <div class="message">
            <h1>An Inexplicable Secret Experience</h1>
            <p>
              Explore secret experiences that few people know about, EVEN
              residents of this town
            </p>
            <a
              href="https://travel.detik.com/cerita-perjalanan/d-5393134/percaya-nggak-ada-hutan-mangrove-cantik-di-bekasi/1"
              target="blank"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 2.4375V17.5625C20 18.7016 19.0406 19.625 17.8571 19.625H2.14286C0.959375 19.625 0 18.7016 0 17.5625V2.4375C0 1.2984 0.959375 0.375 2.14286 0.375H17.8571C19.0406 0.375 20 1.2984 20 2.4375ZM16.0714 3.125H11.0727C10.1213 3.125 9.64058 4.23621 10.3151 4.88547L11.7429 6.25991L3.01406 14.6615C2.80487 14.8628 2.80487 15.1893 3.01406 15.3907L4.39929 16.724C4.60853 16.9253 4.94772 16.9253 5.15692 16.724L13.8858 8.32246L15.3138 9.69707C15.9847 10.3428 17.1429 9.88936 17.1429 8.96785V4.15625C17.1429 3.5867 16.6632 3.125 16.0714 3.125Z"
                  fill="#8D91A6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
