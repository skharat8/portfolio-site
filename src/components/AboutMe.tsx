import aboutMeIcon from "@images/aboutMe.svg";

import { tw } from "@/lib/utils";

import MaxWidthWrapper from "./MaxWidthWrapper";
import SectionTitle from "./SectionTitle";

function AboutMe() {
  const textWrapperStyles = tw`group hover:border-secondary-300 relative mb-6 w-[min(44rem,95%)] rounded-md
  border-4 border-slate-300 bg-gradient-to-br from-slate-700 to-slate-900 px-6
  py-5 text-slate-100`;

  const subHeaderStyles = tw`group-hover:bg-accent-red-800 group-hover:text-accent-red-100
  group-hover:border-accent-red-400 absolute -translate-x-3
  -translate-y-[calc(100%+0.25rem)] rounded-md border-2 border-slate-400
  bg-slate-900 px-3 py-1 text-xl font-bold text-slate-400`;

  return (
    <section id="about" className="scroll-mt-7 bg-slate-900">
      <MaxWidthWrapper maxWidth="1200px">
        <SectionTitle
          className="mb-7"
          icon={
            <img
              src={aboutMeIcon}
              className="h-[34px] w-[34px] md:h-[45px] md:w-[45px]"
            />
          }
        >
          About Me
        </SectionTitle>

        <div className="flex-center-col gap-4 font-[Noto_Sans_Variable] md:flex-row md:gap-8">
          <div className={textWrapperStyles}>
            <h3 className={subHeaderStyles}>My Story</h3>

            <p className="mt-2 mb-4">
              Hi there! With about 10 years of experience in firmware
              development in C++, I decided to make a career transition to a
              more user-centric role in frontend web development. I set myself
              on the path to mastering various technologies used to design
              modern web apps with a strong focus on building responsive,
              beautiful, and engaging experiences.
            </p>
            <p>
              It's been quite a journey, as I have learnt so much that goes into
              creating memorable experiences. Its a joy to transform ideas into
              interactive experiences and solve technical challenges along the
              way. As the landscape of frontend development changes
              continuously, the road to perfecting this art doesn't stop here,
              and I am always looking for new challenges and opportunities.
            </p>
          </div>

          <div className={textWrapperStyles}>
            <h3 className={subHeaderStyles}>What makes me stand out?</h3>

            <p className="mt-2 mb-4">
              I pride myself in having a keen eye for details, and strive to
              write clean code that is well organized and documented. Over the
              past year, I have dedicated myself to learning the inner workings
              of both React and various CSS layout algorithms. The behavior of
              CSS often tends to be confusing and a source of obstacles for many
              developers, so focusing on it has given me the ability to
              implement challenging designs with confidence.
            </p>
            <p>
              My past as an experienced developer means I am familiar with JIRA
              task management, code reviews, and working collaboratively in an
              agile environment. I have experience taking ownership of major
              features that required effort across multiple teams, and...
              Excited to see what the future holds for me in web design!
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default AboutMe;
