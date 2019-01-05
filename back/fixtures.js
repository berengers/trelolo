const { db, User, AuthToken, Dashboard, Column, Item } = require('./models/db')

users = [
  {"email": "tom@gmail.com", "password": "tom_pass"},
  {"email": "robert@gmail.com", "password": "robert_pass"}
]

authTokens = [
  {"token": "tom_token", "userId": 1}
]

dashboards = [
  { "name": "Sportacus", "userId": 1 },
  { "name": "holidays", "userId": 1 },
  { "name": "shopping list", "userId": 1 },
  { "name": "movies to watch", "userId": 2 },
  { "name": "Holidays", "userId": 2 }
]

columns = [
  { "name": "product Backlog", "dashboardId": 1 },
  { "name": "Sprint backlog", "dashboardId": 1 },
  { "name": "current", "dashboardId": 1 },
  { "name": "Done", "dashboardId": 1 },
  { "name": "To travel", "dashboardId": 2 },
  { "name": "Travelling", "dashboardId": 2 },
  { "name": "Traveled", "dashboardId": 2 },
  { "name": "to buy", "dashboardId": 3 },
  { "name": "bought", "dashboardId": 3 },
  { "name": "to watch", "dashboardId": 4 },
  { "name": "watched", "dashboardId": 4 },
  { "name": "country to go", "dashboardId": 5 },
  { "name": "visited country", "dashboardId": 5 }
]

items = [
  { "text": "Create profil coach", "columnId": 1 },
  { "text": "Logging", "columnId": 1 },,
  { "text": "Access to application without account", "columnId": 1 },
  { "text": "Login with enter key", "columnId": 2 },
  { "text": "New fixtures", "columnId": 2 },
  { "text": "Design for mobile", "columnId": 3 },
  { "text": "Add env for production", "columnId": 4 },
  { "text": "Can create an account and login simply", "columnId": 4 },
  { "text": "Eu mollit ea ullamco veniam ex occaecat.", "columnId": 5 },
  { "text": "Veniam cillum dolore culpa aliqua aute labore adipisicing commodo non commodo.", "columnId": 5 },
  { "text": "Ullamco ullamco nostrud reprehenderit reprehenderit.", "columnId": 5 },
  { "text": "Occaecat nulla sit aute irure ex esse cupidatat", "columnId": 6 },
  { "text": "Velit excepteur voluptate id ut in veniam", "columnId": 7 },
  { "text": "Amet officia dolore non amet non dolor consectetur sit", "columnId": 7 },
  { "text": "Commodo deserunt mollit consequat", "columnId": 8 },
  { "text": "Non anim exercitation anim pariatur culpa nisi tempor", "columnId": 8 },
  { "text": "Cupidatat in cupidatat aliqua mollit dolore ipsum", "columnId": 9 },
  { "text": "Occaecat esse ex ut ipsum cupidatat minim magna", "columnId": 11 },
  { "text": "Amet eiusmod deserunt elit magna pariatur dolor amet", "columnId": 12 }
]

db.sync({ force: false })
.then(() => { Promise.all(users.map(user => User.create(user))) })
.then(() => { Promise.all(authTokens.map(authToken => AuthToken.create(authToken))) })
.then(() => { Promise.all(dashboards.map(dashboard => Dashboard.create(dashboard))) })
.then(() => { Promise.all(columns.map(column => Column.create(column))) })
.then(() => { Promise.all(items.map(item => Item.create(item))) })
.then(() => { console.log('fixtures inserted <------------------') })
