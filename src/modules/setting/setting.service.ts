import { SettingModel } from '../../utils/database';

export const SettingService = {
  async get(name: string) {
    const settings = await SettingModel.findOne({ where: { name } });
    return settings;
  },

  async set(name: string, value: string) {
    const settings = await SettingModel.findOne({ where: { name } });
    if (settings) {
      return settings.update({ value });
    } else {
      return SettingModel.create({ name, value });
    }
  },
};
