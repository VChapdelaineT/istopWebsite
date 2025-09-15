import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

































type EagerHomoSapiens = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly gene: string;
  readonly genome_coord: string;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly cancer_type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHomoSapiens = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly gene: string;
  readonly genome_coord: string;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
  readonly cancer_type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HomoSapiens = LazyLoading extends LazyLoadingDisabled ? EagerHomoSapiens : LazyHomoSapiens

export declare const HomoSapiens: (new (init: ModelInit<HomoSapiens>) => HomoSapiens) & {
  copyOf(source: HomoSapiens, mutator: (draft: MutableModel<HomoSapiens>) => MutableModel<HomoSapiens> | void): HomoSapiens;
}

type EagerYeast = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
}

type LazyYeast = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
}

export declare type Yeast = LazyLoading extends LazyLoadingDisabled ? EagerYeast : LazyYeast

export declare const Yeast: (new (init: ModelInit<Yeast>) => Yeast) & {
  copyOf(source: Yeast, mutator: (draft: MutableModel<Yeast>) => MutableModel<Yeast> | void): Yeast;
}

type EagerFish = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly strand?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
}

type LazyFish = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly strand?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
}

export declare type Fish = LazyLoading extends LazyLoadingDisabled ? EagerFish : LazyFish

export declare const Fish: (new (init: ModelInit<Fish>) => Fish) & {
  copyOf(source: Fish, mutator: (draft: MutableModel<Fish>) => MutableModel<Fish> | void): Fish;
}

type EagerMouse = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly gene?: string | null;
  readonly genome_cord?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
}

type LazyMouse = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly gene?: string | null;
  readonly genome_cord?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
}

export declare type Mouse = LazyLoading extends LazyLoadingDisabled ? EagerMouse : LazyMouse

export declare const Mouse: (new (init: ModelInit<Mouse>) => Mouse) & {
  copyOf(source: Mouse, mutator: (draft: MutableModel<Mouse>) => MutableModel<Mouse> | void): Mouse;
}

type EagerFly = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
}

type LazyFly = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
}

export declare type Fly = LazyLoading extends LazyLoadingDisabled ? EagerFly : LazyFly

export declare const Fly: (new (init: ModelInit<Fly>) => Fly) & {
  copyOf(source: Fly, mutator: (draft: MutableModel<Fly>) => MutableModel<Fly> | void): Fly;
}

type EagerNematode = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly genome_coord?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly gene?: string | null;
}

type LazyNematode = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly genome_coord?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly gene?: string | null;
}

export declare type Nematode = LazyLoading extends LazyLoadingDisabled ? EagerNematode : LazyNematode

export declare const Nematode: (new (init: ModelInit<Nematode>) => Nematode) & {
  copyOf(source: Nematode, mutator: (draft: MutableModel<Nematode>) => MutableModel<Nematode> | void): Nematode;
}

type EagerPlant = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
}

type LazyPlant = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
}

export declare type Plant = LazyLoading extends LazyLoadingDisabled ? EagerPlant : LazyPlant

export declare const Plant: (new (init: ModelInit<Plant>) => Plant) & {
  copyOf(source: Plant, mutator: (draft: MutableModel<Plant>) => MutableModel<Plant> | void): Plant;
}

type EagerRat = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
}

type LazyRat = {
  readonly id: string;
  readonly aa_target?: string | null;
  readonly chr?: string | null;
  readonly codon?: string | null;
  readonly gene?: string | null;
  readonly genome_coord?: string | null;
  readonly n_tx_in_gene?: string | null;
  readonly no_upstream_G?: string | null;
  readonly percent_NMD?: string | null;
  readonly percent_tx?: string | null;
  readonly rel_pos_largest_isoform?: string | null;
  readonly rFLP_Gain?: string | null;
  readonly rFLP_Loss?: string | null;
  readonly sgNGG?: string | null;
  readonly sgNGG_matches?: string | null;
  readonly sgNGG_spacing?: string | null;
  readonly sgNGA?: string | null;
  readonly sgNGA_matches?: string | null;
  readonly sgNGA_spacing?: string | null;
  readonly sgNGAG?: string | null;
  readonly sgNGAG_matches?: string | null;
  readonly sgNGAG_spacing?: string | null;
  readonly sgNGCG?: string | null;
  readonly sgNGCG_matches?: string | null;
  readonly sgNGCG_spacing?: string | null;
  readonly sgNNGRRT?: string | null;
  readonly sgNNGRRT_matches?: string | null;
  readonly sgNNGRRT_spacing?: string | null;
  readonly sgNNNRRT?: string | null;
  readonly sgNNNRRT_matches?: string | null;
  readonly sgNNNRRT_spacing?: string | null;
  readonly strand?: string | null;
}

