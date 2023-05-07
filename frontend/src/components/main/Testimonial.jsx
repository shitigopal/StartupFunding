import React from "react";

export const TestimonialCard = (props) => {
  const { text, name, image } = props;
  return (
    <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
      <div className="card testimonial-card">
        <div className="card-up" style={{ backgroundColor: "#9d789b" }}></div>
        <div className="avatar mx-auto bg-white">
          <img src={image} className="rounded-circle img-fluid" />
        </div>
        <div className="card-body">
          <h4 className="mb-4">{name}</h4>
          <hr />
          <p className="dark-grey-text mt-4">
            <i className="fas fa-quote-left pe-2"></i>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "XYZ",
    text: "This is nice app",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
  },
  {
    name: "XYZ",
    text: "This is nice app",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
  },
  {
    name: "XYZ",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
  },
  {
    name: "XYZ",
    text: "This is nice app",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
  },
  {
    name: "XYZ",
    text: "This is nice app",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
  },
  {
    name: "XYZ",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
  },
];

export const Testimonial = () => {
  return (
    <section>
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-xl-8 text-center">
          <h3 className="mb-4">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>
      </div>

      <div className="row text-center d-flex align-items-stretch">
        {testimonials.map((t) => (
          <TestimonialCard name={t.name} text={t.text} image={t.image} />
        ))}
      </div>
    </section>
  );
};
