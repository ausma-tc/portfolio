"use client";
import { useFooterHover } from "../../../app/providers/mouseContext";

const Footer = () => {
  const { setHoveringFooter } = useFooterHover();

  return (
    <footer
      className="font-amphora bg-secondary md:min-h-[567px] w-full px-6 md:px-20"
      onMouseEnter={() => setHoveringFooter(true)}
      onMouseLeave={() => setHoveringFooter(false)}
    >
      <div className="flex items-center pt-16 pb-14 md:pt-36 md:pb-32 border-b border-primary">
        <a
          href="mailto:t.corbieres@gmail.com"
          className="text-3xl leading-4 md:text-[100px] text-primary pr-10 hover:bg-secondary active:bg-secondary"
        >
          Envoyez un mail
        </a>
        <span className="max-w-[40px] md:max-w-[80px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 138 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68.0028 1.33985C68.095 0.105911 69.905 0.105911 69.9972 1.33985L73.2243 44.5091C73.2989 45.5061 74.6286 45.7887 75.1022 44.9083L95.6089 6.78378C96.195 5.69404 97.8485 6.43021 97.4309 7.59499L82.8204 48.3447C82.483 49.2857 83.5829 50.0848 84.3736 49.4731L118.614 22.9855C119.593 22.2283 120.804 23.5734 119.949 24.4676L90.0269 55.7517C89.3359 56.4742 90.0156 57.6515 90.9868 57.4143L133.04 47.1435C134.243 46.8499 134.802 48.5712 133.657 49.0403L93.5976 65.4495C92.6725 65.8284 92.8146 67.1805 93.7983 67.3588L136.394 75.0807C137.611 75.3014 137.422 77.1014 136.185 77.0642L92.9151 75.7612C91.9159 75.7311 91.4958 77.0241 92.3219 77.5871L128.094 101.966C129.117 102.663 128.212 104.231 127.097 103.694L88.0976 84.9038C87.1969 84.4699 86.2872 85.4802 86.8129 86.3305L109.576 123.152C110.227 124.205 108.763 125.268 107.963 124.324L79.9778 91.2965C79.3315 90.5338 78.0896 91.0868 78.224 92.0774L84.0428 134.974C84.2091 136.2 82.4387 136.577 82.0919 135.389L69.9599 93.834C69.6797 92.8743 68.3203 92.8743 68.0401 93.834L55.9081 135.389C55.5613 136.577 53.7909 136.2 53.9572 134.974L59.776 92.0774C59.9104 91.0867 58.6685 90.5338 58.0222 91.2965L30.0371 124.324C29.2372 125.268 27.7729 124.205 28.4236 123.152L51.1871 86.3305C51.7128 85.4802 50.8031 84.4699 49.9024 84.9038L10.9032 103.694C9.78846 104.231 8.88349 102.663 9.90598 101.966L45.6781 77.5871C46.5042 77.024 46.0841 75.7311 45.0849 75.7612L1.81474 77.0642C0.577922 77.1014 0.388734 75.3014 1.60627 75.0807L44.2017 67.3588C45.1854 67.1805 45.3275 65.8284 44.4024 65.4495L4.34321 49.0403C3.19817 48.5712 3.75748 46.8499 4.95953 47.1435L47.0132 57.4143C47.9844 57.6515 48.6641 56.4742 47.9731 55.7517L18.0514 24.4676C17.1962 23.5734 18.4073 22.2283 19.386 22.9855L53.6264 49.4731C54.4171 50.0848 55.517 49.2857 55.1796 48.3447L40.5691 7.59499C40.1515 6.43021 41.805 5.69404 42.3911 6.78378L62.8978 44.9083C63.3714 45.7887 64.7011 45.5061 64.7757 44.5091L68.0028 1.33985Z"
              fill="#110F52"
            />
          </svg>
        </span>
      </div>
      <nav className="uppercase pt-2 pb-4 flex md:pt-8 md:pb-16">
        <a
          href="https://www.linkedin.com/in/thomas-corbieres/"
          target="_blank"
          className="before:inline-block before:w-2 before:h-2 before:mr-3
            before:bg-transparent before:rounded-full before:border before:border-primary before:hover:bg-primary flex items-center pr-2 py-1 sm:text-sm text-primary"
        >
          Linkedin
        </a>
        <a
          href="https://www.malt.fr/profile/thomascorbieres"
          target="_blank"
          className="before:inline-block before:w-2 before:h-2 before:mr-3
            before:bg-transparent before:rounded-full before:border before:border-primary before:hover:bg-primary mt-1 flex items-center px-2 py-1 md:mt-0 md:ml-10 text-primary"
        >
          Malt
        </a>
        <a
          href="https://github.com/ausma-tc"
          target="_blank"
          className="before:inline-block before:w-2 before:h-2 before:mr-3
            before:bg-transparent before:rounded-full before:border before:border-primary before:hover:bg-primary mt-1 flex items-center px-2 py-1 md:mt-0 md:ml-10 text-primary"
        >
          Github
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
