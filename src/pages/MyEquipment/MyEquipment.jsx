import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Card from "../../components/Card/Card";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

const MyEquipment = () => {
    const { user } = useContext(AuthContext)
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4545/my-equipments`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user?.email })
        })
            .then(res => res.json())
            .then(data => {
                setDatas(data);
            })
    }, [datas])
    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 py-10">
            {
                !datas ? <div className={'xl:col-span-4 lg:col-span-3 md:col-span-2'}><LoadingPage></LoadingPage></div>
                    :
                    datas.map(data => <Card key={data?._id} data={data}></Card>)
            }
        </div>
    );
};

export default MyEquipment;