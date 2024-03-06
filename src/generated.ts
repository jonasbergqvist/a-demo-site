import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
};

export type Artist = IData & {
  __typename?: 'Artist';
  Artist_Name?: Maybe<Scalars['String']['output']>;
  Biggest_Hits?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  City_Name?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Genre?: Maybe<Scalars['String']['output']>;
  Teaser_Text?: Maybe<Scalars['String']['output']>;
  Year_formed?: Maybe<Scalars['Int']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Artist_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArtistFacet = {
  __typename?: 'ArtistFacet';
  Artist_Name?: Maybe<Array<Maybe<StringFacet>>>;
  Biggest_Hits?: Maybe<Array<Maybe<StringFacet>>>;
  City_Name?: Maybe<Array<Maybe<StringFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Genre?: Maybe<Array<Maybe<StringFacet>>>;
  Teaser_Text?: Maybe<Array<Maybe<StringFacet>>>;
  Year_formed?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ArtistFacetArtist_NameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistFacetBiggest_HitsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistFacetCity_NameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistFacetGenreArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistFacetTeaser_TextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistFacetYear_FormedArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ArtistOrderByInput = {
  Artist_Name?: InputMaybe<OrderBy>;
  Biggest_Hits?: InputMaybe<OrderBy>;
  City_Name?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  Genre?: InputMaybe<OrderBy>;
  Teaser_Text?: InputMaybe<OrderBy>;
  Year_formed?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ArtistOutput = {
  __typename?: 'ArtistOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ArtistFacet>;
  items?: Maybe<Array<Maybe<Artist>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ArtistOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArtistWhereInput = {
  Artist_Name?: InputMaybe<SearchableStringFilterInput>;
  Biggest_Hits?: InputMaybe<SearchableStringFilterInput>;
  City_Name?: InputMaybe<SearchableStringFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  Genre?: InputMaybe<SearchableStringFilterInput>;
  Teaser_Text?: InputMaybe<SearchableStringFilterInput>;
  Year_formed?: InputMaybe<IntFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ArtistWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArtistWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArtistWhereInput>>>;
};

export type BlobModel = {
  __typename?: 'BlobModel';
  Id?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
};

export type BlobModelAutocomplete = {
  __typename?: 'BlobModelAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type BlobModelAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlobModelAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type BlobModelFacet = {
  __typename?: 'BlobModelFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type BlobModelFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlobModelFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlobModelOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
};

export type BlobModelWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
};

export type BoolFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BuyTicketBlock = IContent & IData & {
  __typename?: 'BuyTicketBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Heading?: Maybe<Scalars['String']['output']>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Message?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type BuyTicketBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BuyTicketBlockAutocomplete = {
  __typename?: 'BuyTicketBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type BuyTicketBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BuyTicketBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BuyTicketBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BuyTicketBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BuyTicketBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BuyTicketBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BuyTicketBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type BuyTicketBlockFacet = {
  __typename?: 'BuyTicketBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  Heading?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Message?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type BuyTicketBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BuyTicketBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BuyTicketBlockFacetHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetMessageArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BuyTicketBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BuyTicketBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BuyTicketBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BuyTicketBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  Heading?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Message?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type BuyTicketBlockOutput = {
  __typename?: 'BuyTicketBlockOutput';
  autocomplete?: Maybe<BuyTicketBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BuyTicketBlockFacet>;
  items?: Maybe<Array<Maybe<BuyTicketBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BuyTicketBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BuyTicketBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  Heading?: InputMaybe<SearchableStringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Message?: InputMaybe<SearchableStringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<BuyTicketBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BuyTicketBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BuyTicketBlockWhereInput>>>;
};

export type CategoryModel = {
  __typename?: 'CategoryModel';
  Description?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type CategoryModelAutocomplete = {
  __typename?: 'CategoryModelAutocomplete';
  Description?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CategoryModelAutocompleteDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CategoryModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CategoryModelFacet = {
  __typename?: 'CategoryModelFacet';
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<NumberFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CategoryModelFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoryModelFacetIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type CategoryModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CategoryModelOrderByInput = {
  Description?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type CategoryModelWhereInput = {
  Description?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<IntFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type City = IData & {
  __typename?: 'City';
  City_Name?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Teaser_Text?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type City_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CityFacet = {
  __typename?: 'CityFacet';
  City_Name?: Maybe<Array<Maybe<StringFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Teaser_Text?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CityFacetCity_NameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CityFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CityFacetTeaser_TextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CityOrderByInput = {
  City_Name?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  Teaser_Text?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type CityOutput = {
  __typename?: 'CityOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CityFacet>;
  items?: Maybe<Array<Maybe<City>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CityOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CityWhereInput = {
  City_Name?: InputMaybe<SearchableStringFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  Teaser_Text?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<CityWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CityWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CityWhereInput>>>;
};

export type Content = IContent & IData & {
  __typename?: 'Content';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Content_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContentAreaItemModel = {
  __typename?: 'ContentAreaItemModel';
  ContentLink?: Maybe<ContentModelReference>;
  DisplayOption?: Maybe<Scalars['String']['output']>;
  InlineBlock?: Maybe<InlineBlockPropertyModel>;
  Tag?: Maybe<Scalars['String']['output']>;
};

export type ContentAreaItemModelAutocomplete = {
  __typename?: 'ContentAreaItemModelAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  DisplayOption?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  InlineBlock?: Maybe<InlineBlockPropertyModelAutocomplete>;
  Tag?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentAreaItemModelAutocompleteDisplayOptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAreaItemModelAutocompleteTagArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentAreaItemModelFacet = {
  __typename?: 'ContentAreaItemModelFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  DisplayOption?: Maybe<Array<Maybe<StringFacet>>>;
  InlineBlock?: Maybe<InlineBlockPropertyModelFacet>;
  Tag?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentAreaItemModelFacetDisplayOptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentAreaItemModelFacetTagArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentAreaItemModelOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  DisplayOption?: InputMaybe<OrderBy>;
  InlineBlock?: InputMaybe<InlineBlockPropertyModelOrderByInput>;
  Tag?: InputMaybe<OrderBy>;
};

export type ContentAreaItemModelSearch = {
  __typename?: 'ContentAreaItemModelSearch';
  ContentLink?: Maybe<ContentModelReferenceSearch>;
  DisplayOption?: Maybe<Scalars['String']['output']>;
  InlineBlock?: Maybe<InlineBlockPropertyModelSearch>;
  Tag?: Maybe<Scalars['String']['output']>;
};

export type ContentAreaItemModelSearchFacet = {
  __typename?: 'ContentAreaItemModelSearchFacet';
  ContentLink?: Maybe<ContentModelReferenceSearchFacet>;
  DisplayOption?: Maybe<Array<Maybe<StringFacet>>>;
  InlineBlock?: Maybe<InlineBlockPropertyModelSearchFacet>;
  Tag?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentAreaItemModelSearchFacetDisplayOptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentAreaItemModelSearchFacetTagArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentAreaItemModelSearchOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceSearchOrderByInput>;
  DisplayOption?: InputMaybe<OrderBy>;
  InlineBlock?: InputMaybe<InlineBlockPropertyModelSearchOrderByInput>;
  Tag?: InputMaybe<OrderBy>;
};

export type ContentAreaItemModelSearchWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceSearchWhereInput>;
  DisplayOption?: InputMaybe<SearchableStringFilterInput>;
  InlineBlock?: InputMaybe<InlineBlockPropertyModelSearchWhereInput>;
  Tag?: InputMaybe<SearchableStringFilterInput>;
};

export type ContentAreaItemModelWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  DisplayOption?: InputMaybe<StringFilterInput>;
  InlineBlock?: InputMaybe<InlineBlockPropertyModelWhereInput>;
  Tag?: InputMaybe<StringFilterInput>;
};

export type ContentAutocomplete = {
  __typename?: 'ContentAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentBlock = IContent & IData & {
  __typename?: 'ContentBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Image?: Maybe<Scalars['String']['output']>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MainText?: Maybe<Scalars['String']['output']>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ContentBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContentBlockAutocomplete = {
  __typename?: 'ContentBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Image?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MainText?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentBlockAutocompleteImageArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentBlockAutocompleteMainTextArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentBlockFacet = {
  __typename?: 'ContentBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  Image?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MainText?: Maybe<Array<Maybe<StringFacet>>>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentBlockFacetImageArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetMainTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentBlockFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  Image?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MainText?: InputMaybe<OrderBy>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ContentBlockOutput = {
  __typename?: 'ContentBlockOutput';
  autocomplete?: Maybe<ContentBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ContentBlockFacet>;
  items?: Maybe<Array<Maybe<ContentBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ContentBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  Image?: InputMaybe<StringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MainText?: InputMaybe<StringFilterInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ContentBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContentBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContentBlockWhereInput>>>;
};

export type ContentFacet = {
  __typename?: 'ContentFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentLanguageModel = {
  __typename?: 'ContentLanguageModel';
  DisplayName?: Maybe<Scalars['String']['output']>;
  Link?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type ContentLanguageModelAutocomplete = {
  __typename?: 'ContentLanguageModelAutocomplete';
  DisplayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Link?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentLanguageModelAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentLanguageModelAutocompleteLinkArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentLanguageModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentLanguageModelFacet = {
  __typename?: 'ContentLanguageModelFacet';
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  Link?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentLanguageModelFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelFacetLinkArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentLanguageModelOrderByInput = {
  DisplayName?: InputMaybe<OrderBy>;
  Link?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type ContentLanguageModelSearch = {
  __typename?: 'ContentLanguageModelSearch';
  DisplayName?: Maybe<Scalars['String']['output']>;
  Link?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type ContentLanguageModelSearchFacet = {
  __typename?: 'ContentLanguageModelSearchFacet';
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  Link?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentLanguageModelSearchFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelSearchFacetLinkArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelSearchFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentLanguageModelSearchOrderByInput = {
  DisplayName?: InputMaybe<OrderBy>;
  Link?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type ContentLanguageModelSearchWhereInput = {
  DisplayName?: InputMaybe<SearchableStringFilterInput>;
  Link?: InputMaybe<SearchableStringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
};

export type ContentLanguageModelWhereInput = {
  DisplayName?: InputMaybe<StringFilterInput>;
  Link?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type ContentModelReference = {
  __typename?: 'ContentModelReference';
  Expanded?: Maybe<IContent>;
  GuidValue?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  ProviderName?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  WorkId?: Maybe<Scalars['Int']['output']>;
};

export type ContentModelReferenceAutocomplete = {
  __typename?: 'ContentModelReferenceAutocomplete';
  GuidValue?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  ProviderName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentModelReferenceAutocompleteGuidValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentModelReferenceAutocompleteProviderNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentModelReferenceAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentModelReferenceFacet = {
  __typename?: 'ContentModelReferenceFacet';
  GuidValue?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<NumberFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  ProviderName?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  WorkId?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ContentModelReferenceFacetGuidValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ContentModelReferenceFacetProviderNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetWorkIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ContentModelReferenceOrderByInput = {
  GuidValue?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  ProviderName?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  WorkId?: InputMaybe<OrderBy>;
};

export type ContentModelReferenceSearch = {
  __typename?: 'ContentModelReferenceSearch';
  Expanded?: Maybe<IContent>;
  GuidValue?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Language?: Maybe<ContentLanguageModelSearch>;
  ProviderName?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  WorkId?: Maybe<Scalars['Int']['output']>;
};

export type ContentModelReferenceSearchFacet = {
  __typename?: 'ContentModelReferenceSearchFacet';
  GuidValue?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<NumberFacet>>>;
  Language?: Maybe<ContentLanguageModelSearchFacet>;
  ProviderName?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  WorkId?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ContentModelReferenceSearchFacetGuidValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ContentModelReferenceSearchFacetProviderNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetWorkIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ContentModelReferenceSearchOrderByInput = {
  GuidValue?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelSearchOrderByInput>;
  ProviderName?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  WorkId?: InputMaybe<OrderBy>;
};

export type ContentModelReferenceSearchWhereInput = {
  GuidValue?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<IntFilterInput>;
  Language?: InputMaybe<ContentLanguageModelSearchWhereInput>;
  ProviderName?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<SearchableStringFilterInput>;
  WorkId?: InputMaybe<IntFilterInput>;
};

export type ContentModelReferenceWhereInput = {
  GuidValue?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<IntFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  ProviderName?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  WorkId?: InputMaybe<IntFilterInput>;
};

export type ContentOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ContentOutput = {
  __typename?: 'ContentOutput';
  autocomplete?: Maybe<ContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ContentFacet>;
  items?: Maybe<Array<Maybe<IContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentRootsModel = {
  __typename?: 'ContentRootsModel';
  ContentAssetsRoot?: Maybe<ContentModelReference>;
  GlobalAssetsRoot?: Maybe<ContentModelReference>;
  RootPage?: Maybe<ContentModelReference>;
  SiteAssetsRoot?: Maybe<ContentModelReference>;
  StartPage?: Maybe<ContentModelReference>;
  WasteBasket?: Maybe<ContentModelReference>;
};

export type ContentRootsModelAutocomplete = {
  __typename?: 'ContentRootsModelAutocomplete';
  ContentAssetsRoot?: Maybe<ContentModelReferenceAutocomplete>;
  GlobalAssetsRoot?: Maybe<ContentModelReferenceAutocomplete>;
  RootPage?: Maybe<ContentModelReferenceAutocomplete>;
  SiteAssetsRoot?: Maybe<ContentModelReferenceAutocomplete>;
  StartPage?: Maybe<ContentModelReferenceAutocomplete>;
  WasteBasket?: Maybe<ContentModelReferenceAutocomplete>;
};

export type ContentRootsModelFacet = {
  __typename?: 'ContentRootsModelFacet';
  ContentAssetsRoot?: Maybe<ContentModelReferenceFacet>;
  GlobalAssetsRoot?: Maybe<ContentModelReferenceFacet>;
  RootPage?: Maybe<ContentModelReferenceFacet>;
  SiteAssetsRoot?: Maybe<ContentModelReferenceFacet>;
  StartPage?: Maybe<ContentModelReferenceFacet>;
  WasteBasket?: Maybe<ContentModelReferenceFacet>;
};

export type ContentRootsModelOrderByInput = {
  ContentAssetsRoot?: InputMaybe<ContentModelReferenceOrderByInput>;
  GlobalAssetsRoot?: InputMaybe<ContentModelReferenceOrderByInput>;
  RootPage?: InputMaybe<ContentModelReferenceOrderByInput>;
  SiteAssetsRoot?: InputMaybe<ContentModelReferenceOrderByInput>;
  StartPage?: InputMaybe<ContentModelReferenceOrderByInput>;
  WasteBasket?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type ContentRootsModelWhereInput = {
  ContentAssetsRoot?: InputMaybe<ContentModelReferenceWhereInput>;
  GlobalAssetsRoot?: InputMaybe<ContentModelReferenceWhereInput>;
  RootPage?: InputMaybe<ContentModelReferenceWhereInput>;
  SiteAssetsRoot?: InputMaybe<ContentModelReferenceWhereInput>;
  StartPage?: InputMaybe<ContentModelReferenceWhereInput>;
  WasteBasket?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type ContentWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
};

/** Used by the DAM integration, cannot be edited */
export type DamAsset = IContent & IData & {
  __typename?: 'DAMAsset';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Content?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MimeType?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Thumbnail?: Maybe<BlobModel>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Used by the DAM integration, cannot be edited */
export type DamAsset_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DamAssetAutocomplete = {
  __typename?: 'DAMAssetAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Thumbnail?: Maybe<BlobModelAutocomplete>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type DamAssetAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamAssetAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamAssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamAssetAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamAssetAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamAssetAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamAssetAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamAssetAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type DamAssetFacet = {
  __typename?: 'DAMAssetFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Content?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Thumbnail?: Maybe<BlobModelFacet>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type DamAssetFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamAssetFacetContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamAssetFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamAssetFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamAssetFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamAssetFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type DamAssetOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Content?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Thumbnail?: InputMaybe<BlobModelOrderByInput>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DamAssetOutput = {
  __typename?: 'DAMAssetOutput';
  autocomplete?: Maybe<DamAssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DamAssetFacet>;
  items?: Maybe<Array<Maybe<DamAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DamAssetOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DamAssetWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Content?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Thumbnail?: InputMaybe<BlobModelWhereInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<DamAssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DamAssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DamAssetWhereInput>>>;
};

/** Used by the DAM integration, cannot be edited */
export type DamImageAsset = IContent & IData & {
  __typename?: 'DAMImageAsset';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Content?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MimeType?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Thumbnail?: Maybe<BlobModel>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Used by the DAM integration, cannot be edited */
export type DamImageAsset_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DamImageAssetAutocomplete = {
  __typename?: 'DAMImageAssetAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Thumbnail?: Maybe<BlobModelAutocomplete>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type DamImageAssetAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamImageAssetAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamImageAssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamImageAssetAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamImageAssetAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamImageAssetAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamImageAssetAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamImageAssetAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type DamImageAssetFacet = {
  __typename?: 'DAMImageAssetFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Content?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Thumbnail?: Maybe<BlobModelFacet>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type DamImageAssetFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamImageAssetFacetContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamImageAssetFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamImageAssetFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamImageAssetFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamImageAssetFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type DamImageAssetOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Content?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Thumbnail?: InputMaybe<BlobModelOrderByInput>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DamImageAssetOutput = {
  __typename?: 'DAMImageAssetOutput';
  autocomplete?: Maybe<DamImageAssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DamImageAssetFacet>;
  items?: Maybe<Array<Maybe<DamImageAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DamImageAssetOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DamImageAssetWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Content?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Thumbnail?: InputMaybe<BlobModelWhereInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<DamImageAssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DamImageAssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DamImageAssetWhereInput>>>;
};

/** Used by the DAM integration, cannot be edited */
export type DamVideoAsset = IContent & IData & {
  __typename?: 'DAMVideoAsset';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Content?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MimeType?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Thumbnail?: Maybe<BlobModel>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Used by the DAM integration, cannot be edited */
export type DamVideoAsset_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DamVideoAssetAutocomplete = {
  __typename?: 'DAMVideoAssetAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Thumbnail?: Maybe<BlobModelAutocomplete>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type DamVideoAssetAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamVideoAssetAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamVideoAssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamVideoAssetAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamVideoAssetAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamVideoAssetAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamVideoAssetAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamVideoAssetAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type DamVideoAssetFacet = {
  __typename?: 'DAMVideoAssetFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Content?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Thumbnail?: Maybe<BlobModelFacet>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type DamVideoAssetFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamVideoAssetFacetContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamVideoAssetFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamVideoAssetFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamVideoAssetFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamVideoAssetFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type DamVideoAssetOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Content?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Thumbnail?: InputMaybe<BlobModelOrderByInput>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DamVideoAssetOutput = {
  __typename?: 'DAMVideoAssetOutput';
  autocomplete?: Maybe<DamVideoAssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DamVideoAssetFacet>;
  items?: Maybe<Array<Maybe<DamVideoAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DamVideoAssetOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DamVideoAssetWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Content?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Thumbnail?: InputMaybe<BlobModelWhereInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<DamVideoAssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DamVideoAssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DamVideoAssetWhereInput>>>;
};

export type Data = IData & {
  __typename?: 'Data';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Data_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _ranking?: InputMaybe<Ranking>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<IData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  Day = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  Hour = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  Minute = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Date']['input']>;
};

export type Dummy = IContent & IData & {
  __typename?: 'Dummy';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  Dummy?: Maybe<Scalars['String']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Dummy_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DummyAutocomplete = {
  __typename?: 'DummyAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Dummy?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type DummyAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DummyAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DummyAutocompleteDummyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DummyAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DummyAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DummyAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DummyAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DummyAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type DummyFacet = {
  __typename?: 'DummyFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Dummy?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type DummyFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DummyFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DummyFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DummyFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DummyFacetDummyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DummyFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DummyFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DummyFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DummyFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DummyFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DummyFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DummyFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DummyFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DummyFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DummyFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type DummyOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Dummy?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DummyOutput = {
  __typename?: 'DummyOutput';
  autocomplete?: Maybe<DummyAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DummyFacet>;
  items?: Maybe<Array<Maybe<Dummy>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DummyOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DummyWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Dummy?: InputMaybe<StringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<DummyWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DummyWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DummyWhereInput>>>;
};

export type HostDefinitionModel = {
  __typename?: 'HostDefinitionModel';
  Language?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
};

export type HostDefinitionModelAutocomplete = {
  __typename?: 'HostDefinitionModelAutocomplete';
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type HostDefinitionModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HostDefinitionModelAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type HostDefinitionModelFacet = {
  __typename?: 'HostDefinitionModelFacet';
  Language?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type HostDefinitionModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HostDefinitionModelFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HostDefinitionModelOrderByInput = {
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
};

export type HostDefinitionModelWhereInput = {
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
};

export type IContent = {
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IData = {
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type InlineBlockPropertyModel = {
  __typename?: 'InlineBlockPropertyModel';
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type InlineBlockPropertyModelAutocomplete = {
  __typename?: 'InlineBlockPropertyModelAutocomplete';
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type InlineBlockPropertyModelAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type InlineBlockPropertyModelFacet = {
  __typename?: 'InlineBlockPropertyModelFacet';
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type InlineBlockPropertyModelFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type InlineBlockPropertyModelOrderByInput = {
  ContentType?: InputMaybe<OrderBy>;
};

export type InlineBlockPropertyModelSearch = {
  __typename?: 'InlineBlockPropertyModelSearch';
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type InlineBlockPropertyModelSearchFacet = {
  __typename?: 'InlineBlockPropertyModelSearchFacet';
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type InlineBlockPropertyModelSearchFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type InlineBlockPropertyModelSearchOrderByInput = {
  ContentType?: InputMaybe<OrderBy>;
};

export type InlineBlockPropertyModelSearchWhereInput = {
  ContentType?: InputMaybe<SearchableStringFilterInput>;
};

export type InlineBlockPropertyModelWhereInput = {
  ContentType?: InputMaybe<StringFilterInput>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type LandingContent = IContent & IData & {
  __typename?: 'LandingContent';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  BuyTicketBlock?: Maybe<LandingContentBlockData>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  FooterContentArea?: Maybe<Array<Maybe<ContentAreaItemModel>>>;
  HeroImage?: Maybe<Scalars['String']['output']>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MainContentArea?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Subtitle?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type LandingContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LandingContentAutocomplete = {
  __typename?: 'LandingContentAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  BuyTicketBlock?: Maybe<LandingContentBlockDataAutocomplete>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  FooterContentArea?: Maybe<ContentAreaItemModelAutocomplete>;
  HeroImage?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type LandingContentAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingContentAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingContentAutocompleteHeroImageArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingContentAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingContentAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingContentAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingContentAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingContentAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LandingContentBlockData = {
  __typename?: 'LandingContentBlockData';
  Heading?: Maybe<Scalars['String']['output']>;
  Message?: Maybe<Scalars['String']['output']>;
};

export type LandingContentBlockDataAutocomplete = {
  __typename?: 'LandingContentBlockDataAutocomplete';
  Heading?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Message?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type LandingContentBlockDataAutocompleteHeadingArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingContentBlockDataAutocompleteMessageArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LandingContentBlockDataFacet = {
  __typename?: 'LandingContentBlockDataFacet';
  Heading?: Maybe<Array<Maybe<StringFacet>>>;
  Message?: Maybe<Array<Maybe<StringFacet>>>;
};


export type LandingContentBlockDataFacetHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingContentBlockDataFacetMessageArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LandingContentBlockDataOrderByInput = {
  Heading?: InputMaybe<OrderBy>;
  Message?: InputMaybe<OrderBy>;
};

export type LandingContentBlockDataWhereInput = {
  Heading?: InputMaybe<StringFilterInput>;
  Message?: InputMaybe<StringFilterInput>;
};

export type LandingContentFacet = {
  __typename?: 'LandingContentFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  BuyTicketBlock?: Maybe<LandingContentBlockDataFacet>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  FooterContentArea?: Maybe<ContentAreaItemModelFacet>;
  HeroImage?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MainContentArea?: Maybe<ContentAreaItemModelSearchFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Subtitle?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type LandingContentFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingContentFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingContentFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingContentFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingContentFacetHeroImageArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingContentFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingContentFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingContentFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingContentFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingContentFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingContentFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingContentFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingContentFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingContentFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingContentFacetSubtitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingContentFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingContentFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LandingContentOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  BuyTicketBlock?: InputMaybe<LandingContentBlockDataOrderByInput>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  FooterContentArea?: InputMaybe<ContentAreaItemModelOrderByInput>;
  HeroImage?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MainContentArea?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Subtitle?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type LandingContentOutput = {
  __typename?: 'LandingContentOutput';
  autocomplete?: Maybe<LandingContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LandingContentFacet>;
  items?: Maybe<Array<Maybe<LandingContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LandingContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingContentWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  BuyTicketBlock?: InputMaybe<LandingContentBlockDataWhereInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  FooterContentArea?: InputMaybe<ContentAreaItemModelWhereInput>;
  HeroImage?: InputMaybe<StringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MainContentArea?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Subtitle?: InputMaybe<SearchableStringFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<LandingContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LandingContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LandingContentWhereInput>>>;
};

export enum LinkTypes {
  Default = 'DEFAULT'
}

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en'
}

export type NewsBlock = IContent & IData & {
  __typename?: 'NewsBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  BandName?: Maybe<Scalars['String']['output']>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  Main_Text?: Maybe<Scalars['String']['output']>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Teaser?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type NewsBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type NewsBlockAutocomplete = {
  __typename?: 'NewsBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type NewsBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NewsBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NewsBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NewsBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NewsBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NewsBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NewsBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type NewsBlockFacet = {
  __typename?: 'NewsBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  BandName?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  Main_Text?: Maybe<Array<Maybe<StringFacet>>>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Teaser?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type NewsBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NewsBlockFacetBandNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NewsBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NewsBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NewsBlockFacetMain_TextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NewsBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NewsBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NewsBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NewsBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NewsBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NewsBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsBlockFacetTeaserArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NewsBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type NewsBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  BandName?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  Main_Text?: InputMaybe<OrderBy>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Teaser?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type NewsBlockOutput = {
  __typename?: 'NewsBlockOutput';
  autocomplete?: Maybe<NewsBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<NewsBlockFacet>;
  items?: Maybe<Array<Maybe<NewsBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type NewsBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewsBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  BandName?: InputMaybe<SearchableStringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  Main_Text?: InputMaybe<SearchableStringFilterInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Teaser?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<NewsBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<NewsBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<NewsBlockWhereInput>>>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type Query = {
  __typename?: 'Query';
  Artist?: Maybe<ArtistOutput>;
  BuyTicketBlock?: Maybe<BuyTicketBlockOutput>;
  City?: Maybe<CityOutput>;
  Content?: Maybe<ContentOutput>;
  ContentBlock?: Maybe<ContentBlockOutput>;
  DAMAsset?: Maybe<DamAssetOutput>;
  DAMImageAsset?: Maybe<DamImageAssetOutput>;
  DAMVideoAsset?: Maybe<DamVideoAssetOutput>;
  Data?: Maybe<DataOutput>;
  Dummy?: Maybe<DummyOutput>;
  LandingContent?: Maybe<LandingContentOutput>;
  NewsBlock?: Maybe<NewsBlockOutput>;
  SiteDefinition?: Maybe<SiteDefinitionOutput>;
};


export type QueryArtistArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Band_Locales>>>;
  orderBy?: InputMaybe<ArtistOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArtistWhereInput>;
};


export type QueryBuyTicketBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BuyTicketBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BuyTicketBlockWhereInput>;
};


export type QueryCityArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<City_Locales>>>;
  orderBy?: InputMaybe<CityOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryContentBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentBlockWhereInput>;
};


export type QueryDamAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DamAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DamAssetWhereInput>;
};


export type QueryDamImageAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DamImageAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DamImageAssetWhereInput>;
};


export type QueryDamVideoAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DamVideoAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DamVideoAssetWhereInput>;
};


export type QueryDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DataWhereInput>;
};


export type QueryDummyArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DummyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DummyWhereInput>;
};


export type QueryLandingContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingContentWhereInput>;
};


export type QueryNewsBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NewsBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsBlockWhereInput>;
};


export type QuerySiteDefinitionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SiteDefinitionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SiteDefinitionWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  Artist?: Maybe<ArtistOutput>;
  BuyTicketBlock?: Maybe<BuyTicketBlockOutput>;
  City?: Maybe<CityOutput>;
  Content?: Maybe<ContentOutput>;
  ContentBlock?: Maybe<ContentBlockOutput>;
  DAMAsset?: Maybe<DamAssetOutput>;
  DAMImageAsset?: Maybe<DamImageAssetOutput>;
  DAMVideoAsset?: Maybe<DamVideoAssetOutput>;
  Data?: Maybe<DataOutput>;
  Dummy?: Maybe<DummyOutput>;
  LandingContent?: Maybe<LandingContentOutput>;
  NewsBlock?: Maybe<NewsBlockOutput>;
  SiteDefinition?: Maybe<SiteDefinitionOutput>;
};


export type QueryRefArtistArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Band_Locales>>>;
  orderBy?: InputMaybe<ArtistOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArtistWhereInput>;
};


export type QueryRefBuyTicketBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BuyTicketBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BuyTicketBlockWhereInput>;
};


export type QueryRefCityArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<City_Locales>>>;
  orderBy?: InputMaybe<CityOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryRefContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryRefContentBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentBlockWhereInput>;
};


export type QueryRefDamAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DamAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DamAssetWhereInput>;
};


export type QueryRefDamImageAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DamImageAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DamImageAssetWhereInput>;
};


export type QueryRefDamVideoAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DamVideoAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DamVideoAssetWhereInput>;
};


export type QueryRefDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DataWhereInput>;
};


export type QueryRefDummyArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DummyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DummyWhereInput>;
};


export type QueryRefLandingContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingContentWhereInput>;
};


export type QueryRefNewsBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NewsBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsBlockWhereInput>;
};


export type QueryRefSiteDefinitionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SiteDefinitionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SiteDefinitionWhereInput>;
};

export type RangeFacetsInput = {
  from?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['Int']['input']>;
};

export enum Ranking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Relevance = 'RELEVANCE',
  Semantic = 'SEMANTIC'
}

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type SiteDefinition = IData & {
  __typename?: 'SiteDefinition';
  ContentLink?: Maybe<ContentModelReference>;
  ContentRoots?: Maybe<ContentRootsModel>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  EditLocation?: Maybe<Scalars['String']['output']>;
  Hosts?: Maybe<Array<Maybe<HostDefinitionModel>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Languages?: Maybe<Array<Maybe<SiteDefinitionLanguageModel>>>;
  Name?: Maybe<Scalars['String']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type SiteDefinition_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SiteDefinitionAutocomplete = {
  __typename?: 'SiteDefinitionAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentRoots?: Maybe<ContentRootsModelAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  EditLocation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Hosts?: Maybe<HostDefinitionModelAutocomplete>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Languages?: Maybe<SiteDefinitionLanguageModelAutocomplete>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type SiteDefinitionAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionAutocompleteEditLocationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type SiteDefinitionFacet = {
  __typename?: 'SiteDefinitionFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentRoots?: Maybe<ContentRootsModelFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  EditLocation?: Maybe<Array<Maybe<StringFacet>>>;
  Hosts?: Maybe<HostDefinitionModelFacet>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Languages?: Maybe<SiteDefinitionLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
};


export type SiteDefinitionFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetEditLocationArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SiteDefinitionLanguageModel = {
  __typename?: 'SiteDefinitionLanguageModel';
  DisplayName?: Maybe<Scalars['String']['output']>;
  IsMasterLanguage?: Maybe<Scalars['Bool']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  UrlSegment?: Maybe<Scalars['String']['output']>;
};

export type SiteDefinitionLanguageModelAutocomplete = {
  __typename?: 'SiteDefinitionLanguageModelAutocomplete';
  DisplayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  UrlSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type SiteDefinitionLanguageModelAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionLanguageModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionLanguageModelAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionLanguageModelAutocompleteUrlSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type SiteDefinitionLanguageModelFacet = {
  __typename?: 'SiteDefinitionLanguageModelFacet';
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  IsMasterLanguage?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  UrlSegment?: Maybe<Array<Maybe<StringFacet>>>;
};


export type SiteDefinitionLanguageModelFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetIsMasterLanguageArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetUrlSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SiteDefinitionLanguageModelOrderByInput = {
  DisplayName?: InputMaybe<OrderBy>;
  IsMasterLanguage?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  UrlSegment?: InputMaybe<OrderBy>;
};

export type SiteDefinitionLanguageModelWhereInput = {
  DisplayName?: InputMaybe<StringFilterInput>;
  IsMasterLanguage?: InputMaybe<BoolFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  UrlSegment?: InputMaybe<StringFilterInput>;
};

export type SiteDefinitionOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentRoots?: InputMaybe<ContentRootsModelOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  EditLocation?: InputMaybe<OrderBy>;
  Hosts?: InputMaybe<HostDefinitionModelOrderByInput>;
  Id?: InputMaybe<OrderBy>;
  Languages?: InputMaybe<SiteDefinitionLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type SiteDefinitionOutput = {
  __typename?: 'SiteDefinitionOutput';
  autocomplete?: Maybe<SiteDefinitionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SiteDefinitionFacet>;
  items?: Maybe<Array<Maybe<SiteDefinition>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SiteDefinitionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SiteDefinitionWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentRoots?: InputMaybe<ContentRootsModelWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  EditLocation?: InputMaybe<StringFilterInput>;
  Hosts?: InputMaybe<HostDefinitionModelWhereInput>;
  Id?: InputMaybe<StringFilterInput>;
  Languages?: InputMaybe<SiteDefinitionLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

export enum Band_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en'
}

export enum City_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en'
}

export enum System_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type TotalItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalItemsQuery = { __typename?: 'Query', Data?: { __typename?: 'DataOutput', total?: number | null } | null };


export const TotalItemsDocument = gql`
    query TotalItems {
  Data {
    total
  }
}
    `;

/**
 * __useTotalItemsQuery__
 *
 * To run a query within a React component, call `useTotalItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTotalItemsQuery(baseOptions?: Apollo.QueryHookOptions<TotalItemsQuery, TotalItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TotalItemsQuery, TotalItemsQueryVariables>(TotalItemsDocument, options);
      }
export function useTotalItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TotalItemsQuery, TotalItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TotalItemsQuery, TotalItemsQueryVariables>(TotalItemsDocument, options);
        }
export function useTotalItemsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TotalItemsQuery, TotalItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TotalItemsQuery, TotalItemsQueryVariables>(TotalItemsDocument, options);
        }
export type TotalItemsQueryHookResult = ReturnType<typeof useTotalItemsQuery>;
export type TotalItemsLazyQueryHookResult = ReturnType<typeof useTotalItemsLazyQuery>;
export type TotalItemsSuspenseQueryHookResult = ReturnType<typeof useTotalItemsSuspenseQuery>;
export type TotalItemsQueryResult = Apollo.QueryResult<TotalItemsQuery, TotalItemsQueryVariables>;