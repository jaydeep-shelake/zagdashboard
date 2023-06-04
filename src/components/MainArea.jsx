import plusIcon from "../assets/Plus.png"
import Issue from "./Issue"
import Orders from "./Orders"
const MainArea = () => {
  return (
    <div className="w-[calc(100vw-246px)] bg-[#F5F5F5] h-screen pl-[34px] pr-[54px]">
    <div className="w-full flex items-center justify-between py-[37px] border-b border-b-[#0000001a]">
    <p className="font-bold text-[24px] leading-[29px] text-[#000000]">Orders</p>
    <button className="ont-semibold text-[14px] leading-[18px] text-[#FFFFFF] flex items-center justify-center bg-[#1B59F8] py-[11px] px-[18px] rounded-[10px]">
        <img src={plusIcon} alt="plus" className="w-[24px] h-[24px] mr-[7px]" />
        Add Order
    </button>
    </div>
    <Orders/>
    <Issue/>
    </div>
  )
}

export default MainArea