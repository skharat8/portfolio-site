import ContactBar from "./ContactBar";
import ContactForm from "./ContactForm";
import ContactPhoneIcon from "./ContactPhoneIcon";
import MaxWidthWrapper from "./MaxWidthWrapper";
import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <section
      id="contact"
      className="mb-4 scroll-mt-7 bg-slate-950 font-[Noto_Sans_Variable]"
    >
      <MaxWidthWrapper maxWidth="1200px">
        <SectionTitle
          className="mb-6"
          icon={<ContactPhoneIcon className="mt-1 h-[45px] w-[45px]" />}
        >
          Let's Connect
        </SectionTitle>

        <ContactBar />
        <ContactForm />
      </MaxWidthWrapper>
    </section>
  );
}

export default Contact;
