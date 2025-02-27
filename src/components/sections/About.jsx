export const About = () => {
  return (
    <section
      id="about"
      className="min-h-9/10 text-white flex flex-col items-center justify-start mt-[240px] mb-[240px]"
    >
      <h3 className="text-2xl md:text-[20px] font-bold mb-4">WHO AM I ??</h3>

      <p className="max-w-xl mx-auto text-center px-4 text-sm md:text-[16px]">
        I am Inioluwa Adeleye, a skilled videographer based in Lagos. I
        specialize in crafting compelling visual narratives for both corporate
        and fashion brands, bringing stories to life through innovative and
        stylish video production.
      </p>

      <div className="flex space-x-10 mt-20 px-20 py-4">
        <div className="flex flex-col text-gray-500 md:text-start text-center pr-4 border-r items-center">
          <h1 className="font-mono md:text-7xl text-2xl font-serif">2+</h1>
          <p className="text-xs">Years of experience</p>
        </div>

        <div className="flex flex-col text-gray-500 items-center">
          <h1 className="font-mono md:text-7xl text-2xl font-serif">10+</h1>
          <p className="text-xs">Satisfied clients</p>
        </div>

        <div className="flex flex-col text-gray-500 items-center border-l pl-4">
          <h1 className="font-mono md:text-7xl text-2xl font-serif">20+</h1>
          <p className="text-xs">Projects delivered</p>
        </div>
      </div>
    </section>
  );
};
