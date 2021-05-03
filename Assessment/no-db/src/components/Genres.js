import React, {Component} from 'react'


class Genres extends Component {
    constructor(props){
        super(props)
    }



    // genreButton(stuff){

    //     this.props.subsArray.filter( pod => {
    //         return pod.description.includes("Crime")
    //     })
    //     }
    

    render(){

    //     let crimePods = this.props.subsArray.filter((pod) => {

    //         return(
    //             <div>
    //                 {pod.description.includes("Crime") ? pod : this.props.subsArray.splice(pod, 1) }
    //             </div>
    //     )
    // })


        return(
            <div className="topics">
                <h1>Genres</h1>
                {/* <button onClick={() => this.genreButton(crimePods)}><b>Test</b></button> */}
                <button><b>TOPIC</b></button>
                <button><b>TOPIC</b></button>
                <button><b>TOPIC</b></button>
                <button><b>TOPIC</b></button>

            </div>
        )
    }
}

export default Genres