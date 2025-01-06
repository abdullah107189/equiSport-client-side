import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Card from "../../components/Card/Card";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { Link } from "react-router-dom";

const MyEquipment = () => {
    const [dataLoading, setDataLoading] = useState(true)
    const { user } = useContext(AuthContext)
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch(`https://equi-sports-server-side-ten.vercel.app/my-equipments`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user?.email })
        })
            .then(res => res.json())
            .then(data => {
                setDatas(data);
                setDataLoading(false)
            })
            .catch(() => {
                setDataLoading(false)
            })
    }, [datas])

    return (
        <div className="mxw">
            {
                dataLoading ? <div className="col-span-4 minH"><LoadingPage></LoadingPage></div>
                    :
                    datas.length === 0 ?
                        <div className="w-full col-span-4 flex items-center flex-col gap-10 minH justify-center">
                            <h1 className="text-3xl font-bold ">You are not add any Equipment</h1>
                            <Link to={'/addEquipment'} className="btn hover:btn-accent ">Add Equipment</Link>
                        </div>
                        :
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10">
                            {datas.map(data => <Card key={data?._id} data={data}></Card>)}
                        </div>
            }
        </div>
    );
};

export default MyEquipment;