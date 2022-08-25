export async function getServerSideProps(context) {
    let headers={
        Authorization: "Bearer b35eaddac22958868e43308870ec29a685e0935a7ec790d450283c283d1c8922015b35f7865c63655ae9b3d3854137acfc18b3e9b7567c861bad59208a9e8c4b346a3002a2f07eeb3870156ea2120e508e6950cb7c8c0c62e35a928fdf3d8e70caa8d7e69a0024487e72f3c4bc086e54bd02425572c91e058fc97df9960b528b"
    }
    let a = await fetch("https://murmuring-brushlands-13987.herokuapp.com/api/games?populate=*" , {headers : headers});
    let b = await fetch("https://murmuring-brushlands-13987.herokuapp.com/api/games?filters[genre]=Action-adventure&populate=*", {headers : headers});
    let games = await a.json();
    let action = await b.json();
    console.log(action)
    return {
      props: {games},
  }
}