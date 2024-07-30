import "./App.css";
import Spline from "@splinetool/react-spline";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <div className="tw-h-[100vh] tw-bg-primary">
        {isLoading ? (
          <div className=" tw-text-2xl tw-font-bold tw-text-white tw-flex tw-flex-col tw-justify-center tw-w-full tw-h-[90vh] tw-bg-primary">
            <i className="fa fa-refresh fa-spin fa-3x fa-fw tw-text-quaternary tw-mx-auto"></i>
            <div className="tw-mx-auto tw-mt-2 poppins-semibold">Loading</div>
          </div>
        ) : (
          <div className="tw-h-[32vh] lg:tw-h-[33vh] tw-flex tw-flex-col tw-pt-12 tw-text-center">
            <div className="lg:tw-text-5xl tw-text-2xl lg:tw-mx-[20%] tw-mx-[8%]  tw-text-secondary poppins-extrabold">
              School Management Just Got Easier, and Cheaper!
            </div>
            <div className="mt-3">
              <a href="https://forms.gle/H8kt5UwqhBDg85bMA" target="_blank">
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg poppins-regular"
                >
                  Contact Us!
                </button>
              </a>
            </div>
          </div>
        )}
        <div className="spline tw-bg-primary">
          <Spline
            scene="https://prod.spline.design/Zf0cbaP9xMwfLbFd/scene.splinecode"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
