import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import Catalog from "../../Components/Catalog/Catalog";
import Header from "../../Components/Header/";
import {BottomNav} from "../../Components/MobileMenu";
import RestaurantInfo from '../../Components/RestaurantInfo/RestaurantInfo';
import {RestaurantContext} from "../../Providers/Restaurant";
import {useEffect, useState} from "react";

const DashCliente = () => {
    const params = useParams();
    const {setRestaurantId} = useContext(RestaurantContext);
    const [search, setSearch] = useState();
    const [loading, setLoading] = useState(false);
    const [desktop, setDesktop] = useState(window.innerWidth >= 900);
    const dashRest = true;


    const updateViewport = () => {
        setDesktop(window.innerWidth > 900);
    };

    useEffect(() => {
        window.addEventListener("resize", updateViewport);
        return () => window.removeEventListener("resize", updateViewport);
    });

    setRestaurantId(params.id);

    return (
        <>
            {desktop && <Header setSearch={setSearch}
                                setLoading={setLoading}
                                atribute={"name"}
                                dashRest={dashRest}/>}
            <RestaurantInfo desktop={desktop}/>

            <Catalog desktop={desktop}/>
            {!desktop && <BottomNav dashRest={dashRest}/>}
        </>
    );
};

export default DashCliente;
