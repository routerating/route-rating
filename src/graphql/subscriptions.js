/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoute = /* GraphQL */ `
  subscription OnCreateRoute {
    onCreateRoute {
      id
      key
      rating
      difficulty
      color
      setter
      types
      wallId
      name
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRoute = /* GraphQL */ `
  subscription OnUpdateRoute {
    onUpdateRoute {
      id
      key
      rating
      difficulty
      color
      setter
      types
      wallId
      name
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRoute = /* GraphQL */ `
  subscription OnDeleteRoute {
    onDeleteRoute {
      id
      key
      rating
      difficulty
      color
      setter
      types
      wallId
      name
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWall = /* GraphQL */ `
  subscription OnCreateWall {
    onCreateWall {
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
          owner
          editors
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWall = /* GraphQL */ `
  subscription OnUpdateWall {
    onUpdateWall {
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
          owner
          editors
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWall = /* GraphQL */ `
  subscription OnDeleteWall {
    onDeleteWall {
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
          owner
          editors
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGym = /* GraphQL */ `
  subscription OnCreateGym {
    onCreateGym {
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
      email
      logo
      walls {
        items {
          id
          key
          gymId
          name
          owner
          editors
          createdAt
          updatedAt
        }
        nextToken
      }
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGym = /* GraphQL */ `
  subscription OnUpdateGym {
    onUpdateGym {
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
      email
      logo
      walls {
        items {
          id
          key
          gymId
          name
          owner
          editors
          createdAt
          updatedAt
        }
        nextToken
      }
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGym = /* GraphQL */ `
  subscription OnDeleteGym {
    onDeleteGym {
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
      email
      logo
      walls {
        items {
          id
          key
          gymId
          name
          owner
          editors
          createdAt
          updatedAt
        }
        nextToken
      }
      editors
      createdAt
      updatedAt
    }
  }
`;
