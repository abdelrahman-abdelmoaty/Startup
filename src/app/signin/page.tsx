import GoogleSVG from "@/components/SVGs/GoogleSVG";
import SignInSVG from "@/components/SVGs/SignInSVG";
import ContainedLink from "@/components/ui/ContainedLink";
import FormElement from "@/components/ui/FormElement";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

export default function SignIn() {
  return (
    <section className="bg-background dark:bg-backgroundDark py-24 relative">
      <div className="container py-24 relative z-20">
        <div className="bg-opacity-70 flex flex-col  items-stretch justify-stretch gap-8 bg-secondaryBackground dark:bg-dropMenuDark rounded-lg max-w-xl py-16 px-4 md:px-16 mx-auto">
          <div>
            <Heading className="normal-case !text-3xl mb-2 text-center">
              Sign in to your account
            </Heading>
            <Paragraph className="!text-base text-center">
              Login to your account for a faster checkout.
            </Paragraph>
          </div>
          <a
            href="#"
            className="bg-background dark:bg-[#242B51] py-3 rounded-lg shadow-md hover:text-foreground"
          >
            <div className="flex items-center justify-center gap-3">
              <GoogleSVG />
              <p>Sign in with Google</p>
            </div>
          </a>
          <div className="flex items-center justify-between gap-5">
            <hr className="flex-1" />
            <p className="text-sm text-gray-500 dark:text-white">Or, sign in with your email</p>
            <hr className="flex-1" />
          </div>
          <FormElement label="your email" name="email" placeholder="Enter your Email" />
          <FormElement label="your password" name="pwd" placeholder="Enter your Password" />
          <div className="flex justify-between items-center">
            <label htmlFor="accept-terms" className="text-sm text-gray-500 flex items-start gap-3">
              <div className="w-6 h-6 border-2 p-2 cursor-pointer rounded border-gray-200 dark:border-gray-700 flex items-center justify-center">
                <input
                  type="checkbox"
                  name="accept-terms"
                  id="accept-terms"
                  className="sr-only peer"
                />
                <span className="transition opacity-0 peer-checked:opacity-100">
                  <svg
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="scale-105"
                  >
                    <path
                      d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                      stroke-width="0.4"
                    ></path>
                  </svg>
                </span>
              </div>
              <div>
                <p className="font-medium text-sm text-gray-400">Keep me signed in</p>
              </div>
            </label>
            <a
              href="#"
              aria-label="forgot password"
              className="text-foreground hover:underline transition"
            >
              Forgot Password?
            </a>
          </div>
          <ContainedLink className="text-center py-5">Sign in</ContainedLink>
          <p className="text-center">
            Don’t you have an account?{" "}
            <a
              href="#"
              aria-label="signup"
              className="text-foreground hover:underline transition"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-10">
        <SignInSVG />
      </div>
    </section>
  );
}
