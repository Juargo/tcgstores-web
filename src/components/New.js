import TheHeader from "../container/TheHeader";
import TheNewContent from "../container/TheNewContent";
import TheFooter from "../container/TheFooter";
import "../scss/style.scss";

const Old = () => {
  return (
    <div className="c-app c-default-layout">
      {/* <TheSidebar /> */}
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheNewContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default Old;
