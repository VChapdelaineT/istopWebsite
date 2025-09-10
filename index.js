// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ModelAttributeTypes = {
  "NULL": "_null",
  "BINARY": "binary",
  "BINARY_SET": "binarySet",
  "BOOL": "bool",
  "LIST": "list",
  "MAP": "map",
  "NUMBER": "number",
  "NUMBER_SET": "numberSet",
  "STRING": "string",
  "STRING_SET": "stringSet"
};

const ModelSortDirection = {
  "ASC": "ASC",
  "DESC": "DESC"
};

const { Alias, Auth, Domain, Fish, Fly, GeneLollipopGraph, GeneLollipopGraphMCF7, HomoSapiens, LollipopLocations, LollipopLocationsMCF7, LollipopLocationsMDAMB231, LollipopLocationsMDAMB231Connection, ModelAliasConnection, ModelAuthConnection, ModelDomainConnection, ModelFishConnection, ModelFlyConnection, ModelGeneLollipopGraphConnection, ModelGeneLollipopGraphMCF7Connection, ModelHomoSapiensConnection, ModelLollipopLocationsConnection, ModelLollipopLocationsMCF7Connection, ModelMouseConnection, ModelNematodeConnection, ModelPlantConnection, ModelRatConnection, ModelYeastConnection, Mouse, Nematode, Plant, Rat, Yeast } = initSchema(schema);

export {
  ModelAttributeTypes,
  ModelSortDirection,
  Alias,
  Auth,
  Domain,
  Fish,
  Fly,
  GeneLollipopGraph,
  GeneLollipopGraphMCF7,
  HomoSapiens,
  LollipopLocations,
  LollipopLocationsMCF7,
  LollipopLocationsMDAMB231,
  LollipopLocationsMDAMB231Connection,
  ModelAliasConnection,
  ModelAuthConnection,
  ModelDomainConnection,
  ModelFishConnection,
  ModelFlyConnection,
  ModelGeneLollipopGraphConnection,
  ModelGeneLollipopGraphMCF7Connection,
  ModelHomoSapiensConnection,
  ModelLollipopLocationsConnection,
  ModelLollipopLocationsMCF7Connection,
  ModelMouseConnection,
  ModelNematodeConnection,
  ModelPlantConnection,
  ModelRatConnection,
  ModelYeastConnection,
  Mouse,
  Nematode,
  Plant,
  Rat,
  Yeast
};