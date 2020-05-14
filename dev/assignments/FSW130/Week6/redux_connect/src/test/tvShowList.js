import React from 'react'

function TvShowList (props){
    const tvShow = props.sendTvShows
    const listTvShow = tvShow.map((tvShow)=>
<div> {tvShow.name}</div>
    )

    return(
        <div>
            {listTvShow}
        </div>
    )
}
export default TvShowList