let express = require(`express`);
let app = express();
let port = 3006;

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});

// Настройка CORS
let cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' }));


// Настройка POST-запроса — JSON
app.use(express.json());

// Настройка БД
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/travelplanner');

// Пользователь
let userSchema = new mongoose.Schema({
    username: {
        unique: true,
        type: String
    },
    avatar: String,
    firstName: String,
    lastName: String,
    info: String,
    phone: String,
});

let User = mongoose.model('User', userSchema);

// Путешествие
let tripSchema = new mongoose.Schema({
    username: String,
    tripName: String,
    places: [String],
    dates: {
        start: String,
        end: String    },
    description: String
}, {
    timestamps: true
});

let Trip = mongoose.model('Trip', tripSchema);

let CURRENT_USER = '6480a6b45299bc01bb788b14';

app.get('/profile', async function (req, res) {
    try {
        let me = await User.findOne({ _id: CURRENT_USER });
        res.redirect(`/user?username=${me.username}`);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/user', async function (req, res) {
    try {
        let username = req.query.username;
        let user = await User.findOne({ username: username });
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/users', async function (req, res) {
    try {
        let users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/trips', async function (req, res) {
    try {
        let trips = await Trip.find().sort({ createdAt: -1 });
        res.send(trips);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/trip/create', async function (req, r
es) {
    try {
        let { tripName, places, dates, description } = req.body;
        let user = await User.findOne({ _id: CURRENT_USER });
        let trip = new Trip({
            username: user.username,
            tripName,
            places,
            dates,
            description
        });
        await trip.save();
        res.send(trip);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('/trip:id', async function (req, res) {
    let tripId = req.query.id;
    try {
        await Trip.deleteOne({
            _id: tripId
        })
    } catch (error) {
        res.status(500).send({ message: 'Ошибка удаления', error });
    }
});