import React, { useContext } from "react";
import SearchArea from "./Search/Search";
import { LayoutContext } from "context/LayoutProvider";
import { Waypoint } from "react-waypoint";
// not used for the moment
import { TopHotelsGrid, LuxaryHotelsGrid } from "./Grid";
import LocationGrid from "./Location/Location";

const Home = () => {
  const [, dispatch] = useContext(LayoutContext);
  return (
    <>
      <SearchArea />
      <Waypoint
        onEnter={() => dispatch({ type: "HIDE_TOP_SEARCHBAR" })}
        onLeave={() => dispatch({ type: "SHOW_TOP_SEARCHBAR" })}
      />
      {/* usar tres secciones de igual manera pero apra otra informacion */}
      {/* Seccion Explore destinations  */}
      {/* <LocationGrid /> */}
      {/* Traveles Choice: top Hotels seccion */}
      <TopHotelsGrid />
      {/* Best Rated: Luxary hotels */}
      <LuxaryHotelsGrid />
    </>
  );
};

export default Home;
