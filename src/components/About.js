import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          I design and code beautiful things, and I love what I do.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/dark-about.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              An experienced creative professional in Graphic Designing, UI/UX,
              Motion Graphic Design, and Web Development since 2018. Dedicated
              to delivering innovative designs, merging creativity with
              technical expertise for engaging user experiences. Passionate
              about pushing design boundaries to create exceptional, lasting
              impressions.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Yasith Eranda
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Yapa Amarasekara
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Date of Birthdate</span>08
                    July 1998
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    Sri Lankan
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>6 years
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Address</span>
                    Galle, Sri Lanka
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Languages</span>
                    English/ Sinhala
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>
                    <a href="tel:+94788556588" style={{ color: "#fffff1" }}>
                      +94 78 855 6588
                    </a>
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    <a
                      href="mailto:info@yasitheranda.me"
                      style={{ color: "#fffff1" }}
                    >
                      info@yasitheranda.me
                    </a>
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Linkedin</span>
                    <a
                      href="https://www.linkedin.com/in/yasith-eranda-yapa-amarasekara/"
                      style={{ color: "#fffff1" }}
                      target="blank"
                      rel="noopener"
                    >
                      yasith-eranda-yapa-amarasekara
                    </a>
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">GitHub</span>
                    <a
                      href="https://github.com/yashEra"
                      style={{ color: "#fffff1" }}
                      target="blank"
                      rel="noopener"
                    >
                      yashEra
                    </a>
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a
                href="https://drive.google.com/uc?export=download&id=1wU-gwTKptnkdk5bz3o_VytBvvPdrAFfa"
                className="btn btn-resume"
              >
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2020 - Present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        web developer
                        <span className="separator" />
                        <span className="font-weight-700">Freelance</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Experienced web developer since 2020, proficient in
                        front-end and back-end technologies, creating innovative
                        and user-friendly web solutions to meet diverse client
                        needs.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2018 - Present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Graphic Designer, UI/UX Designer
                        <span className="separator" />
                        <span className="font-weight-700">Freelance</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        {"I'm"} creating graphic designs since 2018 as one of my
                        careers. The knowledge I gain from my experience will
                        help me to create fantastic designs for my clients.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2018 - Present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Video Editor, Motion Graphic Designer
                        <span className="separator" />
                        <span className="font-weight-700">Freelance</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        {"I'm"} a well-experienced video editor & motion graphic
                        designer since 2018, who pleased my clients very well.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2021 - 2025
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Computer Science and Technology
                        <span className="separator" />
                        <span className="font-weight-700">
                          Uva Wellassa University of Sri Lanka
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Undergraduate of Bachelor of Science (BSc) in Computer
                        Science and Technology, Uva Wellassa University of Sri
                        Lanka
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2020 - 2025
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Bachelor of Information Technology
                        <span className="separator" />
                        <span className="font-weight-700">
                          University of Colombo School of Computing
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Undergraduate of Bachelor of Information Technology,
                        University of Colombo School of Computing
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2004 - 2018
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        General Certificate of Education {"(Advanced Level)"}
                        <span className="separator" />
                        <span className="font-weight-700">
                          Siridhamma College, Galle
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Physical Science <br/>(Combined Maths, Chemistry & Physics)
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>

          <div className="row" style={{ paddingTop: "45px" }}>
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                other experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2023 - 2024
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Creative content coodinator
                        <span className="separator" />
                        <span className="font-weight-700">
                          IEEE Sri Lanka Section Student Activities Committee
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Creative Content Coordinator at IEEE SLSAC Collaborative
                        Activity Sub Committee. Responsible for developing
                        engaging content and implementing content strategies for
                        collaborative initiatives within the IEEE SLSAC.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2023 - 2024
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        IEEEXtreme 17.0 Ambassador
                        <span className="separator" />
                        <span className="font-weight-700">
                          UVA WELLASSA UNIVERSITY OF SRI LANKA
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        IEEEXtreme is an annual global programming competition
                        organized by IEEE, unique and highly challenging coding
                        competition designed to test the problem-solving skills,
                        algorithmic thinking, and teamwork capabilities of
                        participating teams.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2023 - 2024
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Assistant Editor
                        <span className="separator" />
                        <span className="font-weight-700">
                          IEEE UVA WELLASSA UNIVERSITY STUDENT BRANCH
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        As an Assistant Editor for the IEEE Uva Wellassa
                        University Student Branch, your role involves
                        contributing to the planning, production, and editing of
                        various publications and communication materials related
                        to IEEE activities and events.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2023 - 2024
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Director of Public Relations and Digital Services
                        <span className="separator" />
                        <span className="font-weight-700">
                          ROTARACT CLUB OF UVA WELLASSA UNIVERSITY - BADULLA
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        As the Director of Public Relations and Digital Services
                        at Rotaract Club of Uva Wellassa University - Badulla, I
                        manage communications, promote activities, and enhance
                        the {"club's"} online presence to engage members and the
                        community effectively.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2023 - 2024
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Design Team
                        <span className="separator" />
                        <span className="font-weight-700">
                          FOSS Community UVA WELLASSA UNIVERSITY - BADULLA
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        As a member of the Design Team at FOSS Community Uva
                        Wellassa University - Badulla, I collaborate on creating
                        visually engaging and innovative designs to promote club
                        acttivies, events and enhance the {"community's"} brand
                        identity.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2015 - 2017
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        President of College Quiz Club
                        <span className="separator" />
                        <span className="font-weight-700">
                          Siridhamma Collage Galle
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        As the President of the College Quiz Club at Siridhamma
                        College, Galle, I lead the organization, oversee quiz
                        events, and foster a competitive and intellectually
                        stimulating environment to enhance {"students'"}{" "}
                        knowledge and critical thinking skills.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Volunteering
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Project Chair
                        <span className="separator" />
                        <span className="font-weight-700">InovitroZ</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        The Rotaract Club of Uva Wellassa University presents
                        InovitroZ 2023, an exciting innovation program aimed at
                        nurturing creativity and problem-solving skills among
                        participants
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Design Team Lead
                        <span className="separator" />
                        <span className="font-weight-700">IEEE Open Day</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        IEEE Open Day 2023, organized by the IEEE Student Branch
                        of Uva Wellassa University, offers a platform for
                        aspiring technology enthusiasts to come together, learn,
                        collaborate, and shape the future.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Design Team Lead
                        <span className="separator" />
                        <span className="font-weight-700">
                          CST LAN CHALLENGE
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        The LAN Challenge is an annual gaming extravaganza,
                        commemorating its fifth chapter in the year 2023. It is
                        organized by the students of the Computer Science and
                        Technology (CST) degree program within the Department of
                        Computer Science and Informatics, Faculty of Applied
                        Sciences, at Uva Wellassa University.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Design Team
                        <span className="separator" />
                        <span className="font-weight-700">CYBERZILLA 2.0</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        The FOSS Community of Uva Wellassa University proudly
                        presents Cyberzilla, the much-awaited second edition.
                        Expect pure fun, knowledge, and exciting surprises to
                        make this event unforgettable!
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Design Team Member
                        <span className="separator" />
                        <span className="font-weight-700">
                          Impetus Magazine
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        IMPETUS magazine launch by IEEE Uva Wellassa University
                        Student Branch, showcasing tech insights, inspiring
                        innovation, and empowering future leaders.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Design Team Member
                        <span className="separator" />
                        <span className="font-weight-700">
                          INSL Uva Provincial Competition
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        As a member of the INSL 2022 Uva Provincial Competition
                        organizing committee, I contributed to IEEE Uva Wellassa
                        University Student {"Branch's"} successful event
                        coordination.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2017
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        President(Organizing Committee)
                        <span className="separator" />
                        <span className="font-weight-700">
                          {"IDEA'17"} Inter School Quiz Competition
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        {"IDEA'17"} was an island-wide quiz competition
                        organized by Siridhamma College Quiz Club in 2017. It
                        was engaging, challenging, and aimed at fostering
                        knowledge-sharing among students.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Education Ends */}
          </div>

          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">html</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">PHP</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">wordpress</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">React js</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Express js</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={40}
                  style={{ width: "40%" }}
                />
                <span className="percent" style={{ right: "calc(60% - 21px)" }}>
                  40%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">java</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">illustrator</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">after effects</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">photoshop</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={95}
                  style={{ width: "95%" }}
                />
                <span className="percent" style={{ right: "calc(5% - 21px)" }}>
                  95%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Premiere Pro</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
