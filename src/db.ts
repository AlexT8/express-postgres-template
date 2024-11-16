import { DataSource, DataSourceOptions } from 'typeorm'
import { config } from './config'
import { getTables } from '@/models'

const { host, port, username, password, database } = config.database.postgres

const configConstants:DataSourceOptions = {
  type: "postgres",
  synchronize:true,
  entities: getTables(),
  host,
  port: Number(port),
  username,
  password,
}

export const GetDataSource = () => {

  return new DataSource({
      ...configConstants,
      // database: production ? config.database.db : testing ? 'realmeet_testing_db' : 'null',
      database,
      // dropSchema: testing 
  })
}

export const AppDataSource = GetDataSource()
