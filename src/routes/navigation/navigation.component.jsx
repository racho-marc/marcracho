import { Fragment, useEffect, useState } from "react";
import Spinner from "../../components/spinner/spinner.component";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header.component";

import "./navigation.styles.scss";

const Navigation = () => {
    const [isLoading, setIsLoading]  = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, [isLoading])
    return (
        <Fragment>            
            <Header />
            { isLoading ? ( <Spinner /> ) 
                : ( <Outlet /> )
            }
        </Fragment>
    )
}

export default Navigation;