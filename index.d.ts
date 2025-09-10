import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

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

type EagerAlias = {
  readonly alias: string;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly id: string;
  readonly speciesName?: string | null;
  readonly updatedAt: string;
}

type LazyAlias = {
  readonly alias: string;
  readonly createdAt: string;
  readonly gene?: string | null;
  readonly id: string;
  readonly speciesName?: string | null;
  readonly updatedAt: string;
}

export declare type Alias = LazyLoading extends LazyLoadingDisabled ? EagerAlias : LazyAlias

export declare const Alias: (new (init: ModelInit<Alias>) => Alias)

type EagerAuth = {
  readonly createdAt: string;
  readonly id: string;
  readonly updatedAt: string;
}

type LazyAuth = {
  readonly createdAt: string;
  readonly id: string;
  readonly updatedAt: string;
}

export declare type Auth = LazyLoading extends LazyLoadingDisabled ? EagerAuth : LazyAuth

export declare const Auth: (new (init: ModelInit<Auth>) => Auth)

type EagerDomain = {
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

type LazyDomain = {
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

export declare type Domain = LazyLoading extends LazyLoadingDisabled ? EagerDomain : LazyDomain

export declare const Domain: (new (init: ModelInit<Domain>) => Domain)

type EagerFish = {
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

type LazyFish = {
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

export declare type Fish = LazyLoading extends LazyLoadingDisabled ? EagerFish : LazyFish

export declare const Fish: (new (init: ModelInit<Fish>) => Fish)

type EagerFly = {
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

type LazyFly = {
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

export declare type Fly = LazyLoading extends LazyLoadingDisabled ? EagerFly : LazyFly

export declare const Fly: (new (init: ModelInit<Fly>) => Fly)

type EagerGeneLollipopGraph = {
  readonly createdAt: string;
  readonly domains?: ModelDomainConnection | null;
  readonly id: string;
  readonly lollipopLocations?: ModelLollipopLocationsConnection | null;
  readonly numberOfAAS?: string | null;
  readonly transcriptId: string;
  readonly transcriptId2?: string | null;
  readonly updatedAt: string;
}

type LazyGeneLollipopGraph = {
  readonly createdAt: string;
  readonly domains?: ModelDomainConnection | null;
  readonly id: string;
  readonly lollipopLocations?: ModelLollipopLocationsConnection | null;
  readonly numberOfAAS?: string | null;
  readonly transcriptId: string;
  readonly transcriptId2?: string | null;
  readonly updatedAt: string;
}

export declare type GeneLollipopGraph = LazyLoading extends LazyLoadingDisabled ? EagerGeneLollipopGraph : LazyGeneLollipopGraph

export declare const GeneLollipopGraph: (new (init: ModelInit<GeneLollipopGraph>) => GeneLollipopGraph)

type EagerGeneLollipopGraphMCF7 = {
  readonly createdAt: string;
  readonly domains?: ModelDomainConnection | null;
  readonly id: string;
  readonly lollipopLocations?: ModelLollipopLocationsMCF7Connection | null;
  readonly numberOfAAS?: string | null;
  readonly transcriptId: string;
  readonly transcriptId2?: string | null;
  readonly updatedAt: string;
}

type LazyGeneLollipopGraphMCF7 = {
  readonly createdAt: string;
  readonly domains?: ModelDomainConnection | null;
  readonly id: string;
  readonly lollipopLocations?: ModelLollipopLocationsMCF7Connection | null;
  readonly numberOfAAS?: string | null;
  readonly transcriptId: string;
  readonly transcriptId2?: string | null;
  readonly updatedAt: string;
}

export declare type GeneLollipopGraphMCF7 = LazyLoading extends LazyLoadingDisabled ? EagerGeneLollipopGraphMCF7 : LazyGeneLollipopGraphMCF7

export declare const GeneLollipopGraphMCF7: (new (init: ModelInit<GeneLollipopGraphMCF7>) => GeneLollipopGraphMCF7)

type EagerHomoSapiens = {
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

type LazyHomoSapiens = {
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

export declare type HomoSapiens = LazyLoading extends LazyLoadingDisabled ? EagerHomoSapiens : LazyHomoSapiens

export declare const HomoSapiens: (new (init: ModelInit<HomoSapiens>) => HomoSapiens)

type EagerLollipopLocations = {
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

type LazyLollipopLocations = {
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

export declare type LollipopLocations = LazyLoading extends LazyLoadingDisabled ? EagerLollipopLocations : LazyLollipopLocations

export declare const LollipopLocations: (new (init: ModelInit<LollipopLocations>) => LollipopLocations)

type EagerLollipopLocationsMCF7 = {
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

type LazyLollipopLocationsMCF7 = {
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

export declare type LollipopLocationsMCF7 = LazyLoading extends LazyLoadingDisabled ? EagerLollipopLocationsMCF7 : LazyLollipopLocationsMCF7

export declare const LollipopLocationsMCF7: (new (init: ModelInit<LollipopLocationsMCF7>) => LollipopLocationsMCF7)

type EagerLollipopLocationsMDAMB231 = {
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

type LazyLollipopLocationsMDAMB231 = {
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

export declare type LollipopLocationsMDAMB231 = LazyLoading extends LazyLoadingDisabled ? EagerLollipopLocationsMDAMB231 : LazyLollipopLocationsMDAMB231

export declare const LollipopLocationsMDAMB231: (new (init: ModelInit<LollipopLocationsMDAMB231>) => LollipopLocationsMDAMB231)

type EagerLollipopLocationsMDAMB231Connection = {
  readonly items?: (LollipopLocationsMDAMB231 | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyLollipopLocationsMDAMB231Connection = {
  readonly items?: (LollipopLocationsMDAMB231 | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type LollipopLocationsMDAMB231Connection = LazyLoading extends LazyLoadingDisabled ? EagerLollipopLocationsMDAMB231Connection : LazyLollipopLocationsMDAMB231Connection

export declare const LollipopLocationsMDAMB231Connection: (new (init: ModelInit<LollipopLocationsMDAMB231Connection>) => LollipopLocationsMDAMB231Connection)

type EagerModelAliasConnection = {
  readonly items?: (Alias | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelAliasConnection = {
  readonly items?: (Alias | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelAliasConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelAliasConnection : LazyModelAliasConnection

export declare const ModelAliasConnection: (new (init: ModelInit<ModelAliasConnection>) => ModelAliasConnection)

type EagerModelAuthConnection = {
  readonly items?: (Auth | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelAuthConnection = {
  readonly items?: (Auth | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelAuthConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelAuthConnection : LazyModelAuthConnection

export declare const ModelAuthConnection: (new (init: ModelInit<ModelAuthConnection>) => ModelAuthConnection)

type EagerModelDomainConnection = {
  readonly items?: (Domain | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelDomainConnection = {
  readonly items?: (Domain | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelDomainConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelDomainConnection : LazyModelDomainConnection

export declare const ModelDomainConnection: (new (init: ModelInit<ModelDomainConnection>) => ModelDomainConnection)

type EagerModelFishConnection = {
  readonly items?: (Fish | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelFishConnection = {
  readonly items?: (Fish | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelFishConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelFishConnection : LazyModelFishConnection

export declare const ModelFishConnection: (new (init: ModelInit<ModelFishConnection>) => ModelFishConnection)

type EagerModelFlyConnection = {
  readonly items?: (Fly | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelFlyConnection = {
  readonly items?: (Fly | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelFlyConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelFlyConnection : LazyModelFlyConnection

export declare const ModelFlyConnection: (new (init: ModelInit<ModelFlyConnection>) => ModelFlyConnection)

type EagerModelGeneLollipopGraphConnection = {
  readonly items?: (GeneLollipopGraph | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelGeneLollipopGraphConnection = {
  readonly items?: (GeneLollipopGraph | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelGeneLollipopGraphConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelGeneLollipopGraphConnection : LazyModelGeneLollipopGraphConnection

export declare const ModelGeneLollipopGraphConnection: (new (init: ModelInit<ModelGeneLollipopGraphConnection>) => ModelGeneLollipopGraphConnection)

type EagerModelGeneLollipopGraphMCF7Connection = {
  readonly items?: (GeneLollipopGraphMCF7 | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelGeneLollipopGraphMCF7Connection = {
  readonly items?: (GeneLollipopGraphMCF7 | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelGeneLollipopGraphMCF7Connection = LazyLoading extends LazyLoadingDisabled ? EagerModelGeneLollipopGraphMCF7Connection : LazyModelGeneLollipopGraphMCF7Connection

export declare const ModelGeneLollipopGraphMCF7Connection: (new (init: ModelInit<ModelGeneLollipopGraphMCF7Connection>) => ModelGeneLollipopGraphMCF7Connection)

type EagerModelHomoSapiensConnection = {
  readonly items?: (HomoSapiens | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelHomoSapiensConnection = {
  readonly items?: (HomoSapiens | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelHomoSapiensConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelHomoSapiensConnection : LazyModelHomoSapiensConnection

export declare const ModelHomoSapiensConnection: (new (init: ModelInit<ModelHomoSapiensConnection>) => ModelHomoSapiensConnection)

type EagerModelLollipopLocationsConnection = {
  readonly items?: (LollipopLocations | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelLollipopLocationsConnection = {
  readonly items?: (LollipopLocations | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelLollipopLocationsConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelLollipopLocationsConnection : LazyModelLollipopLocationsConnection

export declare const ModelLollipopLocationsConnection: (new (init: ModelInit<ModelLollipopLocationsConnection>) => ModelLollipopLocationsConnection)

type EagerModelLollipopLocationsMCF7Connection = {
  readonly items?: (LollipopLocationsMCF7 | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelLollipopLocationsMCF7Connection = {
  readonly items?: (LollipopLocationsMCF7 | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelLollipopLocationsMCF7Connection = LazyLoading extends LazyLoadingDisabled ? EagerModelLollipopLocationsMCF7Connection : LazyModelLollipopLocationsMCF7Connection

export declare const ModelLollipopLocationsMCF7Connection: (new (init: ModelInit<ModelLollipopLocationsMCF7Connection>) => ModelLollipopLocationsMCF7Connection)

type EagerModelMouseConnection = {
  readonly items?: (Mouse | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelMouseConnection = {
  readonly items?: (Mouse | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelMouseConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelMouseConnection : LazyModelMouseConnection

export declare const ModelMouseConnection: (new (init: ModelInit<ModelMouseConnection>) => ModelMouseConnection)

type EagerModelNematodeConnection = {
  readonly items?: (Nematode | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelNematodeConnection = {
  readonly items?: (Nematode | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelNematodeConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelNematodeConnection : LazyModelNematodeConnection

export declare const ModelNematodeConnection: (new (init: ModelInit<ModelNematodeConnection>) => ModelNematodeConnection)

type EagerModelPlantConnection = {
  readonly items?: (Plant | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelPlantConnection = {
  readonly items?: (Plant | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelPlantConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelPlantConnection : LazyModelPlantConnection

export declare const ModelPlantConnection: (new (init: ModelInit<ModelPlantConnection>) => ModelPlantConnection)

type EagerModelRatConnection = {
  readonly items?: (Rat | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelRatConnection = {
  readonly items?: (Rat | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelRatConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelRatConnection : LazyModelRatConnection

export declare const ModelRatConnection: (new (init: ModelInit<ModelRatConnection>) => ModelRatConnection)

type EagerModelYeastConnection = {
  readonly items?: (Yeast | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyModelYeastConnection = {
  readonly items?: (Yeast | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type ModelYeastConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelYeastConnection : LazyModelYeastConnection

export declare const ModelYeastConnection: (new (init: ModelInit<ModelYeastConnection>) => ModelYeastConnection)

type EagerMouse = {
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

type LazyMouse = {
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

export declare type Mouse = LazyLoading extends LazyLoadingDisabled ? EagerMouse : LazyMouse

export declare const Mouse: (new (init: ModelInit<Mouse>) => Mouse)

type EagerNematode = {
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

type LazyNematode = {
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

export declare type Nematode = LazyLoading extends LazyLoadingDisabled ? EagerNematode : LazyNematode

export declare const Nematode: (new (init: ModelInit<Nematode>) => Nematode)

type EagerPlant = {
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

type LazyPlant = {
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

export declare type Plant = LazyLoading extends LazyLoadingDisabled ? EagerPlant : LazyPlant

export declare const Plant: (new (init: ModelInit<Plant>) => Plant)

type EagerRat = {
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

type LazyRat = {
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

export declare type Rat = LazyLoading extends LazyLoadingDisabled ? EagerRat : LazyRat

export declare const Rat: (new (init: ModelInit<Rat>) => Rat)

type EagerYeast = {
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

type LazyYeast = {
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

export declare type Yeast = LazyLoading extends LazyLoadingDisabled ? EagerYeast : LazyYeast

export declare const Yeast: (new (init: ModelInit<Yeast>) => Yeast)

