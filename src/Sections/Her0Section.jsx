import banner from "../assets/deeproot-banner.jpg"



const Her0Section = () => {
  return (
    <main className="flex justify-center flex-col items-center mb-20">
      <div
        className="w-full h-48 md:h-[500px] bg-cover bg-center mx-2"
        style={{ backgroundImage: `url(${banner})` }}></div>

      {/* Heading */}
      <h1 className="text-3xl text-[#5c4160] md:text-5xl font-bold md:mt-12 mt-6">
        HELLO FUTURE BY DEEPROOTS
      </h1>

      {/* Paragraph */}
      <p className=" md:text-xl text-lg md:tracking-wide text-center my-5 md:w-[40vw]">
        FROM IMPOSSIBLE TO POSSIBLE - A PLATFORM FOR INNOVATIVE APPS AND THE
        NEW-LEVEL OF BLOCKCHAIN NETWORK
      </p>

      {/* Button */}
      <button className="mt-6 px-6 py-3 bg-[#B26934] text-white rounded-2xl w-full md:w-[30vw] text-lg md:text-3xl md:my-6 tracking-wider font-bold hover:bg-[#683917] transition">
        Join the Movement
      </button>
    </main>
  );
}

export default Her0Section