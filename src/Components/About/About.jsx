import SectionTitle from "../../Utils/SectionTitle";

const About = () => {
  return (
    <div className="py-4 md:py-12  px-2">
      <div className="container mx-auto">
        <SectionTitle title={"About"} />
        <div className="hero md:px-6 md:py-4">
          <div className="hero-content max-w-full flex-col-reverse md:gap-8 md:flex-row-reverse ">
            {/* video */}
            <div className="w-full md:w-2/5  ">
              <iframe
                width="100%"
                // height="315"
                style={{ width: "100%", display: "block" }}
                className="w-full min-h-[200px] md:min-h-[300px] bloc "
                src="https://www.youtube.com/embed/zgfcOWuTeYA?si=rngIJV5ciaX3LHoR"
                title="Platinum Fitness Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            {/* about content */}
            <div className="w-full md:w-3/5  space-y-3 ">
              <h2 className="text-xl text-center md:text-left md:text-3xl font-semibold">
                ABOUT <span className="text-red-500">P</span>LATINUM FITNESS
              </h2>
              <p className="text-justify ">
                We have well trained Trainers and Instructors to provide regular
                Gym activities in a planned way so that your fitness may not
                face any obstacles and you may get maximum benefits from
                Platinum Fitness. Our Aspire is to give you proper guideline
                about your physical health which will help you to maintain a
                sound mind in a sound body. So be our mates and enjoy the
                pleasure of healthy life.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* about banner */}
      <div>
        <div className="text-center bg-slate-600 text-white space-y-3 md:space-y-6 py-14 px-2">
          <h2 className="text-2xl md:text-5xl font-semibold">
            BUILD <span className="text-red-500">YOUR</span> BODY{" "}
            <span className="text-red-500">STRONG</span>
          </h2>
          <p>
            We are also equipped with Certified trainers, who helps you with
            your workout routine, diet, assessment etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
