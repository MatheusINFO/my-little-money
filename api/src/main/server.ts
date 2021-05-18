import 'module-alias/register'
import { MongoUtils } from '@/infra/mongodb'
import app from '@/main/config/app'
import env from '@/main/config/env'

MongoUtils.connect(env.mongoUrl).then(() => {
  app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
}).catch(
  console.error
)
