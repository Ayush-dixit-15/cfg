import React from 'react';
import { useRouter } from "next/router";

const Console = ({console}) => {
    const router = useRouter();
    const { slug } = router.query;
  return (
    <div>{slug}</div>
  )
}

export async function getServerSideProps(context) {
    let headers = {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ}`,
    };
    let url =
        "http://localhost:1337/api/consoles?filters[slug]=" +
        context.query.slug +
        "&populate=*";
    let data = await fetch(url, { headers: headers });
    let console = await data.json();
    return {
        props: { console: console.data[0] }, // will be passed to the page component as props
    };
}

export default Console;