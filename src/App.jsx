import { useState } from "react";
import { data } from "./assets/data";
import avatar from "./assets/images/image-jeremy.png";
import ellipsis from "./assets/images/icon-ellipsis.svg";
import exercise from "./assets/images/icon-exercise.svg";
import play from "./assets/images/icon-play.svg";
import selfCare from "./assets/images/icon-self-care.svg";
import social from "./assets/images/icon-social.svg";
import study from "./assets/images/icon-study.svg";
import work from "./assets/images/icon-work.svg";

function App() {
  const [period, setPeriod] = useState("Weekly");

  const periodExtensions = {
    Daily: "Yesterday",
    Weekly: "Last week",
    Monthly: "Last month",
  };

  const extension = periodExtensions[period];

  const activityData = {
    Exercise: { image: exercise, background: "bg-green-300" },
    Social: { image: social, background: "bg-purple-500" },
    Work: { image: work, background: "bg-orange-300" },
    Play: { image: play, background: "bg-blue-300" },
    Study: { image: study, background: "bg-red-300" },
    SelfCare: { image: selfCare, background: "bg-yellow-200" },
  };

  return (
    <div className="px-2 py-7 grid grid-cols-1 gap-5 md:grid md:grid-cols-4 lg:px-24 max-w-7xl lg:mx-auto">
      <header className="rounded-2xl bg-blue-950 md:row-span-2">
        <div className="p-7 flex flex-row gap-5 items-center bg-blue-700 md:pb-14 rounded-2xl md:flex-col">
          <img src={avatar} alt="" className="size-14 rounded-full border-2 border-white md:mr-auto" />
          <div>
            <span className="text-sm text-gray-400">Report for</span>
            <h1 className="text-xl font-semibold text-white md:text-3xl">Jeremy Robson</h1>
          </div>
        </div>
        <div className="flex justify-between px-10 py-5 md:flex-col md:gap-5">
          {["Daily", "Weekly", "Monthly"].map((frame) => (
            <span
              key={frame}
              onClick={() => setPeriod(frame)}
              className={`${period === frame ? "text-white text-lg" : "text-gray-400"} font-semibold cursor-pointer transition duration-300`}
            >
              {frame}
            </span>
          ))}
        </div>
      </header>

      {data.map((activity) => {
        const { current, previous } = activity.timeframes[period.toLowerCase()];
        const cleanTitle = activity.title.replace(/\s/g, "");
        const { image, background } = activityData[cleanTitle] || {};

        return (
          <div key={activity.title} className="rounded-xl bg-blue-950 flex flex-col overflow-hidden">
            <div className={`${background}`}>
              <img src={image} alt={activity.title} className="ml-auto h-14 pr-5" />
            </div>
            <div className="p-5 rounded-xl -mt-3 z-20 bg-blue-950">
              <div className="flex justify-between items-center">
                <h1 className="text-white font-semibold">{activity.title}</h1>
                <img src={ellipsis} alt="Options" className="h-auto cursor-pointer" />
              </div>
              <div className="flex justify-between items-center md:flex-col md:items-start md:mt-3">
                <p className="text-3xl text-white md:text-4xl">{current} hrs</p>
                <p className="text-sm text-gray-400">
                  {extension} - {previous} hrs
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
