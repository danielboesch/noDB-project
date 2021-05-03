import axios from 'axios';
import React, {Component} from 'react'
import Subscriptions from './Subscriptions'
import Genres from './Genres'



class PodcastList extends Component {
    constructor(props){
        super(props);
        this.state = {
            podArray: [],
            subsArray: []
        }
    }

    componentDidMount(){
        axios.get('/api/podcasts')
        .then((res) => {
            this.setState({podArray: res.data})
        })
        .catch((error) => {
            console.log(error)
        })

        axios.get('/api/subscriptions')
        .then((res) => {
            this.setState({subsArray: res.data})
        })
        .catch((error) => {
            console.log(error)
        })
    } 

    unsubscribe = (id) => {
        axios.delete(`/api/podcasts/${id}`)
        .then((res) => {
            this.setState({subsArray: res.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    subscribe = (image, title, rating) => {
        axios.post(`/api/podcasts/`, {image, title, rating})
        .then((res) => {
            this.setState({subsArray: res.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    editRating = (id, rating) => {
        axios.put(`/api/subscriptions/${id}`, {rating})
        .then((res) => {
            this.setState({subsArray: res.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render(){
        let mappedPods = this.state.podArray.map((pod) => {
            return(
                <div>
                
                <div className="mappedPodArr">
                    <img alt={pod.title} src={pod.image}></img>

                    <div className="mappedPodArrTitleDesc">
                    <br></br>
                    {pod.title}
                    <br></br>
                    {pod.description}
                    <br></br>
                    <button className="mappedPodButtons" onClick={() => this.subscribe(pod.image, pod.title, pod.rating)}><b>Subscribe</b></button>
                    </div>
                    

                </div>
                </div>
            )
        })

        console.log(this.state.podArray)
        return(
            <div>
                <section className="outerBox">
                    <section className="genres">
                        <Genres subsArray={this.state.subsArray} />
                    </section>
                    <section className="podsBox">
                        <p className="podArr">{mappedPods}</p>
                    </section>
                    <section className="subsBox">
                        <Subscriptions 
                        unsubscribe={this.unsubscribe} 
                        subsArray={this.state.subsArray} 
                        editRating={this.editRating}
                        />
                    </section>
                </section>
            </div>
        )
    }
}

export default PodcastList