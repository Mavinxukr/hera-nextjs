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
          PRIVACY NOTICE
        </Htag>
        <Htag tag="subtitle" align="center">
          Last updated July 15, 2021
        </Htag>
        <div className={styles.content}>
          <Paragraph className={styles["content__text"]}>
            Thank you for choosing to be part of our community at Hera App
            ("Company", "we", "us", "our"). We are committed to protecting your
            personal information and your right to privacy. If you have any
            questions or concerns about this privacy notice, or our practices
            with regards to your personal information, please contact us at
            <a href="mailto:melanie@theheraapp.com">
              &nbsp;melanie@theheraapp.com
            </a>
            .
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            When you visit our website
            <a href="https://theheraapp.com/" target="_blank">
              &nbsp;https://theheraapp.com/
            </a>
            (the "Website"), use our mobile application, as the case may be (the
            "App") and more generally, use any of our services (the "Services",
            which include the Website and App), we appreciate that you are
            trusting us with your personal information. We take your privacy
            very seriously. In this privacy notice, we seek to explain to you in
            the clearest way possible what information we collect, how we use it
            and what rights you have in relation to it. We hope you take some
            time to read through it carefully, as it is important. If there are
            any terms in this privacy notice that you do not agree with, please
            discontinue use of our Services immediately.
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            This privacy notice applies to all information collected through our
            Services (which, as described above, includes our Website and App),
            as well as, any related services, sales, marketing or events.
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            <b>
              Please read this privacy notice carefully as it will help you
              understand what we do with the information that we collect.
            </b>
          </Paragraph>
          <Htag tag="h3" className={styles["content__title"]}>
            TABLE OF CONTENTS
          </Htag>
          <ol>
            <a href="/privacy/#infocollect">
              <li>WHAT INFORMATION DO WE COLLECT?</li>
            </a>
            <a href="/privacy/#infouse">
              <li>HOW DO WE USE YOUR INFORMATION?</li>
            </a>
            <a href="/privacy/#infoshare">
              <li>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</li>{" "}
            </a>
            <a href="/privacy/#sociallogins">
              <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>{" "}
            </a>
            <a href="/privacy/#intltransfers">
              <li>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</li>{" "}
            </a>
            <a href="/privacy/#pwebsites">
              <li>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</li>{" "}
            </a>
            <a href="/privacy/#inforetain">
              <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>{" "}
            </a>
            <a href="/privacy/#infosafe">
              <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>{" "}
            </a>
            <a href="/privacy/#infominors">
              <li>DO WE COLLECT INFORMATION FROM MINORS?</li>{" "}
            </a>
            <a href="/privacy/#privacyrights">
              <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>{" "}
            </a>
            <a href="/privacy/#DNT">
              <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>{" "}
            </a>
            <a href="/privacy/#caresidents">
              <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>{" "}
            </a>
            <a href="/privacy/#policyupdates">
              <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>{" "}
            </a>
            <a href="/privacy/#contact">
              <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
            </a>
          </ol>
          <Htag tag="h3" className={styles["content__title"]} id="infocollect">
            1. WHAT INFORMATION DO WE COLLECT?
          </Htag>
          <Paragraph className={styles["content__text"]}>
            Information collected through our App
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            <i>
              In Short: We collect information regarding your geolocation,
              mobile device, push notifications, when you use our App.
            </i>
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            If you use our App, we also collect the following information:
          </Paragraph>
          <ul className={styles["content__list"]}>
            <li>
              <Paragraph className={styles["content__text"]}>
                <i>Mobile Device Access.</i>
                We may request access or permission to certain features from
                your mobile device, including your mobile device's camera, and
                other features. If you wish to change our access or permissions,
                you may do so in your device's settings.
              </Paragraph>
            </li>

            <li>
              <Paragraph className={styles["content__text"]}>
                <i>Push Notifications.</i> We may request to send you push
                notifications regarding your account or certain features of the
                App. If you wish to opt-out from receiving these types of
                communications, you may turn them off in your device's settings.
              </Paragraph>
            </li>
          </ul>
          <Paragraph className={styles["content__text"]}>
            This information is primarily needed to maintain the security and
            operation of our App, for troubleshooting and for our internal
            analytics and reporting purposes.
          </Paragraph>
          <Htag tag="h3" className={styles["content__title"]} id="infouse">
            2. HOW DO WE USE YOUR INFORMATION?
          </Htag>
          <Paragraph className={styles["content__text"]}>
            <i>
              In Short: We process your information for purposes based on
              legitimate business interests, the fulfillment of our contract
              with you, compliance with our legal obligations, and/or your
              consent.
            </i>
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            We use personal information collected via our Services for a variety
            of business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations. We indicate the specific processing grounds we rely on
            next to each purpose listed below.
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            We use the information we collect or receive:
          </Paragraph>
          <ul className={styles["content__list"]}>
            <li>
              <Paragraph className={styles["content__text"]}>
                To send you marketing and promotional communications. We and/or
                our third-party marketing partners may use the personal
                information you send to us for our marketing purposes, if this
                is in accordance with your marketing preferences. For example,
                when expressing an interest in obtaining information about us or
                our Services, subscribing to marketing or otherwise contacting
                us, we will collect personal information from you. You can
                opt-out of our marketing emails at any time (see the "
                <a
                  href="https://app.termly.io/dashboard/website/67948e5f-435e-4b78-b152-f72945ba454d/privacy-policy#privacyrights"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WHAT ARE YOUR PRIVACY RIGHTS?
                </a>
                " below).
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                Deliver targeted advertising to you. We may use your information
                to develop and display personalized content and advertising (and
                work with third parties who do so) tailored to your interests
                and/or location and to measure its effectiveness.
              </Paragraph>
            </li>
          </ul>
          <Htag tag="h3" className={styles["content__title"]} id="infoshare">
            3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
          </Htag>
          <Paragraph className={styles["content__text"]}>
            <i>
              In Short: We only share information with your consent, to comply
              with laws, to provide you with services, to protect your rights,
              or to fulfill business obligations.
            </i>
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            We may process or share your data that we hold based on the
            following legal basis:
          </Paragraph>
          <ul className={styles["content__list"]}>
            <li>
              <Paragraph className={styles["content__text"]}>
                Consent: We may process your data if you have given us specific
                consent to use your personal information for a specific purpose.
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                Legitimate Interests: We may process your data when it is
                reasonably necessary to achieve our legitimate business
                interests.
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                Performance of a Contract: Where we have entered into a contract
                with you, we may process your personal information to fulfill
                the terms of our contract.
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                Legal Obligations: We may disclose your information where we are
                legally required to do so in order to comply with applicable
                law, governmental requests, a judicial proceeding, court order,
                or legal process, such as in response to a court order or a
                subpoena (including in response to public authorities to meet
                national security or law enforcement requirements).
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                Vital Interests: We may disclose your information where we
                believe it is necessary to investigate, prevent, or take action
                regarding potential violations of our policies, suspected fraud,
                situations involving potential threats to the safety of any
                person and illegal activities, or as evidence in litigation in
                which we are involved.
              </Paragraph>
            </li>
          </ul>
          <Paragraph className={styles["content__text"]}>
            More specifically, we may need to process your data or share your
            personal information in the following situations:
          </Paragraph>
          <ul className={styles["content__list"]}>
            <li>
              <Paragraph className={styles["content__text"]}>
                Business Transfers. We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of
                company assets, financing, or acquisition of all or a portion of
                our business to another company.
              </Paragraph>
            </li>
            <li>
              <Paragraph className={styles["content__text"]}>
                Offer Wall. Our App may display a third-party hosted "offer
                wall." Such an offer wall allows third-party advertisers to
                offer virtual currency, gifts, or other items to users in return
                for the acceptance and completion of an advertisement offer.
                Such an offer wall may appear in our App and be displayed to you
                based on certain data, such as your geographic area or
                demographic information. When you click on an offer wall, you
                will be brought to an external website belonging to other
                persons and will leave our App. A unique identifier, such as
                your user ID, will be shared with the offer wall provider in
                order to prevent fraud and properly credit your account with the
                relevant reward. Please note that we do not control third-party
                websites and have no responsibility in relation to the content
                of such websites. The inclusion of a link towards a third-party
                website does not imply an endorsement by us of such website.
                Accordingly, we do not make any warranty regarding such
                third-party websites and we will not be liable for any loss or
                damage caused by the use of such websites. In addition, when you
                access any third-party website, please understand that your
                rights while accessing and using those websites will be governed
                by the privacy notice and terms of service relating to the use
                of those websites.
              </Paragraph>
            </li>
          </ul>
          <Htag tag="h3" className={styles["content__title"]} id="sociallogins">
            4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </Htag>
          <Paragraph className={styles["content__text"]}>
            <i>
              In Short: If you choose to register or log in to our services
              using a social media account, we may have access to certain
              information about you.
            </i>
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            Our Services offers you the ability to register and login using your
            third-party social media account details (like your Facebook or
            Twitter logins). Where you choose to do this, we will receive
            certain profile information about you from your social media
            provider. The profile information we receive may vary depending on
            the social media provider concerned, but will often include your
            name, email address, friends list, profile picture as well as other
            information you choose to make public on such social media platform.
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            We will use the information we receive only for the purposes that
            are described in this privacy notice or that are otherwise made
            clear to you on the relevant Services. Please note that we do not
            control, and are not responsible for, other uses of your personal
            information by your third-party social media provider. We recommend
            that you review their privacy notice to understand how they collect,
            use and share your personal information, and how you can set your
            privacy preferences on their sites and apps.
          </Paragraph>

          <Htag
            tag="h3"
            className={styles["content__title"]}
            id="intltransfers"
          >
            5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
          </Htag>
          <Paragraph className={styles["content__text"]}>
            <i>
              In Short: We may transfer, store, and process your information in
              countries other than your own.
            </i>
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            Our servers are located in. If you are accessing our Services from
            outside, please be aware that your information may be transferred
            to, stored, and processed by us in our facilities and by those third
            parties with whom we may share your personal information (see "
            <a
              href="https://app.termly.io/dashboard/website/67948e5f-435e-4b78-b152-f72945ba454d/privacy-policy#infoshare"
              target="_blank"
              rel="noopener noreferrer"
            >
              WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            </a>
            " above), in and other countries.
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            If you are a resident in the European Economic Area (EEA) or United
            Kingdom (UK), then these countries may not necessarily have data
            protection laws or other similar laws as comprehensive as those in
            your country. We will however take all necessary measures to protect
            your personal information in accordance with this privacy notice and
            applicable law.
          </Paragraph>
          <Htag tag="h3" className={styles["content__title"]} id="pwebsites">
            6. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
          </Htag>
          <Paragraph className={styles["content__text"]}>
            <i>
              In Short: We are not responsible for the safety of any information
              that you share with third-party providers who advertise, but are
              not affiliated with, our Website.
            </i>
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            The Services may contain advertisements from third parties that are
            not affiliated with us and which may link to other websites, online
            services or mobile applications. We cannot guarantee the safety and
            privacy of data you provide to any third parties. Any data collected
            by third parties is not covered by this privacy notice. We are not
            responsible for the content or privacy and security practices and
            policies of any third parties, including other websites, services or
            applications that may be linked to or from the Services. You should
            review the policies of such third parties and contact them directly
            to respond to your questions.
          </Paragraph>

          <Htag tag="h3" className={styles["content__title"]} id="inforetain">
            7. HOW LONG DO WE KEEP YOUR INFORMATION?
          </Htag>
          <Paragraph className={styles["content__text"]}>
            <i>
              In Short: We keep your information for as long as necessary to
              fulfill the purposes outlined in this privacy notice unless
              otherwise required by law.
            </i>
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting or other legal requirements). No purpose in this
            notice will require us keeping your personal information for longer
            than the period of time in which users have an account with us.
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </Paragraph>
          <Htag tag="h3" className={styles["content__title"]} id="infosafe">
            8. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </Htag>
          <Paragraph className={styles["content__text"]}>
            <i>
              In Short: We aim to protect your personal information through a
              system of organizational and technical security measures.
            </i>
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            We have implemented appropriate technical and organizational
            security measures designed to protect the security of any personal
            information we process. However, despite our safeguards and efforts
            to secure your information, no electronic transmission over the
            Internet or information storage technology can be guaranteed to be
            100% secure, so we cannot promise or guarantee that hackers,
            cybercriminals, or other unauthorized third parties will not be able
            to defeat our security, and improperly collect, access, steal, or
            modify your information. Although we will do our best to protect
            your personal information, transmission of personal information to
            and from our Services is at your own risk. You should only access
            the Services within a secure environment.
          </Paragraph>

          <Htag tag="h3" className={styles["content__title"]} id="infominors">
            9. DO WE COLLECT INFORMATION FROM MINORS?
          </Htag>
          <Paragraph className={styles["content__text"]}>
            <i>
              In Short: We do not knowingly collect data from or market to
              children under 18 years of age.
            </i>
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            We do not knowingly solicit data from or market to children under 18
            years of age. By using the Services, you represent that you are at
            least 18 or that you are the parent or guardian of such a minor and
            consent to such minor dependent’s use of the Services. If we learn
            that personal information from users less than 18 years of age has
            been collected, we will deactivate the account and take reasonable
            measures to promptly delete such data from our records. If you
            become aware of any data we may have collected from children under
            age 18, please contact us at.
          </Paragraph>
          <Htag
            tag="h3"
            className={styles["content__title"]}
            id="privacyrights"
          >
            10. WHAT ARE YOUR PRIVACY RIGHTS?
          </Htag>
          <Paragraph className={styles["content__text"]}>
            <i>
              In Short: You may review, change, or terminate your account at any
              time.
            </i>
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            If you are a resident in the EEA or UK and you believe we are
            unlawfully processing your personal information, you also have the
            right to complain to your local data protection supervisory
            authority. You can find their contact details here:
            <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
              &nbsp;http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
            </a>
            .
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            If you are a resident in Switzerland, the contact details for the
            data protection authorities are available here:
            <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">
              &nbsp;https://www.edoeb.admin.ch/edoeb/en/home.html
            </a>
            .
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            If you have questions or comments about your privacy rights, you may
            email us at
            <a href="mailto:melanie@theheraapp.com">
              &nbsp;melanie@theheraapp.com
            </a>
            .
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            Account Information
          </Paragraph>

          <Paragraph className={styles["content__text"]}>
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </Paragraph>
          <ul className={styles["content__list"]}>
            <li>
              <Paragraph className={styles["content__text"]}>
                Log in to your account settings and update your user account.
              </Paragraph>
            </li>
          </ul>
          <Paragraph className={styles["content__text"]}>
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may retain some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our Terms of Use and/or comply with applicable legal
            requirements.
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            Opting out of email marketing: You can unsubscribe from our
            marketing email list at any time by clicking on the unsubscribe link
            in the emails that we send or by contacting us using the details
            provided below. You will then be removed from the marketing email
            list — however, we may still communicate with you, for example to
            send you service-related emails that are necessary for the
            administration and use of your account, to respond to service
            requests, or for other non-marketing purposes. To otherwise opt-out,
            you may:
          </Paragraph>
          <ul className={styles["content__list"]}>
            <li>
              <Paragraph className={styles["content__text"]}>
                Access your account settings and update your preferences.
              </Paragraph>
            </li>
          </ul>

          <Htag tag="h3" className={styles["content__title"]} id="DNT">
            11. CONTROLS FOR DO-NOT-TRACK FEATURES
          </Htag>
          <Paragraph className={styles["content__text"]}>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track ("DNT") feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this privacy notice.
          </Paragraph>

          <Htag tag="h3" className={styles["content__title"]} id="caresidents">
            12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </Htag>
          <Paragraph className={styles["content__text"]}>
            <i>
              In Short: Yes, if you are a resident of California, you are
              granted specific rights regarding access to your personal
              information.
            </i>
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            California Civil Code Section 1798.83, also known as the "Shine The
            Light" law, permits our users who are California residents to
            request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us using the contact
            information provided below.
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            If you are under 18 years of age, reside in California, and have a
            registered account with a Service, you have the right to request
            removal of unwanted data that you publicly post on the Services. To
            request removal of such data, please contact us using the contact
            information provided below, and include the email address associated
            with your account and a statement that you reside in California. We
            will make sure the data is not publicly displayed on the Services,
            but please be aware that the data may not be completely or
            comprehensively removed from all our systems (e.g. backups, etc.).
          </Paragraph>
          <Htag
            tag="h3"
            className={styles["content__title"]}
            id="policyupdates"
          >
            13. DO WE MAKE UPDATES TO THIS NOTICE?
          </Htag>
          <Paragraph className={styles["content__text"]}>
            <i>
              In Short: Yes, we will update this notice as necessary to stay
              compliant with relevant laws.
            </i>
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            We may update this privacy notice from time to time. The updated
            version will be indicated by an updated "Revised" date and the
            updated version will be effective as soon as it is accessible. If we
            make material changes to this privacy notice, we may notify you
            either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this
            privacy notice frequently to be informed of how we are protecting
            your information.
          </Paragraph>

          <Htag tag="h3" className={styles["content__title"]} id="contact">
            14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </Htag>

          <Paragraph className={styles["content__text"]}>
            If you have questions or comments about this notice, you may email
            us at
            <a href="mailto:melanie@theheraapp.com">
              &nbsp;melanie@theheraapp.com
            </a>
            or by post to:
          </Paragraph>
          <Paragraph className={styles["content__text"]}>
            Hera App
            <br />
            Dubai
            <br />
            Dubai, UAE 337-1500
            <br />
            United Arab Emirates
          </Paragraph>
        </div>
        <Subscribe />
      </ContainerSmall>
    </>
  );
};
