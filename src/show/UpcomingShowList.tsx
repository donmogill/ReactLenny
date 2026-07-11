import UpcomingShowDetail from "./UpcomingShowDetail"

const UpcomingShowList = () => {
    return(
        
        <div className="shows">
            <div className="section-tag">Where we're playing</div>
            <h2>Psychedelic Roadshow</h2>           
            
            <UpcomingShowDetail/>
            <UpcomingShowDetail/>
        </div>
       
    )

}

export default UpcomingShowList