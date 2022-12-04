import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";

function Query(props) {
    const {query: {service, lat, long}} = useRouter()
    return (
        <>
            <Head>
                <title>{`Searching for ${service}...`}</title>
            </Head>
            <div className={`flex justify-center items-center h-screen flex-col gap-y-2`}>
                <h1 className={`text-3xl`}>Searching for <span
                    className={`text-5xl text-blue-600 font-semibold`}>{service}...</span></h1>
                <p>{`for location ${lat}, ${long}`}</p>
            </div>
        </>
    );
}

export default Query;