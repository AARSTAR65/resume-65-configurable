const TabHead = (props) => {
  const highlight = props.selected ? '#FF0000' : '#0000FF';
  return (
    <button {...props} class="tab-button" style={{
        marginLeft: props.selected? 10 : 0
    }}>
      <div class="tab-btn-bg">
        <svg width="200px" height="55px">
          <path
            d="M 95 0 L 125 0 L 133 8 L 145 8 L 145 18 L 140 20 L 130 20 L 125 16 L 100 16 L 95 11 L 95 0"
            fill="#BBBBBB77"
            stroke="#BBBBBB77"
          />
          <path
            d="M 0 20 L 75 20 L 103 48 L 16 48 L 0 33 L 0 20"
            fill="#BBBBBB77"
            stroke="#BBBBBB77"
          />
          <path
            d="M 0 0 L 125 0 L 133 8 L 170 8 L 200 45 L 200 55 L 200 55 L 137 55 L 130 48 L 16 48 L 0 33 L 0 0"
            fill="#BBBBBB99"
            stroke="#EEEEEE"
          />
          <path
            d="M 142 50 L 200 50 L 200 55 L 149 55"
            fill={highlight}
            stroke={highlight}
          />
          <path
            d="M 25 39.5 L 131.5 39.5 L 149 55"
            fill="none"
            stroke={highlight}
          />
        </svg>
      </div>
      <span class="tab-btn-label">{props.label}</span>
    </button>
  );
};

export default TabHead;
