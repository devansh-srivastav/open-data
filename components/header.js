import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import CustomStep from "./customSteps";
import { useRouter } from 'next/router';

function CustomStepper(props) {
    const router = useRouter();
    const pathname = router.pathname;
    return (
        <div className="stepper-outer" >
            <span className="stepperHr blue-b"  />
            <svg width="30" height="30" viewBox="0 0 20 20" fill={(pathname != '/login') ? "#5B76FF" : "none"} xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill={(pathname != '/login') ? "#5B76FF" : "black"}/>
                <path d="M11.0358 6.18073V13.75H9.54163V7.90314L7.74658 8.47382V7.29614L10.8749 6.18073H11.0358Z" fill="white" />
            </svg>
            <div className={(pathname != '/login') ? "blue-l  slabel" : "black-l slabel"}>KONTAKTDATEN   <br />  HINTERLASSEN </div>


            <span className={(pathname != '/login') ? "stepperHr blue-b" : "stepperHr black-b"}  />
            <svg width="30" height="30" viewBox="0 0 20 20" fill={(pathname != '/login' && pathname != "/upload") ? "#5B76FF" : "none"} xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill={(pathname != '/login' && pathname != "/upload") ? "#5B76FF" : "black"} stroke="" stroke-width="0.625" />
                <path d="M12.561 12.5827V13.75H7.3938V12.7539L9.83734 10.134C10.0829 9.86074 10.2766 9.62036 10.4184 9.41284C10.5602 9.20186 10.6622 9.01337 10.7245 8.84735C10.7902 8.67788 10.8231 8.51705 10.8231 8.36487C10.8231 8.1366 10.785 7.94118 10.7089 7.77863C10.6328 7.61261 10.5204 7.48464 10.3717 7.39471C10.2264 7.30479 10.0466 7.25983 9.83215 7.25983C9.60388 7.25983 9.40674 7.31517 9.24072 7.42584C9.07817 7.53652 8.95365 7.69043 8.86719 7.88757C8.78418 8.08472 8.74268 8.3078 8.74268 8.55682H7.24335C7.24335 8.1072 7.35057 7.69562 7.565 7.32208C7.77944 6.94509 8.08207 6.64591 8.4729 6.42456C8.86373 6.19975 9.32719 6.08734 9.86328 6.08734C10.3925 6.08734 10.8386 6.17381 11.2018 6.34674C11.5684 6.51622 11.8451 6.76178 12.0319 7.08344C12.2221 7.40163 12.3172 7.78208 12.3172 8.22479C12.3172 8.47382 12.2774 8.71765 12.1979 8.9563C12.1183 9.19149 12.0042 9.42668 11.8555 9.66187C11.7102 9.8936 11.5338 10.1288 11.3263 10.3674C11.1188 10.6061 10.8888 10.8534 10.6363 11.1093L9.32373 12.5827H12.561Z" fill="white" />
            </svg>

            <div className={(pathname != '/login' && pathname != "/upload") ? "blue-l  slabel big-label" : "big-label black-l slabel"}>UPLOAD-OPTION  <br />
AUSWAHLEN</div>


            <span className={(pathname != '/login' && pathname != "/upload" ) ? "stepperHr blue-b" : "stepperHr black-b"}/>
            <svg width="30" height="30" viewBox="0 0 20 20" fill={(pathname != '/login' && pathname != "/upload" && (pathname != "/upload-data" || pathname != "/upload-link-data" ) )? "#5B76FF" : "none"} xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill={(pathname != '/login' && pathname != "/upload" && (pathname != "/upload-data" && pathname != "/upload-link-data")) ? "#5B76FF" : "black"} />
                <path d="M8.92426 9.32465H9.72321C9.97915 9.32465 10.1901 9.28141 10.3561 9.19495C10.5222 9.10502 10.6449 8.98051 10.7245 8.82141C10.8075 8.65885 10.849 8.47036 10.849 8.25592C10.849 8.06224 10.811 7.89103 10.7349 7.74231C10.6622 7.59013 10.5498 7.47253 10.3976 7.38953C10.2455 7.30306 10.0535 7.25983 9.82178 7.25983C9.63847 7.25983 9.46899 7.29614 9.31335 7.36877C9.15771 7.44141 9.0332 7.54344 8.93982 7.67487C8.84644 7.80629 8.79974 7.96539 8.79974 8.15216H7.30042C7.30042 7.73712 7.41109 7.37569 7.63245 7.06787C7.85726 6.76005 8.15816 6.51967 8.53516 6.34674C8.91215 6.17381 9.32719 6.08734 9.78027 6.08734C10.2922 6.08734 10.7401 6.17035 11.124 6.33636C11.5079 6.49892 11.807 6.7393 12.0215 7.0575C12.2359 7.37569 12.3431 7.76998 12.3431 8.24036C12.3431 8.479 12.2878 8.71073 12.1771 8.93555C12.0664 9.1569 11.9073 9.3575 11.6998 9.53735C11.4958 9.71375 11.2467 9.85555 10.9528 9.96277C10.6588 10.0665 10.3285 10.1184 9.96185 10.1184H8.92426V9.32465ZM8.92426 10.4608V9.68781H9.96185C10.3734 9.68781 10.7349 9.7345 11.0461 9.82788C11.3574 9.92126 11.6186 10.0562 11.8295 10.2325C12.0405 10.4055 12.1996 10.6113 12.3068 10.8499C12.414 11.0851 12.4677 11.3462 12.4677 11.6333C12.4677 11.9861 12.4002 12.3008 12.2653 12.5775C12.1304 12.8507 11.9402 13.0825 11.6946 13.2727C11.4525 13.4629 11.1689 13.6082 10.8438 13.7085C10.5187 13.8053 10.1642 13.8538 9.78027 13.8538C9.46208 13.8538 9.14907 13.8105 8.84125 13.7241C8.53689 13.6341 8.26019 13.501 8.01117 13.3246C7.7656 13.1447 7.56846 12.9199 7.41974 12.6501C7.27448 12.3769 7.20184 12.0535 7.20184 11.68H8.70117C8.70117 11.8737 8.74959 12.0466 8.84644 12.1988C8.94328 12.351 9.07644 12.4703 9.24591 12.5568C9.41884 12.6432 9.6108 12.6865 9.82178 12.6865C10.0604 12.6865 10.2645 12.6432 10.434 12.5568C10.6069 12.4668 10.7383 12.3423 10.8282 12.1832C10.9216 12.0207 10.9683 11.8322 10.9683 11.6177C10.9683 11.341 10.9182 11.1197 10.8179 10.9537C10.7176 10.7842 10.574 10.6597 10.3873 10.5801C10.2005 10.5006 9.97915 10.4608 9.72321 10.4608H8.92426Z" fill="white" />
            </svg>


            <div className={(pathname != '/login' && pathname != "/upload" && (pathname != "/upload-data" && pathname != "/upload-link-data")) ? "blue-l slabel" : "black-l slabel"}>HOCHLADEN</div>
            <span className={(pathname == '/success') ? "stepperHr blue-b long" : "stepperHr black-b long"} />
            
        </div>
    );
    
}

CustomStepper.defaultProps = {
    renderBottom: props => <CustomStep {...props} />
};

export default CustomStepper;
