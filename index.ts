import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";

export enum ModelAttributeTypes {
  NULL = "_null",
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}



type EagerAliasModel = {
  readonly alias: string;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly id: string;
  readonly speciesName?: string | null;
  readonly updatedAt: string;
}

type LazyAliasModel = {
  readonly alias: string;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly id: string;
  readonly speciesName?: string | null;
  readonly updatedAt: string;
}

export declare type AliasModel = LazyLoading extends LazyLoadingDisabled ? EagerAliasModel : LazyAliasModel

export declare const AliasModel: (new (init: ModelInit<AliasModel>) => AliasModel)

type EagerAuthModel = {
  readonly createdAt: string;
  readonly id: string;
  readonly updatedAt: string;
}

type LazyAuthModel = {
  readonly createdAt: string;
  readonly id: string;
  readonly updatedAt: string;
}

export declare type AuthModel = LazyLoading extends LazyLoadingDisabled ? EagerAuthModel : LazyAuthModel

export declare const AuthModel: (new (init: ModelInit<AuthModel>) => AuthModel)

type EagerDomainModel = {
  readonly accessionNumber?: string | null;
  readonly color?: string | null;
  readonly createdAt: string;
  readonly end?: string | null;
  readonly gene: string;
  readonly id: string;
  readonly identifier?: string | null;
  readonly start?: string | null;
  readonly type?: string | null;
  readonly updatedAt: string;
}

type LazyDomainModel = {
  readonly accessionNumber?: string | null;
  readonly color?: string | null;
  readonly createdAt: string;
  readonly end?: string | null;
  readonly gene: string;
  readonly id: string;
  readonly identifier?: string | null;
  readonly start?: string | null;
  readonly type?: string | null;
  readonly updatedAt: string;
}

export declare type DomainModel = LazyLoading extends LazyLoadingDisabled ? EagerDomainModel : LazyDomainModel

export declare const DomainModel: (new (init: ModelInit<DomainModel>) => DomainModel)

type EagerFishModel = {
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly updatedAt: string;
}

type LazyFishModel = {
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly updatedAt: string;
}

export declare type FishModel = LazyLoading extends LazyLoadingDisabled ? EagerFishModel : LazyFishModel

export declare const FishModel: (new (init: ModelInit<FishModel>) => FishModel)

type EagerFlyModel = {
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly updatedAt: string;
}

type LazyFlyModel = {
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly updatedAt: string;
}

export declare type FlyModel = LazyLoading extends LazyLoadingDisabled ? EagerFlyModel : LazyFlyModel

export declare const FlyModel: (new (init: ModelInit<FlyModel>) => FlyModel)

type EagerGeneLollipopGraphModel = {
  readonly createdAt: string;
  readonly domains?: ModelDomainConnection | null;
  readonly id: string;
  readonly lollipopLocations?: ModelLollipopLocationsConnection | null;
  readonly numberOfAAS?: string | null;
  readonly transcriptId: string;
  readonly transcriptId2?: string | null;
  readonly updatedAt: string;
}

type LazyGeneLollipopGraphModel = {
  readonly createdAt: string;
  readonly domains?: ModelDomainConnection | null;
  readonly id: string;
  readonly lollipopLocations?: ModelLollipopLocationsConnection | null;
  readonly numberOfAAS?: string | null;
  readonly transcriptId: string;
  readonly transcriptId2?: string | null;
  readonly updatedAt: string;
}

export declare type GeneLollipopGraphModel = LazyLoading extends LazyLoadingDisabled ? EagerGeneLollipopGraphModel : LazyGeneLollipopGraphModel

export declare const GeneLollipopGraphModel: (new (init: ModelInit<GeneLollipopGraphModel>) => GeneLollipopGraphModel)

type EagerGeneLollipopGraphMCF7Model = {
  readonly createdAt: string;
  readonly domains?: ModelDomainConnection | null;
  readonly id: string;
  readonly lollipopLocations?: ModelLollipopLocationsMCF7Connection | null;
  readonly numberOfAAS?: string | null;
  readonly transcriptId: string;
  readonly transcriptId2?: string | null;
  readonly updatedAt: string;
}

