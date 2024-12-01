import "./timeline.css";

import { useEffect, useRef } from "react";

function Timeline() {
  const timelineItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rise-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    timelineItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="resume-content">
      <h1>
        <span>#</span> Experience
      </h1>
      <div className="resume-body">
        <div className="timeline">
          <div className="timeline-today">
            <div className="timeline-date-today">Today</div>
            <div className="timeline-circle-today"> </div>
            <div className="timeline-content-today"> </div>
          </div>
          <div
            className="timeline-item"
            ref={(el) => (timelineItemsRef.current[0] = el!)}
          >
            <div className="timeline-date">April 2022</div>
            <div className="timeline-circle"> </div>
            <div className="timeline-content">
              <h3>
                <a href="https://kaishi-pu.ac.jp/" target="_blank">
                  Kaishi Professional University
                </a>
              </h3>
              <p>Niigata, Japan</p>
              <p>From April 2022 to Today</p>
              <p>Information Faculty</p>
            </div>
          </div>
          <div
            className="timeline-item"
            ref={(el) => (timelineItemsRef.current[1] = el!)}
          >
            <div className="timeline-date">October 2020</div>
            <div className="timeline-circle"> </div>
            <div className="timeline-content">
              <h3>
                <a href="https://www.kla.ac/school/kyotochuo/" target="_blank">
                  Kyoshin Language Academy
                </a>
              </h3>
              <p>Kyoto, Japan</p>
              <p>From October 2020 to March 2022</p>
              <p>Japanese Language</p>
            </div>
          </div>
          <div
            className="timeline-item"
            ref={(el) => (timelineItemsRef.current[2] = el!)}
          >
            <div className="timeline-date">July 2017</div>
            <div className="timeline-circle"> </div>
            <div className="timeline-content">
              <h3>
                <a href="https://sutomo-mdn.sch.id/sutomo1-sma" target="_blank">
                  SMA Sutomo 1 Medan
                </a>
              </h3>
              <p>Medan, Indonesia</p>
              <p>From July 2017 to June 2020</p>
              <p>High School</p>
            </div>
          </div>
          <div
            className="timeline-item"
            ref={(el) => (timelineItemsRef.current[3] = el!)}
          >
            <div className="timeline-date">July 2014</div>
            <div className="timeline-circle"> </div>
            <div className="timeline-content">
              <h3>
                <a href="https://sutomo-mdn.sch.id/sutomo1-smp" target="_blank">
                  SMP Sutomo 1 Medan
                </a>
              </h3>
              <p>Medan, Indonesia</p>
              <p>From July 2014 to June 2017</p>
              <p>Middle School</p>
            </div>
          </div>
          <div
            className="timeline-item"
            ref={(el) => (timelineItemsRef.current[4] = el!)}
          >
            <div className="timeline-date">July 2008</div>
            <div className="timeline-circle"> </div>
            <div className="timeline-content">
              <h3>
                <a href="https://sutomo-mdn.sch.id/sutomo1-sd" target="_blank">
                  SD Sutomo 1 Medan
                </a>
              </h3>
              <p>Medan, Indonesia</p>
              <p>From July 2008 to June 2014</p>
              <p>Elementary School</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
