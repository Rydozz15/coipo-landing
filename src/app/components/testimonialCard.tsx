import Image from "next/image";

const TestimonialCard = ({ name, position, image, rating, testimonial }) => (
  <div className="card w-96 bg-base-200">
    <figure className="px-10 pt-10">
      <Image
        src={image}
        className="w-full"
        alt={`Foto de cliente ${name} entregando su testimonio`}
        width={200}
        height={200}
      />
    </figure>
    <div className="card-body items-center text-center">
      <h4 className="card-title">{name}</h4>
      <p>{testimonial}</p>
      <div className="card-actions">
        <div className="badge badge-outline p-3">
          <ul className="flex justify-center">
            {Array.from({ length: rating }, (_, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  className="w-5 text-warning"
                >
                  <path
                    fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
