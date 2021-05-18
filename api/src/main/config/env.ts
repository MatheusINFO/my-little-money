export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-littlemoney',
  port: process.env.PORT || 5050,
  secret: process.env.SECRET || 'hash@#$555'
}
