import React from 'react';

function UnderConstruction() {
    return (
        <div className="App">
            <ConstructionTape />
            <p>Currently Under Construction</p>
            <img src="https://www.animatedimages.org/data/media/570/animated-merry-christmas-image-0042.gif" alt="Christmas gif" />
            <ConstructionTape />
        </div>
    )
}

function ConstructionTape() {
    const styling = {
        width: "100%",
        height: "5px"
    }
    return (
        <div>
            <img 
                src="http://textfiles.com/underconstruction/HeHeartlandFlats7015underconstruction.gif" 
                alt="construction tape" 
                style={styling}
            />
        </div>
    )
}

export default UnderConstruction;