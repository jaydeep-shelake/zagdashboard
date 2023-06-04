import logo from "../assets/logo.png"
import trendIcon from '../assets/Vector.png'
import setting from "../assets/Settings.png"
import grid from "../assets/Grid.png"
const SideBar = () => {
  return (
    <div className="w-[246px] h-screen bg-[#FFFFFF] px-[26px] flex items-center justify-start flex-col ">
       <div className="w-full mt-[28px] flex items-center justify-center">
        <img src={logo} alt="zag" className="w-[73px] h-[47px]" />
       </div>
       <div className="w-full mt-[42px]">
        <div className="w-full flex items-center justify-start p-[10px]">
          <img src={trendIcon} alt="trend" className="w-[20px] h-[12px]" />
          <p className="font-medium text-[14px] leading-[17px] tracking-[-0.154px] text-[#000000] ml-[13px]">Reports</p>
        </div>
        <div className="w-full flex items-center justify-start bg-[#1b59f81a] rounded-[10px] p-[10px] my-[10px]">
          <img src={grid} alt="trend" className="w-[24px] h-[24px]" />
          <p className="font-medium text-[14px] leading-[17px] tracking-[-0.154px] text-[#1B59F8] ml-[13px]">Wokrspace</p>
        </div>
        <div className="w-full flex items-center justify-start  rounded-[10px] p-[10px]">
          <img src={setting} alt="trend"  className="W-[20px] h-[20px]"/>
          <p className="font-medium text-[14px] leading-[17px] tracking-[-0.154px] text-[#000000] ml-[13px]">Settings</p>
        </div>
       </div>
    </div>
  )
}

export default SideBar