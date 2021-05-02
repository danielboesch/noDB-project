let podcasts = [
    {
        id: 0,
        image: 'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg',
        title: 'Podcast Name 1',
        description: "description 1",
        rating: 0

    },
    {
        id: 1,
        image: 'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg',
        title: 'Podcast Name 2',
        description: "description2 ",
        rating: 0

    },
    {
        id: 2,
        image: 'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg',
        title: 'Podcast Name 3',
        description: "description 3",
        rating: 0

    },
    {
        id: 3,
        image: 'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg',
        title: 'Podcast Name 4',
        description: "description 4",
        rating: 0

    }
]
let subscriptions = []

let id = 1

module.exports = {
    getPods: (req, res) => {
        res.status(200).send(podcasts)
    },
    getSubs: (req, res) => {
        res.status(200).send(subscriptions)
    },
    subscribe: (req, res) => {
        const {image, title, rating} = req.body
        const newSubscription = {
            image,
            title,
            rating,
            id: id
        }
        id++
        subscriptions.push(newSubscription)
        res.status(200).send(subscriptions)
    },
    unsubscribe: (req, res) => {
        const {id} = req.params
        const index = subscriptions.findIndex((e) => {
            return e.id === +id
        })
        subscriptions.splice(index, 1)
        res.status(200).send(subscriptions)
    },
    editRating: (req, res) => {
        const {id} = req.params
        const {rating} = req.body
        const index = subscriptions.findIndex((e) => {
            return e.id === +id
        })
        subscriptions[index] = {
        ...subscriptions[index],
        rating: rating
        }
        res.status(200).send(subscriptions) 
    }
}
