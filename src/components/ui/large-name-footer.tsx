import { Icons } from "@/components/ui/icons";

function Footer() {
  return (
    <footer className=" py-12 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <a href="/" className="flex items-center gap-2">
              <Icons.logo className="icon-class w-8" />
              <h2 className="text-lg font-bold">Rohit</h2>
            </a>

            <p className="text-sm dark:text-gray-400 mt-2">
              © {new Date().getFullYear()} Rohit. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white"
                  >
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/RockingThor"
                    className="text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rohitnandi/"
                    className="text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/oirohit"
                    className="text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white"
                    target="_blank"
                  >
                    X
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full flex mt-4 items-center justify-center   ">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
            Rohit :)
          </h1>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
