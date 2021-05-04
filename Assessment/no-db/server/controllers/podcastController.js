let podcasts = [
    {
        id: 0,
        image: 'https://lh3.googleusercontent.com/proxy/P-DRo9HbKBxQL4Hzai5GDJAFu7ev1jPlpUv-1FbPJm246-Utsk1dTK60W1YSaYvv5AMu9Zrq1hdaFOBiUsCopKf4hZWlBWqPYYe0fHQc',
        title: 'The Daily',
        description: "News",
        genre: '',
        rating: "★"

    },
    {
        id: 1,
        image: 'https://pbs.twimg.com/profile_images/1339872243518742528/zoNGDJBz_400x400.jpg',
        title: 'Crime Junkie',
        description: "Crime",
        genre: 'crime',
        rating: "★"

    },
    {
        id: 2,
        image: 'https://images.musicrad.io/resizer/?image=aHR0cHM6Ly9zc2wtc3RhdGljLmxpYnN5bi5jb20vcC9hc3NldHMvNi9lLzIvZC82ZTJkNzU2N2QwZTRlMjYxL0gzX1BvZGNhc3RfU1FVQVJFX0xPR08uanBlZw%3D%3D&width=600&signature=UlrmVkiccJGwi8qON2iDMEPKnt4=',
        title: 'H3 Podcast',
        description: "Comedy",
        genre: '',
        rating: "★"

    },
    {
        id: 3,
        image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo400/574613/574613-1535540246585-eefeae88b9113.jpg',
        title: 'a24 Podcast',
        description: "Pop Culture",
        genre: '',
        rating: "★"


    },
    {
        id: 4,
        image: 'https://counterclockpodcast.com/wp-content/uploads/2021/04/CounterClock_Season3.jpg',
        title: 'Counter Clock',
        description: "Crime",
        genre: 'crime',
        rating: "★"

    },
    {
        id: 5,
        image: 'https://media.npr.org/assets/img/2021/03/03/considerthis_3000x3000_sq-84c940e58bfd188aabe893789018983522d175f1-s300-c85.png',
        title: 'Consider This',
        description: "News",
        genre: 'crime',
        rating: "★"

    },
    {
        id: 6,
        image: 'https://content.production.cdn.art19.com/images/7a/4a/ed/38/7a4aed38-ccd6-45b5-8ad0-3355a9809501/caeea2148c5651638ebd01c5abd91b0bca8aa3e21c6d30a32130e1fabc9aae8a4d706cc68dac63427b2af8090e5ea15cef4d57467c6bac60dc9e7870ffeeea5a.jpeg',
        title: 'Pop Cast',
        description: "Music",
        genre: '',
        rating: "★"

    },
    {
        id: 7,
        image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo400/4500396/4500396-1604703987687-749270afeda4d.jpg',
        title: 'Carpool Critics',
        description: "Pop Culture",
        genre: '',
        rating: "★"

    },
    {
        id: 8,
        image: 'https://m.media-amazon.com/images/I/51rfyPndSSL._SL500_.jpg',
        title: 'But Outside',
        description: "Comedy",
        genre: 'crime',
        rating: "★"

    },
    {
        id: 9,
        image: 'https://pbs.twimg.com/profile_images/1042634007928700928/ui2OLosY_400x400.jpg',
        title: 'True Crime',
        description: "Crime",
        genre: 'crime',
        rating: "★"

    },
    {
        id: 10,
        image: 'https://pbs.twimg.com/profile_images/1230132706723401728/2xhH3qmJ_400x400.jpg',
        title: 'Musically',
        description: "Music",
        genre: '',
        rating: "★"

    },
    {
        id: 11,
        image: 'https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3NzbC1zdGF0aWMubGlic3luLmNvbS9wL2Fzc2V0cy9mL2EvYy9jL2ZhY2MxM2FkY2Y2MDAxZWQvMTQwMF9ieV8xNDAwX3B4LnBuZyIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9NdXNpYzEyMy92NC81MS9jOC8yYS81MWM4MmExZS0wMGE1LTFmMTAtNmM1OS1kNjFlMTUyOGQ0NWEvc291cmNlLzYwMHg2MDBiYi5qcGcifQ.EIUC8Ro4QUoBNpTCGD7v75mPzHrew3ASAFSU5lVrws0.jpg?width=400&height=400',
        title: 'Book vs Movie',
        description: "Pop Culture",
        genre: 'crime',
        rating: "★"


    },
    {
        id: 12,
        image: 'https://media.npr.org/assets/img/2020/12/21/lifekit_tile_3000x3000_sq-b3f049c61e447353e6d40c158e91a260f707b64f.png?s=1400',
        title: 'Life Kit',
        description: "Lifestyle",
        genre: 'crime',
        rating: "★"


    },
    {
        id: 13,
        image: 'https://upload.wikimedia.org/wikipedia/en/7/74/Reply_All_%28Podcast%29_Logo.jpg',
        title: 'Reply All',
        description: "Pop Culture",
        genre: 'crime',
        rating: "★"

    },
    {
        id: 14,
        image: 'https://images.musicrad.io/resizer/?image=aHR0cHM6Ly9tZWRpYS53bnljLm9yZy9pL3Jhdy8xL1JhZGlvbGFiX1dOWUNTdHVkaW9zXzE0MDBfMmRxMDJEaC5wbmc%3D&width=600&signature=iVQPQ4YIOlEA_4tWCEdxKz18tFA=',
        title: 'Radiolab',
        description: "News",
        genre: '',
        rating: "★"

    },
    {
        id: 15,
        image: 'https://f.prxu.org/96/images/a52a20dd-7b8e-46be-86a0-dda86b0953fc/99-300.png',
        title: '99% Invisible',
        description: "Lifestyle",
        genre: '',
        rating: "★"

    },
    {
        id: 16,
        image: 'https://megaphone.imgix.net/podcasts/47e9439e-d912-11e6-acfb-0ff39ac5a015/image/uploads_2F1594401821187-66rdjyqp3fp-e9bdfa478b047f62b5d6d19b4217d1fc_2FFoodcast.png?ixlib=rails-2.1.2&w=400&h=400',
        title: 'FoodCast',
        description: "Lifestyle",
        genre: 'crime',
        rating: "★"

    },
    {
        id: 17,
        image: 'https://stitcher-classic.imgix.net/feedimagesplain600/92314.jpg?w=600&h=600',
        title: 'Unsolved Murders',
        description: "Crime",
        genre: 'crime',
        rating: "★"

    },
    {
        id: 18,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Armchair_Expert_with_Dax_Shepard.jpg/220px-Armchair_Expert_with_Dax_Shepard.jpg',
        title: 'ArmchairExpert',
        description: "Pop Culture",
        genre: '',
        rating: "★"

    },
    {
        id: 19,
        image: 'https://images.megaphone.fm/6wbQQwFyRGCMEQM4UE2bW_qdtzvJQwvgVyALLiDzwu8/plain/s3://megaphone-prod/podcasts/914e8e84-33f5-11e7-92ed-d799e1f645ed/image/im-29359.jpeg',
        title: 'The Future of Everything',
        description: "News",
        genre: '',
        rating: "★"

    },
    {
        id: 20,
        image: 'https://www.moreycreative.com/hs-fs/hubfs/_MCS%20Website%202019/Podcast%20Page/NewsBeat_Logo_HighRes.jpg?width=700&name=NewsBeat_Logo_HighRes.jpg',
        title: 'News Beat',
        description: "News",
        genre: 'crime',
        rating: "★"

    },
    {
        id: 21,
        image: 'https://casefilepodcast.com/wp-content/uploads/2020/07/casefile_icon_web.jpg',
        title: 'Casefile',
        description: "Crime",
        genre: 'crime',
        rating: "★"

    },
    {
        id: 22,
        image: 'https://megaphone.imgix.net/podcasts/4124460a-f2cf-11e5-9b5f-93196d5bac31/image/uploads_2F1484160510220-q0rl08p3kmicqacq-f00ce281ff4ed7f822bc66cae40ab7fd_2FRS-Music-Now-3000x3000.jpeg?ixlib=rails-2.1.2&w=400&h=400',
        title: 'Music Now',
        description: "Music",
        genre: '',
        rating: "★"

    },
    {
        id: 23,
        image: 'https://pbcdn1.podbean.com/imglogo/image-logo/2276067/CulturePop_Mason-Resize.jpg',
        title: 'Culture Pop',
        description: "Pop Culture",
        genre: '',
        rating: "★"

    },
    {
        id: 24,
        image: 'https://pbcdn1.podbean.com/imglogo/image-logo/2493216/Logo_Final_.jpg',
        title: 'Fundamentalists',
        description: "Lifestyle",
        genre: 'crime',
        rating: "★"

    },
    {
        id: 25,
        image: 'https://static.wixstatic.com/media/fbed1b_8a1cf91627a54fd8a65d9c2914a4dfe6~mv2_d_3300_3300_s_4_2.jpg/v1/fit/w_2500,h_1330,al_c/fbed1b_8a1cf91627a54fd8a65d9c2914a4dfe6~mv2_d_3300_3300_s_4_2.jpg',
        title: 'Potterless',
        description: "Pop Culture",
        genre: '',
        rating: "★"


    },
    {
        id: 26,
        image: 'https://i1.sndcdn.com/artworks-udzqlc9ZJOAvD9RS-6oevSA-t3000x3000.jpg',
        title: 'Crime Noir',
        description: "Crime",
        genre: 'crime',
        rating: "★"

    },
    {
        id: 27,
        image: 'https://content.production.cdn.art19.com/images/55/43/9a/27/55439a27-d424-47b5-856e-d0898e5b04f5/157d7d335a7e72f5f18d0465ef148ef276866b0850915c2d816613ae5fb889f99b68b09fd7d8f7937680751d2e57b69deee4c559c44da24d6d31b931555501d4.jpeg',
        title: 'DynamicBanter',
        description: "Comedy",
        genre: '',
        rating: "★"

    },
    {
        id: 28,
        image: 'https://content.production.cdn.art19.com/images/9a/99/5f/26/9a995f26-5196-4979-84ed-9d06e78bdba5/ebb2dbcd417270bdcd4af6a7ef1b4a5f89bebd12857331f804702e7a25a49c4877f1f1660b705d05e725afd46f7097e9eb7731e1aa97b661473e4bd0963278af.jpeg',
        title: 'Well Good',
        description: "Lifestyle",
        genre: 'crime',
        rating: "★"

    },
    {
        id: 29,
        image: 'https://media.npr.org/assets/img/2020/03/30/up-first-tile_sq-8c917c992869803df1f6fe9511c0bd613cab1249.png?s=1400',
        title: 'Up First',
        description: "News",
        genre: 'crime',
        rating: "★"

    },
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
        const {image, title, rating, description} = req.body
        const newSubscription = {
            image,
            title,
            rating,
            description,
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
