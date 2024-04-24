import TestimonialCard from "./TestimonialCard";
// Datos de testimonios

const TestimonialsSection = ({ data }) => (
  <section className="mb-32 text-center px-20 py-8">
    <h2 className="mb-12 pb-4 text-center text-3xl font-bold">Testimonios</h2>
    <div className="grid gap-6 md:grid-cols-3 xl:gap-x-12">
      {data.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