export declare type Rat = LazyLoading extends LazyLoadingDisabled ? EagerRat : LazyRat

export declare const Rat: (new (init: ModelInit<Rat>) => Rat) & {
  copyOf(source: Rat, mutator: (draft: MutableModel<Rat>) => MutableModel<Rat> | void): Rat;
}

type EagerAlias = {
  readonly id: string;
  readonly alias: string;
  readonly gene?: string | null;
  readonly speciesName?: string | null;
}

type LazyAlias = {
  readonly id: string;
  readonly alias: string;
  readonly gene?: string | null;
  readonly speciesName?: string | null;
}

export declare type Alias = LazyLoading extends LazyLoadingDisabled ? EagerAlias : LazyAlias

export declare const Alias: (new (init: ModelInit<Alias>) => Alias) & {
  copyOf(source: Alias, mutator: (draft: MutableModel<Alias>) => MutableModel<Alias> | void): Alias;
}

type EagerGeneLollipopGraph = {
  readonly id: string;
  readonly transcriptId: string;
  readonly transcriptId2?: string | null;
  readonly numberOfAAS?: string | null;
  readonly lollipopLocations?: (LollipopLocations | null)[] | null;
  readonly lollipopLocationsMCF7?: (LollipopLocationsMCF7 | null)[] | null;
  readonly lollipopLocationsMDAMB231?: (LollipopLocationsMDAMB231 | null)[] | null;
  readonly domains?: (Domain | null)[] | null;
}

type LazyGeneLollipopGraph = {
  readonly id: string;
  readonly transcriptId: string;
  readonly transcriptId2?: string | null;
  readonly numberOfAAS?: string | null;
  readonly lollipopLocations: AsyncCollection<LollipopLocations>;
  readonly lollipopLocationsMCF7: AsyncCollection<LollipopLocationsMCF7>;
  readonly lollipopLocationsMDAMB231: AsyncCollection<LollipopLocationsMDAMB231>;
  readonly domains: AsyncCollection<Domain>;
}

export declare type GeneLollipopGraph = LazyLoading extends LazyLoadingDisabled ? EagerGeneLollipopGraph : LazyGeneLollipopGraph

export declare const GeneLollipopGraph: (new (init: ModelInit<GeneLollipopGraph>) => GeneLollipopGraph) & {
  copyOf(source: GeneLollipopGraph, mutator: (draft: MutableModel<GeneLollipopGraph>) => MutableModel<GeneLollipopGraph> | void): GeneLollipopGraph;
}

type EagerLollipopLocations = {
  readonly id: string;
  readonly gene: string;
  readonly sgRNASequence?: string | null;
  readonly function: string;
  readonly aapos?: string | null;
  readonly aachg?: string | null;
  readonly clinVar?: string | null;
  readonly clinVar_ID?: string | null;
  readonly lfcUNT?: string | null;
  readonly pvalueUNT?: string | null;
  readonly fdrUNT?: string | null;
  readonly lfcCISP?: string | null;
  readonly pvalueCISP?: string | null;
  readonly fdrCISP?: string | null;
  readonly lfcOLAP?: string | null;
  readonly pvalueOLAP?: string | null;
  readonly fdrOLAP?: string | null;
  readonly lfcDOX?: string | null;
  readonly pvalueDOX?: string | null;
  readonly fdrDOX?: string | null;
  readonly lfcCPT?: string | null;
  readonly pvalueCPT?: string | null;
  readonly fdrCPT?: string | null;
  readonly tCGA?: string | null;
  readonly pTMsiteLoc?: string | null;
  readonly noncanonicalTranscript?: string | null;
  readonly cellLine?: string | null;
}

