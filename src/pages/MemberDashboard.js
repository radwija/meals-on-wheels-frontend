import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import {getMenu} from "../api/main-api"
import {getMemberOrderAPI} from "../api/member-api";
import { useAuthUser } from "react-auth-kit";
import { getProfile } from "../api/profile-api";
import { useNavigate } from "react-router";


const MemberDashboard = () => {
  const auth = useAuthUser();
  const token = auth()?.token;
  const email = auth()?.email;
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);


  useEffect(() =>{

    getMenu(token, email)
    .then((resp) =>{
      setMenu(resp.data);
    })
    .catch((err) =>{
      console.log(err)
    });

    getMemberOrderAPI(token)
    .then((resp) => setOrder(resp.data))
    .catch((err) => console.log(err.response.data));
  }, [])

    return(
        <Layout>
        <Carousel></Carousel>
        <div className="py-5">
        <div className="col-lg-6 mb-3 text-center">
          <h3 className="font-bold text-2xl">
            Our Menus are in Packages to Help You Manage A Balanced Diet.
          </h3>
          <h4  className="text-1xl">Choose the package that is to your liking.</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menu.map((data)=>(
        <div  key ={data.id} className="max-w-sm rounded overflow-hidden shadow-lg mx-10 my-8">
        <img
          src={data.packageImage}
          alt="menu"
          className="w-full"
        />
        <div className="px-6 py-4">
        <h5 className="p-3 text-center text-xl font-bold mb-0">{data.packageName}</h5>
        <div className="flex justify-center">
        <Link to={`/meals-package-detail/${data.id}`}>
          <button className="font-semibold bg-cyan-950 hover:bg-cyan-900 text-white py-2 px-10 rounded-lg shadow-md my-3">
            See Detail Menu
          </button>
        </Link>
      </div>
        </div>
        </div>
        ))}
      </div>
      </div>
        </Layout>
    )
}
export default MemberDashboard;