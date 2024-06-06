import Time from "../components/Timeline";

const Education = () => {
  return (
    <div
      id="education"
      className="flex flex-col items-center justify-center min-h-screen pt-16 "
    >
      <h1 className="p-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-6xl font-bold mb-8 text-center">
        Education
      </h1>
      <div>
        <Time />
      </div>
    </div>
  );
};
export default Education;
