const Button = ({ text, className, id, url }) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (url) {
      // Open the external link in a new tab
      window.open(url, "_blank");
    } else if (id) {
      // Smooth scroll to section
      const target = document.getElementById(id);
      if (target) {
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <a onClick={handleClick} className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
