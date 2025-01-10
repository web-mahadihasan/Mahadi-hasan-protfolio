import "./skill.css"


const SkillCard = ({color, icon, iconBg, viewBox}) => {
    console.log(icon)
  return (
        <div className="relative p-6 w-fit">
        
        <div className=" media-object"
            style={{
                "--color2": color,
                "--color3": color,
              }}
        >
            <div className="p-6 rounded-none">
                <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox={viewBox}
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    color: `${color}`,
                    // backgroundColor: `${iconBg}`,
                    zIndex: "40" 
                }}
                >
                    {icon}
                </svg>
            </div>
        </div>
    </div>
    
  )
};

export default SkillCard;
