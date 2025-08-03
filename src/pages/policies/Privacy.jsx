import React from "react";

const Privacy = () => {
  return (
    <div className="mx-4 mt-8 text-justify flex justify-center">
      <div className="max-w-280">
        <h2 className="text-2xl font-light text-gray-700">Privacy Policy</h2>
        <p className="text-sm text-gray-600 text-justify mt-4">
          The terms "we", "our", and "us" used in this policy refer to TAATE.{" "}
          <br />
          <br /> We are committed to protecting the privacy of our customers.
          This privacy policy makes you able to understand what information we
          may collect from you when you visit taateclothing.net and its
          subpages. It also clarifies, how we use such information and the
          choices you have with respect to our use of this information.
        </p>
        <div className="mt-4 flex flex-col gap-6">
          <div>
            <h3 className="font-bold text-sm text-gray-600">
              What information we collect
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              When you visit taateclothing.net and its subpages, place an order,
              make a purchase, contact us or participate in any activities we
              conduct, we collect your identifiable information, viz.: name,
              email address, phone number, etc. We also maintain records of your
              history and interests to improve your shopping experience.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-600">
              How we use information we collect
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              We use your identifiable information to help us learn more about
              your shopping preferences and to provide you with the best
              possible products and services. In this regard, we may share your
              identifiable information with third-parties that provide us
              support services or help us market TAATE products and services.
              Third-parties are contractually prohibited from using your
              identifiable information in any manner other than helping TAATE.
              We may share your personal information if necessary to comply with
              laws, government requests or to protect the rights of TAATE.{" "}
              <br />
              <br />
              We may use your identifiable information to send periodic emails
              to provide you with information and updates regarding TAATE new
              arrivals, campaigns, and any other activities. However, if you
              prefer to no longer receive TAATE emails, you can unsubscribe
              following the instructions at the bottom of each of our emails.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-600">
              Usage of "cookies"
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              We use "cookie" technology that allows our taateclothing.net to
              recognize your browser, distinguish you from other customers, and
              enhance and personalize your online shopping experience. Cookies
              help us remember and process the items in your shopping cart,
              understand and save your preferences for future visits, and
              compile aggregate data about site traffic and site interaction so
              that we can improve our website design, products, services and
              campaigns. In this case also, third-parties are contractually
              prohibited from using your information of browsing history and
              product interest in any manner other than helping TAATE. <br />
              <br />
              If you prefer, you can change the settings on your browser to
              prevent cookies being stored. This may, however, may prevent you
              from taking full advantage of taateclothing.net.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-600">
              Third-party links
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              taateclothing.net may contain links to/from the websites of our
              parent brand, sister brands, partners, social media sites, and
              other third parties. If you follow a link to any of these
              websites, please note that they have their own privacy policies.
              We, therefore, have no responsibility or liability for the content
              and activities of these linked sites. Please check their policies
              before you submit any personal data on their websites.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-600">Questions</h3>
            <p className="text-sm text-gray-600 mt-1">
              For any concerns regarding this policy you can contact us via
              email at service@taate.net.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
