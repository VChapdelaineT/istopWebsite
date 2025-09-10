/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createHomoSapiens = /* GraphQL */ `mutation CreateHomoSapiens(
  $input: CreateHomoSapiensInput!
  $condition: ModelHomoSapiensConditionInput
) {
  createHomoSapiens(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    cancer_type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateHomoSapiensMutationVariables,
  APITypes.CreateHomoSapiensMutation
>;
export const updateHomoSapiens = /* GraphQL */ `mutation UpdateHomoSapiens(
  $input: UpdateHomoSapiensInput!
  $condition: ModelHomoSapiensConditionInput
) {
  updateHomoSapiens(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    cancer_type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateHomoSapiensMutationVariables,
  APITypes.UpdateHomoSapiensMutation
>;
export const deleteHomoSapiens = /* GraphQL */ `mutation DeleteHomoSapiens(
  $input: DeleteHomoSapiensInput!
  $condition: ModelHomoSapiensConditionInput
) {
  deleteHomoSapiens(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    cancer_type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteHomoSapiensMutationVariables,
  APITypes.DeleteHomoSapiensMutation
>;
export const createYeast = /* GraphQL */ `mutation CreateYeast(
  $input: CreateYeastInput!
  $condition: ModelYeastConditionInput
) {
  createYeast(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Loss
    rFLP_Gain
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateYeastMutationVariables,
  APITypes.CreateYeastMutation
>;
export const updateYeast = /* GraphQL */ `mutation UpdateYeast(
  $input: UpdateYeastInput!
  $condition: ModelYeastConditionInput
) {
  updateYeast(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Loss
    rFLP_Gain
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateYeastMutationVariables,
  APITypes.UpdateYeastMutation
>;
export const deleteYeast = /* GraphQL */ `mutation DeleteYeast(
  $input: DeleteYeastInput!
  $condition: ModelYeastConditionInput
) {
  deleteYeast(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Loss
    rFLP_Gain
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteYeastMutationVariables,
  APITypes.DeleteYeastMutation
>;
export const createFish = /* GraphQL */ `mutation CreateFish(
  $input: CreateFishInput!
  $condition: ModelFishConditionInput
) {
  createFish(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    strand
    rFLP_Gain
    rFLP_Loss
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFishMutationVariables,
  APITypes.CreateFishMutation
>;
export const updateFish = /* GraphQL */ `mutation UpdateFish(
  $input: UpdateFishInput!
  $condition: ModelFishConditionInput
) {
  updateFish(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    strand
    rFLP_Gain
    rFLP_Loss
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFishMutationVariables,
  APITypes.UpdateFishMutation
>;
export const deleteFish = /* GraphQL */ `mutation DeleteFish(
  $input: DeleteFishInput!
  $condition: ModelFishConditionInput
) {
  deleteFish(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    strand
    rFLP_Gain
    rFLP_Loss
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFishMutationVariables,
  APITypes.DeleteFishMutation
>;
export const createMouse = /* GraphQL */ `mutation CreateMouse(
  $input: CreateMouseInput!
  $condition: ModelMouseConditionInput
) {
  createMouse(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_cord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMouseMutationVariables,
  APITypes.CreateMouseMutation
>;
export const updateMouse = /* GraphQL */ `mutation UpdateMouse(
  $input: UpdateMouseInput!
  $condition: ModelMouseConditionInput
) {
  updateMouse(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_cord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMouseMutationVariables,
  APITypes.UpdateMouseMutation
>;
export const deleteMouse = /* GraphQL */ `mutation DeleteMouse(
  $input: DeleteMouseInput!
  $condition: ModelMouseConditionInput
) {
  deleteMouse(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_cord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMouseMutationVariables,
  APITypes.DeleteMouseMutation
>;
export const createFly = /* GraphQL */ `mutation CreateFly(
  $input: CreateFlyInput!
  $condition: ModelFlyConditionInput
) {
  createFly(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFlyMutationVariables,
  APITypes.CreateFlyMutation
>;
export const updateFly = /* GraphQL */ `mutation UpdateFly(
  $input: UpdateFlyInput!
  $condition: ModelFlyConditionInput
) {
  updateFly(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFlyMutationVariables,
  APITypes.UpdateFlyMutation
>;
export const deleteFly = /* GraphQL */ `mutation DeleteFly(
  $input: DeleteFlyInput!
  $condition: ModelFlyConditionInput
) {
  deleteFly(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFlyMutationVariables,
  APITypes.DeleteFlyMutation
>;
export const createNematode = /* GraphQL */ `mutation CreateNematode(
  $input: CreateNematodeInput!
  $condition: ModelNematodeConditionInput
) {
  createNematode(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    gene
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateNematodeMutationVariables,
  APITypes.CreateNematodeMutation
>;
export const updateNematode = /* GraphQL */ `mutation UpdateNematode(
  $input: UpdateNematodeInput!
  $condition: ModelNematodeConditionInput
) {
  updateNematode(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    gene
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateNematodeMutationVariables,
  APITypes.UpdateNematodeMutation
>;
export const deleteNematode = /* GraphQL */ `mutation DeleteNematode(
  $input: DeleteNematodeInput!
  $condition: ModelNematodeConditionInput
) {
  deleteNematode(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    gene
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteNematodeMutationVariables,
  APITypes.DeleteNematodeMutation
>;
export const createPlant = /* GraphQL */ `mutation CreatePlant(
  $input: CreatePlantInput!
  $condition: ModelPlantConditionInput
) {
  createPlant(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Loss
    rFLP_Gain
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePlantMutationVariables,
  APITypes.CreatePlantMutation
>;
export const updatePlant = /* GraphQL */ `mutation UpdatePlant(
  $input: UpdatePlantInput!
  $condition: ModelPlantConditionInput
) {
  updatePlant(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Loss
    rFLP_Gain
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePlantMutationVariables,
  APITypes.UpdatePlantMutation
>;
export const deletePlant = /* GraphQL */ `mutation DeletePlant(
  $input: DeletePlantInput!
  $condition: ModelPlantConditionInput
) {
  deletePlant(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Loss
    rFLP_Gain
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePlantMutationVariables,
  APITypes.DeletePlantMutation
>;
export const createRat = /* GraphQL */ `mutation CreateRat(
  $input: CreateRatInput!
  $condition: ModelRatConditionInput
) {
  createRat(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRatMutationVariables,
  APITypes.CreateRatMutation
>;
export const updateRat = /* GraphQL */ `mutation UpdateRat(
  $input: UpdateRatInput!
  $condition: ModelRatConditionInput
) {
  updateRat(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRatMutationVariables,
  APITypes.UpdateRatMutation
>;
export const deleteRat = /* GraphQL */ `mutation DeleteRat(
  $input: DeleteRatInput!
  $condition: ModelRatConditionInput
) {
  deleteRat(input: $input, condition: $condition) {
    aa_target
    chr
    codon
    gene
    genome_coord
    id
    n_tx_in_gene
    no_upstream_G
    percent_NMD
    percent_tx
    rel_pos_largest_isoform
    rFLP_Gain
    rFLP_Loss
    sgNGG
    sgNGG_matches
    sgNGG_spacing
    sgNGA
    sgNGA_matches
    sgNGA_spacing
    sgNGAG
    sgNGAG_matches
    sgNGAG_spacing
    sgNGCG
    sgNGCG_matches
    sgNGCG_spacing
    sgNNGRRT
    sgNNGRRT_matches
    sgNNGRRT_spacing
    sgNNNRRT
    sgNNNRRT_matches
    sgNNNRRT_spacing
    strand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRatMutationVariables,
  APITypes.DeleteRatMutation
>;
export const createAlias = /* GraphQL */ `mutation CreateAlias(
  $input: CreateAliasInput!
  $condition: ModelAliasConditionInput
) {
  createAlias(input: $input, condition: $condition) {
    id
    alias
    gene
    speciesName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAliasMutationVariables,
  APITypes.CreateAliasMutation
>;
export const updateAlias = /* GraphQL */ `mutation UpdateAlias(
  $input: UpdateAliasInput!
  $condition: ModelAliasConditionInput
) {
  updateAlias(input: $input, condition: $condition) {
    id
    alias
    gene
    speciesName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAliasMutationVariables,
  APITypes.UpdateAliasMutation
>;
export const deleteAlias = /* GraphQL */ `mutation DeleteAlias(
  $input: DeleteAliasInput!
  $condition: ModelAliasConditionInput
) {
  deleteAlias(input: $input, condition: $condition) {
    id
    alias
    gene
    speciesName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAliasMutationVariables,
  APITypes.DeleteAliasMutation
>;
export const createGeneLollipopGraph = /* GraphQL */ `mutation CreateGeneLollipopGraph(
  $input: CreateGeneLollipopGraphInput!
  $condition: ModelGeneLollipopGraphConditionInput
) {
  createGeneLollipopGraph(input: $input, condition: $condition) {
    id
    transcriptId
    transcriptId2
    numberOfAAS
    lollipopLocations {
      nextToken
      __typename
    }
    domains {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGeneLollipopGraphMutationVariables,
  APITypes.CreateGeneLollipopGraphMutation
>;
export const updateGeneLollipopGraph = /* GraphQL */ `mutation UpdateGeneLollipopGraph(
  $input: UpdateGeneLollipopGraphInput!
  $condition: ModelGeneLollipopGraphConditionInput
) {
  updateGeneLollipopGraph(input: $input, condition: $condition) {
    id
    transcriptId
    transcriptId2
    numberOfAAS
    lollipopLocations {
      nextToken
      __typename
    }
    domains {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGeneLollipopGraphMutationVariables,
  APITypes.UpdateGeneLollipopGraphMutation
>;
export const deleteGeneLollipopGraph = /* GraphQL */ `mutation DeleteGeneLollipopGraph(
  $input: DeleteGeneLollipopGraphInput!
  $condition: ModelGeneLollipopGraphConditionInput
) {
  deleteGeneLollipopGraph(input: $input, condition: $condition) {
    id
    transcriptId
    transcriptId2
    numberOfAAS
    lollipopLocations {
      nextToken
      __typename
    }
    domains {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGeneLollipopGraphMutationVariables,
  APITypes.DeleteGeneLollipopGraphMutation
>;
export const createLollipopLocations = /* GraphQL */ `mutation CreateLollipopLocations(
  $input: CreateLollipopLocationsInput!
  $condition: ModelLollipopLocationsConditionInput
) {
  createLollipopLocations(input: $input, condition: $condition) {
    id
    gene
    sgRNASequence
    function
    aapos
    aachg
    clinVar
    clinVar_ID
    lfcUNT
    pvalueUNT
    fdrUNT
    lfcCISP
    pvalueCISP
    fdrCISP
    lfcOLAP
    pvalueOLAP
    fdrOLAP
    lfcDOX
    pvalueDOX
    fdrDOX
    lfcCPT
    pvalueCPT
    fdrCPT
    tCGA
    pTMsiteLoc
    noncanonicalTranscript
    cellLine
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLollipopLocationsMutationVariables,
  APITypes.CreateLollipopLocationsMutation
>;
export const updateLollipopLocations = /* GraphQL */ `mutation UpdateLollipopLocations(
  $input: UpdateLollipopLocationsInput!
  $condition: ModelLollipopLocationsConditionInput
) {
  updateLollipopLocations(input: $input, condition: $condition) {
    id
    gene
    sgRNASequence
    function
    aapos
    aachg
    clinVar
    clinVar_ID
    lfcUNT
    pvalueUNT
    fdrUNT
    lfcCISP
    pvalueCISP
    fdrCISP
    lfcOLAP
    pvalueOLAP
    fdrOLAP
    lfcDOX
    pvalueDOX
    fdrDOX
    lfcCPT
    pvalueCPT
    fdrCPT
    tCGA
    pTMsiteLoc
    noncanonicalTranscript
    cellLine
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLollipopLocationsMutationVariables,
  APITypes.UpdateLollipopLocationsMutation
>;
export const deleteLollipopLocations = /* GraphQL */ `mutation DeleteLollipopLocations(
  $input: DeleteLollipopLocationsInput!
  $condition: ModelLollipopLocationsConditionInput
) {
  deleteLollipopLocations(input: $input, condition: $condition) {
    id
    gene
    sgRNASequence
    function
    aapos
    aachg
    clinVar
    clinVar_ID
    lfcUNT
    pvalueUNT
    fdrUNT
    lfcCISP
    pvalueCISP
    fdrCISP
    lfcOLAP
    pvalueOLAP
    fdrOLAP
    lfcDOX
    pvalueDOX
    fdrDOX
    lfcCPT
    pvalueCPT
    fdrCPT
    tCGA
    pTMsiteLoc
    noncanonicalTranscript
    cellLine
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLollipopLocationsMutationVariables,
  APITypes.DeleteLollipopLocationsMutation
>;
export const createLollipopLocationsMCF7 = /* GraphQL */ `mutation CreateLollipopLocationsMCF7(
  $input: CreateLollipopLocationsMCF7Input!
  $condition: ModelLollipopLocationsMCF7ConditionInput
) {
  createLollipopLocationsMCF7(input: $input, condition: $condition) {
    id
    gene
    sgRNASequence
    function
    aapos
    aachg
    clinVar
    clinVar_ID
    lfcUNT
    pvalueUNT
    fdrUNT
    lfcCISP
    pvalueCISP
    fdrCISP
    lfcOLAP
    pvalueOLAP
    fdrOLAP
    lfcDOX
    pvalueDOX
    fdrDOX
    lfcCPT
    pvalueCPT
    fdrCPT
    tCGA
    pTMsiteLoc
    noncanonicalTranscript
    cellLine
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLollipopLocationsMCF7MutationVariables,
  APITypes.CreateLollipopLocationsMCF7Mutation
>;
export const updateLollipopLocationsMCF7 = /* GraphQL */ `mutation UpdateLollipopLocationsMCF7(
  $input: UpdateLollipopLocationsMCF7Input!
  $condition: ModelLollipopLocationsMCF7ConditionInput
) {
  updateLollipopLocationsMCF7(input: $input, condition: $condition) {
    id
    gene
    sgRNASequence
    function
    aapos
    aachg
    clinVar
    clinVar_ID
    lfcUNT
    pvalueUNT
    fdrUNT
    lfcCISP
    pvalueCISP
    fdrCISP
    lfcOLAP
    pvalueOLAP
    fdrOLAP
    lfcDOX
    pvalueDOX
    fdrDOX
    lfcCPT
    pvalueCPT
    fdrCPT
    tCGA
    pTMsiteLoc
    noncanonicalTranscript
    cellLine
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLollipopLocationsMCF7MutationVariables,
  APITypes.UpdateLollipopLocationsMCF7Mutation
>;
export const deleteLollipopLocationsMCF7 = /* GraphQL */ `mutation DeleteLollipopLocationsMCF7(
  $input: DeleteLollipopLocationsMCF7Input!
  $condition: ModelLollipopLocationsMCF7ConditionInput
) {
  deleteLollipopLocationsMCF7(input: $input, condition: $condition) {
    id
    gene
    sgRNASequence
    function
    aapos
    aachg
    clinVar
    clinVar_ID
    lfcUNT
    pvalueUNT
    fdrUNT
    lfcCISP
    pvalueCISP
    fdrCISP
    lfcOLAP
    pvalueOLAP
    fdrOLAP
    lfcDOX
    pvalueDOX
    fdrDOX
    lfcCPT
    pvalueCPT
    fdrCPT
    tCGA
    pTMsiteLoc
    noncanonicalTranscript
    cellLine
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLollipopLocationsMCF7MutationVariables,
  APITypes.DeleteLollipopLocationsMCF7Mutation
>;
export const createGeneLollipopGraphMCF7 = /* GraphQL */ `mutation CreateGeneLollipopGraphMCF7(
  $input: CreateGeneLollipopGraphMCF7Input!
  $condition: ModelGeneLollipopGraphMCF7ConditionInput
) {
  createGeneLollipopGraphMCF7(input: $input, condition: $condition) {
    id
    transcriptId
    transcriptId2
    numberOfAAS
    lollipopLocations {
      nextToken
      __typename
    }
    domains {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGeneLollipopGraphMCF7MutationVariables,
  APITypes.CreateGeneLollipopGraphMCF7Mutation
>;
export const updateGeneLollipopGraphMCF7 = /* GraphQL */ `mutation UpdateGeneLollipopGraphMCF7(
  $input: UpdateGeneLollipopGraphMCF7Input!
  $condition: ModelGeneLollipopGraphMCF7ConditionInput
) {
  updateGeneLollipopGraphMCF7(input: $input, condition: $condition) {
    id
    transcriptId
    transcriptId2
    numberOfAAS
    lollipopLocations {
      nextToken
      __typename
    }
    domains {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGeneLollipopGraphMCF7MutationVariables,
  APITypes.UpdateGeneLollipopGraphMCF7Mutation
>;
export const deleteGeneLollipopGraphMCF7 = /* GraphQL */ `mutation DeleteGeneLollipopGraphMCF7(
  $input: DeleteGeneLollipopGraphMCF7Input!
  $condition: ModelGeneLollipopGraphMCF7ConditionInput
) {
  deleteGeneLollipopGraphMCF7(input: $input, condition: $condition) {
    id
    transcriptId
    transcriptId2
    numberOfAAS
    lollipopLocations {
      nextToken
      __typename
    }
    domains {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGeneLollipopGraphMCF7MutationVariables,
  APITypes.DeleteGeneLollipopGraphMCF7Mutation
>;
export const createDomain = /* GraphQL */ `mutation CreateDomain(
  $input: CreateDomainInput!
  $condition: ModelDomainConditionInput
) {
  createDomain(input: $input, condition: $condition) {
    id
    accessionNumber
    type
    start
    end
    gene
    identifier
    color
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDomainMutationVariables,
  APITypes.CreateDomainMutation
>;
export const updateDomain = /* GraphQL */ `mutation UpdateDomain(
  $input: UpdateDomainInput!
  $condition: ModelDomainConditionInput
) {
  updateDomain(input: $input, condition: $condition) {
    id
    accessionNumber
    type
    start
    end
    gene
    identifier
    color
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDomainMutationVariables,
  APITypes.UpdateDomainMutation
>;
export const deleteDomain = /* GraphQL */ `mutation DeleteDomain(
  $input: DeleteDomainInput!
  $condition: ModelDomainConditionInput
) {
  deleteDomain(input: $input, condition: $condition) {
    id
    accessionNumber
    type
    start
    end
    gene
    identifier
    color
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDomainMutationVariables,
  APITypes.DeleteDomainMutation
>;
export const createAuth = /* GraphQL */ `mutation CreateAuth(
  $input: CreateAuthInput!
  $condition: ModelAuthConditionInput
) {
  createAuth(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAuthMutationVariables,
  APITypes.CreateAuthMutation
>;
export const updateAuth = /* GraphQL */ `mutation UpdateAuth(
  $input: UpdateAuthInput!
  $condition: ModelAuthConditionInput
) {
  updateAuth(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAuthMutationVariables,
  APITypes.UpdateAuthMutation
>;
export const deleteAuth = /* GraphQL */ `mutation DeleteAuth(
  $input: DeleteAuthInput!
  $condition: ModelAuthConditionInput
) {
  deleteAuth(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAuthMutationVariables,
  APITypes.DeleteAuthMutation
>;
export const createLollipopLocationsMDAMB231 = /* GraphQL */ `mutation CreateLollipopLocationsMDAMB231(
  $input: CreateLollipopLocationsMDAMB231Input!
) {
  createLollipopLocationsMDAMB231(input: $input) {
    id
    gene
    lfcUNT
    pvalueUNT
    fdrUNT
    sgRNASequence
    function
    clinVar
    aapos
    nLFC
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLollipopLocationsMDAMB231MutationVariables,
  APITypes.CreateLollipopLocationsMDAMB231Mutation
>;
export const updateLollipopLocationsMDAMB231 = /* GraphQL */ `mutation UpdateLollipopLocationsMDAMB231(
  $input: UpdateLollipopLocationsMDAMB231Input!
) {
  updateLollipopLocationsMDAMB231(input: $input) {
    id
    gene
    lfcUNT
    pvalueUNT
    fdrUNT
    sgRNASequence
    function
    clinVar
    aapos
    nLFC
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLollipopLocationsMDAMB231MutationVariables,
  APITypes.UpdateLollipopLocationsMDAMB231Mutation
>;
export const deleteLollipopLocationsMDAMB231 = /* GraphQL */ `mutation DeleteLollipopLocationsMDAMB231(
  $input: DeleteLollipopLocationsMDAMB231Input!
) {
  deleteLollipopLocationsMDAMB231(input: $input) {
    id
    gene
    lfcUNT
    pvalueUNT
    fdrUNT
    sgRNASequence
    function
    clinVar
    aapos
    nLFC
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLollipopLocationsMDAMB231MutationVariables,
  APITypes.DeleteLollipopLocationsMDAMB231Mutation
>;
