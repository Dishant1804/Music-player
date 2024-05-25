//importing uuid for generating a unique key/id
import { v4 as uuidv4 } from 'uuid';

const Music = () => {
    return [
        {
            name: "Canary Forest",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middleschool, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
            color: ["#15302D", "#2F6A53"],
            active: true,
            id: uuidv4(),
        },
        {
            name: "Trainride",
            cover: "https://chillhop.com/wp-content/uploads/2023/05/9e6aaa4e04b9e4054f8ed2586d331113e82247da-1024x1024.jpg",
            artist: "J.Folk",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=58846",
            color: ["#47322A", "#CEB38C"],
            active: false,
            id: uuidv4(),

        },
        {
            name: "Full Circle",
            cover: "https://chillhop.com/wp-content/uploads/2023/01/3aaa079444cf9c1d4e0a1f53947321b29ff554c0-1024x1024.jpg",
            artist: "Moods",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=35507",
            color: ["#4D6987", "#005cbf"],
            active: false,
            id: uuidv4(),

        },
        {
            name: "Lost Woods",
            cover: "https://chillhop.com/wp-content/uploads/2023/05/1bcec532a76700819b9ca2853c175cdc54bccb02-1024x1024.jpg",
            artist: "Emperose, cocabona",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
            color: ["#15302D", "#2F6A53"],
            active: false,
            id: uuidv4(),

        },
        {
            name: "Falling Out Of Orbit",
            cover: "https://chillhop.com/wp-content/uploads/2022/06/312458b974ab45c795d75ec3f0259caa3989103a-1024x1024.jpg",
            artist: "Knowmadic",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=41656",
            color: ["#D2876B", "#FBC779"],
            active: false,
            id: uuidv4(),

        },
        {
            name: "A Reminder",
            cover: "https://chillhop.com/wp-content/uploads/2023/03/c0c6175640eb9aa14b955ae91e255b3175de1c32-1024x1024.jpg",
            artist: "Sleepyfish, coa",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36925",
            color: ["#ECB968", "#B10101"],
            active: false,
            id: uuidv4(),

        },
        {
            name: "Caps mistery",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middleschool,Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10077",
            color: ["#15302D", "#2F6A53"],
            active: false,
            id: uuidv4(),

        },
        {
            name: "Passing Time",
            cover: "https://chillhop.com/wp-content/uploads/2022/06/312458b974ab45c795d75ec3f0259caa3989103a-1024x1024.jpg",
            artist: "Knowmadic",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=41652",
            color: ["#D2876B", "#FBC779"],
            active: false,
            id: uuidv4(),

        },
        {
            name: "Mirage",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
            artist: "Nymano, j'san",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10136",
            color: ["#474982", "#262045"],
            active: false,
            id: uuidv4(),

        },
    ]
}

export default Music;