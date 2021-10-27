import React from "react";
import { ContainerSmall } from "../../../modules/ContainerSmall/ContainerSmall";
import { HeaderLight } from "../../../modules/HeaderLight/HeaderLight";
import { Htag } from "../../Htag/Htag";
import { Paragraph } from "../../Paragraph/Paragraph";
import { Subscribe } from "../../Subscribe/Subscribe";

import styles from "./PrivacyPage.module.css";

export const PrivacyPage = (): JSX.Element => {
  return (
    <>
      <HeaderLight />
      <ContainerSmall className={styles.container}>
        <Htag className={styles.title} tag="h1" align="center">
          Privacy Policy of The HERA App
        </Htag>
        <div className={styles.content}>
          <ul className={styles["main-list"]}>
            <li>
              <Paragraph className={styles["content__text"]}>
                Our privacy policy describes the ways in which we collect,
                store, discloses and transfers, use, and protect user’s
                information through our Platform and application, including
                through theheraapp.com, and online services (collectively, the
                <strong>"Platform”</strong> ) and it is important for you to
                review this privacy policy. By "User information" we mean
                information that can be associated with a specific person that
                can be used to identify that person. HERA committed to
                establishing a trustworthy and secure online platform for you,
                we take the safeguard of your data genuinely and firmly about
                protecting your privacy. We understand how valuable privacy is
                to you, and we are committed to creating a reliable and secure
                environment for Users of all ages. We use the data we collect to
                provide you with a better experience and fulfill our objective
                of providing a smooth and transparent platform.
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                The HERA App is an electronic web-based Service platform for
                providing registered user certain health issues and medical
                precautions in the time of pregnancy and informative services to
                facilitate pregnant woman. You agree and acknowledge that HERA
                is only an informative service provider.
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                We collect User’s information from you when you use HERA App and
                when you sign up as a User to use a service, we collect more
                specific personal information about you, such as your name,
                address, email address, telephone, mobile number, etc. by
                providing us with your information you expressly consent to us
                processing your information in accordance with the terms of our
                privacy policy. We do not collect sensitive personal data or
                information of users like the password of your email account.
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                We may amend our privacy policy at any time by posting a revised
                version on the Platform. The revised version will be effective
                at the time we post it and, following such posting, your
                continued use of the Platform will constitute your express
                consent to us continuing to process you or your business entity
                information in accordance with the terms of our revised privacy
                policy. We would encourage you to check the Platform regularly
                for the announcement of any amendments to our privacy policy. By
                visiting this App, you agree to be bound by the terms and
                conditions of this Privacy Policy. If you do not agree please do
                not use or access our Platform, or any kind of our Service.
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                Our Platform links to other websites that may collect personally
                identifiable information about you, HERA is not responsible for
                the privacy practices or the content of those linked websites.
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                Our Platform has stringent security measures in place to protect
                the loss, misuse, and alteration of the information under our
                control. Whenever you change or access your account information,
                we offer the use of a secure server. Once your information is in
                our possession, we adhere to strict security guidelines,
                protecting it against unauthorized access.
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                By using the Platform and/ or by providing your information, you
                consent to the collection and use of the information you
                disclose on the Platform in accordance with this Privacy Policy,
                including but not limited to your consent for sharing your
                information as per this privacy policy and you also read and
                agree Users Terms.
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                In transaction or applying for HERA payment or buying a service
                from our platform, your personal details and credit/ debit card
                information are secure using security features of internet
                security. However, we cannot guarantee encryption or the privacy
                of your personal details and credit/debit card information. When
                we receive your order, it is kept encrypted until we are ready
                to process it.
              </Paragraph>
            </li>
            <li>
              <Htag className={styles.title} tag="h4">
                DISCLOSURE OF YOUR INFORMATION
              </Htag>
              <Paragraph className={styles["content__text"]}>
                We may disclose your information that we collect, or you provide
                as described in this Privacy Policy:
              </Paragraph>
              <ul className={styles["roman-list"]}>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    By registering you as user providing your contact
                    information, you consent to the disclosure of your
                    information to associate Service providers and to be
                    contacted by such service providers to provide services.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    To our subsidiaries, affiliates, contractors, service
                    providers, and other third parties we use to support our
                    business. We supply your contact information to select third
                    parties such as data aggregators, marketers, or others for
                    the purpose of sending you e-mail or otherwise communicating
                    with you. We use data we have about you to determine whether
                    you might be interested in the products, or services of a
                    particular third party.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    To a service provider or other successor in the event of a
                    merger, divestiture, restructuring, reorganization,
                    dissolution or other sale or transfer of some or all of the
                    Company's assets, whether as a going concern or as part of
                    bankruptcy, liquidation, or similar proceeding, in which
                    personal information held by the Company about our Website
                    users is among the assets transferred.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    To comply with any court order, law, or legal process,
                    including responding to any government or regulatory
                    request.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    To enforce or apply our terms of use or terms of service and
                    other agreements, including for billing and collection
                    purposes.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    If we believe disclosure is necessary or appropriate to
                    protect the rights, property, or safety of the Company, our
                    users, or others. This includes exchanging information with
                    other companies and organizations for the purposes of fraud
                    protection and credit risk reduction.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <Htag className={styles.title} tag="h4">
                USAGE DETAILS, IP ADDRESSES, COOKIES, AND OTHER TECHNOLOGIES
              </Htag>
              <Paragraph className={styles["content__text"]}>
                As you navigate through and interact with our Platform, we may
                automatically collect certain information about your equipment,
                browsing actions, and patterns, including:
              </Paragraph>
              <ul className={styles["roman-list"]}>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    Details of your visits to our Platform, including traffic
                    data, location data, logs, and other communication data and
                    the resources that you access and use on the Platform.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    Information about your computer and internet connection,
                    including your IP address, operating system, and browser
                    type. The information we collect automatically is
                    statistical data. It helps us to improve our Platform and to
                    deliver a better and more personalized service.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    If you choose to login with social media sites like
                    Instagram, WhatsApp, LinkedIn, Facebook, etc. we import the
                    information that you choose to share with us by logging into
                    that platform or site, and we make it part of your profile.
                    You can control the visibility of your information by
                    managing your privacy settings. You can also restrict the
                    information available to others by deleting information you
                    do not want visible or by not providing it at all.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <Htag className={styles.title} tag="h4">
                Our collection of your information
              </Htag>
              <ul className={styles["roman-list"]}>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    As part of your registration on the Platform, you will be
                    asked to provide us with certain information, such as name,
                    address, email address, and/or telephone number, photo, and
                    other similar information as well as some additional
                    information about you such identifying information.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    We will collect transactional information based on your
                    activities using the Platform (such as the use of services);
                    this transactional information is used solely in relation to
                    the transactions you undertake on the Platform and for no
                    other reasons.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    Please note that we may use your Internet protocol (or IP)
                    address (which is a unique number assigned to your computer
                    server or your Internet service provider (or ISP)) to
                    evaluate user trends and improve the administration of the
                    Platform.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    We may also collect information about your computer (for
                    example, browser type) and navigation information (for
                    example, the pages you visit on the Platform) along with the
                    times that you access the Platform. Finally, we may collect
                    additional information from or about you in other ways not
                    specifically described here. For example, we may collect
                    information related to your contact with our customer
                    support team or store results when you respond to a survey.
                    We may also collect feedback ratings and other comments
                    relating to your use of the HERA.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    We may automatically track certain information about you
                    based upon your behavior on our Platform. We use this
                    information to do internal research on our users'
                    demographics, interests, and behavior to better understand,
                    protect and serve our users. This information is compiled
                    and analyzed on an aggregated basis
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                We use 'cookie' technology (small computer files placed on your
                computer’s hard drive). When you go to particular website pages
                on the Platform, the cookie identifies your browser with a
                unique, random number. The cookies we use do not reveal any
                information about you.
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                By registering on the Platform, you give us your express consent
                to receive promotional emails about our services and emails
                announcing changes to, and new features on, the Platform, If, at
                any time.
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                You may not use our communication tools to send spam or
                otherwise send content that would violate our User Agreement.
                Protecting your information HERA holds your information on
                servers. By providing us with your information, you consent to
                the transfer of your information to, and its storage on, our
                servers. We take every precaution to safeguard all your
                information from unauthorized access, use or disclosure.
                However, the Internet is not a secure medium and we cannot
                guarantee the privacy of your information. You must enter your
                username and password each time you want to access your account
                or make transactions on the Platform. Choose your password
                carefully using unique numbers, letters, and special characters.
                Never share your username and password with anyone. If you are
                concerned that your username or password has been compromised,
                please contact us immediately and ensure you change your
                password by logging onto the User Account section of the HERA.
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                You Consent By using the platform and/ or by providing your
                information, you consent to the collection and use of the
                information you disclose on the Platform in accordance with this
                Privacy Policy, including but not limited to Your consent for
                sharing your information as per this privacy policy. If you
                disclose any personal information relating to other people to
                us, you represent that you have the authority to do so and to
                permit us to use the information in accordance with this Privacy
                Policy.
              </Paragraph>
            </li>
          </ul>
          <Htag className={styles.title} tag="h4">
            Contact Us
          </Htag>
          <Paragraph className={styles["content__text"]}>
            If there are any questions regarding this privacy policy, you may
            contact us using the information below.
          </Paragraph>
          <a href="mailto:melanie@theheraapp.com">
            Email: melanie@theheraapp.com
          </a>
        </div>
        <Subscribe />
      </ContainerSmall>
    </>
  );
};