type LazyLollipopLocations = {
  readonly id: string;
  readonly gene: string;
  readonly sgRNASequence?: string | null;
  readonly function: string;
  readonly aapos?: string | null;
  readonly aachg?: string | null;
  readonly clinVar?: string | null;
  readonly clinVar_ID?: string | null;
  readonly lfcUNT?: string | null;
  readonly pvalueUNT?: string | null;
  readonly fdrUNT?: string | null;
  readonly lfcCISP?: string | null;
  readonly pvalueCISP?: string | null;
  readonly fdrCISP?: string | null;
  readonly lfcOLAP?: string | null;
  readonly pvalueOLAP?: string | null;
  readonly fdrOLAP?: string | null;
  readonly lfcDOX?: string | null;
  readonly pvalueDOX?: string | null;
  readonly fdrDOX?: string | null;
  readonly lfcCPT?: string | null;
  readonly pvalueCPT?: string | null;
  readonly fdrCPT?: string | null;
  readonly tCGA?: string | null;
  readonly pTMsiteLoc?: string | null;
  readonly noncanonicalTranscript?: string | null;
  readonly cellLine?: string | null;
}

export declare type LollipopLocations = LazyLoading extends LazyLoadingDisabled ? EagerLollipopLocations : LazyLollipopLocations

export declare const LollipopLocations: (new (init: ModelInit<LollipopLocations>) => LollipopLocations) & {
  copyOf(source: LollipopLocations, mutator: (draft: MutableModel<LollipopLocations>) => MutableModel<LollipopLocations> | void): LollipopLocations;
}

type EagerLollipopLocationsMCF7 = {
  readonly id: string;
  readonly gene: string;
  readonly sgRNASequence?: string | null;
  readonly function: string;
  readonly aapos?: string | null;
  readonly aachg?: string | null;
  readonly clinVar?: string | null;
  readonly clinVar_ID?: string | null;
  readonly lfcUNT?: string | null;
  readonly pvalueUNT?: string | null;
  readonly fdrUNT?: string | null;
  readonly lfcCISP?: string | null;
  readonly pvalueCISP?: string | null;
  readonly fdrCISP?: string | null;
  readonly lfcOLAP?: string | null;
  readonly pvalueOLAP?: string | null;
  readonly fdrOLAP?: string | null;
  readonly lfcDOX?: string | null;
  readonly pvalueDOX?: string | null;
  readonly fdrDOX?: string | null;
  readonly lfcCPT?: string | null;
  readonly pvalueCPT?: string | null;
  readonly fdrCPT?: string | null;
  readonly tCGA?: string | null;
  readonly pTMsiteLoc?: string | null;
  readonly noncanonicalTranscript?: string | null;
  readonly cellLine?: string | null;
}

type LazyLollipopLocationsMCF7 = {
  readonly id: string;
  readonly gene: string;
  readonly sgRNASequence?: string | null;
  readonly function: string;
  readonly aapos?: string | null;
  readonly aachg?: string | null;
  readonly clinVar?: string | null;
  readonly clinVar_ID?: string | null;
  readonly lfcUNT?: string | null;
  readonly pvalueUNT?: string | null;
  readonly fdrUNT?: string | null;
  readonly lfcCISP?: string | null;
  readonly pvalueCISP?: string | null;
  readonly fdrCISP?: string | null;
  readonly lfcOLAP?: string | null;
  readonly pvalueOLAP?: string | null;
  readonly fdrOLAP?: string | null;
  readonly lfcDOX?: string | null;
  readonly pvalueDOX?: string | null;
  readonly fdrDOX?: string | null;
  readonly lfcCPT?: string | null;
  readonly pvalueCPT?: string | null;
  readonly fdrCPT?: string | null;
  readonly tCGA?: string | null;
  readonly pTMsiteLoc?: string | null;
  readonly noncanonicalTranscript?: string | null;
  readonly cellLine?: string | null;
}

export declare type LollipopLocationsMCF7 = LazyLoading extends LazyLoadingDisabled ? EagerLollipopLocationsMCF7 : LazyLollipopLocationsMCF7

export declare const LollipopLocationsMCF7: (new (init: ModelInit<LollipopLocationsMCF7>) => LollipopLocationsMCF7) & {
  copyOf(source: LollipopLocationsMCF7, mutator: (draft: MutableModel<LollipopLocationsMCF7>) => MutableModel<LollipopLocationsMCF7> | void): LollipopLocationsMCF7;
}

