import { Htag } from "../../Htag/Htag";
import { Intro } from "../../Intro/Intro";
import { IntroSection } from "../../IntroSection/IntroSection";
import { Paragraph } from "../../Paragraph/Paragraph";
import { Container } from "../../../modules/Container/Container";
import { IntroContentWrapper } from "../../../modules/IntroContentWrapper/IntroContentWrapper";
import styles from "./HomePage.module.css";
import { IllustrationsList } from "../../IllustrationsList/IllustrationsList";
import { Subscribe } from "../../Subscribe/Subscribe";

import baby from '../../../public/baby.png';
import workouts from '../../../public/workouts.png';
import kitchen from '../../../public/kitchen.png';
import yoga from '../../../public/yoga.png';
import meditation from '../../../public/meditation.png';
import challenges from '../../../public/challenges.png';
import more from '../../../public/more.png';

function HomePage(): JSX.Element {
  interface IIntroSection {
    _id: number;
    title: string;
    text: string;
    img: StaticImageData;
    reverse: boolean;
  }
  const sections: Array<IIntroSection> = [
    {
      _id: 1,
      title: "Mother & Baby Development",
      text: "Heras extensive research means you need to look no further, with weekly updates provided by industry experts on the growth and development of mother and baby. Hera also includes baby’s postnatal development and your journey into the fourth trimester.",
      img: baby,
      reverse: false,
    },
    {
      _id: 2,
      title: "Personalised Workouts",
      text: "Get fit, strong and healthy with our personalised workout program tailored to your specific stage of pregnancy. The Hera app will become your pre and postpartum coach keeping you feeling good and looking good from the comfort of your own home.",
      img: workouts,
      reverse: true,
    },
    {
      _id: 3,
      title: "Stage Specific Nutrition Plan",
      text: "What you eat during pregnancy has a great impact on your baby’s growth and development. To take the pressure off you, Hera has created nutrient dense, stage specific meals, snacks and smoothies that will support you and your baby’s development.",
      img: kitchen,
      reverse: false,
    },
    {
      _id: 4,
      title: "Yoga & Meditation",
      text: "Relax and unwind with Hera’s yoga and meditation sessions. These sessions will not only help you and your baby stay calm during pregnancy but prepare you for a positive birth.",
      img: yoga,
      reverse: true,
    },
    {
      _id: 5,
      title: "Postpartum Rehabilitation",
      text: "The Hera App provides you with a detailed 8-week rehabilitation program to prepare you for exercise again.",
      img: meditation,
      reverse: false,
    },
    {
      _id: 6,
      title: "Challenges",
      text: "After Heras 8 – week rehabilitation program, you’ll enter the next phase in the Hera App which allows you to choose from a variety of challenges varying from strength, flexibility, tone, endurance and HIIT. Challenge yourself with as many as you like.",
      img: challenges,
      reverse: true,
    },
    {
      _id: 7,
      title: "More",
      text: "Tips, tricks and advice; Hera’s blog will be your best friend. From what to put in your hospital bag to perineal massage to how to encourage your baby’s development. Hera has everything you need at your fingertips.",
      img: more,
      reverse: false,
    },
  ];
  return (
    <>
      <Intro></Intro>
      <Container>
        <IntroContentWrapper>
          {sections.map((section) => (
            <IntroSection key={section._id} {...section} />
          ))}
          <Htag
            className={styles["illustration-title"]}
            tag="h2"
            align="center"
          >
            Interact with Women Around the World
          </Htag>
          <Paragraph className={styles["illustration-text"]} align="center">
            As the saying goes; it takes a village to raise a child! Being a
            mother, particularly a first-time mother can be quite daunting. Hera
            has created a platform that allows you to connect with mothers
            around the world, free of judgement and a safe place for you to come
            and feel at ease. We’re all in this together!
          </Paragraph>
          <IllustrationsList />
          <Subscribe />
        </IntroContentWrapper>
      </Container>
    </>
  );
}

export default HomePage;
