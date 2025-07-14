import SignInSVG from "@/components/SVGs/SignInSVG";
import ContainedLink from "@/components/ui/ContainedLink";
import FormElement from "@/components/ui/FormElement";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <section className="bg-background dark:bg-backgroundDark py-24 relative">
      <div className="container py-24 relative z-20">
        <div className="bg-opacity-70 flex flex-col items-stretch justify-stretch gap-8 bg-secondaryBackground dark:bg-dropMenuDark rounded-lg max-w-xl py-16 px-4 md:px-16 mx-auto">
          <div>
            <Heading className="normal-case !text-3xl mb-2 text-center">
              Forgot Password?
            </Heading>
            <Paragraph className="!text-base text-center">
              Enter your email address and we'll send you a link to reset your
              password.
            </Paragraph>
          </div>

          <FormElement
            label="your email"
            name="email"
            placeholder="Enter your Email"
          />

          <ContainedLink href="#" className="text-center py-5">
            Send Reset Link
          </ContainedLink>

          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Remember your password?
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/signin"
                className="text-foreground hover:underline transition font-medium"
              >
                Sign In
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/signup"
                className="text-foreground hover:underline transition font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-10">
        <SignInSVG />
      </div>
    </section>
  );
}
