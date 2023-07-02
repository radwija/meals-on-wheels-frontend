import {useEffect, useState} from "react";
import Layout from "../components/Layout";
import { getMenuById } from "../api/main-api";
import { postMemberOrderCreateAPI } from "../api/member-api";
import { menu_type } from "../context/context-type";
import { useParams } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";

const MemberMealPackageDetail = () => {
  const { menuId } = useParams();
  const auth = useAuthUser();
  const token = auth()?.token;
  const [menu, setMenu] = useState(menu_type);
  const [msg, setMsg] = useState("")

   //Modal
   const [show, setShow] = useState(false)
   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)

  useEffect(()=>{
    getMenuById(token, menuId)
    .then((resp) => setMenu(resp.data))
    .catch((err) => console.log(err))
  }, [menuId, token])

  function handlePostOrder(){
    handleShow()
    postMemberOrderCreateAPI(token, menuId)
    .then((resp) => setMsg(resp.data.message))
    .catch((err) => console.warn(err))
  }

    return(
        <Layout>
        <div className="bg-gray-100">
  <h1 className="text-black text-center text-2xl font-bold py-5">Our Package Detail</h1>
  <div className="flex flex-col md:flex-row justify-center items-center">
    <div className="w-full md:w-1/2 p-8">
      <div className="border rounded-lg flex">
        <div className="w-1/2">
          <img
            src={menu.packageImage}
            alt="menu"
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="w-1/2 bg-white rounded-r-lg p-10">
          <h2 className="text-black font-semibold text-xl mb-4">{menu.packageName}</h2>
          <ul className="my-3">
            <li className="text-black py-2 flex items-center border-b">
              <span className="mr-2 font-normal">Main Course:</span>
              <span className="mr-4 font-normal">{menu.mainCourse}</span>
            </li>
            <li className="text-black py-2 flex items-center border-b">
              <span className="mr-2 font-normal">Salad:</span>
              <span className="mr-4 font-normal">{menu.salad}</span>
            </li>
            <li className="text-black py-2 flex items-center border-b">
              <span className="mr-2 font-normal">Soup:</span>
              <span className="mr-4 font-normal">{menu.soup}</span>
            </li>
            <li className="text-black py-2 flex items-center border-b">
              <span className="mr-2 font-normal">Dessert:</span>
              <span className="mr-4 font-normal">{menu.dessert}</span>
            </li>
            <li className="text-black py-2 flex items-center border-b">
              <span className="mr-2 font-normal">Drink:</span>
              <span className="mr-4 font-normal">{menu.drink}</span>
            </li>
          </ul>
          <div className="flex justify-center mt-4">
            <a
              href="/member"
              className="button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </a>
            <button
              className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onclick={handlePostOrder}
            >
              Request Meal
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
         
{/* Popup Request Msg */}
<div className={`fixed inset-0 flex items-center justify-center ${show ? '' : 'hidden'}`}>
  <div className="bg-gray-100 rounded-lg shadow-lg p-6">
    <div className="text-right">
      <button className="text-gray-500 hover:text-gray-700" onClick={handleClose}>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div className="modal-body">
      <h2 className="text-gray-900 text-lg font-bold">{msg && <span>{msg}</span>}</h2>
    </div>
    <div className="text-center mt-4">
      <button onClick={handleClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40">
        Back
      </button>
    </div>
  </div>
</div>


        </Layout>
    )
}
export default MemberMealPackageDetail;