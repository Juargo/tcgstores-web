import TheHeader from "../container/TheHeader";
import TheContent from "../container/TheContent";
import TheFooter from "../container/TheFooter";
import "../scss/style.scss";

const Old = () => {
  return (
    <div className="c-app c-default-layout">
      {/* <TheSidebar /> */}
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default Old;
