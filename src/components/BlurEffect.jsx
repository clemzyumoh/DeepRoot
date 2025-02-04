// const BlurEffect = ({ mode = "dark", customColor }) => {
//   const colors = {
//     dark: "rgba(0, 0, 0, 0.4)", // Default dark mode blur
//     light: "rgba(255, 255, 255, 0.4)", // Default light mode blur
//   };

//   return (
//     <div
//       className="absolute inset-0 backdrop-blur-xl"
//       style={{ backgroundColor: customColor || colors[mode] }}
//     />
//   );
// };

// export default BlurEffect;

const BlurEffect = ({ color = "rgba(0, 0, 0, 0.4)", className="" }) => {
  return (
    <div
      className={` ${className}`}
      style={{ backgroundColor: color }}
    />
  );
};

export default BlurEffect;


