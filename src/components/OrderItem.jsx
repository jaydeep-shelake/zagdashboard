import dots from "../assets/ellipsis-h.png"
const OrderItem = ({order}) => {
  return (
    <div className="w-full flex items-center justify-center my-[13px]">
      <div className="w-[30%]">
        <div className="flex items-center justify-start">
           <div className="w-[20px] h-[20px] rounded-full border border-[#0000004D]">

           </div>

           <div className="flex items-start justify-start ">
             <div className=" w-[61px] h-[42px] rounded-[10px] mx-[16px] flex items-center justify-center" style={{background:order.bg}}>
                <img src={order.img} alt="macd"  style={{width:order.width, height:order.height}} />
             </div>
             <div>
                <p className="font-semibold text-[14px] leading-[18px] text-[#000000]">{order.title}</p>
                <p className="text-[12px] leading-[15px] text-[#00000080]">{order.subTitle}</p>
             </div>
           </div>
        </div>

      </div>
      <div className="w-[70%] flex items-center justify-evenly">
        <div className="w-[125px] py-[7px]  flex items-center justify-center ont-medium text-[14px] leading-[17px] tracking-[-0.154px] text-[#70768C]">
           {order.active}
        </div>
        <div className="w-[125px] py-[7px]  flex items-center justify-center ont-medium text-[14px] leading-[17px] tracking-[-0.154px] text-[#70768C]">
           {order.amount}
        </div>
        <div className="w-[125px] py-[7px]  flex items-center justify-center ont-medium text-[14px] leading-[17px] tracking-[-0.154px] text-[#70768C]">
           {order.palced}
        </div>
        <div className="w-[125px] py-[7px]  flex items-center justify-center ont-medium text-[14px] leading-[17px] tracking-[-0.154px] text-[#70768C] cursor-pointer">
          <img src={dots} alt="dots"  className="w-[24px] h-[24px]"/>
        </div>
      </div>
    </div>
  )
}

export default OrderItem