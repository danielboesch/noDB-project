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
                <h1 className="genreTitle">Genres</h1>
                <button className="buttonReset" onClick={() => this.props.filterArray("reset")}><b>reset</b></button>
                <br></br>
                <button className="buttonGenre" onClick={() => this.props.filterArray("crime")}><b>Crime</b></button>
                <button className="buttonGenre" onClick={() => this.props.filterArray("pop culture")}><b>Pop Culture</b></button>
                <button className="buttonGenre" onClick={() => this.props.filterArray("news")}><b>News</b></button>
                <button className="buttonGenre" onClick={() => this.props.filterArray("comedy")}><b>Comedy</b></button>
                <button className="buttonGenre" onClick={() => this.props.filterArray("lifestyle")}><b>Lifestyle</b></button>


            </div>
        )
    }
}

export default Genres