type EagerLollipopLocationsMDAMB231 = {
  readonly id: string;
  readonly sgRNA_ID: string;
  readonly gene: string;
  readonly sgRNASequence?: string | null;
  readonly function: string;
  readonly aapos?: string | null;
  readonly aachg?: string | null;
  readonly clinVar?: string | null;
  readonly clinVar_ID?: string | null;
  readonly lfcUNT?: string | null;
  readonly pvalueUNT?: string | null;
  readonly fdrUNT?: string | null;
  readonly nlfcUNT?: string | null;
  readonly tCGA?: string | null;
  readonly pTMsiteLoc?: string | null;
  readonly noncanonicalTranscript?: string | null;
  readonly cellLine?: string | null;
}

type LazyLollipopLocationsMDAMB231 = {
  readonly id: string;
  readonly sgRNA_ID: string;
  readonly gene: string;
  readonly sgRNASequence?: string | null;
  readonly function: string;
  readonly aapos?: string | null;
  readonly aachg?: string | null;
  readonly clinVar?: string | null;
  readonly clinVar_ID?: string | null;
  readonly lfcUNT?: string | null;
  readonly pvalueUNT?: string | null;
  readonly fdrUNT?: string | null;
  readonly nlfcUNT?: string | null;
  readonly tCGA?: string | null;
  readonly pTMsiteLoc?: string | null;
  readonly noncanonicalTranscript?: string | null;
  readonly cellLine?: string | null;
}

export declare type LollipopLocationsMDAMB231 = LazyLoading extends LazyLoadingDisabled ? EagerLollipopLocationsMDAMB231 : LazyLollipopLocationsMDAMB231

export declare const LollipopLocationsMDAMB231: (new (init: ModelInit<LollipopLocationsMDAMB231>) => LollipopLocationsMDAMB231) & {
  copyOf(source: LollipopLocationsMDAMB231, mutator: (draft: MutableModel<LollipopLocationsMDAMB231>) => MutableModel<LollipopLocationsMDAMB231> | void): LollipopLocationsMDAMB231;
}

type EagerGeneLollipopGraphMCF7 = {
  readonly id: string;
  readonly transcriptId: string;
  readonly transcriptId2?: string | null;
  readonly numberOfAAS?: string | null;
  readonly lollipopLocations?: (LollipopLocationsMCF7 | null)[] | null;
  readonly domains?: (Domain | null)[] | null;
}

type LazyGeneLollipopGraphMCF7 = {
  readonly id: string;
  readonly transcriptId: string;
  readonly transcriptId2?: string | null;
  readonly numberOfAAS?: string | null;
  readonly lollipopLocations: AsyncCollection<LollipopLocationsMCF7>;
  readonly domains: AsyncCollection<Domain>;
}

export declare type GeneLollipopGraphMCF7 = LazyLoading extends LazyLoadingDisabled ? EagerGeneLollipopGraphMCF7 : LazyGeneLollipopGraphMCF7

export declare const GeneLollipopGraphMCF7: (new (init: ModelInit<GeneLollipopGraphMCF7>) => GeneLollipopGraphMCF7) & {
  copyOf(source: GeneLollipopGraphMCF7, mutator: (draft: MutableModel<GeneLollipopGraphMCF7>) => MutableModel<GeneLollipopGraphMCF7> | void): GeneLollipopGraphMCF7;
}

type EagerDomain = {
  readonly id: string;
  readonly accessionNumber?: string | null;
  readonly type?: string | null;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly gene: string;
  readonly identifier?: string | null;
  readonly color?: string | null;
}

type LazyDomain = {
  readonly id: string;
  readonly accessionNumber?: string | null;
  readonly type?: string | null;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly gene: string;
  readonly identifier?: string | null;
  readonly color?: string | null;
}

export declare type Domain = LazyLoading extends LazyLoadingDisabled ? EagerDomain : LazyDomain

export declare const Domain: (new (init: ModelInit<Domain>) => Domain) & {
  copyOf(source: Domain, mutator: (draft: MutableModel<Domain>) => MutableModel<Domain> | void): Domain;
}

type EagerAuth = {
  readonly id: string;
}

type LazyAuth = {
  readonly id: string;
}

export declare type Auth = LazyLoading extends LazyLoadingDisabled ? EagerAuth : LazyAuth

export declare const Auth: (new (init: ModelInit<Auth>) => Auth) & {
  copyOf(source: Auth, mutator: (draft: MutableModel<Auth>) => MutableModel<Auth> | void): Auth;
}