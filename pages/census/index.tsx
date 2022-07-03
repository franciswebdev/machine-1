
import { NextPage } from "next";
import Header from "@/components/recoil/app-1/Header";
import Body from "@/components/recoil/app-1/Body";
import { useEffect } from "react";

const Home: NextPage = () => {

	useEffect(() => {
    console.log('>>>>>>')
  }, []);

  return (
    <>
      <iframe width="100%" height="500" src="https://www.qa.sbs.com.au/census-explorer-2021/index.html?lang=en&placeType=australia&places=australia&topic=cultural-diversity-and-place" />
    </>
  );
}

export default Home;