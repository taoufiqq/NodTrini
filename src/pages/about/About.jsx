import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ipsum
        maxime odio error laborum ipsam quidem quaerat facilis voluptatem sunt.
      </Header>
      {/* ==================== SECTION OUR STORY ==================== */}

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              voluptates molestias reprehenderit pariatur totam fugiat eveniet
              tempore enim ducimus eum! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Optio voluptates molestias reprehenderit
              pariatur totam fugiat eveniet tempore enim ducimus eum!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              voluptates molestias reprehenderit pariatur totam fugiat eveniet
              tempore enim ducimus eum! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Optio voluptates molestias reprehenderit
              pariatur totam fugiat eveniet tempore enim ducimus eum!
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      {/* ==================== SECTION OUR VISION ==================== */}
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              voluptates molestias reprehenderit pariatur totam fugiat eveniet
              tempore enim ducimus eum! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Optio voluptates molestias reprehenderit
              pariatur totam fugiat eveniet tempore enim ducimus eum!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              voluptates molestias reprehenderit pariatur totam fugiat eveniet
              tempore enim ducimus eum! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Optio voluptates molestias reprehenderit
              pariatur totam fugiat eveniet tempore enim ducimus eum!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our VisionImage" />
          </div>
        </div>
      </section>
      {/* ==================== SECTION OUR MISSION ==================== */}

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              voluptates molestias reprehenderit pariatur totam fugiat eveniet
              tempore enim ducimus eum! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Optio voluptates molestias reprehenderit
              pariatur totam fugiat eveniet tempore enim ducimus eum!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              voluptates molestias reprehenderit pariatur totam fugiat eveniet
              tempore enim ducimus eum! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Optio voluptates molestias reprehenderit
              pariatur totam fugiat eveniet tempore enim ducimus eum!
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
