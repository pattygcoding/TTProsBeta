import data from '@/config/datapack.json';

export const gameIds = data.game_fields.map(x => x.id);
export const standardPackageIds = data.standard_packages.map(x => x.id);