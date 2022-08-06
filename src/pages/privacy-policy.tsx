import React from 'react';
import Layout from '../sections/Layout';
import dayjs from 'dayjs';

export default function privacyPolicy(): JSX.Element {
  const date = dayjs('2022-08-06');
  return (
    <Layout>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='relative mx-auto max-w-[37.5rem] pt-20 pb-24 text-center'>
          <h1 className='text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl'>
            Privacy Policy
          </h1>
          <p className='mt-4 text-base leading-7 text-slate-600 dark:text-slate-300'>
            Last updated on {date.format('DD MMMM YYYY')}
          </p>
        </div>
      </div>
      <div className='relative px-4 sm:px-6 lg:px-8'>
        <div className='prose-sm prose prose-slate mx-auto max-w-[40rem] text-slate-800 prose-h2:text-slate-600 prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600 dark:text-slate-300 prose-h2:dark:text-slate-300'>
          <p>
            At Kanbanomatic, accessible from{' '}
            <a href='https://kanbanomatic.afif.dev'>
              https://kanbanomatic.afif.dev
            </a>
            , one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is
            collected and recorded by Kanbanomatic and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>

          <h2>Log Files</h2>

          <p>
            Kanbanomatic follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services&apos; analytics. The
            information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users&apos; movement on the
            website, and gathering demographic information. Our Privacy Policy
            was created with the help of the{' '}
            <a href='https://www.privacypolicyonline.com/privacy-policy-generator/'>
              Privacy Policy Generator
            </a>
            .
          </p>

          <h2>Cookies and Web Beacons</h2>

          <p>
            Like any other website, Kanbanomatic uses &apos;cookies&apos;. These
            cookies are used to store information including visitors&apos;
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users&apos;
            experience by customizing our web page content based on
            visitors&apos; browser type and/or other information.
          </p>

          <p>
            For more general information on cookies, please read{' '}
            <a href='https://www.privacypolicyonline.com/what-are-cookies/'>
              the &quot;Cookies&quot; article from the Privacy Policy Generator
            </a>
            .
          </p>

          <h2>Privacy Policies</h2>

          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Kanbanomatic.
          </p>

          <p>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Kanbanomatic,
            which are sent directly to users&apos; browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.
          </p>

          <p>
            Note that Kanbanomatic has no access to or control over these
            cookies that are used by third-party advertisers.
          </p>

          <h2>Third Party Privacy Policies</h2>

          <p>
            Kanbanomatic&apos;s Privacy Policy does not apply to other
            advertisers or websites. Thus, we are advising you to consult the
            respective Privacy Policies of these third-party ad servers for more
            detailed information. It may include their practices and
            instructions about how to opt-out of certain options.{' '}
          </p>

          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers&apos;
            respective websites. What Are Cookies?
          </p>

          <h2>Children&apos;s Information</h2>

          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>

          <p>
            Kanbanomatic does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>

          <h2>Online Privacy Policy Only</h2>

          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in Kanbanomatic. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </p>

          <h2>Consent</h2>

          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its Terms and Conditions.
          </p>
        </div>
      </div>
    </Layout>
  );
}
