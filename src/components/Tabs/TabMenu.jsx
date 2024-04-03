import { useState } from "react";
import Project from "./TabContent/Project";
import Study from "./TabContent/Study";
import Contact from "./TabContent/Contact";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab_content">
      <ul className="tabs">
        <li className={activeTab === 0 ? "active" : ""}>
          <button onClick={() => handleTabClick(0)}>Project</button>
        </li>
        <li className={activeTab === 1 ? "active" : ""}>
          <button onClick={() => handleTabClick(1)}>Study</button>
        </li>
        <li className={activeTab === 2 ? "active" : ""}>
          <button onClick={() => handleTabClick(2)}>Contact</button>
        </li>
      </ul>

      {activeTab === 0 && <Project />}
      {activeTab === 1 && <Study />}
      {activeTab === 2 && <Contact />}
    </div>
  );
};

export default TabMenu;
