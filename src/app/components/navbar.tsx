export default function Navbar() {
  return (
    <nav className="navbar justify-between bg-base-300">
      {/* Logo */}
      <a className="btn btn-ghost text-lg">
        <img alt="Logo" src="/logo.svg" className="w-4" />
        App Name
      </a>

      {/* Menu for mobile */}
      <div className="dropdown dropdown-end sm:hidden">
        <button className="btn btn-ghost">
          <i className="fa-solid fa-bars text-lg"></i>
        </button>

        <ul
          tabIndex="0"
          className="dropdown-content menu z-[1] bg-base-200 p-4 rounded-box shadow w-64 gap-2"
        >
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Team</a>
          </li>
          <li>
            <h2 className="menu-title">Features</h2>
            <ul>
              <li>
                <a>Tech tools</a>
              </li>
              <li>
                <a>Podcast</a>
              </li>
              <li>
                <a>Community</a>
              </li>
            </ul>
          </li>
          <a className="btn btn-primary btn-sm">
            <i className="fa-solid fa-rocket"></i>
            Access
          </a>
        </ul>
      </div>

      {/* Menu for desktop */}
      <div className="hidden sm:flex gap-2">
        <a className="btn btn-ghost btn-sm">
          <i className="fa-solid fa-circle-info text-secondary"></i>
          About
        </a>

        <a className="btn btn-ghost btn-sm">
          <i className="fa-solid fa-users text-secondary"></i>
          Team
        </a>

        {/* Dropdown menu */}
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-sm">
            <i className="fa-solid fa-fire text-secondary"></i>
            Features
            <i className="fa-solid fa-chevron-down"></i>
          </button>

          <ul
            tabIndex="0"
            className="dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2"
          >
            <li>
              <a>Tech tools</a>
            </li>
            <li>
              <a>Podcast</a>
            </li>
            <li>
              <a>Community</a>
            </li>
          </ul>
        </div>

        <a className="btn btn-primary btn-sm">
          <i className="fa-solid fa-rocket"></i>
          Access
        </a>
      </div>
    </nav>
  );
}
