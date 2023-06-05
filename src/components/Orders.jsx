import search from "../assets/Search.png"
import arrow from "../assets/Chevron-Right.png"
import carot from "../assets/uparrow.png"
import OrderItem from "./OrderItem"
import { useState } from "react"
import EditModal from "./EditModal"
const Orders = () => {
    const [activeTab,setActiveTab] =useState()
    const [lowest,setLowest] = useState(false)
    const [dateLowest,setDateLowest] =useState(false)
    const [showEditModal,setShowEditModal]=useState(false)
    const [currentOrder,setCurrentOrder]=useState({})
     const orders  =[
        {
            title:'McDonalds',
            subTitle:'Big Mac Jumbo',
            active:200,
            amount:200,
            palced:'3/6/22',
            img:'https://res.cloudinary.com/qtalk/image/upload/v1685967102/SuperLeaves/macd_jsnaqi.png',
            status:'Confirmed',
            bg:'#FDE7E6',
            width:'29px',
            height:'29px'
        },
        {
            title:'Disney ',
            subTitle:'Renewal Subscription',
            active:200,
            amount:400,
            palced:'12/8/22',
            img:'https://res.cloudinary.com/qtalk/image/upload/v1685967102/SuperLeaves/disney_ghgudy.png',
            status:'Delivered',
            bg:'#0671d814',
            width:'46px',
            height:'18px'
        },
        {
            title:'GM',
            subTitle:'Alternator Car Parts',
            active:200,
            amount:350,
            palced:'6/3/22',
            img:'https://res.cloudinary.com/qtalk/image/upload/v1685967102/SuperLeaves/gm_mzjldy.png',
            status:'Refund Completed (30d )',
            bg:'#0671d814',
            width:'29px',
            height:'29px'
        },
        {
            title:'AARP',
            subTitle:'Health Care Package Adult A1',
            active:200,
            amount:500,
            palced:'12/2/22',
            img:'https://res.cloudinary.com/qtalk/image/upload/v1685967102/SuperLeaves/Group_3_w6lccp.png',
            status:'Pending',
            bg:'#FDE7E6',
            width:'46px',
            height:'18px'
        }
    ]
   const [updatedOrders,setUpdatedOrders] =useState(orders)
    const tabs =[
        'Confirmed',
        'Delivered',
        'Refund Completed (30d )',
        'Pending'
    ]

    const handleFilter =(tab,i)=>{
        setActiveTab(i)
        const newOrders  = orders.filter(item=>item.status === tab)
        setUpdatedOrders(newOrders)
    }

    const sortAmount =()=>{
      if(lowest){
        updatedOrders.sort((a,b)=>a.amount - b.amount)
      }
      else{
        updatedOrders.sort((a,b)=>b.amount - a.amount)
      }
      setLowest(!lowest)
    }

    const sortDate =()=>{
    if(dateLowest){
      updatedOrders.sort((a,b)=>{
        const dateA = new Date(a.palced)
        const dateB  = new Date(b.palced)
        return dateA - dateB
      })
    }
    else{
       updatedOrders.sort((a,b)=>{
        const dateA = new Date(a.palced)
        const dateB  = new Date(b.palced)
        return dateB - dateA
      })
    }
    setDateLowest(!dateLowest)
    }

    const handleOpenEditModal =(order)=>{
      setShowEditModal(true)
      setCurrentOrder(order)
    }

    const getSubmittedOrders  =(newOrder)=>{
     const newUpdatedOrder = orders.map((order)=>{
      if(order.title === newOrder.title){
       return {...order,...newOrder} 
      }
      return order
     })
     setUpdatedOrders(newUpdatedOrder)
     setShowEditModal(false)
    }

  return (
    <div className="w-full  bg-[#FFFFFF] rounded-[20px] p-[28px] mt-[30px]">
      <div className="w-full flex items-center justify-between pb-[12px] border-b border-b-[#F4F5F7]">
        <p className="font-semibold text-[17px] leading-[22px] text-[#2F2F2F]">
            Confirmed
        <span className="text-[#2f2f2f66] font-semibold text-[17px] leading-[22px] ml-[8px]">256</span>
        </p>
        <div className="bg-[#EFF0F6] w-[36px] h-[36px] rounded-full flex items-center justify-center"> -
        </div>
      </div>

      <div className="w-full flex items-center justify-between mt-[22px]">
        <div className="w-[30%] flex items-center justify-start">
           <img src={search} alt="search" className="w-[24px] h-[24px]" />
           <input type="text" className=" ml-[8px] bg-transparent outline-none border-none "  placeholder="Search"/>
        </div>
        <div className="w-[70%] flex items-center justify-evenly">
          <div className="w-[125px] py-[7px] bg-[#EFF0F6] flex items-center justify-center rounded-[7px] relative group">
            <p className="text-[#4F5E74] font-semibold text-[10px] leading-[12px] tracking-[0.02px] ">ACTIVE ORDERS</p>
            <img src={arrow} alt="arrow" className="h-[12px] w-[12px] ml-[4px]" />
            <div className="bg-[#FFFFFF] w-[235px] p-[20px] rounded-[10px] absolute bottom-[-160px] left-[-95px] box-s invisible group-hover:visible">
                {
                    tabs.map((tab,i)=>(
                        <div key={tab} className="w-full flex items-start justify-start my-[10px] cursor-pointer" onClick={()=>handleFilter(tab,i)}>
                            <div className={`w-[17px] h-[17px] rounded-full border border-[#0000004D] ${activeTab===i &&'bg-[#4F5E74]'}`}></div>
                            <p className="text-[14px] leading-[17px] tracking-[-0.154px] text-[#000000] ml-[10px]">{tab}</p>
                        </div>
                    ))
                }
               
            </div>
          </div>
          <div className="w-[125px] py-[7px] bg-[#EFF0F6] flex items-center justify-between px-[11px] rounded-[7px] cursor-pointer" onClick={sortAmount}>
            <p className="text-[#4F5E74] font-semibold text-[10px] leading-[12px] tracking-[0.02px] ">Amount</p>
            <img src={arrow} alt="arrow" className="h-[12px] w-[12px] " />
          </div>
          <div className="w-[125px] py-[7px] bg-[#EFF0F6] flex items-center justify-between rounded-[7px] px-[11px]" onClick={sortDate}>
            <p className="text-[#4F5E74] font-semibold text-[10px] leading-[12px] tracking-[0.02px] ">Placed on</p>
            <img src={arrow} alt="arrow" className="h-[12px] w-[12px] " />
          </div>
          <div className="w-[125px] py-[7px]  flex items-center justify-center rounded-[7px]">
            <p className="text-[#4F5E74] font-semibold text-[10px] leading-[12px] tracking-[0.02px] ">Options</p>
            <img src={carot} alt="arrow" className="h-[20px] w-[20px] ml-[4px]" />
          </div>
        </div>
      </div>

      {/* orderlist  */}

      <div className="w-full mt-[13px]">
        {
            updatedOrders.map((order,i)=>(
                <OrderItem key={i} order={order} handleOpenEditModal={handleOpenEditModal}/>
            ))
        }
      </div>
      {showEditModal&&<EditModal order={currentOrder} getSubmittedOrders={getSubmittedOrders}/>}
    </div>
  )
}

export default Orders