import React, {Component} from 'react'


class Genres extends Component {
    constructor(props){
        super(props)
    }


    

    render(){

    //     let crimePods = this.props.genrePodArray.filter((pod) => {

    //         return(
    //             <div>
    //                 {pod.description.includes("Crime") ? pod : this.props.genrePodArray.splice(pod, 1) }
    //             </div>
    //     )
    // })


        return(
            <div className="topics">
                <h1>Genres</h1>
                <button className="buttonReset" onClick={() => this.props.filterArray("reset")}><b>reset</b></button>
                <br></br>
                <button className="buttonGenre" onClick={() => this.props.filterArray("crime")}><b>Crime</b></button>
                {/* <button><b>CRIME</b></button> */}
                <button className="buttonGenre"><b>TOPIC</b></button>
                <button className="buttonGenre"><b>TOPIC</b></button>
                {/* <button><b>TOPIC</b></button> */}

            </div>
        )
    }
}

export default Genres