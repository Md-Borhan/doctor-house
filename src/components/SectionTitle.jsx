const SectionTitle = ({ title }) => {
  return (
    <div className="w-full md:w-11/12 mx-auto text-center mb-8 md:mb-12 ">
      <h2 className="sectionTitle">{title}</h2>
      <p className="text-[#3B3A3A]">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
    </div>
  );
};

export default SectionTitle;
