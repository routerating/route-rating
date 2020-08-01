/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoute = /* GraphQL */ `
  subscription OnCreateRoute($owner: String, $editors: String) {
    onCreateRoute(owner: $owner, editors: $editors) {
      id
      key
      rating
      difficulty
      color
      setter
      types
      wallId
      name
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRoute = /* GraphQL */ `
  subscription OnUpdateRoute($owner: String, $editors: String) {
    onUpdateRoute(owner: $owner, editors: $editors) {
      id
      key
      rating
      difficulty
      color
      setter
      types
      wallId
      name
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRoute = /* GraphQL */ `
  subscription OnDeleteRoute($owner: String, $editors: String) {
    onDeleteRoute(owner: $owner, editors: $editors) {
      id
      key
      rating
      difficulty
      color
      setter
      types
      wallId
      name
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWall = /* GraphQL */ `
  subscription OnCreateWall($owner: String, $editors: String) {
    onCreateWall(owner: $owner, editors: $editors) {
      id
      key
      gymId
      routes {
        items {
          id
          key
          rating
          difficulty
          color
          setter
          types
          wallId
          name
          editors
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWall = /* GraphQL */ `
  subscription OnUpdateWall($owner: String, $editors: String) {
    onUpdateWall(owner: $owner, editors: $editors) {
      id
      key
      gymId
      routes {
        items {
          id
          key
          rating
          difficulty
          color
          setter
          types
          wallId
          name
          editors
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWall = /* GraphQL */ `
  subscription OnDeleteWall($owner: String, $editors: String) {
    onDeleteWall(owner: $owner, editors: $editors) {
      id
      key
      gymId
      routes {
        items {
          id
          key
          rating
          difficulty
          color
          setter
          types
          wallId
          name
          editors
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGym = /* GraphQL */ `
  subscription OnCreateGym($owner: String) {
    onCreateGym(owner: $owner) {
      id
      key
      name
      address1
      address2
      city
      state
      zip
      phone
      website
      logo
      email
      walls {
        items {
          id
          key
          gymId
          name
          editors
          createdAt
          updatedAt
        }
        nextToken
      }
      editors
      disabled
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGym = /* GraphQL */ `
  subscription OnUpdateGym($owner: String) {
    onUpdateGym(owner: $owner) {
      id
      key
      name
      address1
      address2
      city
      state
      zip
      phone
      website
      logo
      email
      walls {
        items {
          id
          key
          gymId
          name
          editors
          createdAt
          updatedAt
        }
        nextToken
      }
      editors
      disabled
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGym = /* GraphQL */ `
  subscription OnDeleteGym($owner: String) {
    onDeleteGym(owner: $owner) {
      id
      key
      name
      address1
      address2
      city
      state
      zip
      phone
      website
      logo
      email
      walls {
        items {
          id
          key
          gymId
          name
          editors
          createdAt
          updatedAt
        }
        nextToken
      }
      editors
      disabled
      createdAt
      updatedAt
    }
  }
`;
