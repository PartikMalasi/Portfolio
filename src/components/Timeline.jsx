import { FaGoogleScholar } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
import kv from "/edu/kv.png";
import iiit from "/edu/iiit.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Time = () => {
  return (
    <div className="px-4">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#31304D", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2022 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaGoogleScholar />}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <img
              className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 object-contain"
              src={iiit}
              alt="IIIT Kota"
            />
            <div className=" sm:text-left">
              <h3 className="vertical-timeline-element-title">
                Indian Institute Of Information Technology Kota
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Btech CSE (Graduation)
              </h4>
              <p>Current CGPA:- 9.32</p>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#31304D", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          className="vertical-timeline-element--work"
          date="2020-2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSchool />}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <img
              className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 object-contain"
              src={kv}
              alt="Kendriya Vidyalaya"
            />
            <div className=" sm:text-left">
              <h3 className="vertical-timeline-element-title">
                Kendriya Vidyalaya No-2, Ambala Cantt
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Senior Secondary Education
              </h4>
              <p>Percentage:- 97.6%</p>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#31304D", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          className="vertical-timeline-element--work"
          date="2010 - 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSchool />}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <img
              className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 object-contain"
              src={kv}
              alt="Kendriya Vidyalaya"
            />
            <div className=" sm:text-left">
              <h3 className="vertical-timeline-element-title">
                Kendriya Vidyalaya No-2, Ambala Cantt
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Secondary Education
              </h4>
              <p>Percentage:- 95.4%</p>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Time;
