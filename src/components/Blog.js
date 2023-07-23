import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import BlogPopup from "./BlogPopup";
const data = [
  {
    title: "My Blog",
    img: "img/blog/idea3sixty.png",
    tag: "Blog",
    date: { date: "", month: "", year: "" },
    des: [
      "Welcome to idea3sixty, Our team of dedicated writers, researchers, and experts share their knowledge, insights and experiences to provide valuable and informative content that will keep you up-to-date and inspire you. We strive to deliver the best possible content to our readers. Thanks for visiting and happy exploring!",
    ],
    visitweb: "https://idea3sixty.com/",
  },
  {
    title: "My Personal Portfolio",
    img: "img/blog/portfolio.png",
    tag: "Design",
    date: { date: "", month: "", year: "" },
    des: [
      "Welcome to our creative realm! Explore the exciting world of Graphic Designing, UI/UX, Motion Graphic Design, and Web Development. We are passionate about delivering captivating designs that drive engagement and satisfaction. Join us on this artistic odyssey to unlock the secrets of exceptional user experiences and gain valuable insights for elevating your brand's online presence.",
    ],
    visitweb: "https://yasitheranda.me/",
  },
  // {
  //   title: "free psd and sketch ressouces",
  //   img: "img/blog/blog-post-3.jpg",
  //   tag: "Media",
  //   date: { date: "23", month: "jun", year: "2021" },
  //   des: [
  //     "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
  //     "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
  //     "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
  //   ],
  // },
  // {
  //   title: "How to become a successful freelancer",
  //   img: "img/blog/blog-post-4.jpg",
  //   tag: "Technology",
  //   date: { date: "23", month: "jun", year: "2021" },
  //   des: [
  //     "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
  //     "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
  //     "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
  //   ],
  // },
];

const Blog = () => {
  const { nav } = useContext(NavContext);
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <BlogPopup open={modal} close={() => setModal(false)} data={activeData} />
      <section id="myweb" className={`${nav === "myweb" ? "active" : ""}`}>
        <div className="container page-title text-center">
          <h2 className="text-center">
            My <span>websites</span>
          </h2>
          <span className="title-head-subtitle">
            Get more Knowladge and services from me.
          </span>
        </div>
        <div className="container">
          <div className="row">
            {data.map((data, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(i)}>
                      <img className="img-fluid" src={data.img} alt="" />
                    </a>
                    <div className="post-date">
                      {" "}
                      <span>{data.date.date}</span>
                      <span>{data.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(i)}>
                    <h4>{data.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data.des[0].substring(0, 92)}... </p>
                    <a
                      href={data.visitweb}
                      className="btn readmore"
                      target="blank"
                      rel="noopener"
                    >
                      <span>Visit website</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Blog;
