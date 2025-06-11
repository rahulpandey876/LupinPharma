import React from "react";


import NumbersPage from "./NumbersPage";
import HealingHealthPage from "./HealingHealthPage";
import LatestPage from "./LatestPage";
import ResearchInnovationPage from "./ResearchInnovationPage";
import ManufacturingPage from "./ManufacturingPage";
import PerspectivesPage from "./PerspectivesPage";
import BeyondMedicinesPage from "./BeyondMedicinesPage";
import OurjourneyPage from "./OurjourneyPage";
import LifeAtLupinPage from "./LifeAtLupinPage";

import ImageCarousal from "./ImageCarousal";

const HomePage=()=>{
    return (
        <>
        <div >
            <ImageCarousal/>
            <NumbersPage/>
            <HealingHealthPage/>
            <LatestPage/>
            <ResearchInnovationPage/>
            <ManufacturingPage/>
            <PerspectivesPage/>
            <BeyondMedicinesPage/>
            <OurjourneyPage/>
            <LifeAtLupinPage/>
           </div>
        
        </>
    )
}

export default HomePage