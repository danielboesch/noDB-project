import axios from 'axios';
import React, {Component} from 'react'
import Subscriptions from './Subscriptions'

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
                    <img alt={pod.title} src={pod.image}></img>
                    <br></br>
                    {pod.title}
                    <br></br>
                    {pod.description}
                    <br></br>
                    <button onClick={() => this.subscribe(pod.image, pod.title, pod.rating)}>Subscribe</button>

                </div>
            )
        })

        console.log(this.state.podArray)
        return(
            <div>
                <h1>Podcasts</h1>
                <p>{mappedPods}</p>
                <Subscriptions 
                unsubscribe={this.unsubscribe} 
                subsArray={this.state.subsArray} 
                editRating={this.editRating}
                />
            </div>
        )
    }
}

export default PodcastList