type LazyGeneLollipopGraphMCF7Model = {
  readonly createdAt: string;
  readonly domains?: ModelDomainConnection | null;
  readonly id: string;
  readonly lollipopLocations?: ModelLollipopLocationsMCF7Connection | null;
  readonly numberOfAAS?: string | null;
  readonly transcriptId: string;
  readonly transcriptId2?: string | null;
  readonly updatedAt: string;
}

export declare type GeneLollipopGraphMCF7Model = LazyLoading extends LazyLoadingDisabled ? EagerGeneLollipopGraphMCF7Model : LazyGeneLollipopGraphMCF7Model

export declare const GeneLollipopGraphMCF7Model: (new (init: ModelInit<GeneLollipopGraphMCF7Model>) => GeneLollipopGraphMCF7Model)

type EagerHomoSapiensModel = {
  readonly aa_target?: string | null;
  readonly cancer_type?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt?: string | null;
  readonly gene: string;
  readonly genome_coord: string;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHomoSapiensModel = {
  readonly aa_target?: string | null;
  readonly cancer_type?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt?: string | null;
  readonly gene: string;
  readonly genome_coord: string;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HomoSapiensModel = LazyLoading extends LazyLoadingDisabled ? EagerHomoSapiensModel : LazyHomoSapiensModel

export declare const HomoSapiensModel: (new (init: ModelInit<HomoSapiensModel>) => HomoSapiensModel)

type EagerLollipopLocationsModel = {
  readonly aachg?: string | null;
  readonly aapos?: string | null;
  readonly cellLine?: string | null;
  readonly clinVar?: string | null;
  readonly clinVar_ID?: string | null;
  readonly createdAt: string;
  readonly fdrCISP?: string | null;
  readonly fdrCPT?: string | null;
  readonly fdrDOX?: string | null;
  readonly fdrOLAP?: string | null;
  readonly fdrUNT?: string | null;
  readonly function: string;
  readonly gene: string;
  readonly id: string;
  readonly lfcCISP?: string | null;
  readonly lfcCPT?: string | null;
  readonly lfcDOX?: string | null;
  readonly lfcOLAP?: string | null;
  readonly lfcUNT?: string | null;
  readonly noncanonicalTranscript?: string | null;
  readonly pTMsiteLoc?: string | null;
  readonly pvalueCISP?: string | null;
  readonly pvalueCPT?: string | null;
  readonly pvalueDOX?: string | null;
  readonly pvalueOLAP?: string | null;
  readonly pvalueUNT?: string | null;
  readonly sgRNASequence?: string | null;
  readonly tCGA?: string | null;
  readonly updatedAt: string;
}

type LazyLollipopLocationsModel = {
  readonly aachg?: string | null;
  readonly aapos?: string | null;
  readonly cellLine?: string | null;
  readonly clinVar?: string | null;
  readonly clinVar_ID?: string | null;
  readonly createdAt: string;
  readonly fdrCISP?: string | null;
  readonly fdrCPT?: string | null;
  readonly fdrDOX?: string | null;
  readonly fdrOLAP?: string | null;
  readonly fdrUNT?: string | null;
  readonly function: string;
  readonly gene: string;
  readonly id: string;
  readonly lfcCISP?: string | null;
  readonly lfcCPT?: string | null;
  readonly lfcDOX?: string | null;
  readonly lfcOLAP?: string | null;
  readonly lfcUNT?: string | null;
  readonly noncanonicalTranscript?: string | null;
  readonly pTMsiteLoc?: string | null;
  readonly pvalueCISP?: string | null;
  readonly pvalueCPT?: string | null;
  readonly pvalueDOX?: string | null;
  readonly pvalueOLAP?: string | null;
  readonly pvalueUNT?: string | null;
  readonly sgRNASequence?: string | null;
  readonly tCGA?: string | null;
  readonly updatedAt: string;
}

export declare type LollipopLocationsModel = LazyLoading extends LazyLoadingDisabled ? EagerLollipopLocationsModel : LazyLollipopLocationsModel

export declare const LollipopLocationsModel: (new (init: ModelInit<LollipopLocationsModel>) => LollipopLocationsModel)

type EagerLollipopLocationsMCF7Model = {
  readonly aachg?: string | null;
  readonly aapos?: string | null;
  readonly cellLine?: string | null;
  readonly clinVar?: string | null;
  readonly clinVar_ID?: string | null;
  readonly createdAt: string;
  readonly fdrCISP?: string | null;
  readonly fdrCPT?: string | null;
  readonly fdrDOX?: string | null;
  readonly fdrOLAP?: string | null;
  readonly fdrUNT?: string | null;
  readonly function: string;
  readonly gene: string;
  readonly id: string;
  readonly lfcCISP?: string | null;
  readonly lfcCPT?: string | null;
  readonly lfcDOX?: string | null;
  readonly lfcOLAP?: string | null;
  readonly lfcUNT?: string | null;
  readonly noncanonicalTranscript?: string | null;
  readonly pTMsiteLoc?: string | null;
  readonly pvalueCISP?: string | null;
  readonly pvalueCPT?: string | null;
  readonly pvalueDOX?: string | null;
  readonly pvalueOLAP?: string | null;
  readonly pvalueUNT?: string | null;
  readonly sgRNASequence?: string | null;
  readonly tCGA?: string | null;
  readonly updatedAt: string;
}

type LazyLollipopLocationsMCF7Model = {
  readonly aachg?: string | null;
  readonly aapos?: string | null;
  readonly cellLine?: string | null;
  readonly clinVar?: string | null;
  readonly clinVar_ID?: string | null;
  readonly createdAt: string;
  readonly fdrCISP?: string | null;
  readonly fdrCPT?: string | null;
  readonly fdrDOX?: string | null;
  readonly fdrOLAP?: string | null;
  readonly fdrUNT?: string | null;
  readonly function: string;
  readonly gene: string;
  readonly id: string;
  readonly lfcCISP?: string | null;
  readonly lfcCPT?: string | null;
  readonly lfcDOX?: string | null;
  readonly lfcOLAP?: string | null;
  readonly lfcUNT?: string | null;
  readonly noncanonicalTranscript?: string | null;
  readonly pTMsiteLoc?: string | null;
  readonly pvalueCISP?: string | null;
  readonly pvalueCPT?: string | null;
  readonly pvalueDOX?: string | null;
  readonly pvalueOLAP?: string | null;
  readonly pvalueUNT?: string | null;
  readonly sgRNASequence?: string | null;
  readonly tCGA?: string | null;
  readonly updatedAt: string;
}

export declare type LollipopLocationsMCF7Model = LazyLoading extends LazyLoadingDisabled ? EagerLollipopLocationsMCF7Model : LazyLollipopLocationsMCF7Model

export declare const LollipopLocationsMCF7Model: (new (init: ModelInit<LollipopLocationsMCF7Model>) => LollipopLocationsMCF7Model)

type EagerLollipopLocationsMDAMB231Model = {
  readonly aapos?: string | null;
  readonly clinVar?: string | null;
  readonly fdrUNT?: string | null;
  readonly function?: string | null;
  readonly gene?: string | null;
  readonly id: string;
  readonly lfcUNT?: string | null;
  readonly nLFC?: string | null;
  readonly pvalueUNT?: string | null;
  readonly sgRNASequence?: string | null;
}

type LazyLollipopLocationsMDAMB231Model = {
  readonly aapos?: string | null;
  readonly clinVar?: string | null;
  readonly fdrUNT?: string | null;
  readonly function?: string | null;
  readonly gene?: string | null;
  readonly id: string;
  readonly lfcUNT?: string | null;
  readonly nLFC?: string | null;
  readonly pvalueUNT?: string | null;
  readonly sgRNASequence?: string | null;
}

export declare type LollipopLocationsMDAMB231Model = LazyLoading extends LazyLoadingDisabled ? EagerLollipopLocationsMDAMB231Model : LazyLollipopLocationsMDAMB231Model

export declare const LollipopLocationsMDAMB231Model: (new (init: ModelInit<LollipopLocationsMDAMB231Model>) => LollipopLocationsMDAMB231Model)

type EagerLollipopLocationsMDAMB231ConnectionModel = {
  readonly items?: (LollipopLocationsMDAMB231 | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyLollipopLocationsMDAMB231ConnectionModel = {
  readonly items?: (LollipopLocationsMDAMB231 | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type LollipopLocationsMDAMB231ConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerLollipopLocationsMDAMB231ConnectionModel : LazyLollipopLocationsMDAMB231ConnectionModel

export declare const LollipopLocationsMDAMB231ConnectionModel: (new (init: ModelInit<LollipopLocationsMDAMB231ConnectionModel>) => LollipopLocationsMDAMB231ConnectionModel)

type EagerModelAliasConnectionModel = {
  readonly items?: (Alias | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelAliasConnectionModel = {
  readonly items?: (Alias | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelAliasConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelAliasConnectionModel : LazyModelAliasConnectionModel

export declare const ModelAliasConnectionModel: (new (init: ModelInit<ModelAliasConnectionModel>) => ModelAliasConnectionModel)

type EagerModelAuthConnectionModel = {
  readonly items?: (Auth | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelAuthConnectionModel = {
  readonly items?: (Auth | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelAuthConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelAuthConnectionModel : LazyModelAuthConnectionModel

export declare const ModelAuthConnectionModel: (new (init: ModelInit<ModelAuthConnectionModel>) => ModelAuthConnectionModel)

type EagerModelDomainConnectionModel = {
  readonly items?: (Domain | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelDomainConnectionModel = {
  readonly items?: (Domain | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelDomainConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelDomainConnectionModel : LazyModelDomainConnectionModel

export declare const ModelDomainConnectionModel: (new (init: ModelInit<ModelDomainConnectionModel>) => ModelDomainConnectionModel)

type EagerModelFishConnectionModel = {
  readonly items?: (Fish | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelFishConnectionModel = {
  readonly items?: (Fish | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelFishConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelFishConnectionModel : LazyModelFishConnectionModel

export declare const ModelFishConnectionModel: (new (init: ModelInit<ModelFishConnectionModel>) => ModelFishConnectionModel)

type EagerModelFlyConnectionModel = {
  readonly items?: (Fly | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelFlyConnectionModel = {
  readonly items?: (Fly | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelFlyConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelFlyConnectionModel : LazyModelFlyConnectionModel

export declare const ModelFlyConnectionModel: (new (init: ModelInit<ModelFlyConnectionModel>) => ModelFlyConnectionModel)

type EagerModelGeneLollipopGraphConnectionModel = {
  readonly items?: (GeneLollipopGraph | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelGeneLollipopGraphConnectionModel = {
  readonly items?: (GeneLollipopGraph | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelGeneLollipopGraphConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelGeneLollipopGraphConnectionModel : LazyModelGeneLollipopGraphConnectionModel

export declare const ModelGeneLollipopGraphConnectionModel: (new (init: ModelInit<ModelGeneLollipopGraphConnectionModel>) => ModelGeneLollipopGraphConnectionModel)

type EagerModelGeneLollipopGraphMCF7ConnectionModel = {
  readonly items?: (GeneLollipopGraphMCF7 | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelGeneLollipopGraphMCF7ConnectionModel = {
  readonly items?: (GeneLollipopGraphMCF7 | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelGeneLollipopGraphMCF7ConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelGeneLollipopGraphMCF7ConnectionModel : LazyModelGeneLollipopGraphMCF7ConnectionModel

export declare const ModelGeneLollipopGraphMCF7ConnectionModel: (new (init: ModelInit<ModelGeneLollipopGraphMCF7ConnectionModel>) => ModelGeneLollipopGraphMCF7ConnectionModel)

type EagerModelHomoSapiensConnectionModel = {
  readonly items?: (HomoSapiens | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelHomoSapiensConnectionModel = {
  readonly items?: (HomoSapiens | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelHomoSapiensConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelHomoSapiensConnectionModel : LazyModelHomoSapiensConnectionModel

export declare const ModelHomoSapiensConnectionModel: (new (init: ModelInit<ModelHomoSapiensConnectionModel>) => ModelHomoSapiensConnectionModel)

type EagerModelLollipopLocationsConnectionModel = {
  readonly items?: (LollipopLocations | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelLollipopLocationsConnectionModel = {
  readonly items?: (LollipopLocations | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelLollipopLocationsConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelLollipopLocationsConnectionModel : LazyModelLollipopLocationsConnectionModel

export declare const ModelLollipopLocationsConnectionModel: (new (init: ModelInit<ModelLollipopLocationsConnectionModel>) => ModelLollipopLocationsConnectionModel)

type EagerModelLollipopLocationsMCF7ConnectionModel = {
  readonly items?: (LollipopLocationsMCF7 | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelLollipopLocationsMCF7ConnectionModel = {
  readonly items?: (LollipopLocationsMCF7 | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelLollipopLocationsMCF7ConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelLollipopLocationsMCF7ConnectionModel : LazyModelLollipopLocationsMCF7ConnectionModel

export declare const ModelLollipopLocationsMCF7ConnectionModel: (new (init: ModelInit<ModelLollipopLocationsMCF7ConnectionModel>) => ModelLollipopLocationsMCF7ConnectionModel)

type EagerModelMouseConnectionModel = {
  readonly items?: (Mouse | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelMouseConnectionModel = {
  readonly items?: (Mouse | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelMouseConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelMouseConnectionModel : LazyModelMouseConnectionModel

export declare const ModelMouseConnectionModel: (new (init: ModelInit<ModelMouseConnectionModel>) => ModelMouseConnectionModel)

type EagerModelNematodeConnectionModel = {
  readonly items?: (Nematode | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelNematodeConnectionModel = {
  readonly items?: (Nematode | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelNematodeConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelNematodeConnectionModel : LazyModelNematodeConnectionModel

export declare const ModelNematodeConnectionModel: (new (init: ModelInit<ModelNematodeConnectionModel>) => ModelNematodeConnectionModel)

type EagerModelPlantConnectionModel = {
  readonly items?: (Plant | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelPlantConnectionModel = {
  readonly items?: (Plant | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelPlantConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelPlantConnectionModel : LazyModelPlantConnectionModel

export declare const ModelPlantConnectionModel: (new (init: ModelInit<ModelPlantConnectionModel>) => ModelPlantConnectionModel)

type EagerModelRatConnectionModel = {
  readonly items?: (Rat | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelRatConnectionModel = {
  readonly items?: (Rat | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelRatConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelRatConnectionModel : LazyModelRatConnectionModel

export declare const ModelRatConnectionModel: (new (init: ModelInit<ModelRatConnectionModel>) => ModelRatConnectionModel)

type EagerModelYeastConnectionModel = {
  readonly items?: (Yeast | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelYeastConnectionModel = {
  readonly items?: (Yeast | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelYeastConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelYeastConnectionModel : LazyModelYeastConnectionModel

export declare const ModelYeastConnectionModel: (new (init: ModelInit<ModelYeastConnectionModel>) => ModelYeastConnectionModel)

type EagerMouseModel = {
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly genome_cord?: string | null;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly updatedAt: string;
}

type LazyMouseModel = {
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly genome_cord?: string | null;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly updatedAt: string;
}

export declare type MouseModel = LazyLoading extends LazyLoadingDisabled ? EagerMouseModel : LazyMouseModel

export declare const MouseModel: (new (init: ModelInit<MouseModel>) => MouseModel)

type EagerNematodeModel = {
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly updatedAt: string;
}

type LazyNematodeModel = {
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly updatedAt: string;
}

export declare type NematodeModel = LazyLoading extends LazyLoadingDisabled ? EagerNematodeModel : LazyNematodeModel

export declare const NematodeModel: (new (init: ModelInit<NematodeModel>) => NematodeModel)

type EagerPlantModel = {
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly updatedAt: string;
}

type LazyPlantModel = {
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly updatedAt: string;
}

export declare type PlantModel = LazyLoading extends LazyLoadingDisabled ? EagerPlantModel : LazyPlantModel

export declare const PlantModel: (new (init: ModelInit<PlantModel>) => PlantModel)

type EagerRatModel = {
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly updatedAt: string;
}

type LazyRatModel = {
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly updatedAt: string;
}

export declare type RatModel = LazyLoading extends LazyLoadingDisabled ? EagerRatModel : LazyRatModel

export declare const RatModel: (new (init: ModelInit<RatModel>) => RatModel)

type EagerYeastModel = {
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly updatedAt: string;
}

type LazyYeastModel = {
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly id?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly updatedAt: string;
}

export declare type YeastModel = LazyLoading extends LazyLoadingDisabled ? EagerYeastModel : LazyYeastModel

export declare const YeastModel: (new (init: ModelInit<YeastModel>) => YeastModel)

const { Alias, Auth, Domain, Fish, Fly, GeneLollipopGraph, GeneLollipopGraphMCF7, HomoSapiens, LollipopLocations, LollipopLocationsMCF7, LollipopLocationsMDAMB231, LollipopLocationsMDAMB231Connection, ModelAliasConnection, ModelAuthConnection, ModelDomainConnection, ModelFishConnection, ModelFlyConnection, ModelGeneLollipopGraphConnection, ModelGeneLollipopGraphMCF7Connection, ModelHomoSapiensConnection, ModelLollipopLocationsConnection, ModelLollipopLocationsMCF7Connection, ModelMouseConnection, ModelNematodeConnection, ModelPlantConnection, ModelRatConnection, ModelYeastConnection, Mouse, Nematode, Plant, Rat, Yeast } = initSchema(schema) as {
  Alias: PersistentModelConstructor<AliasModel>;
  Auth: PersistentModelConstructor<AuthModel>;
  Domain: PersistentModelConstructor<DomainModel>;
  Fish: PersistentModelConstructor<FishModel>;
  Fly: PersistentModelConstructor<FlyModel>;
  GeneLollipopGraph: PersistentModelConstructor<GeneLollipopGraphModel>;
  GeneLollipopGraphMCF7: PersistentModelConstructor<GeneLollipopGraphMCF7Model>;
  HomoSapiens: PersistentModelConstructor<HomoSapiensModel>;
  LollipopLocations: PersistentModelConstructor<LollipopLocationsModel>;
  LollipopLocationsMCF7: PersistentModelConstructor<LollipopLocationsMCF7Model>;
  LollipopLocationsMDAMB231: PersistentModelConstructor<LollipopLocationsMDAMB231Model>;
  LollipopLocationsMDAMB231Connection: PersistentModelConstructor<LollipopLocationsMDAMB231ConnectionModel>;
  ModelAliasConnection: PersistentModelConstructor<ModelAliasConnectionModel>;
  ModelAuthConnection: PersistentModelConstructor<ModelAuthConnectionModel>;
  ModelDomainConnection: PersistentModelConstructor<ModelDomainConnectionModel>;
  ModelFishConnection: PersistentModelConstructor<ModelFishConnectionModel>;
  ModelFlyConnection: PersistentModelConstructor<ModelFlyConnectionModel>;
  ModelGeneLollipopGraphConnection: PersistentModelConstructor<ModelGeneLollipopGraphConnectionModel>;
  ModelGeneLollipopGraphMCF7Connection: PersistentModelConstructor<ModelGeneLollipopGraphMCF7ConnectionModel>;
  ModelHomoSapiensConnection: PersistentModelConstructor<ModelHomoSapiensConnectionModel>;
  ModelLollipopLocationsConnection: PersistentModelConstructor<ModelLollipopLocationsConnectionModel>;
  ModelLollipopLocationsMCF7Connection: PersistentModelConstructor<ModelLollipopLocationsMCF7ConnectionModel>;
  ModelMouseConnection: PersistentModelConstructor<ModelMouseConnectionModel>;
  ModelNematodeConnection: PersistentModelConstructor<ModelNematodeConnectionModel>;
  ModelPlantConnection: PersistentModelConstructor<ModelPlantConnectionModel>;
  ModelRatConnection: PersistentModelConstructor<ModelRatConnectionModel>;
  ModelYeastConnection: PersistentModelConstructor<ModelYeastConnectionModel>;
  Mouse: PersistentModelConstructor<MouseModel>;
  Nematode: PersistentModelConstructor<NematodeModel>;
  Plant: PersistentModelConstructor<PlantModel>;
  Rat: PersistentModelConstructor<RatModel>;
  Yeast: PersistentModelConstructor<YeastModel>;
};

export {
  
};