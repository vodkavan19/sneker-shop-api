import * as Joi from 'joi';
import { CONFIG_VAR, DEFAULT_PORT } from './config.contant';

export const ConfigSchema = Joi.object()
  .keys({
    [CONFIG_VAR.APP_PORT]: Joi.number().default(DEFAULT_PORT),

    [CONFIG_VAR.DB_URI]: Joi.string().trim().required(),

    [CONFIG_VAR.URL_BACKEND_SERVER]: Joi.string().trim().required(),
    [CONFIG_VAR.URL_FRONTEND_SERVER]: Joi.string().trim().required(),

    [CONFIG_VAR.JWT_ACCESS_KEY]: Joi.string().trim().required(),
    [CONFIG_VAR.JWT_REFRESH_KEY]: Joi.string().trim().required(),

    [CONFIG_VAR.JWT_MAIL_SECRET_KEY]: Joi.string().trim().required(),
    [CONFIG_VAR.EMAIL_NAME]: Joi.string().trim().required(),
    [CONFIG_VAR.EMAIL_APP_PASSWORD]: Joi.string().trim().required(),

    [CONFIG_VAR.CLOUDINARY_NAME]: Joi.string().trim().required(),
    [CONFIG_VAR.CLOUDINARY_KEY]: Joi.string().trim().required(),
    [CONFIG_VAR.CLOUDINARY_SECRET]: Joi.string().trim().required(),

    [CONFIG_VAR.REGION_API]: Joi.string().trim().required(),

    [CONFIG_VAR.GHN_TOKEN]: Joi.string().trim().required(),
    [CONFIG_VAR.GHN_REGION_API]: Joi.string().trim().required(),
    [CONFIG_VAR.GHN_SERVICE_API]: Joi.string().trim().required(),
    [CONFIG_VAR.GHN_SHOP_ID]: Joi.string().trim().required(),
  })
  .options({ stripUnknown: true });
