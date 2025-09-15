// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HomoSapiens, Yeast, Fish, Mouse, Fly, Nematode, Plant, Rat, Alias, GeneLollipopGraph, LollipopLocations, LollipopLocationsMCF7, LollipopLocationsMDAMB231, GeneLollipopGraphMCF7, Domain, Auth } = initSchema(schema);

export {
  HomoSapiens,
  Yeast,
  Fish,
  Mouse,
  Fly,
  Nematode,
  Plant,
  Rat,
  Alias,
  GeneLollipopGraph,
  LollipopLocations,
  LollipopLocationsMCF7,
  LollipopLocationsMDAMB231,
  GeneLollipopGraphMCF7,
  Domain,
  Auth
};