import { tw } from "@/lib/utils";

import ContactBarIcon from "./ContactBarIcon";
import GithubIcon from "./GithubIcon";
import LinkedInIcon from "./LinkedInIcon";

function ContactBar() {
  const itemStyles = tw`flex-center mx-2 h-full transition-transform`;

  return (
    <div
      className="mx-auto mb-4 flex h-[3rem] w-fit gap-2 rounded-xl bg-radial-[at_50%_100%]
        from-slate-500 to-slate-600 px-4"
    >
      <div className={itemStyles}>
        <a href="https://www.linkedin.com/in/smiteshkharat/" target="_blank">
          <ContactBarIcon icon={LinkedInIcon} />
        </a>
      </div>

      <div className={itemStyles}>
        <a href="https://github.com/skharat8/firebird" target="_blank">
          <ContactBarIcon icon={GithubIcon} />
        </a>
      </div>
    </div>
  );
}

export default ContactBar;
