import React from "react";
import { Container } from "../../../modules/Container/Container";
import { ContainerSmall } from "../../../modules/ContainerSmall/ContainerSmall";
import { HeaderLight } from "../../../modules/HeaderLight/HeaderLight";
import { Htag } from "../../Htag/Htag";
import { Paragraph } from "../../Paragraph/Paragraph";
import { Subscribe } from "../../Subscribe/Subscribe";

import styles from "./TermsPage.module.css";

export const TermsPage = (): JSX.Element => {
  return (
    <>
      <HeaderLight />
      <ContainerSmall className={styles.container}>
        <Htag className={styles.title} tag="h1" align="center">
          The Hera App LLC User’s Terms
        </Htag>
        <Paragraph align="center">
          THIS LEGAL USER’S TERM AGREEMENT BETWEEN YOU AND The Hera App LLC GOVERN
          YOUR USE OF The Hera App LLC PRODUCTS, SOFTWARE, SERVICES, WEB APPLICATION
          AND WEBSITE. IT IS IMPORTANT THAT YOU READ AND UNDERSTAND CAREFULLY
          BEFORE USING THE PLATFORM THE FOLLOWING TERMS. BY CLICKING "AGREE,"
          YOU ARE AGREEING THAT THESE TERMS WILL APPLY IF YOU CHOOSE TO ACCESS
          OR USE THE SERVICE ON HERA PLATFORM.
        </Paragraph>
        <div className={styles.content}>
          <ul className={styles["main-list"]}>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                GENERAL
              </Htag>
              <Paragraph className={styles["content__text"]}>
                The Hera App LLC provides electronic web-based platform and offering
                registered individual woman <strong>(User)</strong> certain
                services (the <strong>“Services”</strong>) to facilitate issues
                related to the Pregnant women to make aware about medical and
                non-medical precautions during the pregnancy and other health
                issues. For the purposes of the Terms of Use, “You" shall mean
                the person who is accessing the Platform or User. These are the
                terms and conditions governing your access to and use of the
                website theheraapp.com, mobile Application and its related
                sub-domains, website, services, and tools (hereinafter
                collectively referred to as <strong>“Platform”</strong>). By
                accepting these terms and conditions and by using the Platform,
                you represent that you agree to comply with these terms with
                HERA in relation to your use of the Platform. This User’s Terms
                is effective upon acceptance. If you do not agree to be bound by
                this User Terms please do not access, register with, or use this
                Platform. Before you may become or continue as a member of the
                Platform, you must read, agree with, and accept this User Terms
                and The Hera App LLC’s Privacy Policy (the
                <strong>"Privacy Policy"</strong>). You must read this User
                Terms and the Privacy Policy (which governs the protection and
                use of personal information about User) and access and read all
                further linked information referred to in this User Terms, as
                such information contains further terms and conditions that
                apply to you as a user of HERA, such linked information
                including but not limited to the Privacy Policy is hereby
                incorporated by reference into this User Terms. Registration of
                Membership on the Platform is with fee of United State Dollar
                1.99 per week and that can be timely changed. Changes to the fee
                policy shall be posted on the Platform and such changes shall
                automatically become effective immediately after they are posted
                on the Platform.
              </Paragraph>
              <ul className={styles["alpha-list"]}>
                <li>
                  <Htag tag="h4" className={styles["content__title"]}>
                    Introduction
                  </Htag>
                  <Paragraph className={styles["content__text"]}>
                    The Hera App LLC is a …… is a Company registered under the
                    Sharjah Media City Free zone, Sharjah, United Arab Emirates
                    and providing a virtual Platform for use electronic
                    web-based platforms for providing registered users to use
                    certain services included teaching and learning of health
                    issues and medical precautions in the time of pregnancy and
                    other issues related to it. You agree, understand, and
                    acknowledge that our platform is an online platform that
                    enables you to learn, and use services listed on the
                    platform. You further agree and acknowledge that HERA is
                    providing general advice by the certified Doctors, Personal
                    trainers, specialised pre- and post-natal fitness trainers,
                    Therapists, Yoga instructors and other experts. Some experts
                    may not be a licensed expert of the pregnancy related
                    issues, and we also don’t have any kind of medical licensed
                    from any authorised government organisation. We provide
                    experts, Doctors from the medical and non-medical field and
                    we ensure all experts on platform are qualified, and we
                    verify the qualification certificates on our level, and we
                    take declaration from the experts for their expertise,
                    however certificates we don’t certify with the issuing
                    institute.
                  </Paragraph>
                  <Htag tag="h4" className={styles["content__title"]}>
                    Eligibility for Membership
                  </Htag>
                  <Paragraph className={styles["content__text"]}>
                    The Service is only available to register an individual
                    female as a user. You cannot be a person barred from
                    providing the Service under any law of your jurisdiction,
                    United Arab Emirates, or other applicable jurisdictions,
                    including the country in which you reside or from where you
                    use the Service. By accepting this Agreement, you represent
                    that you understand and agree to the foregoing. Account only
                    be made with the name of a true and valid official name of
                    User. HERA wishes to ensure that its members can form
                    legally binding contracts and furthermore that minors do not
                    use services. Therefore, membership of the Platform is not
                    available to persons under the age of Twenty-one (21) years.
                    By accepting this Agreement, you represent that you
                    understand and agree to the foregoing. An account only be
                    made with the name of you, and that you will comply with all
                    applicable laws. HERA reserves the right to limit or
                    withdraw access to the Platform or the membership of any
                    user or account holder of HERA believes that a person is not
                    representing the User. The Platform is not available to User
                    whose membership has been suspended or withdrawn by HERA.
                    Use as a user of platform other than a female gender will be
                    consider as a criminal offense. No person or User may
                    register as a member of the Website more than once.
                  </Paragraph>
                  <Htag tag="h4" className={styles["content__title"]}>
                    Guardian User
                  </Htag>
                  <Paragraph className={styles["content__text"]}>
                    If a woman is under the age of 21 years then she cannot
                    create or register an account for the Services without
                    consent and approval from legal female guardian. The
                    guardian needs to create an account for child under 21-year
                    age and need to register as <strong>"Guardian User"</strong>{" "}
                    account. Through a Guardian User account, you may create,
                    register, manage and approve only for your own child(ren)
                    for whom you are a legal guardian. if you register, approve
                    or consent to the registration of, or otherwise assume
                    responsibility for any child user, you represent and warrant
                    that you are such child user's legal guardian and you agree
                    to be bound by the terms on behalf of such child user,
                    including without limitation being liable for all use of the
                    website by the user. We reserve all rights to take legal
                    actions against anyone who misrepresents personal
                    information or is otherwise untruthful about their identity.
                  </Paragraph>
                </li>
                <li>
                  <Htag tag="h4" className={styles["content__title"]}>
                    Your Account and Registration Obligations
                  </Htag>
                  <Paragraph className={styles["content__text"]}>
                    When you register as a member of the Platform you have been
                    or will be required to provide certain information and
                    register a username and password for use on this Platform.
                    On becoming a member of the Platform, you agree: You are
                    responsible for maintaining the confidentiality and
                    restricting access to and use of your account and password
                    and accept responsibility for all activities that occur
                    under your account and password, if another person uses
                    these methods to access your account, you will be
                    responsible for damages, and we are not responsible for any
                    other losses you suffer. You agree to immediately notify
                    HERA of any unauthorized use of your password or account or
                    any other breach of security. In no event will HERA be
                    liable for any direct, indirect, or consequential loss, or
                    damage whatsoever resulting from the disclosure of your
                    username and/or password. You further acknowledge and agree
                    that the Service is designed for individuals use basis and
                    you should not share your Account and/or password details
                    with others. You may not use another account at any time,
                    without the express permission of the account holder. You
                    agree to reimburse HERA for any improper, unauthorized, or
                    illegal use of your account by you or by any person
                    obtaining access to the Platform, services or otherwise by
                    using your designated username and password, whether or not
                    you authorized such access. You will provide true, accurate,
                    current, and complete information about yourself as prompted
                    by HERA's registration form. You will maintain and promptly
                    update the registration data to keep it true, accurate,
                    current, and complete. If you provide any information that
                    is untrue, inaccurate, not current, or incomplete or if HERA
                    has reasonable grounds to suspect that such information is
                    untrue, inaccurate, not current or incomplete, or not in
                    accordance with this User Terms, without prejudice to any
                    other rights and remedies of HERA under this User Terms or
                    at law, HERA has the right to indefinitely suspend, limit or
                    withdraw your access to the Platform and/or your membership
                    of the Platform. HERA may (in its sole discretion and at any
                    time), make any inquiries it considers necessary (whether
                    directly or through a third party), and request that you
                    provide it with further information or documentation,
                    including without limitation to verify your identity.
                    Without limiting the foregoing, your information or items
                    detail include your item receipt/ Invoice showing ownership
                    to you. You agree that any sort of wrong and illegal act you
                    may be liable under Cybersecurity laws and other applicable
                    criminal and Civil laws, furthermore, you acknowledge and
                    agree that if you do not, HERA without liability may limit,
                    suspend, or withdraw your access to the Platform and/or your
                    membership of the Platform. We also reserve the right to
                    cancel unconfirmed/unverified accounts or accounts that have
                    been inactive for a long time. If your use of the Service or
                    other conduct intentionally or unintentionally threatens
                    HERA’s ability to provide the Service or other systems, HERA
                    shall be entitled to take all reasonable steps to protect
                    the Service and HERA’s systems, which may include suspension
                    of your access to the Service. You agree that your Account
                    is non-transferable.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Access to Your Account and Content
              </Htag>
              <Paragraph className={styles["content__text"]}>
                HERA reserves the right to take steps HERA believes is
                reasonably necessary or appropriate to enforce and/or verify
                compliance with any part of this Agreement. You acknowledge and
                agree that HERA may, without liability to you, access, use,
                preserve and/or disclose your Account information and Content to
                law enforcement authorities, government officials, and/or a
                third party, as HERA believes is reasonably necessary or
                appropriate, if legally required to do so or if HERA has a good
                faith belief that such access, use, disclosure, or preservation
                is reasonably necessary to: (a) comply with legal process or
                request; (b) enforce this Agreement, including investigation of
                any potential violation thereof; (c) detect, prevent or
                otherwise address security, fraud or technical issues; or (d)
                protect the rights, property or safety of HERA, its users, a
                third party, or the public as required or permitted by law.
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                License from You
              </Htag>
              <Paragraph className={styles["content__text"]}>
                HERA does not claim ownership of the content you submit or make
                available on the Platform. However, by submitting or posting any
                Content on areas of the Service that are accessible by the
                public or other users with we share such Content, you grant HERA
                a worldwide, royalty-free, non-exclusive license to use,
                distribute, publish, translate, publicly perform, and publicly
                display such Content on the Service solely for the purpose for
                which such Content was submitted or made available, without any
                compensation or obligation to you. You agree that any Content
                submitted or posted by you shall be your sole responsibility, or
                violate any laws, contribute to, or encourage infringing or
                otherwise unlawful conduct, or otherwise be obscene,
                objectionable, or in inadequate taste. You can only use the
                services of the Website if they do not conflict with or violate
                the applicable laws of your jurisdiction and other related
                jurisdictions. By creating an account, you agree that you may
                receive communications from HERA, such as newsletters, special
                offers, and account reminders and updates by Email, SMS, Push
                Notification, text message etc. You also understand that you can
                remove yourself from these email communications by clicking the
                "Unsubscribe" link in the footer of the actual email and will
                not block email subscription.
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Service
              </Htag>
              <Paragraph className={styles["content__text"]}>
                Platform provides following services to the Pregnant woman
                (User):
              </Paragraph>
              <ul className={styles["alpha-list"]}>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    The Hera App LLC contains information woman needs when they realise
                    that they are pregnant. This includes; mummy essentials,
                    postpartum essentials, nursery items, hospital bag,
                    information on baby symptoms, baby development,
                    appointments, and screenings.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    Weekly Pregnancy information on the baby’s development
                    whilst in the womb and information on the mother’s
                    experience, the symptoms they may experience and remedies.
                    This information will start from week 1 of pregnancy through
                    to 42 weeks. There will also be a 3D image of a baby and
                    what it looks like at certain stages.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    Three recipes will be given for each week of their
                    pregnancy. The recipes have been created by a nutritionist
                    to support the growth and development of the baby while in
                    the womb as well as support the mother and their changing
                    needs.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    The user will receive three workouts each week. Lower body,
                    upper body, and full body. There will be a description of
                    the workout and the user will be able to watch a video of
                    each and every move, so they perform it correctly. We will
                    not be liable for any injuries, birth complications and so
                    on. It is purely up to you as user to exercise once they
                    have been given all clear by their healthcare professional
                    and they must take it upon themselves to exercise safely,
                    following our guidance.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    The Hera App LLC offers a number of yoga sessions, weekly
                    meditations, baby massage, and mum and baby yoga
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    The Hera App LLC provides online platform for users to connect with
                    one another on topics listed on the Platform, they are able
                    to ask other users questions or advice and users can
                    answer/communicate with each other.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    The Hera App LLC offers an 8-week rehabilitation program
                    postpartum (After birth of the child) she must get all clear
                    before beginning this program, otherwise it simply starts at
                    7 weeks postpartum.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    Once a woman finishes the 8 weeks rehabilitation program,
                    the user can begin to take on workout challenges which we
                    have created and filmed so they can follow.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    The Hera App LLC offers weekly self-care instructions and advice
                    during pregnancy and after
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    The Hera App LLC offers weekly self-care suggestions and advice to
                    women who have input they have lost their baby due to
                    medical complications or miscarriage and this information
                    has been created by a therapist.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Transactions
              </Htag>
              <Paragraph className={styles["content__text"]}>
                We do not require you to provide, and you must not provide any
                other personal data including but not limited to your personal
                health and medical history on or through the registration
                Service.
              </Paragraph>
              <Paragraph className={styles["content__text"]}>
                On entering your personal details and if applicable, on the
                completion of the transaction in respect of your credit card,
                the Platform will send a verification code by SMS to the mobile
                number which you have provided. You will need to enter that
                verification code onto the Platform. Once you have entered the
                correct verification code, the Platform will confirm your
                payment and will also send a summary of the payment by SMS or
                Email which you have provided. In addition, the Platform will
                also enable you to create a password to create and access an
                account.
              </Paragraph>
              <Paragraph className={styles["content__text"]}>
                Users are hereby made aware that there may be risks of dealing
                with experts. HERA uses several techniques to verify the
                accuracy of certain information our paying Users provide us when
                they register for a paying membership service on the Platform.
                However, because user verification on the Internet is difficult,
                HERA cannot and does not confirm each User's purported identity
                (including, without limitation). We encourage you to use various
                means, as well as common sense, to evaluate.
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Service Charge
              </Htag>
              <ul className={styles["alpha-list"]}>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    In consideration for the Services of our platform provided
                    to User will be charged USD 1.99 Per week and it will be
                    automatic deduction from the User’s Bank card according to
                    scheduled and agreed terms, User agreed to pay transaction
                    fee, charges with applicable taxes. If a payment of the
                    Subscription Fee is rejected, invalid or otherwise
                    unsuccessful, your Subscription may be automatically
                    cancelled.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    HERA shall have right to revise the fee, charges, any time,
                    amended policy will be posted and declared on the Platform.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    In relation to instances where an amount to be paid or
                    reserved on your credit/Debit card on account of the fees
                    required to pay on weekly bases to the Platform, you must
                    enter your bank card details and billing information on the
                    Platform and authorise the payment of the relevant charges.
                    We will, through a third-party payment processor, process
                    and collect your payment of such charges on our Platform.
                    Payment is safely processed from your Bank card to our
                    designated bank account through the third-party payment
                    processor. You declare that you will use your authorised
                    bank card.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Communication Service
              </Htag>
              <ul className={styles["alpha-list"]}>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    The Platform includes a large number of what are
                    collectively called "Communications Services." These include
                    services such as live chats, question and answer, Comments,
                    and other message services. You agree to use the
                    Communication Services only to post, send, and receive
                    messages or materials proper to and related to the
                    particular Communication Service. When using a Communication
                    Service, you agree that you will not upload or otherwise
                    make available any Content that is unlawful, harassing,
                    threatening, harmful, tortuous, defamatory, libellous,
                    abusive, violent, obscene, vulgar, invasive of another’s
                    privacy, hateful, racially, or ethnically offensive, or
                    otherwise objectionable; stalk, harass, threaten, or harm
                    another; strictly prohibited. You will not plan or engage
                    and educate on in any illegal or unauthorised, activity.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    You will not upload, transmit, or otherwise make available
                    any material that contains viruses, or any other computer
                    code, files or programs designed to harm, interfere, or
                    limit the normal operation of the Service (or any part
                    thereof), or any other computer software or hardware.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    You understand that this communication services are used by
                    users they are not in control of us, and we can’t identify
                    their identity therefore, constantly vigilant before
                    communicating with other users on Chat, message, comments,
                    and Suggestions. We will not be accountable for any kind of
                    incorrect suggestion or act done by other users while using
                    The Hera App LLC services.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    As a user Indulgement or use of any kind of communication
                    services other than a female gender will be consider as a
                    criminal offense.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Disclaimer
              </Htag>
              <ul className={styles["alpha-list"]}>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    we are not liable for any injury or any miscarriage/birth
                    defects or any other kind of damages to the User caused
                    whilst using the any service listed on the App or on our
                    platform.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    Information and Provided services on the platform provided
                    are for a normal pregnancy and for general guidance, it does
                    not suggest taking assistant or follow elevated risk or ill
                    health women.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    The information has been accredited by the doctors, personal
                    trainers, specialised pre- and post-natal fitness trainers,
                    therapists, yoga instructors and other experts. Despite
                    these, users still need to be guided and consult with your
                    certified Doctor before taking any act.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    We are not a licensed medical care provider and not intended
                    to replace professional medical advice or diagnose, treat,
                    or manage any illness or medical condition. Please consult
                    with a licensed physician or other qualified healthcare
                    provider before making any decisions or taking any actions
                    that may affect your health and safety, or that of your
                    foetus.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    You acknowledge that we have no control over, and no duty to
                    take any action regarding: (a) what information and material
                    you access; (b) what effects such information may have on
                    you, (c) how you may interpret or use such information; (d)
                    what actions you may take as a result of having been exposed
                    to such information; or (e) the information which you upload
                    or send through the Platform. You release us from all
                    liability for you having acquired, you have not acquired, or
                    your use of such information. We make no representations or
                    warranties regarding suggestions or recommendations of
                    services or products offered or purchased through your use
                    of the Directory. We have no special relationship with or
                    fiduciary duty to you. We do not control and are not
                    responsible for the medical services provided to you by
                    experts.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    Before participating in any diet, yoga or exercise program
                    or using any diet or fitness products or services that may
                    be described and/or made accessible in or through the
                    services, we strongly recommend that you consult with a
                    medical practitioner or other healthcare provider. We take
                    reasonable precautions to ensure that the Services are safe.
                    However, you acknowledge and agree that, when participating
                    in any diet, exercise, yoga, or fitness program, or when
                    using any diet or fitness products or services, there is the
                    possibility of physical injury and death. Given the
                    disclosures and disclaimers by Us, you assume the risk and
                    responsibility for any such results or outcomes.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    If you know or suspect that you have an eating disorder,
                    have diabetes, or have any other physical or medical
                    condition, it is imperative that you seek the advice of a
                    medical practitioner before using any information, goods,
                    services, diet, exercise, or fitness program available,
                    advertised, or sold on or through the platform. If you
                    experience any discomfort, pain or other unexpected side
                    effect during a diet, exercise, or fitness routine, you must
                    immediately cease the activity and seek the assistance of a
                    licensed Doctor.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    We do verify experts’ knowledge of subject as our best
                    ability; however, we don’t certify credential of the experts
                    therefore, we will not be liable for experts’ wrong opinion
                    and their wrong consequences.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    Furthermore, you must seek further medical advice if you
                    have any concerns about the information given to you by the
                    certified medical practitioner if your condition changes;
                    and seek immediate medical assistance if you suffer adverse
                    or unexpected effects of any treatment, medicine or
                    healthcare product recommended to you by expert.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    The Blogs are provided for information and educational
                    purposes only. The Blogs do not constitute medical advice.
                    You must obtain any medical opinion, recommendation,
                    endorsement, or advice as to any symptoms, conditions,
                    diagnosis, prognosis, or treatment from an appropriate
                    Certified Medical Practitioner and not rely on any
                    information provided in the Blogs in relation to any medical
                    matter.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className={styles["content__text"]}>
                    The information in the Blogs and all other information set
                    out in the Platform is based on or derived from information
                    obtained from third party sources and/or the experts. We
                    believe that such information is accurate and that the
                    sources from which it has been obtained are reliable.
                    However, we have not independently verified all such
                    information. We cannot and do not guarantee, represent, or
                    warrant whether express or implied the truth, accuracy, or
                    completeness of any such information. In no event shall we
                    be liable to you or anyone else for any decision made or
                    action taken by you in reliance on any such information.
                    Your use of such information is at your own risk.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Use of the Platform
              </Htag>
              <Paragraph className={styles["content__text"]}>
                While using the Platform, you will not: post Information or
                content or list items in an inappropriate category or areas on
                our Platform; post any content which insults the UAE state,
                against the UAE laws or Islam, such as any partial or full
                nudity (including simply “beach scene” photographs), fire-arms,
                drugs or alcohol; post items you do not have a right to link to
                or include; post items that are concurrently listed for services
                on a Website other than the Platform; post Information that is
                (in our sole discretion) false, fraudulent, inaccurate,
                misleading, libellous, defamatory, slanderous, unlawfully
                threatening or would be reasonably considered to constitute
                harassment; post comments, questions or answers that are not
                factual in nature including without limitation make any racist
                comments, use profanity, abuse another user, disrespect
                another's culture or make any other derogatory or inappropriate
                comments; post counterfeit or stolen items; post Information or
                items which infringe any third party's intellectual property
                rights, other proprietary rights or right to privacy; post
                obscene Information or content, including but not limited to
                pornography or any representation which may (in our sole
                discretion) be considered indecent; post Information or content
                which may (in our sole discretion) constitute offensive or
                critical political content or content that is contrary to the
                public interest; post any Information or content or list items
                which may (in our sole discretion) be considered culturally or
                religiously offensive in any way; post any Information or
                content or list items which (in our sole discretion) may not be
                considered to be in compliance with general Islamic Shari’ah
                law, rules, morals, values, ethics and traditions; post
                Information or content threaten national security; post
                Information or content or list Services which may (in our sole
                discretion) constitute or be considered to promote gambling,
                terrorism, racism or any kind of criminal or illegal act.
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Changes to Content
              </Htag>
              <Paragraph className={styles["content__text"]}>
                You understand that in order to provide the Service and make
                your Content available thereon, HERA may transmit your Content
                across various public networks, in various media, and modify or
                change your Content to comply with technical requirements of
                connecting networks or devices or computers. You further agree
                that HERA may limit, suspend, or withdraw your access to the
                Platform and/or a user's membership of the Platform or remove
                hosted content.
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Amendments to this User Terms
              </Htag>
              <Paragraph className={styles["content__text"]}>
                The HERA shall have the right to amend, vary or modify the Terms
                of User, Privacy Commitment of HERA Website and these Additional
                Terms of Use governing your use of the Service, without giving
                any prior notice to you and such amendment shall be effective
                immediately upon inclusion/posting of such amendment on HERA
                Website. You agree to be bound by the revised Terms.
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Intellectually rights
              </Htag>
              <Paragraph className={styles["content__text"]}>
                The "HERA" and related logos, and other words and logos on the
                Platform are either unregistered or registered trademarks of
                HERA and are protected by international trademark and other
                intellectual property rights laws. All other trademarks not
                owned by HERA that appear on the Platform are the property of
                their respective owners, who may or may not be affiliated with,
                connected to, or sponsored by HERA.
              </Paragraph>
              <Paragraph className={styles["content__text"]}>
                You will not engage in any copyright infringement or other
                intellectual property infringement (including uploading any
                content to which you do not have the right to upload) or
                disclose any trade secret or confidential information in
                violation of a confidentiality; Use of these materials is for
                your personal or business use. Any resale or redistribution of
                our materials requires the express, written consent of Hera.
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Indemnity and Warranty
              </Htag>
              <Paragraph className={styles["content__text"]}>
                You agree to defend, indemnify, and waive HERA and its
                affiliates, directors, Contractors, officers, employees, agents,
                and suppliers harmless from any and all claims, demands,
                actions, proceedings, losses, liabilities, damages, costs,
                expenses (including reasonable legal costs and expenses),
                howsoever suffered or incurred due to or arising out of your
                breach of this User Terms, or your violation of any law or the
                rights of a third party. You acknowledge that you are
                responsible for all use of the Service using your Account and
                that these Terms apply to any and all usage of your Account. You
                agree to comply with this Terms and to defend, indemnify and
                hold harmless HERA from and against any and all claims and
                demands arising from the usage of your Account, whether or not
                such usage is expressly authorized by you.
              </Paragraph>
              <Paragraph className={styles["content__text"]}>
                You agree and acknowledge that HERA makes no warranties or
                representations about the accuracy or completeness of HERA
                Website's content or the content of any Platforms linked to HERA
                Website and assumes no liability or responsibility for any (i)
                Errors, mistakes, or inaccuracies of content, (ii) Personal
                injury or property damage, of any nature whatsoever, resulting
                from your access to and use of HERA, (iii) Any unauthorized
                access to or use of HERA servers and/or any and all personal
                information and/or financial information stored therein in any
                form and/or in any manner, (iv) any interruption or cessation of
                transmission to or from HERA Website, (iv) Any bugs, viruses, or
                the like unauthorized tools or software which may be transmitted
                to or through HERA Website by any third party, and/or (v) Any
                errors or omissions in any content or for any loss or damage of
                any kind incurred as a result of the use of any content posted,
                emailed, transmitted, or otherwise made available through HERA
                Website. HERA does not warrant, endorse, guarantee, or assume
                responsibility for any product or service advertised or offered
                by a third party through the HERA Website or any associated or
                hyperlinked Website and HERA shall not be a party to or in any
                way be responsible or accountable for monitoring any transaction
                between you and third-party.
              </Paragraph>
              <Paragraph className={styles["content__text"]}>
                You agree that Hera will under no circumstances be liable to
                you, whether in contract, negligence, breach of statutory duty,
                or otherwise, even if foreseeable, arising under or in
                connection with the Service for resulting from any violation by
                you of these Terms or any breach by you of your
                responsibilities, representations, and warranties
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                LIMITATION OF LIABILITY
              </Htag>
              <Paragraph className={styles["content__text"]}>
                You expressly understand and agree that, to the maximum extent
                permissible under applicable law, the company shall not be
                liable for any indirect, incidental, special, consequential, or
                exemplary damages, including but not limited to, damages, data,
                or other intangible losses (even if you have been advised of the
                possibility of such damages). the company provides no guarantees
                of server uptime or applications working properly. in no event
                will the company’s aggregate liability to you for any claims,
                including under tort, contract or otherwise, exceed the amount
                of fees paid by you to the HERA. The foregoing limitation of
                liability shall apply to the fullest extent permitted by law in
                the applicable local and/or international jurisdiction.
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Default of Services
              </Htag>
              <Paragraph className={styles["content__text"]}>
                HERA shall not be held liable or considered in default of its
                service agreements, implied or express, when the delay of
                performance is caused by circumstances beyond our reasonable
                control and occurring without our fault or negligence, such as
                but not limited to Failure by third party subcontractors,
                suppliers and/or carriers to provide agreed-upon service(s)
                Problems or failures in accessing on-line information sources
                Problems or failures with phone lines, internet access service,
                web Platform hosting service, or other third-party service
                providers, such as Server failures and Software glitches,
                Widespread virus problems.
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Force Majeure
              </Htag>
              <Paragraph className={styles["content__text"]}>
                Under no circumstances shall HERA be held liable for any failure
                or disruption of the content or the Services accessed or
                delivered through the Platform or the creation or fulfilment of
                contracts resulting directly or indirectly from acts of nature,
                forces or causes beyond our reasonable control, including
                without limitation, Internet failures, computer,
                telecommunications or any other equipment failures, electrical
                power failures, strikes, labour disputes, riots, insurrections,
                civil disturbances, shortages of labour or materials, fires,
                flood, storms, explosions, acts of God, war, governmental
                actions, orders of domestic or foreign courts or tribunals, or
                non-performance of third parties or any suspension or disruption
                of transportation or business operation (including but not
                limited to delays or disruption of the resumption of work or
                operation ordered by any government agency) in the event of a
                national or regional spread of epidemic or pandemic.
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Disputes
              </Htag>
              <Paragraph className={styles["content__text"]}>
                If any dispute, claim, controversy, or differences arising out
                of or in connection with or in relation to this User Terms
                Agreement, including any question regarding the formation,
                existence, scope, performance, interpretation, validity or
                termination of this User Terms or clauses, or any question
                regarding the legal relationships established by this User Terms
                or the consequences of its nullity, then the parties shall first
                attempt amicably to settle the Dispute through good faith. The
                relationship between you and HERA shall be governed by the laws
                of the United Arab Emirates, In the event that a Dispute has not
                been settled amicably by the relevant parties, the Dispute shall
                be referred to Dubai courts. You and HERA agree to submit to the
                exclusive jurisdiction of the dispute will be Dubai Courts,
                United Arab Emirates to resolve any dispute or claim arising
                from this Agreement.
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Termination
              </Htag>
              <ul className={styles["alpha-list"]}>
                <li>
                  <Htag tag="h4" className={styles["content__title"]}>
                    Termination by User
                  </Htag>
                  <Paragraph className={styles["content__text"]}>
                    User may terminate user Account and/or stop using the
                    Service at any time. If a User wishes to terminate his
                    account, simply by clicking deactivate the account section
                    of the platform. All or any of the Transaction, fee, charges
                    remaining will be completed perfectly by you before the
                    termination.
                  </Paragraph>
                </li>
                <li>
                  <Htag tag="h4" className={styles["content__title"]}>
                    Termination by HERA
                  </Htag>
                  <Paragraph className={styles["content__text"]}>
                    HERA may at any time, under certain circumstances and
                    without prior notice, immediately terminate or suspend all
                    or a portion of your Account and/or access to the Service at
                    any time, under certain circumstances and without,
                    immediately without liability: limit your activity, remove
                    your bids, end your listings, warn other users of your
                    actions, temporarily / indefinitely suspend, limit or
                    withdraw your membership, and/or limit or withdraw your
                    access to the Site, end your listings, warn other users of
                    your actions, temporarily / indefinitely suspend, limit or
                    withdraw your membership to the Site Cause for such
                    termination shall include:
                  </Paragraph>
                  <ul className={styles["alpha-list"]}>
                    <li>
                      <Paragraph className={styles["content__text"]}>
                        Violations of this Agreement or any other policies or
                        guidelines that are referenced herein and/or posted on
                        the Service.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph className={styles["content__text"]}>
                        A request by you to cancel or terminate your Account.{" "}
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph className={styles["content__text"]}>
                        A request and/or order from law enforcement, a judicial
                        body, or other government agency.{" "}
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph className={styles["content__text"]}>
                        Where provision of the Service to you is or may become
                        unlawful.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph className={styles["content__text"]}>
                        Unexpected technical or security issues or problems.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph className={styles["content__text"]}>
                        Your participation in fraudulent or illegal activities.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph className={styles["content__text"]}>
                        Failure to pay any fees, Charges owed by you in relation
                        to the Service.{" "}
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph className={styles["content__text"]}>
                        Negative feedback from Users.
                      </Paragraph>
                    </li>
                  </ul>
                  <Paragraph className={styles["content__text"]}>
                    Any such termination or suspension shall be made by HERA in
                    its sole discretion and HERA will not be responsible to you
                    or any third party for any damages that may result or arise
                    out of such termination or suspension of your Account and/or
                    access to the Service. In addition, HERA may terminate your
                    Account WITHOUT prior notice. Any such termination or
                    suspension shall be made by HERA in its sole discretion and
                    HERA will not be responsible to you or any third party for
                    any damages that may result or arise out of such termination
                    or suspension of your Account and/or access to the Service.
                  </Paragraph>
                </li>
                <li>
                  <Htag tag="h4" className={styles["content__title"]}>
                    Effects of Termination
                  </Htag>
                  <Paragraph className={styles["content__text"]}>
                    Upon termination of your Account, you will lose all access
                    to the Service and any portions thereof, including, but not
                    limited to, your Account, HERA ID, email account, and
                    Content. In addition, after a period of time, HERA may
                    delete information and data stored in or as a part of your
                    account. Any individual components of the Service that you
                    may have used subject to separate software license
                    agreements will also be terminated in accordance with those
                    license agreements. You further acknowledge and agree that
                    HERA shall not be responsible or liable in any way for any
                    damages you incur or allege to have incurred, either
                    directly or indirectly, as a result of your use and/or
                    reliance upon any such Content, advertising, products, or
                    materials on or available from such sites or resources. Upon
                    cancellation of the Subscription, you will no longer be
                    permitted to have access to or the benefit of the Service at
                    the end of your paid subscription period.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Notice
              </Htag>
              <Paragraph className={styles["content__text"]}>
                None of the provisions of this User Terms shall be deemed to
                constitute a partnership or agency between you and HERA and you
                shall have no authority to bind HERA in any manner whatsoever.
                Except as explicitly stated otherwise, any notices to HERA from
                you shall be given by you by HERA with a physical copy sent to
                us by email and courier, such notice deemed given on
                confirmation of its receipt to you by HERA by return email. Any
                notices to you from HERA shall be given by notices posted on the
                Platform or by email to the email address you provide to us
                during the registration process and shall be deemed to be
                received by you 48 hours after any such email is sent.
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Links to third party
              </Htag>
              <Paragraph className={styles["content__text"]}>
                The Web Platform contains links or other connections to third
                party web Platforms. HERA provides these links only as a
                convenience to you and does not endorse, and is not responsible
                for, the contents on such linked Platforms. You accept any terms
                and conditions imposed by that third-party. Further, The HERA is
                not responsible for any viruses’ accesses through said
                third-party. If you decide to access linked third-party Web
                Platforms, you do so at your own risk.
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Transfer of Rights and Obligations
              </Htag>
              <Paragraph className={styles["content__text"]}>
                You hereby grant HERA the right to, and irrevocably acknowledge
                and agree that HERA may at any time, transfer all or any part of
                its rights, benefits, obligations, or liabilities (whether
                express or assumed) under this User Terms to any of its
                affiliates without requiring your further specific agreement.
                You may not at any time, without the prior written consent of
                HERA, transfer all or any part of your rights, benefits,
                obligations, or liabilities (whether express or assumed) under
                this User Terms.
              </Paragraph>
            </li>
            <li>
              <Htag tag="h4" className={styles["content__title"]}>
                Severability
              </Htag>
              <Paragraph className={styles["content__text"]}>
                If any clause of this User Terms shall be deemed invalid, void,
                or for any reason unenforceable, such clause shall be deemed
                severable and shall not affect the validity and enforceability
                of the remaining clauses of this User Terms. This User Terms (as
                amended from time to time in accordance with the terms of this
                User Terms) sets forth the entire understanding and agreement
                between you and HERA with respect to the subject matter hereof.
                No person, who is not a party to this User Terms, shall have any
                right to enforce any term of this User Terms. If this User Terms
                are translated into any language other than English, whether on
                the Platform or otherwise, the English text shall prevail.
              </Paragraph>
              <Htag tag="h4" className={styles["content__title"]}>
                ELECTRONIC CONTRACTING
              </Htag>
              <Paragraph className={styles["content__text"]}>
                Your use of the Service includes the ability to enter into
                agreements and/or to make transactions electronically.
              </Paragraph>
              <Paragraph className={styles["content__text"]}>
                <strong>
                  YOU ACKNOWLEDGE THAT YOUR ELECTRONIC SUBMISSIONS CONSTITUTE
                  YOUR AGREEMENT AND INTENT TO BE BOUND BY AND TO PAY FOR SUCH
                  AGREEMENTS AND TRANSACTIONS. YOUR AGREEMENT AND INTENT TO BE
                  BOUND BY ELECTRONIC SUBMISSIONS APPLIES TO ALL RECORDS
                  RELATING TO ALL ELECTRONIC INFORMATION INCLUDES DATA AND
                  INFORMATION IN THE FORM OF TEXT, CODES, SOUND, GRAPHICS,
                  IMAMAGESCOMPTER PROGRAMS OR OTHERWISE AND TRANSACTIONS YOU
                  ENTER INTO ON THIS SERVICE, INCLUDING NOTICES OF CANCELLATION,
                  OTHER POLICIES, CONTRACTS, AND APPLICATIONS.{" "}
                </strong>
              </Paragraph>
              <Paragraph className={styles["content__text"]}>
                DISCLAIMER: HERA shall not be liable for the loss of any
                saved/stored data in products that are either repaired or
                replaced.
              </Paragraph>
            </li>
          </ul>
          <Container>
            <Htag tag="h4" className={styles["content__title"]}>
              Contact Us
            </Htag>
            <Paragraph className={styles["content__text"]}>
              Please contact us for any questions or comments (including all
              inquiries & Complaints) regarding the Services:
              <a href="mailto:melanie@theheraapp.com">melanie@theheraapp.com</a>
            </Paragraph>
          </Container>
        </div>
        <Subscribe />
      </ContainerSmall>
    </>
  );
};
