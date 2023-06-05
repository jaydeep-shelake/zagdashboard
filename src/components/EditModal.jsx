import { useState } from "react"

const EditModal = ({order,getSubmittedOrders}) => {
  
  const [activeOrder,setActiveOrder] =useState(order.active)
  const [amount,setAmount] = useState(order.amount)
    const handleSubmit =()=>{
     getSubmittedOrders({...order,active:activeOrder,amount:amount})
    }
  return (
    <div className="fixed  w-full h-full top-0 left-0 bg-[#00000099] flex items-center justify-center">
      <div className='w-[413px]  bg-white p-[25px] rounded-[8px]'>
        <div className="flex items-start justify-start mb-[10px]">
             <div className=" w-[61px] h-[42px] rounded-[10px] mr-[16px] flex items-center justify-center" style={{background:order.bg}}>
                <img src={order.img} alt="macd"  style={{width:order.width, height:order.height}} />
             </div>
             <div>
                <p className="font-semibold text-[14px] leading-[18px] text-[#000000]">{order.title}</p>
                <p className="text-[12px] leading-[15px] text-[#00000080]">{order.subTitle}</p>
             </div>
           </div>
          <div className='w-full mt-[10px]'>
            <label htmlFor="">Active Orders</label>
            <div className='w-full'>
               <input type="text" className='w-full outline-none border border-gray-500 py-[10px] px-[15px] mt-[8px] rounded-[8px]' value={activeOrder}  onChange={(e)=>setActiveOrder(e.target.value)}/>
            </div>
         </div>
          <div className='w-full mt-[10px]'>
            <label htmlFor="">Amount</label>
            <div className='w-full'>
               <input type="text" className='w-full outline-none border border-gray-500 py-[10px] px-[15px] mt-[8px] rounded-[8px]'  value={amount} onChange={(e)=>setAmount(e.target.value)} />
            </div>
         </div>
          <button className='flex items-center justify-center w-full py-[17px] bg-[#000000] text-[#fff] rounded-[30px] mt-[20px]' onClick={handleSubmit}>Update</button>
      </div>
    </div>
  )
}

export default EditModal