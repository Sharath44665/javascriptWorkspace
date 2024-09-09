const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'susan' },
    { id: 3, name: 'anna' },
  ]
  
  const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
  ]

getUser("susan")
    .then((user)=>{
        // console.log(user) // {id: 2, name: 'susan'}
        getArticles(user.id)
        .then((articleData) => console.log(articleData))  // (2) ['four', 'five']
        })
    .catch((err)=> console.log(err));

function getUser(name){
    return new Promise((resolve, reject) => {
        const user = users.find((user) => {
            return user.name === name
        })

        if (user){
            return resolve(user)       
        }
        else{
            reject(`no user in that name ${name}`)
        }
    })
}

function getArticles(userId){
    return new Promise((resolve, reject) => {
        const userArticles = articles.find((user) => user.userId === userId)
        if (userArticles){
            return resolve(userArticles.articles)
        }
        else{
            reject("Wrong userID")
        }
    })
}