import TheHeader from "../container/TheHeader";
import TheContentGroup from "../container/TheContentGroup";
import TheFooter from "../container/TheFooter";
import "../scss/style.scss";

const Group = () => {
  return (
    <div className="c-app c-default-layout">
      {/* <TheSidebar /> */}
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContentGroup />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default Group;
