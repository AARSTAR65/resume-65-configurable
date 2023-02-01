import TabHead from './TabHead';

const SideBar = ({ tabs, currentTab, onTabChange }) => {
  return (
    <div id="side-nav">
      <svg height="650" width="575" class="top-left">
        <path
          d="M 80 45 L 100 45 L 100 210 L 125 235 L 125 560 L 100 585 L 100 610 L 80 610 L 45 585 L 45 75 L 80 45"
          fill="#88888877"
          stroke="#888888"
        />
      </svg>
      {tabs.map((tab, index) => (
        <TabHead label={tab.title} onClick={()=>onTabChange(index)} selected={index===currentTab} />
      ))}
    </div>
  );
};

export default SideBar;
