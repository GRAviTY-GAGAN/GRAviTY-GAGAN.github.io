import React from "react";
import GitHubCalendar from "react-github-calendar";

const Stats = () => {
  return (
    <div className="max-w-[1000px] mx-auto  p-4 w-full h-screen xs:h-full xs:pt-[100px] md:pt-[200px] lg:pt-40 lg:pb-40 xl:pt-0 bg-[#030519] lg:flex flex-col justify-center items-center ">
      <div className="flex xs:gap-16 xs:flex-col md:flex-row md:gap-6">
        <div
          id="github-streak-stats"
          src="gravity-gagan/github-readme-streak-stats.herokuapp.com"
        >
          <a href="https://github.com/GRAviTY-GAGAN">
            <img
              className="w-[100%] "
              src="https://streak-stats.demolab.com?user=GRAviTY-GAGAN&theme=nord"
            />
          </a>
        </div>
        <div
          id="github-stats-card"
          src="gravity-gagan/github-readme-stats.vercel.app/api"
        >
          <picture
            id="github-top-langs"
            src="github-readme-stats.vercel.app/api/top-langs"
          >
            <source
              srcSet="https://github-readme-stats.vercel.app/api?username=GRAviTY-GAGAN&show_icons=true&theme=nord"
              media="(prefers-color-scheme: transparent)"
            />

            <img
              className="w-[100%]"
              src="https://github-readme-stats.vercel.app/api?username=GRAviTY-GAGAN&show_icons=true&theme=nord"
            />
          </picture>
        </div>
      </div>

      <div>
        <GitHubCalendar
          className="react-activity-calendar"
          style={{
            color: "white",
            marginTop: "4rem",
            padding: "0 1rem 0 1rem",
          }}
          year={"last"}
          showWeekdayLabels={true}
          hideColorLegend
          hideTotalCount
          username="GRAviTY-GAGAN"
        />
      </div>

      <div className="mt-16">
        <a href="http://www.github.com/GRAviTY-GAGAN">
          <img
            src="https://github-readme-activity-graph.cyclic.app/graph?username=GRAviTY-GAGAN&bg_color=12000&color=ffffff&line=0891b2&point=ffffff&area_color=000000&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph"
            alt="GitHub Commits Graph"
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;
