export default function Pricing() {
  return (
    <article>
      <div className="flex flex-col gap-8 items-center">
        {/*  Title */}
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-bold text-3xl">Servicios</h1>
          <span>
            Tenemos múltiples servicios, para que escojas el que más se ajuste a
            ti.
          </span>
        </div>

        {/*  Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start px-2 gap-8">
          {/*  Price */}
          <div className="flex flex-col gap-6 bg-base-200 rounded-box p-8">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-xl">Free</h2>

              <h1 className="text-5xl font-bold">Free</h1>

              <span className="text-sm">Free forever</span>
            </div>

            {/*  Features */}
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-check text-accent"></i>1 user
              </div>

              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-check text-accent"></i>
                Plan features
              </div>

              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-check text-accent"></i>
                Product support
              </div>
            </div>

            <a className="btn btn-secondary">Sign up</a>
          </div>

          {/*  Price (Most popular) */}
          <div className="flex flex-col gap-6 bg-base-200 rounded-box p-8 border border-primary shadow">
            <div className="badge badge-primary self-center badge-lg">
              Most popular
            </div>

            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-xl">Startup</h2>

              <h1 className="text-5xl font-bold">$39</h1>

              <span className="text-sm">
                All the basics for starting a new business
              </span>
            </div>

            {/*  Features */}
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-check text-accent"></i>2 users
              </div>

              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-check text-accent"></i>
                Plan features
              </div>

              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-check text-accent"></i>
                Product support
              </div>
            </div>

            <a className="btn btn-primary">Sign up</a>
          </div>

          {/*  Price */}
          <div className="flex flex-col gap-6 bg-base-200 rounded-box p-8">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-xl">Team</h2>

              <h1 className="text-5xl font-bold">$89</h1>

              <span className="text-sm">
                Everything you need for a growing business
              </span>
            </div>

            {/*  Features */}
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-check text-accent"></i>
                10 users
              </div>

              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-check text-accent"></i>
                Plan features
              </div>

              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-check text-accent"></i>
                Product support
              </div>
            </div>

            <a className="btn btn-secondary">Sign up</a>
          </div>
        </div>
      </div>
    </article>
  );
}
