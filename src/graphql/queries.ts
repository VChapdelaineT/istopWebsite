/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getHomoSapiens = /* GraphQL */ `query GetHomoSapiens($id: ID!) {
  getHomoSapiens(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetHomoSapiensQueryVariables,
  APITypes.GetHomoSapiensQuery
>;
export const listHomoSapienss = /* GraphQL */ `query ListHomoSapienss(
  $filter: ModelHomoSapiensFilterInput
  $limit: Int
  $nextToken: String
) {
  listHomoSapienss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHomoSapienssQueryVariables,
  APITypes.ListHomoSapienssQuery
>;
export const getYeast = /* GraphQL */ `query GetYeast($id: ID!) {
  getYeast(id: $id) {
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
` as GeneratedQuery<APITypes.GetYeastQueryVariables, APITypes.GetYeastQuery>;
export const listYeasts = /* GraphQL */ `query ListYeasts(
  $filter: ModelYeastFilterInput
  $limit: Int
  $nextToken: String
) {
  listYeasts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListYeastsQueryVariables,
  APITypes.ListYeastsQuery
>;
export const getFish = /* GraphQL */ `query GetFish($id: ID!) {
  getFish(id: $id) {
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
` as GeneratedQuery<APITypes.GetFishQueryVariables, APITypes.GetFishQuery>;
export const listFishs = /* GraphQL */ `query ListFishs(
  $filter: ModelFishFilterInput
  $limit: Int
  $nextToken: String
) {
  listFishs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListFishsQueryVariables, APITypes.ListFishsQuery>;
export const getMouse = /* GraphQL */ `query GetMouse($id: ID!) {
  getMouse(id: $id) {
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
` as GeneratedQuery<APITypes.GetMouseQueryVariables, APITypes.GetMouseQuery>;
export const listMouses = /* GraphQL */ `query ListMouses(
  $filter: ModelMouseFilterInput
  $limit: Int
  $nextToken: String
) {
  listMouses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMousesQueryVariables,
  APITypes.ListMousesQuery
>;
export const getFly = /* GraphQL */ `query GetFly($id: ID!) {
  getFly(id: $id) {
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
` as GeneratedQuery<APITypes.GetFlyQueryVariables, APITypes.GetFlyQuery>;
export const listFlys = /* GraphQL */ `query ListFlys($filter: ModelFlyFilterInput, $limit: Int, $nextToken: String) {
  listFlys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListFlysQueryVariables, APITypes.ListFlysQuery>;
export const getNematode = /* GraphQL */ `query GetNematode($id: ID!) {
  getNematode(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetNematodeQueryVariables,
  APITypes.GetNematodeQuery
>;
export const listNematodes = /* GraphQL */ `query ListNematodes(
  $filter: ModelNematodeFilterInput
  $limit: Int
  $nextToken: String
) {
  listNematodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNematodesQueryVariables,
  APITypes.ListNematodesQuery
>;
export const getPlant = /* GraphQL */ `query GetPlant($id: ID!) {
  getPlant(id: $id) {
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
` as GeneratedQuery<APITypes.GetPlantQueryVariables, APITypes.GetPlantQuery>;
export const listPlants = /* GraphQL */ `query ListPlants(
  $filter: ModelPlantFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlantsQueryVariables,
  APITypes.ListPlantsQuery
>;
export const getRat = /* GraphQL */ `query GetRat($id: ID!) {
  getRat(id: $id) {
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
` as GeneratedQuery<APITypes.GetRatQueryVariables, APITypes.GetRatQuery>;
export const listRats = /* GraphQL */ `query ListRats($filter: ModelRatFilterInput, $limit: Int, $nextToken: String) {
  listRats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRatsQueryVariables, APITypes.ListRatsQuery>;
export const getAlias = /* GraphQL */ `query GetAlias($id: ID!) {
  getAlias(id: $id) {
    id
    alias
    gene
    speciesName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAliasQueryVariables, APITypes.GetAliasQuery>;
export const listAliass = /* GraphQL */ `query ListAliass(
  $filter: ModelAliasFilterInput
  $limit: Int
  $nextToken: String
) {
  listAliass(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      alias
      gene
      speciesName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAliassQueryVariables,
  APITypes.ListAliassQuery
>;
export const getGeneLollipopGraph = /* GraphQL */ `query GetGeneLollipopGraph($id: ID!) {
  getGeneLollipopGraph(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGeneLollipopGraphQueryVariables,
  APITypes.GetGeneLollipopGraphQuery
>;
export const listGeneLollipopGraphs = /* GraphQL */ `query ListGeneLollipopGraphs(
  $filter: ModelGeneLollipopGraphFilterInput
  $limit: Int
  $nextToken: String
) {
  listGeneLollipopGraphs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      transcriptId
      transcriptId2
      numberOfAAS
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGeneLollipopGraphsQueryVariables,
  APITypes.ListGeneLollipopGraphsQuery
>;
export const getLollipopLocations = /* GraphQL */ `query GetLollipopLocations($id: ID!) {
  getLollipopLocations(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLollipopLocationsQueryVariables,
  APITypes.GetLollipopLocationsQuery
>;
export const listLollipopLocationss = /* GraphQL */ `query ListLollipopLocationss(
  $filter: ModelLollipopLocationsFilterInput
  $limit: Int
  $nextToken: String
) {
  listLollipopLocationss(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLollipopLocationssQueryVariables,
  APITypes.ListLollipopLocationssQuery
>;
export const getLollipopLocationsMCF7 = /* GraphQL */ `query GetLollipopLocationsMCF7($id: ID!) {
  getLollipopLocationsMCF7(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLollipopLocationsMCF7QueryVariables,
  APITypes.GetLollipopLocationsMCF7Query
>;
export const listLollipopLocationsMCF7s = /* GraphQL */ `query ListLollipopLocationsMCF7s(
  $filter: ModelLollipopLocationsMCF7FilterInput
  $limit: Int
  $nextToken: String
) {
  listLollipopLocationsMCF7s(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLollipopLocationsMCF7sQueryVariables,
  APITypes.ListLollipopLocationsMCF7sQuery
>;
export const getGeneLollipopGraphMCF7 = /* GraphQL */ `query GetGeneLollipopGraphMCF7($id: ID!) {
  getGeneLollipopGraphMCF7(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGeneLollipopGraphMCF7QueryVariables,
  APITypes.GetGeneLollipopGraphMCF7Query
>;
export const listGeneLollipopGraphMCF7s = /* GraphQL */ `query ListGeneLollipopGraphMCF7s(
  $filter: ModelGeneLollipopGraphMCF7FilterInput
  $limit: Int
  $nextToken: String
) {
  listGeneLollipopGraphMCF7s(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      transcriptId
      transcriptId2
      numberOfAAS
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGeneLollipopGraphMCF7sQueryVariables,
  APITypes.ListGeneLollipopGraphMCF7sQuery
>;
export const getDomain = /* GraphQL */ `query GetDomain($id: ID!) {
  getDomain(id: $id) {
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
` as GeneratedQuery<APITypes.GetDomainQueryVariables, APITypes.GetDomainQuery>;
export const listDomains = /* GraphQL */ `query ListDomains(
  $filter: ModelDomainFilterInput
  $limit: Int
  $nextToken: String
) {
  listDomains(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDomainsQueryVariables,
  APITypes.ListDomainsQuery
>;
export const getAuth = /* GraphQL */ `query GetAuth($id: ID!) {
  getAuth(id: $id) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAuthQueryVariables, APITypes.GetAuthQuery>;
export const listAuths = /* GraphQL */ `query ListAuths(
  $filter: ModelAuthFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuths(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListAuthsQueryVariables, APITypes.ListAuthsQuery>;
export const gene = /* GraphQL */ `query Gene(
  $gene: String
  $sortDirection: ModelSortDirection
  $filter: ModelHomoSapiensFilterInput
  $limit: Int
  $nextToken: String
) {
  gene(
    gene: $gene
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.GeneQueryVariables, APITypes.GeneQuery>;
export const newCancerType = /* GraphQL */ `query NewCancerType(
  $cancer_type: String
  $sortDirection: ModelSortDirection
  $filter: ModelHomoSapiensFilterInput
  $limit: Int
  $nextToken: String
) {
  newCancerType(
    cancer_type: $cancer_type
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NewCancerTypeQueryVariables,
  APITypes.NewCancerTypeQuery
>;
export const geneYeast = /* GraphQL */ `query GeneYeast(
  $gene: String
  $sortDirection: ModelSortDirection
  $filter: ModelYeastFilterInput
  $limit: Int
  $nextToken: String
) {
  geneYeast(
    gene: $gene
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.GeneYeastQueryVariables, APITypes.GeneYeastQuery>;
export const geneFish = /* GraphQL */ `query GeneFish(
  $gene: String
  $sortDirection: ModelSortDirection
  $filter: ModelFishFilterInput
  $limit: Int
  $nextToken: String
) {
  geneFish(
    gene: $gene
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.GeneFishQueryVariables, APITypes.GeneFishQuery>;
export const geneMouse = /* GraphQL */ `query GeneMouse(
  $gene: String
  $sortDirection: ModelSortDirection
  $filter: ModelMouseFilterInput
  $limit: Int
  $nextToken: String
) {
  geneMouse(
    gene: $gene
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.GeneMouseQueryVariables, APITypes.GeneMouseQuery>;
export const geneFly = /* GraphQL */ `query GeneFly(
  $gene: String
  $sortDirection: ModelSortDirection
  $filter: ModelFlyFilterInput
  $limit: Int
  $nextToken: String
) {
  geneFly(
    gene: $gene
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.GeneFlyQueryVariables, APITypes.GeneFlyQuery>;
export const geneNematode = /* GraphQL */ `query GeneNematode(
  $gene: String
  $sortDirection: ModelSortDirection
  $filter: ModelNematodeFilterInput
  $limit: Int
  $nextToken: String
) {
  geneNematode(
    gene: $gene
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GeneNematodeQueryVariables,
  APITypes.GeneNematodeQuery
>;
export const genePlant = /* GraphQL */ `query GenePlant(
  $gene: String
  $sortDirection: ModelSortDirection
  $filter: ModelPlantFilterInput
  $limit: Int
  $nextToken: String
) {
  genePlant(
    gene: $gene
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.GenePlantQueryVariables, APITypes.GenePlantQuery>;
export const geneRat = /* GraphQL */ `query GeneRat(
  $gene: String
  $sortDirection: ModelSortDirection
  $filter: ModelRatFilterInput
  $limit: Int
  $nextToken: String
) {
  geneRat(
    gene: $gene
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.GeneRatQueryVariables, APITypes.GeneRatQuery>;
export const byAlias = /* GraphQL */ `query ByAlias(
  $alias: String
  $sortDirection: ModelSortDirection
  $filter: ModelAliasFilterInput
  $limit: Int
  $nextToken: String
) {
  byAlias(
    alias: $alias
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      alias
      gene
      speciesName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ByAliasQueryVariables, APITypes.ByAliasQuery>;
export const getLollipopLocationsMDAMB231 = /* GraphQL */ `query GetLollipopLocationsMDAMB231($id: ID!) {
  getLollipopLocationsMDAMB231(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLollipopLocationsMDAMB231QueryVariables,
  APITypes.GetLollipopLocationsMDAMB231Query
>;
export const listLollipopLocationsMDAMB231s = /* GraphQL */ `query ListLollipopLocationsMDAMB231s(
  $filter: TableLollipopLocationsMDAMB231FilterInput
  $limit: Int
  $nextToken: String
) {
  listLollipopLocationsMDAMB231s(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLollipopLocationsMDAMB231sQueryVariables,
  APITypes.ListLollipopLocationsMDAMB231sQuery
>;
