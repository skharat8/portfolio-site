import aboutMeIcon from "@images/aboutMe.svg";

import MaxWidthWrapper from "../MaxWidthWrapper";
import SectionTitle from "../SectionTitle";
import AboutSubheaderWrapper from "./AboutSubheaderWrapper";
import AboutTextWrapper from "./AboutTextWrapper";

function AboutMe() {
  return (
    <section
      id="about"
      className="scroll-mt-7 overflow-x-clip bg-slate-900 font-[Noto_Sans_Variable]"
    >
      <MaxWidthWrapper maxWidth="1200px">
        <SectionTitle
          className="mb-7"
          icon={<img src={aboutMeIcon} className="h-[2.8rem] w-[2.8rem]" />}
        >
          About Me
        </SectionTitle>

        <div className="flex-center-col gap-6 md:flex-row md:items-start md:gap-8">
          <AboutTextWrapper
            enterDirection="right"
            delayInSeconds={0.3}
            invertOnDesktop
          >
            <AboutSubheaderWrapper color="red">My Story</AboutSubheaderWrapper>

            <p className="mt-2 mb-4">
              Hi there! With about 10 years of experience in firmware
              development in C++, I decided to make a career transition to a
              more user-centric role in frontend web development. I set myself
              on the path to mastering various technologies used to design
              modern web apps with a strong focus on building responsive,
              beautiful, and engaging experiences.
            </p>
            <p>
              Its a real joy to transform ideas into interactive experiences and
              solve technical challenges along the way. As the landscape of
              frontend development changes continuously, the road to perfecting
              this art doesn't stop here, and I am always looking for new
              challenges and opportunities.
            </p>
          </AboutTextWrapper>

          <AboutTextWrapper
            enterDirection="left"
            delayInSeconds={0.3}
            invertOnDesktop
          >
            <AboutSubheaderWrapper color="red">
              What makes me stand out?
            </AboutSubheaderWrapper>

            <p className="mt-2 mb-4">
              I pride myself in having a keen eye for details, and strive to
              write clean code that is well organized and documented. Over the
              past year, I have dedicated myself to learning the inner workings
              of both React and various CSS layout algorithms.
            </p>
            <p className="mb-4">
              The behavior of CSS often tends to be a source of obstacles for
              many developers, so focusing on it has given me the ability to
              implement challenging designs with confidence.
            </p>
            <p className="mb-4">
              My past as an experienced developer means I am familiar with JIRA
              task management, code reviews, and working collaboratively in an
              agile environment. I also have experience taking ownership of
              major features that required effort across multiple teams.
            </p>
            <p>Excited to see what the future holds for me in web design!</p>
          </AboutTextWrapper>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default AboutMe;
