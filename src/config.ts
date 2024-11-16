import dotenv from 'dotenv'
import Joi from 'joi'
dotenv.config()

const { env } = process

export const config = {
  port: env.PORT,
  urls: {
    api: env.API_URL,
    app: env.APP_URL,
    native: env.NATIVE_URL,
    panel: env.PANEL_URL
  },
  database: {
      postgres: {
        database: env.POSTGRES_DB,
        username: env.POSTGRES_USERNAME,
        password: env.POSTGRES_PASS,
        port: env.POSTGRES_PORT,
        host: env.POSTGRES_HOST,
      },
  },
  keys: {
    github: {
      webhook_secret: env.GITHUB_WEBHOOK_SECRET
    }
  }
}

export const schema = Joi.object({
  port: Joi.string().required().messages({
    'string.base': 'PORT debe ser un texto.',
    'any.required': 'PORT es obligatorio.',
  }),
  urls: {
    api: Joi.string().required().messages({ 'any.required': 'API_URL es obligatorio.' }),
    app: Joi.string().required().messages({ 'any.required': 'APP_URL es obligatorio.' }),
    native: Joi.string().required().messages({ 'any.required': 'NATIVE_URL es obligatorio.' }),
    panel: Joi.string().required().messages({ 'any.required': 'PANEL_URL es obligatorio.' })
  },
  database: {
    postgres: {
      database: Joi.string().required().messages({ 'any.required': 'POSTGRES_DB es obligatorio.' }),
      username: Joi.string().required().messages({ 'any.required': 'POSTGRES_USERNAME es obligatorio.' }),
      password: Joi.string().required().messages({ 'any.required': 'POSTGRES_PASS es obligatorio.' }),
      port: Joi.string().required().messages({ 'any.required': 'POSTGRES_PORT es obligatorio.' }),
      host: Joi.string().required().messages({ 'any.required': 'POSTGRES_HOST es obligatorio.' }),
    },
  },
  keys: {
    github: {
      webhook_secret: Joi.string().required().messages({ 'any.required': 'GITHUB_WEBHOOK_SECRET es obligatorio.' })
    }
  }
});

export const validateEnvironment = async () => {
  try {
    await schema.validateAsync(config, {abortEarly: false}) // abortEarly: false -> to get all errors at once
  } catch (error: any) {
    console.error("[environment]: Error during environment validation:", error?.details);
    process.exit(1); // Stop server
  }
}