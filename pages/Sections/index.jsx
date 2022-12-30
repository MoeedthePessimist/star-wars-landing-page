import { CarouselSection } from "./CarouselSection";
import { MainSection } from "./MainSection";
import { TextSection } from "./TextSection";
import { UsersSection } from "./UsersSection";

const MainContainer = () => {
  const mainContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    postition: "absolute",
    width: "100%",
    top: 0,
  };

  return (
    <div style={mainContainer}>
      <MainSection />
      <TextSection />
      <CarouselSection />
      <UsersSection />
    </div>
  );
};

export default MainContainer;
