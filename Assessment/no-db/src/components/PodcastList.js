import axios from 'axios';
import React, {Component} from 'react'

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
    subscribe = (title) => {
        axios.post(`/api/podcasts/`, {title})
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
                    {pod.title}
                    <button onClick={() => this.subscribe(pod.title)}>subscribe</button>

                </div>
            )
        })
        let mappedSubs = this.state.subsArray.map((sub) => {
            return(
                <div>
                    {sub.title}
                    <button onClick={() => this.unsubscribe(sub.id)}>Unsubscribe</button>
                </div>
            )
        })

        console.log(this.state.podArray)
        return(
            <div>
                {mappedPods}
                {mappedSubs}
            </div>
        )
    }
}

export default PodcastList