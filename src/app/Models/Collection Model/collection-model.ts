export class CollectionModel {
  constructor(
    public collectionName: string,
    public collectionImg: string,
    public collectionDescription: string,
    public collectioRecipes: string[],
    public noOfRecipes: number
  ) {}
}
